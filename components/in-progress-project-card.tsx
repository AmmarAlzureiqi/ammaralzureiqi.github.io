"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"

interface InProgressProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  progress: number
}

export function InProgressProjectCard({ title, description, tech, github, progress }: InProgressProjectCardProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <Card className="w-full h-[300px] flex flex-col bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <Badge key={i} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Progress: {animatedProgress}%</div>
          <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${animatedProgress}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

