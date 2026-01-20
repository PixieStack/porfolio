import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Experience } from "../data/experience";

export default function TimelineItem({ item }: { item: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple to-pink-500 shadow-md" />

      {/* Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-left"
        >
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {item.role}
            </h3>
            <p className="text-purple font-medium">{item.company}</p>
            <p className="text-sm text-gray-500">{item.period}</p>
          </div>
          <ChevronDown
            className={`transition ${
              open ? "rotate-180 text-purple" : "text-gray-400"
            }`}
          />
        </button>

        <p className="mt-4 text-gray-700">{item.description}</p>

        {open && (
          <>
            {item.achievements && (
              <div className="mt-6">
                <h4 className="font-semibold">Key Achievements</h4>
                <ul className="mt-3 space-y-2">
                  {item.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-gray-700">
                      <span className="text-purple">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.technologies && (
              <div className="mt-6">
                <h4 className="font-semibold">Technologies Used</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-purple/10 text-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}