import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = {
    languages: ["Python", "R", "Go", "Java", "JavaScript", "HTML/CSS", "SQL"],
    tools: [
      "Flask", "Django", "AWS", "Docker", "Kubernetes", "OpenCV", "React", "Git", 
      "PyTorch", "Matplotlib", "TensorFlow", "Keras", "NumPy", "Pandas", "SciPy", 
      "Power BI", "MySQL", "MongoDB", "PostgreSQL", "DynamoDB", "REST API"
    ]
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Technical Skills</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <p className="font-semibold mb-2">Languages:</p>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang, index) => (
                <Badge key={index}>{lang}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Tools and Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, index) => (
                <Badge key={index} variant="secondary">{tool}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

