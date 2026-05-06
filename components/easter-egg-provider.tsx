"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface EasterEggState {
  konamiActivated: boolean
}

const EasterEggContext = createContext<EasterEggState>({
  konamiActivated: false,
})

export const useEasterEggs = () => useContext(EasterEggContext)

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [konamiIndex, setKonamiIndex] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  // Konami code listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1
        if (next === KONAMI.length) {
          setKonamiActivated(true)
          setKonamiIndex(0)
          setShowMessage(true)
          setTimeout(() => setShowMessage(false), 4000)
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

  // Console easter eggs
  useEffect(() => {
    const primary = "color: hsl(25, 60%, 44%); font-size: 14px; font-weight: bold;"
    const subtle = "color: hsl(25, 10%, 50%); font-size: 11px;"
    const mono = "font-family: monospace; color: hsl(25, 60%, 44%); font-size: 10px;"

    console.log(
      "%c" + [
        "  ___  __  __ __  __   _   ___  ",
        " / _ \\|  \\/  |  \\/  | /_\\ | _ \\ ",
        "| (_) | |\\/| | |\\/| |/ _ \\|   / ",
        " \\__\\_\\_|  |_|_|  |_/_/ \\_\\_|_\\ ",
      ].join("\n"),
      mono
    )
    console.log("%cYou're inspecting my DOM? We'd probably get along.", primary)
    console.log("%cThere are a few secrets hidden here. Try ⌘K, or maybe a classic cheat code.", subtle)
  }, [])

  return (
    <EasterEggContext.Provider value={{ konamiActivated }}>
      {children}
      {/* Konami unlock — reveal a hidden message */}
      {showMessage && (
        <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center">
          <div className="bg-card border border-border rounded-xl p-8 shadow-2xl pointer-events-none animate-fade-in-up max-w-sm text-center">
            <p className="text-2xl mb-2">🏎️</p>
            <p className="text-sm font-medium mb-1">You found one.</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The FR-S runs a 5.7L V8 from a {"'"}98 Camaro. Hand-built, tuned, and daily driven.
              13.5s quarter mile.
            </p>
          </div>
        </div>
      )}
    </EasterEggContext.Provider>
  )
}
