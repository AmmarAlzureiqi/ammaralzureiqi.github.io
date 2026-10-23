import { cn } from "@/lib/utils"

export interface FlowLayer {
  label: string
  items: string[]
  note?: string
}

interface FlowDiagramProps {
  layers: FlowLayer[]
  // Cross-cutting concerns, shown as a band under the flow.
  aside?: FlowLayer[]
  caption?: string
  className?: string
}

function Arrow() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center text-primary/70 h-6 md:h-auto md:w-6 shrink-0"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h15M14 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// Architecture diagram: left-to-right on desktop, top-to-bottom on phones.
export function FlowDiagram({ layers, aside, caption, className }: FlowDiagramProps) {
  return (
    <figure className={cn("rounded-lg border border-border bg-card p-3 sm:p-4", className)}>
      <ol className="flex flex-col md:flex-row md:items-stretch" aria-label="Flow">
        {layers.map((layer, i) => (
          <li key={layer.label} className="flex flex-col md:flex-row md:flex-1 md:min-w-0">
            <div className="flex-1 rounded-md border border-border bg-background px-3 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                {layer.label}
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-0.5 md:flex-col md:gap-0.5">
                {layer.items.map((item) => (
                  <li key={item} className="text-[13px] leading-snug text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              {layer.note && <p className="mt-1.5 text-xs leading-snug text-muted-foreground">{layer.note}</p>}
            </div>
            {i < layers.length - 1 && <Arrow />}
          </li>
        ))}
      </ol>
      {aside && (
        <div className="mt-3 flex flex-col gap-x-6 gap-y-1 border-t border-dashed border-border pt-3 sm:flex-row sm:flex-wrap">
          {aside.map((layer) => (
            <p key={layer.label} className="text-xs text-muted-foreground">
              <span className="font-mono uppercase tracking-[0.12em] text-[10px] mr-2">{layer.label}</span>
              <span className="text-foreground">{layer.items.join(" · ")}</span>
            </p>
          ))}
        </div>
      )}
      {caption && <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  )
}
