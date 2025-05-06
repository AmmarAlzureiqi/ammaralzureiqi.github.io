import { ExperienceCard } from '../../components/experience-card'

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Alzureiqi Solutions",
      date: "Sept. 2024 – Present",
      description: "Developing custom solutions for diverse clients including educational institutions and community organizations. Creating specialized platforms that enhance efficiency, engagement, and data-driven decision making.",
      details: [
        "IDA Academy: Streamlined LMS migration and optimization, significantly reducing system load times and enhancing student engagement; developed integrated marketing website with custom student portal enabling real-time progress tracking for students, teachers, and administrators",
        "The Wellness Network: Designed and deployed a self-service CMS platform for the organization's website, allowing the marketing team to independently manage content, events, and initiatives without technical support",
        "Arqam SIL: Led comprehensive community census development and data analysis for thousands of responses, uncovering key demographic insights and community challenges that directly informed program improvements and resource allocation decisions"
      ]
    },
    {
      title: "Software Engineer",
      company: "CensusX.ai",
      date: "May 2024 – Oct 2024",
      description: "Developed an AI business assistant using advanced LLM systems (LLAMA 3.1 70B) and RAG. Engineered scalable ETL pipelines with Apache Spark and Kafka, boosting data processing speed by 40%.",
      details: [
        "Implemented and fine-tuned LLAMA 3.1 70B model for business-specific use cases",
        "Designed and developed ETL pipelines using Apache Spark and Kafka",
        "Improved data processing speed by 40% through optimized indexing and caching strategies",
        "Collaborated with data scientists to develop and deploy machine learning models"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "MK Bookkeeping and Tax Services",
      date: "Jan. 2023 – Aug. 2023",
      description: "Developed and deployed a full-stack employee time-tracking application and automated invoice processing system, reducing payroll processing time by 40% and significantly minimizing data entry errors.",
      details: [
        "Developed full-stack employee time-tracking application using Flask and PostgreSQL",
        "Implemented robust API endpoints and data validation techniques",
        "Engineered an automated invoice processing system using OCR technology",
        "Reduced payroll processing time by 40% through efficient system design",
        "Collaborated with the finance team to ensure accurate data integration"
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Experience</h1>
        <p className="text-muted-foreground text-lg mb-6">
          My professional journey in software development and data science.
        </p>
      </div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            details={experience.details}
          />
        ))}
      </div>
    </div>
  )
}

