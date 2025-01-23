"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LearningItem {
  name: string
  progress: number
}

export function CurrentlyLearning() {
  const [learningItems, setLearningItems] = useState<LearningItem[]>([
    { name: "Go", progress: 0 },
    { name: "Object-Relational Mapping", progress: 0 },
    { name: "Real-time Systems", progress: 0 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setLearningItems((items) =>
        items.map((item) => ({
          ...item,
          progress: Math.min(item.progress + Math.random() * 5, 100),
        })),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Currently Learning</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {learningItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>{item.name}</span>
              <span>{Math.round(item.progress)}%</span>
            </div>
            <Progress value={item.progress} className="w-full h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

