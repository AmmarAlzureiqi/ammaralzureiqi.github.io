import { DynamicProjectCard } from "../../components/dynamic-project-card"
import { InProgressProjectCard } from "../../components/in-progress-project-card"


export default function Projects() {
  const inProgressProjects = [
    {
      title: "Learning Management System",
      description: "A modern Learning Management System enabling course creation, student progress tracking, and interactive learning experiences with real-time assessment capabilities.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"],
      // github: "https://github.com/AmmarAlzureiqi/",
      progress: 45,
    },
    {
      title: "optimyze",
      description: "AI-powered application that analyzes job descriptions, customizes resumes and cover letters based on user profiles, and generates professionally formatted PDF documents. Features profile management, intelligent job requirement analysis, and document templating system.",
      tech: ["Django", "LLMs", "Langchain", "Prompt Engineering", "NLP"],
      github: "https://github.com/AmmarAlzureiqi/optimyze",
      demo: "https://zyumn-ai.vercel.app/",
      progress: 5
    }
  ]

  const projects = [
    {
      title: "Hirestack",
      description:
        "A scalable, serverless job aggregation platform that processes real-time data from multiple job boards and provides intelligent job recommendations using machine learning.",
      tech: ["Python", "Django", "Next.js", "AWS", "DynamoDB", "Machine Learning"],
      github: "https://github.com/AmmarAlzureiqi/Hirestack",
      demo: "https://hirestackjobs.vercel.app/",
      details: [
        "Implemented serverless architecture using AWS Lambda and API Gateway",
        "Designed and optimized DynamoDB schema for efficient querying",
        "Developed machine learning models for personalized job recommendations",
        "Integrated with multiple job board APIs for real-time data aggregation",
        "Implemented user authentication and profile management features",
      ],
      type: "Full-Stack Web Application",
      achievements: [
        "Reduced infrastructure costs by 40% through serverless architecture",
        "Improved job matching accuracy significantly by using ML algorithms",
      ],
    },
    {
      title: "RetailPulse",
      description:
        "An IoT-based People Counter application using computer vision for accurate real-time customer tracking in retail environments, providing actionable insights for store optimization.",
      tech: ["Python", "OpenCV", "FastAPI", "Docker", "PyTorch", "IoT"],
      github: "https://github.com/AmmarAlzureiqi/CustomerTrafficAnalysis",
      details: [
        "Developed computer vision algorithms for accurate people counting",
        "Implemented real-time data processing pipeline using FastAPI",
        "Designed and built responsive dashboard for visualizing foot traffic data",
        "Integrated with IoT devices for seamless data collection",
        "Containerized application using Docker for easy deployment",
      ],
      type: "Computer Vision & IoT Application",
      achievements: [
        "Achieved 95% accuracy in people counting",
        "Reduced manual counting labor",
        "Provided actionable insights leading to 15% increase in store efficiency",
      ],
    },
    {
      title: "Mood of Music",
      description: "A web application that generates personalized Spotify playlists from environment images using AI for mood detection and song recommendations",
      tech: ["Python", "Flask", "PyTorch", "Spotify API", "OpenAI API", "PostgreSQL", "Docker", "Render.com"],
      github: "https://github.com/AmmarAlzureiqi/MoodofMusic",
      demo: "https://moodofmusic.onrender.com/",
      details: [
        "Implemented image analysis using PyTorch to extract emotional parameters from uploaded images",
        "Integrated OpenAI API for image description and playlist generation based on detected moods",
        "Developed Spotify API integration for playlist creation and management",
        "Built user authentication system with Spotify OAuth",
        "Implemented database storage for user accounts and playlist details using PostgreSQL"
      ],
      type: "AI/ML Web Application",
      achievements: [
        "Created dual recommendation system using both image analysis and user's top artists",
        "Implemented containerized deployment with Docker supporting both PostgreSQL and MySQL",
        "Developed responsive web interface for seamless playlist embedding and playback"
      ]
    },
    {
      title: "CryoCast: Long-Term Prediction Framework",
      description: "An AI forecasting system that 'freezes' current trends and extrapolates them far into the future with comprehensive uncertainty quantification.",
      tech: ["Python", "TensorFlow", "PyTorch", "Pandas", "Matplotlib", "Streamlit"],
      github: "https://github.com/AmmarAlzureiqi/cryocast",
      details: [
        "Architected a machine learning framework for long-range forecasting that captures trend dynamics and quantifies prediction uncertainty across multiple time horizons",
        "Implemented ensemble methods combining statistical time-series models with deep learning approaches to improve reliability of extended predictions",
        "Designed a visualization system that transparently communicates confidence intervals and probability distributions as forecasts extend further into the future",
        "Incorporated multiple data sources to enhance prediction accuracy and provide contextual insights"      ],
      type: "AI/ML Application",
      achievements: [
        "Demonstrated improved forecast consistency compared to standard time-series models",
        "Created visualization tools that effectively communicate prediction uncertainty",
        "Implemented a modular architecture that supports multiple forecasting approaches"
      ]
    },
    // {
    //   title: "AI Image Generator",
    //   description:
    //     "An AI-powered image generation platform using DALL-E API, featuring prompt engineering and image manipulation capabilities.",
    //   tech: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
    //   github: "https://github.com/AmmarAlzureiqi/ai-image-generator",
    //   details: [
    //     "Integrated OpenAI's DALL-E API for AI-powered image generation",
    //     "Developed prompt engineering interface for optimized image generation",
    //     "Implemented image manipulation features using canvas API",
    //     "Designed and built gallery for showcasing generated images",
    //     "Implemented user accounts and image saving functionality",
    //   ],
    //   role: "Full-stack Developer",
    //   achievements: [
    //     "Created an intuitive UI resulting in 30% increase in user engagement",
    //     "Optimized API calls to reduce costs by 25%",
    //     "Implemented efficient image storage reducing storage costs by 40%",
    //   ],
    // },
    // {
    //   title: "Task Management System",
    //   description:
    //     "A comprehensive task management system with real-time updates, team collaboration features, and automated task prioritization.",
    //   tech: ["React", "Firebase", "Material-UI", "Redux"],
    //   github: "https://github.com/AmmarAlzureiqi/task-management",
    //   details: [
    //     "Implemented real-time updates using Firebase Realtime Database",
    //     "Developed team collaboration features including task assignment and comments",
    //     "Designed and implemented automated task prioritization algorithm",
    //     "Built responsive UI using Material-UI components",
    //     "Implemented state management using Redux for improved performance",
    //   ],
    //   role: "Frontend Developer",
    //   achievements: [
    //     "Increased team productivity by 35% through intuitive task management",
    //     "Reduced task completion time by 20% with automated prioritization",
    //     "Achieved 98% positive user feedback on UI/UX design",
    //   ],
    // },
  ]

  return (
    <div className="space-y-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground text-lg mb-6">
          A collection of my recent work in software development and data science.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Currently in Progress</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {inProgressProjects.map((project, index) => (
            <InProgressProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              progress={project.progress}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Completed Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto [&>*]:h-[350px]">
        {projects.map((project, index) => (
          <DynamicProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
            details={project.details}
            type={project.type}
            achievements={project.achievements}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

