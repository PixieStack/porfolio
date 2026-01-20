export type QualificationType = "Certification" | "Education";

export interface Qualification {
  title: string;
  institution: string;
  description?: string;
  year: string;
  type: QualificationType;
}

export const qualifications: Qualification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    description: "Foundational AWS cloud knowledge and best practices",
    year: "2023",
    type: "Certification",
  },
  {
    title: "AWS Partner: Accreditation (Technical)",
    institution: "Amazon Web Services",
    description: "AWS technical partner accreditation",
    year: "2023",
    type: "Certification",
  },
  {
    title: "Cisco CCNA v7: Introduction to Networks",
    institution: "Cisco",
    description: "Network fundamentals and configuration",
    year: "2022",
    type: "Certification",
  },
  {
    title: "120-Hour TEFL Certificate",
    institution: "TEFL Institute",
    description: "Teaching English as a Foreign Language certification",
    year: "2021",
    type: "Certification",
  },
  {
    title: "Certified Java Developer",
    institution: "W3Schools",
    description: "Professional Java development certification",
    year: "2025",
    type: "Certification",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    institution: "Cisco",
    description: "Cybersecurity fundamentals and best practices",
    year: "2022",
    type: "Certification",
  },
  {
    title: "Diploma in Information Technology - Software Development",
    institution: "Nelson Mandela University",
    description: "Graduated Cum Laude",
    year: "2021 - 2023",
    type: "Education",
  },
  {
    title: "Higher Certificate in Information Technology - Support Services",
    institution: "Nelson Mandela University",
    description: "Graduated Cum Laude",
    year: "2020",
    type: "Education",
  },
];