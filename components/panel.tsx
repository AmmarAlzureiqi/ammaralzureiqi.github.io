import { cn } from "@/lib/utils"

// Dashboard panel: a header strip (mono label + optional meta) over content.
export function Panel({
  label,
  meta,
  children,
  className,
  bodyClassName,
  id,
}: {
  label: React.ReactNode
  meta?: React.ReactNode
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("rounded-lg border border-border bg-card/80 backdrop-blur-[1px]", className)}>
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</h2>
        {meta && <div className="font-mono text-[11px] text-muted-foreground text-right">{meta}</div>}
      </header>
      <div className={cn("p-4 sm:p-5", bodyClassName)}>{children}</div>
    </section>
  )
}

export type Status = "active" | "building" | "learning"

const statusStyles: Record<Status, { dot: string; text: string }> = {
  active: { dot: "bg-status-active", text: "text-status-active" },
  building: { dot: "bg-status-building", text: "text-status-building" },
  learning: { dot: "bg-status-learning", text: "text-status-learning" },
}

// A status dot with a mono label. Only for real states, never fake metrics.
export function StatusPill({ status, children, pulse }: { status: Status; children: React.ReactNode; pulse?: boolean }) {
  const s = statusStyles[status]
  return (
    <span className={cn("inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em]", s.text)}>
      <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", s.dot, pulse && "status-pulse")} />
      {children}
    </span>
  )
}

// Small bordered mono chip for technologies.
export function Chips({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-border bg-background/70 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

// Section heading between dashboard rows.
export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-4 mt-14 flex items-center gap-4 scroll-mt-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{children}</h2>
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
