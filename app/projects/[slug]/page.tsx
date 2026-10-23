import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { FlowDiagram } from "@/components/flow-diagram"
import { Panel, StatusPill, Chips } from "@/components/panel"
import { projects } from "@/lib/content"
import { site } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug)
  if (!p) return {}
  return {
    title: `${p.name}: ${p.tagline}`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: {
      title: `${p.name}: ${p.tagline} | ${site.name}`,
      description: p.summary,
      url: `/projects/${p.slug}/`,
      siteName: site.name,
      type: "article",
      images: [site.ogImage],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug)
  if (!p) notFound()
  const others = projects.filter((x) => x.slug !== p.slug)

  return (
    <div className="mx-auto max-w-6xl pt-8 sm:pt-12 animate-fade-in-up">
      <Link href="/#projects" className="inline-flex items-center gap-1.5 py-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        All projects
      </Link>

      <div className="mt-3 grid gap-4 lg:grid-cols-12">
        <Panel label="Case study" meta={<StatusPill status="building">{p.status}</StatusPill>} className="lg:col-span-8" bodyClassName="p-5 sm:p-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">{p.name}</h1>
          <p className="mt-2 text-lg text-primary">{p.tagline}</p>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/85">{p.summary}</p>
        </Panel>

        <Panel label="Details" className="lg:col-span-4">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Timeline</dt>
              <dd className="mt-1">{p.date}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Source</dt>
              <dd className="mt-1">Private repository</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Stack</dt>
              <dd className="mt-2">
                <Chips items={p.stack} />
              </dd>
            </div>
          </dl>
        </Panel>

        <Panel label="Architecture" className="lg:col-span-12" bodyClassName="p-3 sm:p-5">
          <FlowDiagram
            className="border-0 bg-transparent p-0 sm:p-0"
            layers={p.diagram.layers}
            aside={p.diagram.aside}
            caption={p.diagram.caption}
          />
        </Panel>

        <Panel label="What I built" className="lg:col-span-8">
          <ul className="space-y-3">
            {p.bullets.map((b) => (
              <li key={b} className="relative pl-4 leading-relaxed text-foreground/85">
                <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-primary/70" />
                {b}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel label="Also building" className="lg:col-span-4" bodyClassName="p-0">
          <ul className="divide-y divide-border">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/projects/${o.slug}/`} className="block px-4 py-3.5 sm:px-5 hover:bg-background/60 transition-colors">
                  <p className="font-medium">{o.name}</p>
                  <p className="text-sm text-muted-foreground">{o.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  )
}
