"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

interface ExperienceCardProps {
  title: string
  company: string
  date: string
  description: string
  details: string[]
}

export function ExperienceCard({
  title,
  company,
  date,
  description,
  details
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-muted-foreground mt-1">{company}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <ChevronDown
            size={18}
            className={`text-muted-foreground transition-transform duration-400 ease-cozy mt-1 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div
          className={`overflow-hidden transition-all duration-500 ease-cozy ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-disc pl-5 mb-4 space-y-2 text-sm text-muted-foreground">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
