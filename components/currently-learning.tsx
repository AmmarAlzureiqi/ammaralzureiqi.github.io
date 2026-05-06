"use client"

import { useState, useEffect, useRef } from "react"

interface LearningItem {
  label: string
  baseProgress: number
  tooltip: string
  link?: string
}

const items: LearningItem[] = [
  {
    label: "LLM Inference & Serving",
    baseProgress: 42,
    tooltip: "Model serving, optimization, and scaling for production workloads",
  },
  {
    label: "Agentic AI Systems",
    baseProgress: 55,
    tooltip: "Multi-agent orchestration, tool-use patterns, planning and reflection loops",
  },
  {
    label: "MLOps / Platform Engineering",
    baseProgress: 60,
    tooltip: "ML platform infrastructure on Kubernetes, Flyte, and AWS",
  },
]

function useRandomWalk(base: number, amplitude: number = 3) {
  const [value, setValue] = useState(base)
  const direction = useRef(1)
  const current = useRef(base)

  useEffect(() => {
    const interval = setInterval(() => {
      const step = (Math.random() * amplitude * 0.6) * direction.current
      current.current = Math.max(
        base - amplitude,
        Math.min(base + amplitude, current.current + step)
      )
      // Occasionally flip direction
      if (Math.random() > 0.7) {
        direction.current *= -1
      }
      setValue(current.current)
    }, 1800 + Math.random() * 1200)

    return () => clearInterval(interval)
  }, [base, amplitude])

  return value
}

function LearningBar({ item, index }: { item: LearningItem; index: number }) {
  const progress = useRandomWalk(item.baseProgress)
  const [hovered, setHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 150)
    return () => clearTimeout(timer)
  }, [index])

  const content = (
    <div
      className={`group relative transition-all duration-500 ease-cozy ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium">{item.label}</span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary/70 transition-all duration-[1200ms]"
          style={{
            width: `${progress}%`,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      </div>
      {/* Tooltip */}
      <div
        className={`absolute left-0 right-0 -bottom-1 translate-y-full z-20 transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-full" : "opacity-0 translate-y-[calc(100%+4px)] pointer-events-none"
        }`}
      >
        <div className="bg-card border border-border rounded-lg p-3 mt-2 shadow-lg text-xs text-muted-foreground leading-relaxed">
          {item.tooltip}
        </div>
      </div>
    </div>
  )

  if (item.link) {
    return (
      <a href={item.link} className="block cursor-pointer">
        {content}
      </a>
    )
  }

  return content
}

export function CurrentlyLearning() {
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <LearningBar key={item.label} item={item} index={i} />
      ))}
    </div>
  )
}
