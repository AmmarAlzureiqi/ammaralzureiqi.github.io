import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Education {
  degree: string
  school: string
  date: string
  courses: string[]
}

const languages = ["Python", "R", "SQL", "Java", "Go", "Javascript", "HTML/CSS"]

const technologies = ["Flask", "Django", "AWS", "PostgreSQL", "Git", "MongoDB", "MySQL", "Docker", "React"]

const education: Education[] = [
  {
    degree: "Master's of Computer Science",
    school: "University of Illinois Urbana Champaign",
    date: "May 2023 - Dec 2024",
    courses: [
      "Advanced Machine Learning",
      "Statistical Modeling",
      "Data Visualization",
      "Database Systems",
      "Internet of Things (IoT)",
    ],
  },
  {
    degree: "Bachelor's of Statistics",
    school: "Western University",
    date: "Sep 2017 - Apr 2021",
    courses: ["Probability Theory", "Statistical Inference", "Regression Analysis", "Data Science", "Machine Learning"],
  },
]

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="space-y-6 text-lg">
        <p>
          I&apos;m a Software Developer and Data Scientist passionate about crafting elegant solutions at the intersection of
          code and data. With expertise in building scalable applications and implementing machine learning solutions, I
          transform complex problems into intuitive applications.
        </p>
        <div>
          <h2 className="text-xl font-semibold mb-3">Core Competencies</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full-Stack Development with React, Node.js, and Python</li>
            <li>Machine Learning and Data Science using PyTorch, TensorFlow, and scikit-learn</li>
            <li>Cloud Architecture on AWS with expertise in serverless and containerization</li>
            <li>Database Design and Optimization (PostgreSQL, MongoDB, DynamoDB)</li>
          </ul>
        </div>
        <p>
          Currently, I&apos;m focused on developing AI-powered solutions and scalable web applications that make a meaningful
          impact. I believe in writing clean, maintainable code and building systems that solve real-world problems.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span>Education</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.date}</p>
                <div className="mt-2">
                  <p className="font-medium">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {edu.courses.map((course, i) => (
                      <Badge key={i} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Languages and Tools & Technologies cards removed */}

    </div>
  )
}