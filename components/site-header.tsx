import Link from "next/link"
import { ThemeToggle } from "./theme-provider"

const links = [
  { href: "/#experience", label: "Consulting" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-sm px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 h-14">
        <Link href="/" className="whitespace-nowrap text-base font-semibold tracking-tight hover:text-primary transition-colors">
          Ammar Alzureiqi
        </Link>
        <nav aria-label="Sections" className="flex items-center gap-0.5 sm:gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors ${
                label === "About" || label === "Contact" ? "hidden sm:inline-block" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
