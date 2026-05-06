"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  type SimulationNodeDatum,
  type SimulationLinkDatum,
} from "d3-force"

interface TechNode extends SimulationNodeDatum {
  id: string
  label: string
  category: "core" | "ml" | "infra" | "data"
  weight: number // 1-3, affects dot size subtly
  tooltip: string
}

interface TechEdge extends SimulationLinkDatum<TechNode> {
  source: string | TechNode
  target: string | TechNode
}

const initialNodes: TechNode[] = [
  { id: "python", label: "Python", category: "core", weight: 3, tooltip: "Primary language for ML pipelines, backend services, data engineering" },
  { id: "typescript", label: "TypeScript", category: "core", weight: 2, tooltip: "Full-stack web development" },
  { id: "go", label: "Go", category: "core", weight: 2, tooltip: "CLI tools, microservices, infrastructure tooling" },

  { id: "pytorch", label: "PyTorch", category: "ml", weight: 3, tooltip: "Model training and experimentation" },
  { id: "langchain", label: "LangChain", category: "ml", weight: 2, tooltip: "LLM applications, RAG, agent orchestration" },
  { id: "langgraph", label: "LangGraph", category: "ml", weight: 2, tooltip: "Multi-agent workflows and stateful LLM systems" },
  { id: "llm-inference", label: "LLM Inference", category: "ml", weight: 3, tooltip: "Model serving, optimization, and scaling" },

  { id: "kubernetes", label: "Kubernetes", category: "infra", weight: 3, tooltip: "Container orchestration for training and serving" },
  { id: "docker", label: "Docker", category: "infra", weight: 2, tooltip: "Containerization for services and ML workloads" },
  { id: "aws", label: "AWS", category: "infra", weight: 3, tooltip: "Cloud infrastructure" },
  { id: "flyte", label: "Flyte", category: "infra", weight: 2, tooltip: "ML workflow orchestration for training and data pipelines" },
  { id: "grafana", label: "Grafana", category: "infra", weight: 2, tooltip: "Observability: dashboards, metrics, traces, logs" },

  { id: "postgresql", label: "PostgreSQL", category: "data", weight: 2, tooltip: "Primary relational database" },
  { id: "chromadb", label: "ChromaDB", category: "data", weight: 1, tooltip: "Vector store for embeddings and semantic search" },
]

const initialEdges: TechEdge[] = [
  { source: "python", target: "pytorch" },
  { source: "python", target: "langchain" },
  { source: "python", target: "flyte" },
  { source: "python", target: "llm-inference" },
  { source: "pytorch", target: "flyte" },
  { source: "pytorch", target: "llm-inference" },
  { source: "langchain", target: "langgraph" },
  { source: "langgraph", target: "chromadb" },
  { source: "kubernetes", target: "docker" },
  { source: "kubernetes", target: "aws" },
  { source: "kubernetes", target: "flyte" },
  { source: "kubernetes", target: "grafana" },
  { source: "kubernetes", target: "llm-inference" },
  { source: "go", target: "kubernetes" },
  { source: "go", target: "docker" },
  { source: "flyte", target: "aws" },
  { source: "postgresql", target: "python" },
  { source: "llm-inference", target: "grafana" },
]

function dotRadius(weight: number): number {
  return weight === 3 ? 5.5 : weight === 2 ? 4 : 3
}

