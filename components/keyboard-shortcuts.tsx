"use client"

import { useEffect, useState } from "react"

const shortcuts = [
  { keys: ["⌘", "K"], description: "Open command palette" },
  { keys: ["?"], description: "Show keyboard shortcuts" },
  { keys: ["↑↑↓↓←→←→BA"], description: "???" },
]

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.metaKey && !e.ctrlKey && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[98] bg-background/60 backdrop-blur-sm"
        style={{ animation: "fadeIn 0.15s ease-out" }}
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-1/2 top-1/2 z-[99] w-[90vw] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-popover p-6 shadow-2xl" style={{ animation: "fadeIn 0.2s ease-out" }}>
        <h2 className="text-sm font-semibold mb-4">Keyboard Shortcuts</h2>
        <div className="space-y-3">
          {shortcuts.map((s, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.description}</span>
              <div className="flex gap-1">
                {s.keys.map((key, j) => (
                  <kbd
                    key={j}
                    className="px-2 py-1 text-xs font-mono bg-muted rounded border border-border text-muted-foreground min-w-[24px] text-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-5 text-center">
          Press <kbd className="px-1 py-0.5 text-[10px] font-mono bg-muted rounded border border-border">Esc</kbd> to close
        </p>
      </div>
    </>
  )
}
