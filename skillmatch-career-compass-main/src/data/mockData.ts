
import { Resource } from "@/components/resources/ResourceCard";
import { Career } from "@/components/careers/CareerCard";

export const careerPaths: Career[] = [
  {
    id: "1",
    title: "Software Developer",
    description: "Design, build, and maintain software applications across various platforms. Work with programming languages, frameworks, and development methodologies.",
    matchPercentage: 92,
    salary: "$105,000 - $150,000",
    growth: "22% (Much faster than average)",
    skills: ["JavaScript", "Python", "React", "Node.js", "Problem Solving"],
    icon: "👨‍💻"
  },
  {
    id: "2",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions. Apply statistics, machine learning, and visualization techniques.",
    matchPercentage: 85,
    salary: "$100,000 - $140,000",
    growth: "36% (Much faster than average)",
    skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
    icon: "📊"
  },
  {
    id: "3",
    title: "UX/UI Designer",
    description: "Create intuitive, engaging digital experiences. Combine visual design, user research, and interface architecture to improve user satisfaction.",
    matchPercentage: 78,
    salary: "$85,000 - $130,000",
    growth: "8% (Average)",
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Empathy"],
    icon: "🎨"
  },
  {
    id: "4",
    title: "Project Manager",
    description: "Lead teams and oversee projects from initiation to completion. Balance scope, resources, time, and quality to achieve business objectives.",
    matchPercentage: 65,
    salary: "$90,000 - $140,000",
    growth: "5% (Average)",
    skills: ["Leadership", "Risk Management", "Budgeting", "Communication", "Agile"],
    icon: "📋"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    description: "Bridge development and operations to streamline deployment and infrastructure management. Implement automation and ensure system reliability.",
    matchPercentage: 88,
    salary: "$110,000 - $160,000",
    growth: "22% (Much faster than average)",
    skills: ["CI/CD", "Cloud Platforms", "Docker", "Kubernetes", "Scripting"],
    icon: "⚙️"
  },
  {
    id: "6",
    title: "Cybersecurity Analyst",
    description: "Protect organizations from digital threats and vulnerabilities. Monitor, investigate, and respond to security incidents and implement protective measures.",
    matchPercentage: 72,
    salary: "$95,000 - $150,000",
    growth: "35% (Much faster than average)",
    skills: ["Network Security", "Threat Detection", "Risk Assessment", "Encryption", "Security Protocols"],
    icon: "🔒"
  }
];

export const learningResources: Resource[] = [
  {
    id: "1",
    title: "Modern JavaScript for Beginners",
    provider: "Udemy",
    type: "Course",
    level: "Beginner",
    duration: "20 hours",
    rating: 4.8,
    url: "https://example.com/course1",
    tags: ["JavaScript", "Web Development", "Frontend"],
    description: "A comprehensive course for learning modern JavaScript from the ground up, with practical projects and exercises."
  },
  {
    id: "2",
    title: "Data Science Specialization",
    provider: "Coursera",
    type: "Specialization",
    level: "Intermediate",
    duration: "3 months",
    rating: 4.6,
    url: "https://example.com/course2",
    tags: ["Python", "Data Science", "Machine Learning", "Statistics"],
    description: "A series of courses covering the foundations of data science, machine learning algorithms, and practical applications."
  },
  {
    id: "3",
    title: "UX Design Principles",
    provider: "Interaction Design Foundation",
    type: "Course",
    level: "Beginner",
    duration: "12 hours",
    rating: 4.5,
    url: "https://example.com/course3",
    tags: ["UX Design", "UI", "User Research", "Wireframing"],
    description: "Learn the fundamental principles of user experience design and how to create user-centered digital products."
  },
  {
    id: "4",
    title: "Agile Project Management",
    provider: "PMI",
    type: "Certification",
    level: "Intermediate",
    duration: "Self-paced",
    rating: 4.7,
    url: "https://example.com/course4",
    tags: ["Project Management", "Agile", "Scrum", "Leadership"],
    description: "Prepare for the PMI-ACP certification while learning agile methodologies, frameworks, and best practices."
  },
  {
    id: "5",
    title: "Complete DevOps Bootcamp",
    provider: "A Cloud Guru",
    type: "Bootcamp",
    level: "Advanced",
    duration: "40 hours",
    rating: 4.9,
    url: "https://example.com/course5",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "AWS"],
    description: "Master the DevOps toolchain and practices through hands-on projects deploying real-world applications."
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    provider: "edX",
    type: "Course",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.4,
    url: "https://example.com/course6",
    tags: ["Cybersecurity", "Network Security", "Risk Management"],
    description: "Introduction to key concepts in cybersecurity, common threats, and basic protective measures for organizations."
  },
  {
    id: "7",
    title: "Advanced React & Redux",
    provider: "Frontend Masters",
    type: "Workshop",
    level: "Advanced",
    duration: "15 hours",
    rating: 4.9,
    url: "https://example.com/course7",
    tags: ["React", "Redux", "JavaScript", "Frontend"],
    description: "Deep dive into advanced React patterns, state management with Redux, and performance optimization techniques."
  },
  {
    id: "8",
    title: "SQL for Data Analysis",
    provider: "DataCamp",
    type: "Course",
    level: "Intermediate",
    duration: "10 hours",
    rating: 4.5,
    url: "https://example.com/course8",
    tags: ["SQL", "Data Analysis", "Databases"],
    description: "Learn how to write efficient SQL queries to extract insights from relational databases for data analysis."
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    content: "SkillMatch helped me identify my strengths in backend development and suggested learning resources that perfectly matched my career goals. Within 6 months, I transitioned from junior to senior developer!",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "UX Designer",
    company: "DesignHub",
    content: "The portfolio builder feature was a game-changer. I created a professional portfolio that highlighted my UX work effectively, which helped me land interviews at three top design agencies.",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Jessica Williams",
    role: "Data Analyst",
    company: "DataDrive",
    content: "As someone transitioning careers, SkillMatch gave me clarity on which data skills to focus on. The personalized learning path made the journey less overwhelming and more strategic.",
    image: "/placeholder.svg"
  }
];
