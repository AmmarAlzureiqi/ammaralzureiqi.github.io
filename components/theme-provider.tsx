"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

// The initial class is set by the inline script in app/layout.tsx
// (saved choice, else light). This keeps React in sync with it.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("light")

  React.useEffect(() => {
    setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light")
  }, [])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (next: Theme) => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(next)
        try {
          localStorage.setItem("theme", next)
        } catch {
          // Storage can be unavailable (private mode); the toggle still works for this visit.
        }
        setThemeState(next)
      },
    }),
    [theme],
  )

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
