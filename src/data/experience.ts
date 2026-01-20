export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    role: "Java Reactive Intern",
    company: "Zensar",
    period: "July 2025 - Present",
    description:
      "Gained hands-on experience in Java, C#, and .NET development.",
    achievements: [
      "Completed the W3Schools Java Professional Certification",
      "Learned DevOps practices, including version control (Git) and CI/CD fundamentals",
      "Built foundational knowledge in databases and SQL for application development",
      "Prepared for Work Integrated Learning (WIL) to apply technical and professional skills in real-world projects",
    ],
    technologies: ["Java", "C#", ".NET", "Git", "SQL", "DevOps"],
  },
  {
    role: "Junior Full Stack Developer",
    company: "AgrigateOne",
    period: "February 2024 - October 2024",
    description:
      "Developed and maintained scalable backend services using Ruby on Rails and Python.",
    technologies: ["Ruby on Rails", "Python", "PostgreSQL", "AWS", "Agile"],
  },
  {
    role: "Graduate Cloud & DevOps Engineer",
    company: "Disraptor",
    period: "November 2022 - March 2023",
    description:
      "Completed training and achieved qualifications in AWS cloud technologies.",
    achievements: [
      "Assisted with web development tasks and explored solutions architecture concepts",
      "Participated in simulated cloud migration and workload architecture reviews as part of coursework",
      "Gained hands-on experience with AWS cloud services and best practices",
    ],
    technologies: [
      "AWS",
      "Cloud Architecture",
      "DevOps",
      "Web Development",
    ],
  },
];