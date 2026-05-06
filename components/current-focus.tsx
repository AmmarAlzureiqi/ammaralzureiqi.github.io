"use client"

import { useEffect, useState } from "react"
import { Zap, Cpu, Wrench } from "lucide-react"

const focusItems = [
  {
    icon: Cpu,
    label: "Noteflow",
    detail: "AI-powered desktop note-taking with local knowledge graphs",
  },
  {
    icon: Zap,
    label: "LLM inference infrastructure at Carfax",
    detail: "Model serving and ML platform engineering at scale",
  },
  {
    icon: Wrench,
    label: "LS-swapped FR-S",
    detail: "Tuning and wiring. Always something to fix.",
  },
]

export function CurrentFocus() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-3">
      {focusItems.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={i}
            className={`flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/40 transition-all duration-500 ease-cozy ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
