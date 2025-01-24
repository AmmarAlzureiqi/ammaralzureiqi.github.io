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
    <nav className="bg-secondary text-secondary-foreground p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
          Ammar Alzureiqi
        </Link>
        <div className="flex items-center space-x-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-primary transition-colors ${
                pathname === href ? "text-primary font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

