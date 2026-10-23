"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  phrases: string[]
  className?: string
}

export function TypingEffect({ phrases, className }: TypingEffectProps) {
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const typingSpeed = isDeleting ? 40 : 70
    const pauseAtEnd = 2000
    const pauseAtStart = 300

    const timeout = setTimeout(() => {
      const target = phrases[currentIndex]

      if (!isDeleting && currentPhrase === target) {
        // Pause at fully typed state, then start deleting
        setTimeout(() => setIsDeleting(true), pauseAtEnd)
        return
      }

      if (isDeleting && currentPhrase === "") {
        setIsDeleting(false)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length)
        }, pauseAtStart)
        return
      }

      if (isDeleting) {
        setCurrentPhrase((prev) => prev.slice(0, -1))
      } else {
        setCurrentPhrase(target.slice(0, currentPhrase.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentPhrase, currentIndex, isDeleting, phrases, reducedMotion])

  return (
    <div className={className}>
      <span className="sr-only">{phrases.join(". ")}</span>
      <span aria-hidden="true">
        {reducedMotion ? phrases[0] : currentPhrase}
        {!reducedMotion && <span className="animate-blink ml-0.5">▍</span>}
      </span>
    </div>
  )
}
