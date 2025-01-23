import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      school: "University of Illinois Urbana-Champaign",
      location: "Champaign, IL",
      degree: "Master's of Science in Computer Science",
      date: "May 2023 – Dec. 2024",
      gpa: "4.0",
      courses: [
        "Advanced Machine Learning", "Statistical Modeling", "Data Visualization", 
        "Database Systems", "Internet of Things (IoT)"
      ]
    },
    {
      school: "Western University",
      location: "London, ON",
      degree: "Honor's Bachelor's of Science in Statistics",
      date: "Sep. 2017 – Apr. 2021",
      gpa: "3.9",
      courses: [
        "Probability Theory", "Statistical Inference", "Regression Analysis", 
        "Multivariate Statistics", "Data Science", "Machine Learning", "Time Series", 
        "Applied Linear Models", "Computational Statistics"
      ]
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      {education.map((edu, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <CardTitle>{edu.school}</CardTitle>
            <p className="text-muted-foreground">{edu.location}</p>
            <p>{edu.degree} — GPA: {edu.gpa}</p>
            <p className="text-sm text-muted-foreground">{edu.date}</p>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((course, courseIndex) => (
                <Badge key={courseIndex} variant="secondary">{course}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

