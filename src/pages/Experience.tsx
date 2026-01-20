import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="section bg-gray-50 text-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="mt-4 text-gray-600">
          A journey through roles that shaped my expertise and technical
          capabilities
        </p>
      </div>

      <div className="mt-16 max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-purple to-pink-500" />

        <div className="space-y-12">
          {experience.map((item) => (
            <TimelineItem key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}