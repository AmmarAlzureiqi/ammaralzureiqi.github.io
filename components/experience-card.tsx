"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

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
    <Card className="group transition-all duration-300 hover:border-primary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground">{company}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
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

