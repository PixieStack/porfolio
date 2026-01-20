import {
  Code2,
  Layers,
  Database,
  Cloud,
  BarChart3,
  Wrench,
} from "lucide-react";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark bg-grid bg-[size:40px_40px]" />

      <div className="relative section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary uppercase tracking-widest text-sm">
            Technical Expertise
          </span>
          <h2 className="mt-4 text-5xl font-extrabold">
            Skills & Technologies
          </h2>
          <p className="mt-6 text-muted">
            A comprehensive toolkit for building modern applications and
            analyzing complex data
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <SkillCard
            title="Programming Languages"
            icon={<Code2 size={22} />}
            items={skills.programming}
          />

          <SkillCard
            title="Frameworks & Libraries"
            icon={<Layers size={22} />}
            items={skills.frameworks}
          />

          <SkillCard
            title="Databases"
            icon={<Database size={22} />}
            items={skills.databases}
          />

          <SkillCard
            title="Cloud & DevOps"
            icon={<Cloud size={22} />}
            items={skills.cloud}
          />

          <SkillCard
            title="Data Analysis"
            icon={<BarChart3 size={22} />}
            items={skills.analysis}
          />

          <SkillCard
            title="Engineering Practices"
            icon={<Wrench size={22} />}
            items={skills.practices}
          />
        </div>

        {/* Stats */}
        <div className="mt-20 flex justify-center">
          <div className="card px-16 py-8 flex gap-16">
            <Stat value="9+" label="Programming Languages" />
            <Stat value="11+" label="Frameworks & Tools" />
            <Stat value="5+" label="Cloud Platforms" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-primary">{value}</div>
      <div className="mt-2 text-muted">{label}</div>
    </div>
  );
}