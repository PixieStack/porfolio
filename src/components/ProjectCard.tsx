import React from "react";

export default function ProjectCard({ project, reversed }: any) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}> 
      {/* Image */}
      <div className="relative">
        <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-dark to-black shadow-glow overflow-hidden flex items-center justify-center">
          {/* if a project.image exists, show it; otherwise show category badge */}
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-xl bg-primary flex items-center justify-center text-black font-bold text-lg">
                {project.category}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900">
        <span className="text-sm text-primary font-medium">{project.category}</span>
        <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
        <p className="mt-4 text-gray-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies?.map((t: string) => (
            <span key={t} className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
} 
