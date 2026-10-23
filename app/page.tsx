import Link from "next/link"
import { ArrowRight, ExternalLink, Mail } from "lucide-react"
import { TypingEffect } from "@/components/typing-effect"
import { Panel, StatusPill, Chips, SectionHeading } from "@/components/panel"
import { education, experience, learning, projects, skills } from "@/lib/content"
import { site } from "@/lib/site"

const focus = ["Kubernetes", "Model serving", "LLM inference", "Autoscaling", "GitOps", "Observability", "Agentic AI", "MCP"]

function ExternalLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href={`mailto:${site.email}`}
        className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        Email me
      </a>
      {[
        { href: site.links.linkedin, label: "LinkedIn" },
        { href: site.links.github, label: "GitHub" },
      ].map(({ href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border bg-background/70 px-4 text-sm hover:border-primary/60 hover:text-primary transition-colors"
        >
          {label}
          <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default function Home() {
  const [consulting] = experience

  return (
    <div className="mx-auto max-w-6xl pt-8 sm:pt-12 animate-fade-in-up">
      {/* ── Overview ─────────────────────────────── */}
      <div className="grid gap-4 lg:grid-cols-12">
        <Panel label="Overview" className="lg:col-span-8" bodyClassName="p-5 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
            Software Engineer · ML Platform &amp; MLOps
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/85">
            I build and run the infrastructure that serves ML and LLM models in production:
            Kubernetes, model serving, networking, observability, and GitOps. Strongest at
            production inference, and going deeper on fine-tuning and inference optimization.
          </p>
          <div className="mt-5 flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary" aria-hidden="true">$</span>
            <TypingEffect
              className="min-h-5 text-foreground"
              phrases={[
                "serving ML and LLM models in production",
                "running Kubernetes for ML inference",
                "building agentic AI with LangGraph and MCP",
                "going deeper on fine-tuning and inference optimization",
                "aspiring Kubestronaut",
              ]}
            />
          </div>
          <ExternalLinks className="mt-7 flex flex-wrap gap-2" />
        </Panel>

        <Panel label="Now" className="lg:col-span-4 flex flex-col" bodyClassName="flex flex-1 flex-col">
          <StatusPill status="active" pulse>
            In role
          </StatusPill>
          <p className="mt-3 text-lg font-semibold leading-snug">Software Engineer</p>
          <p className="text-sm text-muted-foreground">ML platform &amp; MLOps</p>
          <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm lg:mt-auto">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Also</dt>
              <dd className="mt-1">Independent consulting</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Based in</dt>
              <dd className="mt-1">Toronto, ON</dd>
            </div>
          </dl>
        </Panel>

        <Panel
          label="Building"
          meta={<Link href="#projects" className="hover:text-primary transition-colors">all projects</Link>}
          className="lg:col-span-5"
          bodyClassName="p-0"
        >
          <ul className="divide-y divide-border">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}/`} className="group flex items-start justify-between gap-4 px-4 py-3.5 sm:px-5 hover:bg-background/60 transition-colors">
                  <div className="min-w-0">
                    <StatusPill status="building">{p.status}</StatusPill>
                    <p className="mt-1.5 font-medium">
                      {p.name} <span className="font-normal text-muted-foreground">· {p.tagline}</span>
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{p.stack.join(" · ")}</p>
                  </div>
                  <ArrowRight className="mt-6 h-4 w-4 shrink-0 text-muted-foreground group-hover:translate-x-0.5 group-hover:text-primary transition-all" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel label="Learning" className="lg:col-span-4">
          <ul className="space-y-3">
            {learning.map((item) => (
              <li key={item.label}>
                <StatusPill status="learning">{item.label}</StatusPill>
                <p className="mt-0.5 pl-3 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel label="Focus" className="lg:col-span-3">
          <Chips items={focus} />
        </Panel>
      </div>

      {/* ── Experience ─────────────────────────────── */}
      <SectionHeading id="experience">Consulting</SectionHeading>
      <div className="grid gap-4">
        <Panel label={consulting.company} meta={`${consulting.date} · ${consulting.location}`}>
          <p className="font-semibold leading-snug">{consulting.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">{consulting.summary}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {consulting.clients?.map((client) => (
              <div key={client.name} className="rounded-md border border-border bg-background/60 p-4">
                <p className="text-sm font-medium">
                  {client.url ? (
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 py-1 hover:text-primary transition-colors">
                      {client.name}
                      <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                    </a>
                  ) : (
                    client.name
                  )}
                </p>
                {client.bullets.map((b) => (
                  <p key={b} className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <Chips items={consulting.stack} className="mt-4" />
        </Panel>
      </div>

      {/* ── Projects ─────────────────────────────── */}
      <SectionHeading id="projects">Projects</SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Panel key={p.slug} label={p.name} meta={<StatusPill status="building">{p.status}</StatusPill>} className="flex flex-col" bodyClassName="flex flex-1 flex-col">
            <p className="font-semibold">{p.tagline}</p>
            <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{p.date} · private repo</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.summary}</p>

            {/* Compact flow preview */}
            <ol className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[11px]" aria-label={`${p.name} flow`}>
              {p.diagram.layers.map((layer, i) => (
                <li key={layer.label} className="flex items-center gap-1.5">
                  <span className="rounded border border-border bg-background/70 px-1.5 py-0.5 text-foreground">{layer.label}</span>
                  {i < p.diagram.layers.length - 1 && <span className="text-primary" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>

            <Chips items={p.stack} className="mt-4" />
            <Link
              href={`/projects/${p.slug}/`}
              className="group mt-5 inline-flex items-center gap-1.5 self-start py-1 text-sm font-medium text-primary lg:mt-auto lg:pt-5"
            >
              Read the case study
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </Panel>
        ))}
      </div>

      {/* ── About ─────────────────────────────── */}
      <SectionHeading id="about">About</SectionHeading>
      <div className="grid gap-4 lg:grid-cols-12">
        <Panel label="Skills" className="lg:col-span-8">
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt className="text-sm font-medium">{group}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Panel>
        <Panel label="Education" className="lg:col-span-4">
          <ul className="space-y-4">
            {education.map((edu) => (
              <li key={edu.school}>
                <p className="text-sm font-medium">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {edu.date} · GPA {edu.gpa}
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {/* ── Contact ─────────────────────────────── */}
      <SectionHeading id="contact">Contact</SectionHeading>
      <Panel label="Get in touch" meta={site.email}>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg sm:text-xl font-medium leading-snug">
            Happy to talk about ML platforms, model serving, or agentic systems.
          </p>
          <ExternalLinks className="flex flex-wrap gap-2" />
        </div>
      </Panel>
    </div>
  )
}
