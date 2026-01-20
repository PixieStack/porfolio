export interface Project {
  category: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    category: "EdTech",
    title: "Enrollify – School Application Platform",
    period: "In Development - MVP Target: 1 Month",
    description:
      "A comprehensive EdTech solution designed to streamline and digitize the school application process for South African primary and high schools, addressing the fragmented and paper-based admission system. The platform enables parents to submit applications online, track progress in real-time, and facilitates seamless learner transfers across provinces.",
    achievements: [
      "Targeting 80% reduction in paper-based applications within the first year",
      "Partnering with 50+ schools across multiple provinces for nationwide rollout",
      "Aligned with Department of Basic Education digital transformation goals",
      "Secure document uploads, real-time application tracking, and mobile-friendly design",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "JWT",
    ],
  },
  {
    category: "Legal Tech",
    title: "Thwala Attorneys Web Application",
    period: "March 2025 - June 2025",
    description:
      "Developed a full-stack legal case and client management system with MVC architecture and Entity Framework Core for reliable data persistence.",
    achievements: [
      "Automated database migrations, SMTP client notifications, and application logging",
      "Fully containerized with Docker and Docker Compose, improving deployment speed and scalability",
      "Enabled secure case management workflows and role-based access for law firm staff",
    ],
    technologies: [
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Docker",
      "SMTP",
    ],
  },
  {
    category: "Productivity",
    title: "Task Management Application",
    period: "December 2024 - March 2025",
    description:
      "Built a full-stack productivity platform with JWT authentication, user profile management, and email notifications.",
    achievements: [
      "Implemented task CRUD operations, prioritization, tagging, status tracking, and time tracking",
      "Designed a personal productivity dashboard with analytics and overdue task alerts",
      "Delivered a responsive, mobile-friendly UI/UX with dark/light mode",
    ],
    technologies: [
      "Angular 17+",
      "TypeScript",
      "SCSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "JWT",
    ],
  },
  {
    category: "Healthcare",
    title: "Primary Healthcare Management System",
    period: "March 2023 - November 2023",
    description:
      "Developed a full-stack healthcare management system enabling secure scheduling, patient records management, and provider interactions.",
    achievements: [
      "Implemented role-based access control and centralized patient database",
      "Built modules for registration, family planning, prenatal care, and chronic medication management",
      "Ensured security, scalability, and patient-centered functionality for underserved communities",
    ],
    technologies: [
      "ASP.NET MVC 7",
      "C#",
      "Microsoft SQL Server",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];