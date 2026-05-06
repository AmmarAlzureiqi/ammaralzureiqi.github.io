"use client"

import { useEffect, useState, useCallback } from "react"
import { Command } from "cmdk"
import { useRouter } from "next/navigation"
import { useTheme } from "./theme-provider"
import {
  Home,
  User,
  FolderOpen,
  Briefcase,
  Sun,
  Moon,
  FileText,
  Mail,
  Github,
  Linkedin,
  Search,
} from "lucide-react"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[99] bg-background/60 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.15s ease-out" }}
          onClick={() => setOpen(false)}
        />
      )}

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command palette"
        className="fixed left-1/2 top-[20%] z-[100] w-[90vw] max-w-[520px] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover shadow-2xl"
        style={open ? { animation: "slideIn 0.2s ease-out" } : undefined}
      >
        <div className="flex items-center border-b border-border px-4">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Command.Input
            placeholder="Type a command or search..."
            className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <Command.List className="max-h-[320px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <CommandItem icon={<Home className="h-4 w-4" />} onSelect={() => runCommand(() => router.push("/"))}>
              Home
            </CommandItem>
            <CommandItem icon={<User className="h-4 w-4" />} onSelect={() => runCommand(() => router.push("/about"))}>
              About
            </CommandItem>
            <CommandItem icon={<FolderOpen className="h-4 w-4" />} onSelect={() => runCommand(() => router.push("/projects"))}>
              Projects
            </CommandItem>
            <CommandItem icon={<Briefcase className="h-4 w-4" />} onSelect={() => runCommand(() => router.push("/experience"))}>
              Experience
            </CommandItem>
          </Command.Group>

          <Command.Separator className="mx-2 my-1 h-px bg-border" />

          <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <CommandItem
              icon={theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              onSelect={() => runCommand(() => setTheme(theme === "light" ? "dark" : "light"))}
            >
              Toggle Theme
            </CommandItem>
            <CommandItem
              icon={<FileText className="h-4 w-4" />}
              onSelect={() => runCommand(() => window.open("/assets/Alzureiqi_Resume.pdf", "_blank"))}
            >
              Download Resume
            </CommandItem>
            <CommandItem
              icon={<Mail className="h-4 w-4" />}
              onSelect={() => runCommand(() => {
                navigator.clipboard.writeText("alzureiqi3@gmail.com")
              })}
            >
              Copy Email
            </CommandItem>
          </Command.Group>

          <Command.Separator className="mx-2 my-1 h-px bg-border" />

          <Command.Group heading="Links" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <CommandItem
              icon={<Github className="h-4 w-4" />}
              onSelect={() => runCommand(() => window.open("https://github.com/AmmarAlzureiqi", "_blank"))}
            >
              GitHub
            </CommandItem>
            <CommandItem
              icon={<Linkedin className="h-4 w-4" />}
              onSelect={() => runCommand(() => window.open("https://linkedin.com/in/AmmarAlzureiqi", "_blank"))}
            >
              LinkedIn
            </CommandItem>
          </Command.Group>
        </Command.List>

        <div className="border-t border-border px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Navigate with arrows or click</span>
          <span>
            <kbd className="px-1 py-0.5 rounded bg-muted border border-border font-mono text-[10px]">esc</kbd> to close
          </span>
        </div>
      </Command.Dialog>
    </>
  )
}

function CommandItem({
  children,
  icon,
  onSelect,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  onSelect: () => void
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm cursor-pointer transition-colors duration-150 hover:bg-accent hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      <span className="text-muted-foreground">{icon}</span>
      <span className="flex-1">{children}</span>
    </Command.Item>
  )
}
