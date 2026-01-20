import type { ReactNode } from "react";

export default function SkillCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) {
  return (
    <div className="card p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-black">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}