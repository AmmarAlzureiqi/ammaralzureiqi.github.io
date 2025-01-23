"use client"

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ExpandableCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function ExpandableCard({ title, subtitle, children }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-4 cursor-pointer transition-all duration-300 hover:shadow-md" onClick={() => setIsExpanded(!isExpanded)}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {title}
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
        {children}
      </CardContent>
    </Card>
  )
}

