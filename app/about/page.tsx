// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Wrench, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"



interface Education {
  degree: string
  school: string
  date: string
  // gpa?: string
  courses: string[]
}

// interface Commit {
//   date: string
//   message: string
//   details: string
// }

// const commits: Commit[] = [
//   {
//     date: "2024-01-15",
//     message: "Mastered Next.js and React Server Components",
//     details: "Completed advanced course and built several production-ready applications.",
//   },
//   {
//     date: "2023-11-01",
//     message: "Implemented AI-powered features in Hirestack",
//     details: "Integrated GPT-4 for smart job matching and resume analysis.",
//   },
//   {
//     date: "2023-08-20",
//     message: "Graduated with MS in Computer Science",
//     details: "Focused on Machine Learning and Distributed Systems. GPA: 4.0",
//   },
//   {
//     date: "2023-05-10",
//     message: "Started internship at CensusX.ai",
//     details: "Worked on developing ETL pipelines and implementing ML models.",
//   },
//   {
//     date: "2022-09-01",
//     message: "Began Master's program at UIUC",
//     details: "Enrolled in MS Computer Science program with a focus on AI and Data Science.",
//   },
//   {
//     date: "2021-04-30",
//     message: "Graduated with BS in Statistics",
//     details: "Completed Honor's Bachelor's degree with a minor in Computer Science. GPA: 3.9",
//   },
// ]


const languages = ["Python", "R", "SQL", "Java", "Javascript", "HTML/CSS"]

const technologies = ["Flask", "AWS", "PostgreSQL", "Git", "MongoDB", "MySQL"]

const education: Education[] = [
  {
    degree: "Master's of Computer Science",
    school: "University of Illinois Urbana Champaign",
    date: "May 2023 - Dec 2024",
    // gpa: "4.0",
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
    // gpa: "3.9",
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span>Languages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <Badge key={index} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wrench className="h-6 w-6" />
              <span>Tools & Technologies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

{/* 
      <div>
        <h2 className="text-2xl font-bold mb-6">Version History</h2>
        <div className="space-y-4">
          {commits.map((commit, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="text-primary">{commit.date}</span>
                  <span className="text-lg font-semibold">{commit.message}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{commit.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> 
      */}


    </div>
  )
}

