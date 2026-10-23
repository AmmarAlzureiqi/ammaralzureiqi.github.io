"use client"

import { useEffect } from "react"
import Link from "next/link"

// Old standalone pages now live as sections on the home page.
export function RedirectToSection({ hash, label }: { hash: string; label: string }) {
  useEffect(() => {
    window.location.replace(`/#${hash}`)
  }, [hash])

  return (
    <div className="mx-auto max-w-3xl py-24">
      <p className="text-sm text-muted-foreground">
        This page has moved to the{" "}
        <Link href={`/#${hash}`} className="link">
          {label} section
        </Link>
        .
      </p>
    </div>
  )
}
