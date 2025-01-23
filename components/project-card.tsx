"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  details: string[]
}

export function ProjectCard({ 
  title, 
  description, 
  tech, 
  github, 
  demo,
  details
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="group transition-all duration-300 hover:border-primary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div className="flex gap-2">
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            )}
            {demo && (
              <Link href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <Badge key={i} variant="secondary">{t}</Badge>
          ))}
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Show less</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span className="mr-2">Show more</span>
              <ChevronDown size={20} />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

