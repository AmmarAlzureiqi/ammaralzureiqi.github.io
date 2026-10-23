import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name} · Toronto, ON</p>
        <p>Built with Next.js · Hosted on GitHub Pages</p>
      </div>
    </footer>
  )
}
