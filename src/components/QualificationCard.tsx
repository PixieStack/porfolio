import { GraduationCap, Award } from "lucide-react";
import type { Qualification } from "../data/education";

export default function QualificationCard({ item }: { item: Qualification }) {
  const Icon = item.type === "Education" ? GraduationCap : Award;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-pink-500 flex items-center justify-center text-white">
          <Icon size={22} />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">
            {item.title}
          </h3>
          <p className="text-purple font-medium">{item.institution}</p>

          {item.description && (
            <p className="mt-2 text-gray-600">{item.description}</p>
          )}

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">{item.year}</span>
            <span className="px-3 py-1 text-xs rounded-full bg-purple/10 text-purple">
              {item.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}