"use client";

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <nav className="w-64 bg-card border-r p-6 h-screen">
      <div className="mb-8">
        <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
          Ammar Alzureiqi
        </Link>
      </div>
      <div className="space-y-2">
        {links.map(({ href, label }) => (
          <Button
            key={href}
            variant={pathname === href ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}

