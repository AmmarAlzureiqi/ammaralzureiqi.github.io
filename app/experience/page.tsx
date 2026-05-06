"use client"

import { ExperienceCard } from "@/components/experience-card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer (MLOps / AIOps)",
      company: "Carfax",
      date: "July 2025 - Present",
      description: "Building internal ML platform infrastructure for model development, deployment, and monitoring.",
      details: [
        "Designing and operating ML platform infrastructure on Kubernetes",
        "Building observability and monitoring systems for ML workloads",
        "Working on LLM inference infrastructure and agentic AI systems",
      ],
    },
    {
      title: "Software Developer",
      company: "Independent Consulting",
      date: "Sept. 2024 - Present",
      description: "Building custom software solutions for educational institutions and community organizations.",
      details: [
        "LMS platform migration and optimization for an educational institution",
        "Self-service CMS platform for a nonprofit organization",
        "Community census data analysis and insights platform",
      ],
    },
    {
      title: "Software Engineer",
      company: "CensusX.ai",
      date: "May 2024 - Oct 2024",
      description: "Built an AI business assistant using LLMs and RAG. Engineered scalable ETL pipelines for data processing.",
      details: [
        "Fine-tuned LLM (LLAMA 3.1 70B) for business-specific use cases",
        "Built ETL pipelines with Apache Spark and Kafka",
        "Improved data processing speed by 40% through optimization",
      ],
    },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <ScrollReveal>
        <div>
          <h1 className="text-2xl font-bold mb-2">Experience</h1>
          <p className="text-muted-foreground text-sm">
            Where I{"'"}ve worked and what I{"'"}ve built.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border/60 ml-[3px]" />
        <div className="space-y-4 pl-6">
          {experiences.map((experience, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative">
                <div
                  className={`absolute -left-6 top-6 w-[7px] h-[7px] rounded-full ${
                    index === 0 ? "bg-primary pulse-dot" : "bg-muted-foreground/40"
                  }`}
                />
                <ExperienceCard
                  title={experience.title}
                  company={experience.company}
                  date={experience.date}
                  description={experience.description}
                  details={experience.details}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