export function TechStackGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const simulationRef = useRef<ReturnType<typeof forceSimulation<TechNode>> | null>(null)
  const [nodes, setNodes] = useState<TechNode[]>([])
  const [edges, setEdges] = useState<TechEdge[]>([])
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [draggedNode, setDraggedNode] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string; label: string } | null>(null)
  const [isDark, setIsDark] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 700, height: 420 })

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect()
        const w = Math.min(rect.width, 760)
        const h = Math.min(420, Math.max(320, w * 0.55))
        setDimensions({ width: w, height: h })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const nodesCopy = initialNodes.map((n) => ({
      ...n,
      x: dimensions.width / 2 + (Math.random() - 0.5) * 160,
      y: dimensions.height / 2 + (Math.random() - 0.5) * 120,
    }))
    const edgesCopy = initialEdges.map((e) => ({ ...e }))

    const simulation = forceSimulation<TechNode>(nodesCopy)
      .force(
        "link",
        forceLink<TechNode, TechEdge>(edgesCopy)
          .id((d) => d.id)
          .distance(65)
          .strength(0.5)
      )
      .force("charge", forceManyBody().strength(-120))
      .force("center", forceCenter(dimensions.width / 2, dimensions.height / 2).strength(0.05))
      .force("collision", forceCollide<TechNode>().radius(() => 28))
      .force("x", forceX(dimensions.width / 2).strength(0.03))
      .force("y", forceY(dimensions.height / 2).strength(0.03))
      .alphaDecay(0.025)
      .velocityDecay(0.35)
      .on("tick", () => {
        const pad = 30
        nodesCopy.forEach((n) => {
          n.x = Math.max(pad, Math.min(dimensions.width - pad, n.x || 0))
          n.y = Math.max(pad, Math.min(dimensions.height - pad, n.y || 0))
        })
        setNodes([...nodesCopy])
        setEdges([...edgesCopy])
      })

    simulationRef.current = simulation
    return () => { simulation.stop() }
  }, [dimensions])

  const handleMouseDown = useCallback((nodeId: string, e: React.MouseEvent) => {
    e.preventDefault()
    setDraggedNode(nodeId)
    const sim = simulationRef.current
    if (sim) {
      sim.alphaTarget(0.3).restart()
      const node = sim.nodes().find((n) => n.id === nodeId)
      if (node) { node.fx = node.x; node.fy = node.y }
    }
  }, [])

  useEffect(() => {
    if (!draggedNode) return
    const handleMove = (e: MouseEvent) => {
      const svg = svgRef.current
      const sim = simulationRef.current
      if (!svg || !sim) return
      const rect = svg.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * dimensions.width
      const y = ((e.clientY - rect.top) / rect.height) * dimensions.height
      const node = sim.nodes().find((n) => n.id === draggedNode)
      if (node) {
        node.fx = Math.max(20, Math.min(dimensions.width - 20, x))
        node.fy = Math.max(20, Math.min(dimensions.height - 20, y))
      }
    }
    const handleUp = () => {
      const sim = simulationRef.current
      if (sim) {
        sim.alphaTarget(0)
        const node = sim.nodes().find((n) => n.id === draggedNode)
        if (node) { node.fx = null; node.fy = null }
      }
      setDraggedNode(null)
    }
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", handleUp)
    return () => { window.removeEventListener("mousemove", handleMove); window.removeEventListener("mouseup", handleUp) }
  }, [draggedNode, dimensions])

  const connectedTo = (nodeId: string) => {
    const connected = new Set<string>()
    initialEdges.forEach((e) => {
      const src = typeof e.source === "string" ? e.source : e.source.id
      const tgt = typeof e.target === "string" ? e.target : e.target.id
      if (src === nodeId) connected.add(tgt)
      if (tgt === nodeId) connected.add(src)
    })
    return connected
  }

  const highlighted = hoveredNode ? connectedTo(hoveredNode) : new Set<string>()

  // Refined warm palette
  const colors = {
    dot: isDark ? "hsl(30, 30%, 60%)" : "hsl(25, 35%, 48%)",
    dotHover: isDark ? "hsl(30, 45%, 72%)" : "hsl(25, 50%, 38%)",
    dotDimmed: isDark ? "hsl(30, 10%, 25%)" : "hsl(25, 10%, 78%)",
    edge: isDark ? "hsl(30, 8%, 20%)" : "hsl(25, 12%, 84%)",
    edgeHover: isDark ? "hsl(30, 30%, 45%)" : "hsl(25, 30%, 55%)",
    edgeDimmed: isDark ? "hsl(30, 5%, 14%)" : "hsl(25, 8%, 90%)",
    glow: isDark ? "hsl(30, 40%, 55%)" : "hsl(25, 45%, 45%)",
  }

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-auto select-none"
        style={{ cursor: draggedNode ? "grabbing" : "default" }}
      >
        <defs>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const src = edge.source as TechNode
          const tgt = edge.target as TechNode
          if (!src.x || !tgt.x) return null
          const isActive = hoveredNode && (src.id === hoveredNode || tgt.id === hoveredNode)
          const isDimmed = hoveredNode && !isActive

          return (
            <line
              key={i}
              x1={src.x} y1={src.y} x2={tgt.x} y2={tgt.y}
              stroke={isDimmed ? colors.edgeDimmed : isActive ? colors.edgeHover : colors.edge}
              strokeWidth={isActive ? 1.2 : 0.6}
              className="transition-all duration-400"
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          if (!node.x || !node.y) return null
          const isHovered = hoveredNode === node.id
          const isConnected = highlighted.has(node.id)
          const isDimmed = hoveredNode && !isHovered && !isConnected
          const r = dotRadius(node.weight)

          return (
            <g
              key={node.id}
              className="cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => handleMouseDown(node.id, e)}
              onMouseEnter={() => {
                setHoveredNode(node.id)
                setTooltip({ x: node.x!, y: node.y!, text: node.tooltip, label: node.label })
              }}
              onMouseLeave={() => { setHoveredNode(null); setTooltip(null) }}
            >
              {/* Invisible hit area for easier interaction */}
              <circle
                cx={node.x} cy={node.y} r={16}
                fill="transparent"
              />
              {/* Glow ring on hover */}
              {isHovered && (
                <circle
                  cx={node.x} cy={node.y} r={r + 4}
                  fill="none"
                  stroke={colors.glow}
                  strokeWidth={1}
                  opacity={0.4}
                  filter="url(#node-glow)"
                />
              )}
              {/* Dot */}
              <circle
                cx={node.x} cy={node.y} r={r}
                fill={isDimmed ? colors.dotDimmed : isHovered ? colors.dotHover : colors.dot}
                opacity={isDimmed ? 0.4 : isHovered ? 1 : 0.8}
                className="transition-all duration-300"
              />
              {/* Label */}
              <text
                x={node.x}
                y={node.y! + r + 12}
                textAnchor="middle"
                fill="currentColor"
                fontSize={9.5}
                fontWeight={isHovered ? 600 : 400}
                letterSpacing={0.2}
                opacity={isDimmed ? 0.15 : isHovered ? 0.95 : 0.5}
                className="transition-all duration-300 pointer-events-none"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-30 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2.5 shadow-lg max-w-[200px] pointer-events-none"
          style={{
            left: `${(tooltip.x / dimensions.width) * 100}%`,
            top: `${(tooltip.y / dimensions.height) * 100 - 4}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="text-[11px] font-semibold mb-0.5">{tooltip.label}</p>
          <p className="text-[10px] text-muted-foreground leading-relaxed">{tooltip.text}</p>
        </div>
      )}

      <p className="text-[10px] text-muted-foreground/25 mt-1.5 text-center select-none">
        drag to explore
      </p>
    </div>
  )
}
