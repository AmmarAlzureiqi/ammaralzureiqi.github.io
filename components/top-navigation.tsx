"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-provider"

export function TopNavigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
  ]

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300"
        >
          Ammar Alzureiqi
        </Link>
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-300 hidden sm:inline ${
                pathname === href
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", { key: "k", metaKey: true })
              document.dispatchEvent(event)
            }}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs text-muted-foreground rounded-lg border border-border hover:bg-accent/50 transition-all duration-300"
          >
            <span>Search</span>
            <kbd className="text-[10px] font-mono bg-muted px-1 py-0.5 rounded">⌘K</kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
