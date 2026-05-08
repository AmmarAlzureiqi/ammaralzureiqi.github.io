"use client"

import { useState, useEffect } from "react"
import { SpotlightCard } from "@/components/spotlight-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, FileText, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { TypingEffect } from "@/components/typing-effect"
import { CurrentlyLearning } from "@/components/currently-learning"

export default function Home() {
  const [modKey, setModKey] = useState("⌘")
  useEffect(() => {
    setModKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl")
  }, [])

  return (
    <div className="max-w-5xl mx-auto py-12 animate-fade-in-up">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hero - 2 cols */}
        <SpotlightCard className="md:col-span-2 p-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Ammar Alzureiqi</h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-4">
            I build the systems that get ML models out of notebooks and into production.
            Pipelines, infrastructure, and the glue that makes AI actually work at scale.
          </p>
          <TypingEffect
            phrases={[
              "Building ML infrastructure at scale",
              "Optimizing LLM inference",
              "LS swapping the world",
              "Aspiring Kubestronaut",
              "Chasing lower latency",
            ]}
          />
          <div className="flex flex-wrap gap-2 my-5">
            <Badge variant="secondary" className="text-xs">MS CS, UIUC</Badge>
            <Badge variant="secondary" className="text-xs">MLOps / AIOps</Badge>
            <Badge variant="secondary" className="text-xs">BS Statistics, Western</Badge>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="mailto:alzureiqi3@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="https://linkedin.com/in/AmmarAlzureiqi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="https://github.com/AmmarAlzureiqi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => window.open('/assets/Alzureiqi_Resume.pdf', '_blank')}
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </Button>
          </div>
        </SpotlightCard>

        {/* Current Role + Currently Working On - 1 col */}
        <SpotlightCard className="p-6 flex flex-col">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="pulse-dot w-2 h-2 rounded-full bg-primary inline-block" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Current Role</p>
            </div>
            <h3 className="font-semibold text-sm mb-1">Software Developer</h3>
            <p className="text-xs text-muted-foreground mb-1">MLOps / AIOps</p>
            <p className="text-sm font-medium text-primary mb-4">Carfax</p>
          </div>
          <div className="border-t border-border pt-3 mt-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">Working On</p>
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground">ML platform infrastructure</p>
              <p className="text-xs text-muted-foreground">LLM inference & model serving</p>
              <p className="text-xs text-muted-foreground">Agentic AI workloads</p>
            </div>
          </div>
        </SpotlightCard>

        {/* Currently Learning */}
        <SpotlightCard className="md:col-span-2 p-6">
          <h2 className="text-lg font-semibold mb-5">Currently Learning</h2>
          <CurrentlyLearning />
        </SpotlightCard>

        {/* Explore + Cmd+K */}
        <SpotlightCard className="p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4">Explore</p>
          <div className="space-y-2">
            <Link href="/projects" className="flex items-center justify-between group/link py-1.5 text-sm text-foreground hover:text-primary transition-colors">
              <span>All Projects</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </Link>
            <Link href="/experience" className="flex items-center justify-between group/link py-1.5 text-sm text-foreground hover:text-primary transition-colors">
              <span>Experience</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </Link>
            <Link href="/about" className="flex items-center justify-between group/link py-1.5 text-sm text-foreground hover:text-primary transition-colors">
              <span>About Me</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </Link>
            <a href="/assets/Alzureiqi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link py-1.5 text-sm text-foreground hover:text-primary transition-colors">
              <span>Resume</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          </div>
          <div className="mt-4 pt-3 border-t border-border text-center">
            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <kbd className="px-1.5 py-0.5 font-mono bg-muted rounded border border-border text-[10px]">{modKey}+K</kbd>
              <span>Quick navigation</span>
            </button>
          </div>
        </SpotlightCard>

        {/* Featured Project - Noteflow */}
        <SpotlightCard className="md:col-span-3 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="pulse-dot w-2 h-2 rounded-full bg-primary inline-block" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Featured Project</p>
            </div>
            <div className="flex gap-2">
              <a href="https://github.com/AmmarAlzureiqi/Noteflow" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">Noteflow</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            AI-powered desktop note-taking with local knowledge graphs and Notion sync.
            Captures lectures, videos, PDFs, and handwritten notes. User-led: AI assists, you write.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Electron", "LangGraph", "Whisper", "ChromaDB", "Claude"].map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  )
}
