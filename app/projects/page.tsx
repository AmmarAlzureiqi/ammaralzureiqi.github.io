"use client"

import { DynamicProjectCard } from "@/components/dynamic-project-card"
import { InProgressProjectCard } from "@/components/in-progress-project-card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Projects() {
  const inProgressProjects = [
    {
      title: "Noteflow",
      description:
        "macOS desktop app for AI-powered note-taking. Captures lectures, videos, PDFs, and handwritten notes with a local knowledge graph and Notion sync. User-led: AI assists, you write.",
      tech: ["Electron", "TypeScript", "LangGraph", "Whisper", "Claude", "ChromaDB"],
      github: "https://github.com/AmmarAlzureiqi/Noteflow",
      status: "Active development",
    },
  ]

  const projects = [
    {
      title: "Hirestack",
      description:
        "A scalable, serverless job aggregation platform that processes real-time data from multiple job boards and provides intelligent job recommendations.",
      tech: ["Python", "Django", "Next.js", "AWS Lambda", "DynamoDB"],
      github: "https://github.com/AmmarAlzureiqi/Hirestack",
      demo: "https://hirestackjobs.vercel.app/",
      details: [
        "Serverless architecture using AWS Lambda and API Gateway",
        "Optimized DynamoDB schema for efficient querying",
        "ML models for personalized job recommendations",
        "Real-time aggregation from multiple job board APIs",
      ],
      type: "Full-Stack Web Application",
      achievements: [
        "Reduced infrastructure costs by 40% through serverless architecture",
        "ML-powered job matching with significant accuracy improvements",
      ],
    },
    {
      title: "RetailPulse",
      description:
        "IoT-based people counter using computer vision for accurate real-time customer tracking in retail environments.",
      tech: ["Python", "OpenCV", "FastAPI", "Docker", "PyTorch"],
      github: "https://github.com/AmmarAlzureiqi/CustomerTrafficAnalysis",
      details: [
        "Computer vision algorithms for accurate people counting",
        "Real-time data processing pipeline using FastAPI",
        "Responsive dashboard for visualizing foot traffic data",
        "Containerized deployment with Docker",
      ],
      type: "Computer Vision & IoT",
      achievements: [
        "95% accuracy in people counting",
        "Provided insights leading to 15% increase in store efficiency",
      ],
    },
    {
      title: "CryoCast",
      description:
        "AI forecasting system that captures trends and extrapolates them with uncertainty quantification.",
      tech: ["TensorFlow", "PyTorch", "Pandas", "Streamlit"],
      github: "https://github.com/AmmarAlzureiqi/cryocast",
      details: [
        "ML framework for long-range forecasting with trend dynamics",
        "Ensemble methods combining statistical and deep learning approaches",
        "Visualization system for confidence intervals and probability distributions",
      ],
      type: "AI/ML Application",
      achievements: [
        "Improved forecast consistency vs standard time-series models",
        "Modular architecture supporting multiple forecasting approaches",
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-14 py-8">
      <ScrollReveal>
        <div>
          <h1 className="text-2xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground text-sm">
            Things I{"'"}ve built and things I{"'"}m building.
          </p>
        </div>
      </ScrollReveal>

      <section>
        <ScrollReveal>
          <h2 className="text-lg font-semibold mb-4">In Progress</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {inProgressProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <InProgressProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                status={project.status}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <h2 className="text-lg font-semibold mb-4">Completed</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 [&>*]:h-[350px]">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <DynamicProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                details={project.details}
                type={project.type}
                achievements={project.achievements}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
