import type { FlowLayer } from "@/components/flow-diagram"

// Site content. Only confirmed facts. The day job appears only as
// "Software Engineer, MLOps / AIOps @ Mobility Global": no team details,
// dates, duties, metrics, or architecture.

export interface ExperienceEntry {
  title: string
  company: string
  location: string
  date: string
  summary: string
  bullets?: string[]
  clients?: { name: string; url?: string; bullets: string[] }[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: "Software Developer, Independent Consulting",
    company: "Alzureiqi Solutions",
    location: "London, ON",
    date: "Sep 2024 – Present",
    summary:
      "Production systems for healthcare, education, and community organizations, from infrastructure to the apps on top.",
    clients: [
      {
        name: "Locum",
        bullets: [
          "Rebuilt a healthcare-staffing marketplace as a TypeScript monorepo (Express, PostgreSQL, Next.js, React Native) with security and privacy built in: MFA, role-based access, encryption of personal data, audit logging, and Canadian data residency, plus automated tests and CI/CD.",
        ],
      },
      {
        name: "Arqam Social Innovation Lab",
        url: "https://arqamsil.ca",
        bullets: [
          "Built and operate the production site and mentorship portal (React, TypeScript, Express) with passwordless sign-in and role-based admin access.",
        ],
      },
      {
        name: "The Wellness Network",
        bullets: [
          "Run its academy's Canvas LMS and am building a self-hosted replacement with Docker, PostgreSQL, and Terraform.",
        ],
      },
    ],
    stack: ["TypeScript", "PostgreSQL", "FastAPI", "Docker", "Terraform"],
  },
]

export interface Project {
  slug: string
  name: string
  tagline: string
  date: string
  status: string
  summary: string
  bullets: string[]
  stack: string[]
  diagram: { layers: FlowLayer[]; aside?: FlowLayer[]; caption?: string }
}

export const projects: Project[] = [
  {
    slug: "censusx",
    name: "CensusX.ai",
    tagline: "Agentic AI Platform",
    date: "2026 – Present",
    status: "Building",
    summary:
      "An agentic AI operations platform for small and medium businesses (clinics, law firms, construction) that connects scheduling, CRM, inventory, staffing, and marketing systems to one AI agent that answers questions and runs workflows.",
    bullets: [
      "Architected a multi-tenant SaaS backend: a shared control plane with isolated per-tenant data planes.",
      "MCP servers expose each business system's APIs as permission-scoped tools for LangGraph agents.",
      "Retrieval-augmented generation (RAG) and human-in-the-loop approval for agent actions.",
    ],
    stack: ["Python", "LangGraph", "MCP", "FastAPI", "PostgreSQL"],
    diagram: {
      layers: [
        { label: "Owner / manager", items: ["Natural-language questions and tasks"] },
        { label: "Agent", items: ["LangGraph agents", "RAG"], note: "Human-in-the-loop approval for actions" },
        { label: "Tools", items: ["MCP servers"], note: "Permission-scoped tools per business system" },
        { label: "Business systems", items: ["Scheduling", "CRM", "Inventory", "Staffing", "Marketing"] },
      ],
      aside: [
        { label: "Control plane", items: ["Shared across tenants"] },
        { label: "Data planes", items: ["Isolated per tenant"] },
      ],
    },
  },
  {
    slug: "noteflow",
    name: "NoteFlow",
    tagline: "Multi-Model AI Pipeline",
    date: "2025 – Present",
    status: "Active development",
    summary:
      "A desktop app with a LangGraph agentic pipeline that turns lectures, videos, PDFs, and handwriting into structured Notion notes.",
    bullets: [
      "Routes each step to a specialized model: Whisper, Qwen2.5-VL, Claude, and DeepSeek.",
      "Local RAG (Ollama embeddings, ChromaDB), a web-research agent, Notion MCP sync, and LangSmith tracing.",
      "Shipped as an Electron desktop app with an async FastAPI backend.",
    ],
    stack: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Electron"],
    diagram: {
      layers: [
        { label: "Inputs", items: ["Lectures", "Videos", "PDFs", "Handwriting"] },
        {
          label: "LangGraph pipeline",
          items: ["Whisper", "Qwen2.5-VL", "Claude", "DeepSeek"],
          note: "Each step routed to a specialized model",
        },
        { label: "Context", items: ["Local RAG (Ollama + ChromaDB)", "Web-research agent"] },
        { label: "Output", items: ["Structured Notion notes via Notion MCP"] },
      ],
      aside: [{ label: "Tracing", items: ["LangSmith"] }],
    },
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "Go", "Java", "SQL", "Bash"] },
  {
    group: "Cloud & Infrastructure",
    items: ["Distributed Systems", "Kubernetes", "Helm", "AWS (EKS)", "GitLab CI/CD", "Argo CD", "Terraform (IaC)", "Istio", "Envoy", "Docker", "Linux"],
  },
  {
    group: "ML Serving & MLOps",
    items: ["Triton", "TensorRT-LLM", "vLLM", "KServe", "Open Inference Protocol", "MLflow", "Flyte", "JupyterHub", "KEDA", "Karpenter", "DCGM Exporter"],
  },
  {
    group: "AI & Agents",
    items: ["Agentic AI", "MCP", "LangGraph", "RAG", "Tool Calling", "Langfuse", "OpenClaw"],
  },
  {
    group: "Observability & Data",
    items: ["Grafana", "Prometheus", "Loki", "Mimir", "Tempo", "OpenTelemetry", "PostgreSQL", "Redis"],
  },
]

export const education = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Illinois Urbana-Champaign",
    date: "May 2023 – Dec 2024",
    gpa: "4.0",
  },
  {
    degree: "B.Sc. (Honours) in Statistics",
    school: "Western University",
    date: "Sep 2017 – Apr 2021",
    gpa: "3.9",
  },
]

export const learning = [
  { label: "Fine-tuning", detail: "LoRA / QLoRA, SFT, DPO" },
  { label: "Inference optimization", detail: "vLLM, SGLang, TensorRT-LLM, PagedAttention, KV cache" },
  { label: "CUDA & GPU fundamentals", detail: "How the hardware under the serving stack actually works" },
  { label: "The full model lifecycle", detail: "From training and fine-tuning through serving in production" },
]
