import type { Project } from "../data/projects";
import "../data/projects";

export default function ProjectCard({
  project,
  reversed,
}: {
  project: Project;
  reversed?: boolean;
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Placeholder */}
      <div className="relative">
        <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-dark to-black shadow-glow flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-xl bg-primary flex items-center justify-center text-black font-bold">
              {project.category}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900">
        <span className="text-sm text-primary font-medium">
          {project.category}
        </span>

        <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

        <p className="mt-2 text-sm text-gray-500">{project.period}</p>

        <p className="mt-6 text-gray-700">{project.description}</p>

        <div className="mt-6">
          <h4 className="font-semibold">Key Achievements</h4>
          <ul className="mt-3 space-y-2">
            {project.achievements.map((a) => (
              <li key={a} className="flex gap-2 text-gray-700">
                <span className="text-primary">▸</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="px-5 py-2 rounded-full bg-primary text-black font-medium">
            View Code
          </button>
          <button className="px-5 py-2 rounded-full border border-primary text-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}