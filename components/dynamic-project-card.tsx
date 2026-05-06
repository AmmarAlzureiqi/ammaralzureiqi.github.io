"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface DynamicProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  details: string[]
  type: string
  achievements: string[]
}

export function DynamicProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  details,
  type,
  achievements,
}: DynamicProjectCardProps) {
  return (
    <Card className="w-full h-[400px] flex flex-col group hover:-translate-y-0.5 transition-all duration-400 ease-cozy">
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
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <Badge key={i} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto pr-4 custom-scrollbar relative">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-sm">Type</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm">Key Achievements</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm">Details</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fade-gradient"></div>
      </CardContent>
    </Card>
  )
}
