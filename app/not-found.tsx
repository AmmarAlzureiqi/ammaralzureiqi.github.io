"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const COMMANDS: Record<string, string> = {
  help: "Available commands: help, home, about, projects, experience, ls, whoami, clear",
  ls: "home/  about/  projects/  experience/",
  whoami: "ammar alzureiqi — software developer, MLOps/AIOps @ Carfax",
  clear: "__CLEAR__",
  home: "__NAV__/",
  about: "__NAV__/about",
  projects: "__NAV__/projects",
  experience: "__NAV__/experience",
}

export default function NotFound() {
  const [history, setHistory] = useState<Array<{ input: string; output: string }>>([
    { input: "", output: "404 — page not found. Type 'help' for available commands." },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    const result = COMMANDS[cmd]

    if (!cmd) return

    if (result === "__CLEAR__") {
      setHistory([])
      setInput("")
      return
    }

    if (result?.startsWith("__NAV__")) {
      const path = result.replace("__NAV__", "")
      setHistory((h) => [...h, { input: cmd, output: `Navigating to ${path}...` }])
      setInput("")
      setTimeout(() => router.push(path), 400)
      return
    }

    setHistory((h) => [
      ...h,
      { input: cmd, output: result || `command not found: ${cmd}. Type 'help' for available commands.` },
    ])
    setInput("")
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 animate-fade-in-up">
      <div
        className="bg-card border border-border rounded-xl overflow-hidden shadow-lg"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">alzureiqi.dev — 404</span>
        </div>

        {/* Terminal body */}
        <div ref={scrollRef} className="p-4 font-mono text-sm max-h-[400px] overflow-y-auto">
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.input && (
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{entry.input}</span>
                </div>
              )}
              <div className="text-muted-foreground ml-4">{entry.output}</div>
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground caret-primary"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
