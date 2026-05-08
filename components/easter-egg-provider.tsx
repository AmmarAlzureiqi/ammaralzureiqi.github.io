"use client"

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react"

interface EasterEggState {
  konamiActivated: boolean
}

const EasterEggContext = createContext<EasterEggState>({
  konamiActivated: false,
})

export const useEasterEggs = () => useContext(EasterEggContext)

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

// ── Gravity Mode ──────────────────────────────────────────────
// Every visible element collapses with simulated physics, then
// floats back into place.

function triggerGravity() {
  const elements: { el: HTMLElement; origTransform: string; origTransition: string }[] = []
  const selector = "h1, h2, h3, p, a, button, img, span, svg, li, .clay-card, [class*='card'], [class*='badge']"

  document.querySelectorAll(selector).forEach((node) => {
    const el = node as HTMLElement
    const rect = el.getBoundingClientRect()
    // skip elements not in viewport or too large (layout containers)
    if (rect.top > window.innerHeight || rect.bottom < 0) return
    if (rect.width > window.innerWidth * 0.9 && rect.height > window.innerHeight * 0.5) return

    elements.push({
      el,
      origTransform: el.style.transform,
      origTransition: el.style.transition,
    })
  })

  // Phase 1: fall down with random rotation
  elements.forEach((item) => {
    const { el } = item
    const rect = el.getBoundingClientRect()
    const distToBottom = window.innerHeight - rect.bottom
    const fallDist = distToBottom + 20 + Math.random() * 60
    const rotation = (Math.random() - 0.5) * 30
    const delay = Math.random() * 400

    el.style.transition = `transform ${0.6 + Math.random() * 0.4}s cubic-bezier(0.55, 0, 1, 0.45) ${delay}ms`
    el.style.transform = `translateY(${fallDist}px) rotate(${rotation}deg)`
  })

  // Phase 2: float back up
  setTimeout(() => {
    elements.forEach((item, i) => {
      const { el, origTransform } = item
      const delay = i * 15 + Math.random() * 200

      el.style.transition = `transform ${0.8 + Math.random() * 0.4}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`
      el.style.transform = origTransform || ""
    })

    // Phase 3: clean up inline styles
    setTimeout(() => {
      elements.forEach((item) => {
        const { el, origTransform, origTransition } = item
        el.style.transform = origTransform
        el.style.transition = origTransition
      })
    }, 2000)
  }, 1600)
}

// ── Idle Starfield ────────────────────────────────────────────
// After 2 minutes of no interaction, a subtle particle field
// fades in behind the content.

function createStarfield(): () => void {
  const canvas = document.createElement("canvas")
  canvas.style.cssText = `
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    opacity: 0; transition: opacity 3s ease;
  `
  document.body.appendChild(canvas)

  const ctx = canvas.getContext("2d")!
  let animId: number
  let alive = true

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener("resize", resize)

  // create stars
  const stars: { x: number; y: number; r: number; vx: number; vy: number; opacity: number }[] = []
  const count = Math.floor((window.innerWidth * window.innerHeight) / 8000)
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.5 + 0.1,
    })
  }

  const isDark = () => document.documentElement.classList.contains("dark")

  function draw() {
    if (!alive) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const dark = isDark()
    stars.forEach((s) => {
      s.x += s.vx
      s.y += s.vy
      // wrap around
      if (s.x < 0) s.x = canvas.width
      if (s.x > canvas.width) s.x = 0
      if (s.y < 0) s.y = canvas.height
      if (s.y > canvas.height) s.y = 0
      // gentle twinkle
      s.opacity += (Math.random() - 0.5) * 0.02
      s.opacity = Math.max(0.05, Math.min(0.5, s.opacity))

      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = dark
        ? `rgba(210, 200, 185, ${s.opacity})`
        : `rgba(80, 70, 60, ${s.opacity * 0.6})`
      ctx.fill()
    })
    animId = requestAnimationFrame(draw)
  }

  // fade in
  requestAnimationFrame(() => {
    canvas.style.opacity = "1"
  })
  draw()

  // return cleanup that fades out then removes
  return () => {
    canvas.style.opacity = "0"
    alive = false
    cancelAnimationFrame(animId)
    window.removeEventListener("resize", resize)
    setTimeout(() => canvas.remove(), 3000)
  }
}

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [konamiIndex, setKonamiIndex] = useState(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const starfieldCleanup = useRef<(() => void) | null>(null)
  const idleActive = useRef(false)

  // ── Konami code → gravity mode ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1
        if (next === KONAMI.length) {
          setKonamiActivated(true)
          setKonamiIndex(0)
          triggerGravity()
        } else {
          setKonamiIndex(next)
        }
      } else {
        setKonamiIndex(0)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [konamiIndex])

  // ── Idle starfield (2 min) ──
  const resetIdle = useCallback(() => {
    // if starfield is showing, fade it out
    if (idleActive.current && starfieldCleanup.current) {
      starfieldCleanup.current()
      starfieldCleanup.current = null
      idleActive.current = false
    }

    if (idleTimer.current) clearTimeout(idleTimer.current)

    idleTimer.current = setTimeout(() => {
      if (!idleActive.current) {
        idleActive.current = true
        starfieldCleanup.current = createStarfield()
      }
    }, 120000) // 2 minutes
  }, [])

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"]
    events.forEach((e) => window.addEventListener(e, resetIdle, { passive: true }))
    resetIdle() // start the timer

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetIdle))
      if (idleTimer.current) clearTimeout(idleTimer.current)
      if (starfieldCleanup.current) starfieldCleanup.current()
    }
  }, [resetIdle])

  // ── Console easter egg ──
  useEffect(() => {
    const mono = "font-family: monospace; color: hsl(25, 60%, 44%); font-size: 10px;"
    const subtle = "color: hsl(25, 10%, 50%); font-size: 11px;"

    console.log(
      "%c" + [
        "  ___  __  __ __  __   _   ___  ",
        " / _ \\|  \\/  |  \\/  | /_\\ | _ \\ ",
        "| (_) | |\\/| | |\\/| |/ _ \\|   / ",
        " \\__\\_\\_|  |_|_|  |_/_/ \\_\\_|_\\ ",
      ].join("\n"),
      mono
    )
    console.log("%cYou're inspecting my DOM? We'd probably get along.", subtle)
  }, [])

  return (
    <EasterEggContext.Provider value={{ konamiActivated }}>
      {children}
    </EasterEggContext.Provider>
  )
}
