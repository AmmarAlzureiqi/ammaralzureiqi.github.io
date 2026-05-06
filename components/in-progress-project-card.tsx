"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface InProgressProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  status: string
}

export function InProgressProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  status,
}: InProgressProjectCardProps) {
  return (
    <Card className="w-full flex flex-col group hover:-translate-y-0.5 transition-all duration-400 ease-cozy">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div className="flex gap-2">
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </Link>
            )}
            {demo && (
              <Link href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </Link>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="pulse-dot w-2 h-2 rounded-full bg-primary inline-block" />
          <Badge variant="outline" className="text-xs">
            {status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
