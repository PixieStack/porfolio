import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-primary uppercase tracking-widest text-sm">
          Portfolio
        </span>
        <h2 className="mt-4 text-5xl font-extrabold">Featured Projects</h2>
        <p className="mt-6 text-gray-600">
          Delivering innovative solutions across EdTech, LegalTech, Healthcare,
          and Productivity domains
        </p>
      </div>

      <div className="mt-20 space-y-28">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}