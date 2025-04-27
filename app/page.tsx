"use client";

import { DynamicProjectCard } from "../components/dynamic-project-card";
import { ExperienceCard } from "../components/experience-card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText, Briefcase, GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { TypingEffect } from "../components/typing-effect";
import { CurrentlyLearning } from "../components/currently-learning";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Ammar Alzureiqi</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-sm">
            <Briefcase className="w-3 h-3 mr-1" />
            Software Developer
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <GraduationCap className="w-3 h-3 mr-1" />
            MS - Computer Science @ UIUC
          </Badge>
          {/* <Badge variant="secondary" className="text-sm">
            <Award className="w-3 h-3 mr-1" />
            BS - Statistics
          </Badge> */}
          <Badge variant="secondary" className="text-sm">
            <Award className="w-3 h-3 mr-1" />
            2 Years of Experience
          </Badge>
        </div>
        <div className="text-xl text-muted-foreground space-y-4">
          <p>
            Software Developer & Data Scientist crafting elegant solutions at the intersection of code and data. With a
            passion for building scalable applications and implementing cutting-edge machine learning solutions, I
            transform complex problems into intuitive, user-friendly applications.
          </p>
          <p>
            My expertise spans full-stack development, cloud architecture, and data science, allowing me to create
            comprehensive solutions that drive innovation and efficiency.
          </p>
        </div>
        <TypingEffect
          phrases={[
            "Building scalable web applications",
            "Implementing machine learning solutions",
            "LS Swapping The World",
            "Optimizing cloud architectures",
            "Crafting intuitive user experiences"
          ]}
        />
        <div className="flex space-x-4 mt-6">
          {/* Email Button */}
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:alzureiqi3@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
          {/* LinkedIn Button */}
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/AmmarAlzureiqi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          {/* GitHub Button */}
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/AmmarAlzureiqi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          {/* Resume Button */}
          <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open('../assets/Alzureiqi_Resume.pdf', '_blank')}
          aria-label="Resume"
        >
          <FileText className="h-6 w-6" />
        </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Currently Learning</h2>
        <CurrentlyLearning />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <DynamicProjectCard
            title="Hirestack"
            description="A scalable, serverless job aggregation platform"
            tech={["Python", "Django", "Next.js", "AWS", "DynamoDB"]}
            github="https://github.com/AmmarAlzureiqi/Hirestack"
            demo="https://hirestackjobs.vercel.app/"
            details={[
              "Implemented serverless architecture using AWS Lambda and API Gateway",
              "Designed and optimized DynamoDB schema for efficient querying",
              "Developed machine learning models for personalized job recommendations",
              "Integrated with multiple job board APIs for real-time data aggregation",
              "Implemented user authentication and profile management features",
            ]}
            type="Full-Stack Web Application"
            achievements={[
              "Reduced infrastructure costs by 40% through serverless architecture",
              "Improved job matching accuracy by 25% using ML algorithms",
              "Scaled to handle 1M+ daily active users",
            ]}
          />
          <DynamicProjectCard
            title="RetailPulse"
            description="IoT-based People Counter for retail environments"
            tech={["Python", "OpenCV", "FastAPI", "Docker"]}
            github="https://github.com/AmmarAlzureiqi/CustomerTrafficAnalysis"
            details={[
              "Developed computer vision algorithms for accurate people counting",
              "Implemented real-time data processing pipeline using FastAPI",
              "Designed and built responsive dashboard for visualizing foot traffic data",
              "Integrated with IoT devices for seamless data collection",
              "Containerized application using Docker for easy deployment",
            ]}
            type="Computer Vision & IoT Application"
            achievements={[
              "Achieved 95% accuracy in people counting",
              "Reduced manual counting labor by 100%",
              "Provided actionable insights leading to 15% increase in store efficiency",
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Experience</h2>
        <div className="space-y-6">
          <ExperienceCard
            title="Software Developer"
            company="The Wellness Network"
            date="Sept. 2024 – Present"
            description="Leading the development of a custom Learning Management System, improving student engagement and administrative efficiency while implementing comprehensive analytics tools."
            details={[
              "Architected and developed a scalable Learning Management System from scratch",
              "Implemented advanced analytics dashboard for tracking student performance and engagement",
              "Optimized database queries, resulting in 50% reduction in page load times",
              "Led a team of 3 developers, implementing agile methodologies",
              "Integrated third-party APIs for enhanced content delivery and assessment tools",
            ]}
          />
          <ExperienceCard
            title="Software Engineer"
            company="CensusX.ai"
            date="May 2024 – Oct 2024"
            description="Developed an AI business assistant using advanced LLM systems and engineered scalable ETL pipelines, providing real-time analytics and actionable business intelligence."
            details={[
              "Implemented and fine-tuned LLAMA 3.1 70B model for business-specific use cases",
              "Designed and developed ETL pipelines using Apache Spark and Kafka",
              "Improved data processing speed by 40% through optimized indexing and caching strategies",
              "Implemented real-time analytics dashboard using React and D3.js",
              "Collaborated with data scientists to develop and deploy machine learning models",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
