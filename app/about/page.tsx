"use client"

import { GraduationCap, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TechStackGraph } from "@/components/tech-stack-graph"
import { SpotlightCard } from "@/components/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Education {
  degree: string
  school: string
  location: string
  date: string
  gpa: string
  courses: string[]
}

const education: Education[] = [
  {
    degree: "Master's of Science in Computer Science",
    school: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    date: "May 2023 - Dec 2024",
    gpa: "4.0",
    courses: [
      "Advanced Machine Learning",
      "Statistical Modeling",
      "Data Visualization",
      "Database Systems",
      "Internet of Things",
    ],
  },
  {
    degree: "Honor's Bachelor's of Science in Statistics",
    school: "Western University",
    location: "London, ON",
    date: "Sep 2017 - Apr 2021",
    gpa: "3.9",
    courses: [
      "Probability Theory",
      "Statistical Inference",
      "Regression Analysis",
      "Data Science",
      "Machine Learning",
      "Time Series",
      "Computational Statistics",
    ],
  },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <ScrollReveal>
        <section>
          <h1 className="text-2xl font-bold mb-6">About</h1>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Software developer working in MLOps. I spend most of my time building
              infrastructure that helps ML teams get models into production and keep
              them running once they{"'"}re there.
            </p>
            <p>
              Background in statistics and computer science. Increasingly focused on
              LLM inference, agentic systems, and the tooling around them.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Interactive Tech Stack */}
      <ScrollReveal delay={100}>
        <section>
          <h2 className="text-lg font-semibold mb-6">Tech Stack</h2>
          <SpotlightCard className="p-4 sm:p-6">
            <TechStackGraph />
          </SpotlightCard>
        </section>
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal delay={100}>
        <section>
          <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <SpotlightCard key={index} className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <p className="font-semibold text-sm">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-xs text-muted-foreground">{edu.date}</p>
                    <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Project Car */}
      <ScrollReveal delay={100}>
        <section>
          <SpotlightCard className="p-6 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Project Car</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              V8 swap. Wrong car. Daily driven.
            </p>
            {/* Subtle rotating gear SVG */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.035] dark:opacity-[0.05]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g className="animate-[spin_20s_linear_infinite]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <rect
                      key={i}
                      x="44" y="5" width="12" height="20" rx="3"
                      fill="currentColor"
                      transform={`rotate(${i * 45} 50 50)`}
                    />
                  ))}
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="8" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                </g>
              </svg>
            </div>
          </SpotlightCard>
        </section>
      </ScrollReveal>
    </div>
  )
}
