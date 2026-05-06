"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  phrases: string[]
}

export function TypingEffect({ phrases }: TypingEffectProps) {
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
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
  }, [currentPhrase, currentIndex, isDeleting, phrases])

  return (
    <div className="h-8 text-base font-medium text-primary/80">
      {currentPhrase}
      <span className="animate-blink ml-0.5 text-primary/40">|</span>
    </div>
  )
}
