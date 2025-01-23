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
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => {
        const currentPhrase = phrases[currentIndex]
        if (!isDeleting && prev === currentPhrase) {
          setIsDeleting(true)
          return prev
        }
        if (isDeleting && prev === "") {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
          return ""
        }
        if (isDeleting) {
          return prev.slice(0, -1)
        }
        return currentPhrase.slice(0, prev.length + 1)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentIndex, isDeleting, phrases])

  return (
    <div className="h-8 text-lg font-semibold text-primary">
      {currentPhrase}
      <span className="animate-blink">|</span>
    </div>
  )
}

