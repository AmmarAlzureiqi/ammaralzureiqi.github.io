import { DynamicProjectCard } from "../../components/dynamic-project-card"


export default function Projects() {
  const projects = [
    {
      title: "Hirestack",
      description:
        "A scalable, serverless job aggregation platform that processes real-time data from multiple job boards and provides intelligent job recommendations using machine learning.",
      tech: ["Python", "Django", "Next.js", "AWS", "DynamoDB", "Machine Learning"],
      github: "https://github.com/AmmarAlzureiqi/Hirestack",
      demo: "https://hirestack.com",
      details: [
        "Implemented serverless architecture using AWS Lambda and API Gateway",
        "Designed and optimized DynamoDB schema for efficient querying",
        "Developed machine learning models for personalized job recommendations",
        "Integrated with multiple job board APIs for real-time data aggregation",
        "Implemented user authentication and profile management features",
      ],
      role: "Lead Developer",
      achievements: [
        "Reduced infrastructure costs by 40% through serverless architecture",
        "Improved job matching accuracy by 25% using ML algorithms",
        "Scaled to handle 1M+ daily active users",
      ],
    },
    {
      title: "RetailPulse",
      description:
        "An IoT-based People Counter application using computer vision for accurate real-time customer tracking in retail environments, providing actionable insights for store optimization.",
      tech: ["Python", "OpenCV", "FastAPI", "Docker", "PyTorch", "IoT"],
      github: "https://github.com/AmmarAlzureiqi/RetailPulse",
      details: [
        "Developed computer vision algorithms for accurate people counting",
        "Implemented real-time data processing pipeline using FastAPI",
        "Designed and built responsive dashboard for visualizing foot traffic data",
        "Integrated with IoT devices for seamless data collection",
        "Containerized application using Docker for easy deployment",
      ],
      role: "Full-stack Developer & ML Engineer",
      achievements: [
        "Achieved 95% accuracy in people counting",
        "Reduced manual counting labor by 100%",
        "Provided actionable insights leading to 15% increase in store efficiency",
      ],
    },
    {
      title: "Spotify-Clone",
      description:
        "A full-stack Spotify clone featuring user authentication, playlist management, and real-time music playback. Implements Stripe integration for premium subscriptions.",
      tech: ["Next.js", "React", "Supabase", "Stripe", "Tailwind CSS"],
      github: "https://github.com/AmmarAlzureiqi/spotify-clone",
      details: [
        "Implemented user authentication and authorization using Supabase",
        "Developed real-time music playback functionality",
        "Integrated Stripe for handling premium subscription payments",
        "Designed and implemented responsive UI using Tailwind CSS",
        "Implemented playlist management and sharing features",
      ],
      role: "Full-stack Developer",
      achievements: [
        "Developed a fully functional Spotify clone with 90% feature parity",
        "Implemented seamless audio streaming with <50ms latency",
        "Achieved 98% test coverage using Jest and React Testing Library",
      ],
    },
    {
      title: "E-Commerce API",
      description:
        "A robust REST API for e-commerce platforms with features like product management, user authentication, order processing, and payment integration.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      github: "https://github.com/AmmarAlzureiqi/e-commerce-api",
      details: [
        "Designed and implemented RESTful API endpoints for e-commerce functionality",
        "Implemented user authentication and authorization using JWT",
        "Integrated Stripe for secure payment processing",
        "Developed order management and inventory tracking features",
        "Implemented caching strategies for improved performance",
      ],
      role: "Backend Developer",
      achievements: [
        "Reduced API response time by 40% through efficient database indexing",
        "Implemented rate limiting to prevent API abuse",
        "Achieved 99.9% uptime through robust error handling and logging",
      ],
    },
    {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation platform using DALL-E API, featuring prompt engineering and image manipulation capabilities.",
      tech: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/AmmarAlzureiqi/ai-image-generator",
      details: [
        "Integrated OpenAI's DALL-E API for AI-powered image generation",
        "Developed prompt engineering interface for optimized image generation",
        "Implemented image manipulation features using canvas API",
        "Designed and built gallery for showcasing generated images",
        "Implemented user accounts and image saving functionality",
      ],
      role: "Full-stack Developer",
      achievements: [
        "Created an intuitive UI resulting in 30% increase in user engagement",
        "Optimized API calls to reduce costs by 25%",
        "Implemented efficient image storage reducing storage costs by 40%",
      ],
    },
    {
      title: "Task Management System",
      description:
        "A comprehensive task management system with real-time updates, team collaboration features, and automated task prioritization.",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/AmmarAlzureiqi/task-management",
      details: [
        "Implemented real-time updates using Firebase Realtime Database",
        "Developed team collaboration features including task assignment and comments",
        "Designed and implemented automated task prioritization algorithm",
        "Built responsive UI using Material-UI components",
        "Implemented state management using Redux for improved performance",
      ],
      role: "Frontend Developer",
      achievements: [
        "Increased team productivity by 35% through intuitive task management",
        "Reduced task completion time by 20% with automated prioritization",
        "Achieved 98% positive user feedback on UI/UX design",
      ],
    },
  ]

  return (
    <div className="space-y-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground text-lg mb-6">
          A collection of my recent work in software development and data science.
        </p>
      </div>
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
            role={project.role}
            achievements={project.achievements}
          />
        ))}
      </div>
    </div>
  )
}

