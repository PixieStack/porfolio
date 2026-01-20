import { useState } from "react";
import QualificationCard from "../components/QualificationCard";
import { qualifications } from "../data/education";

type Filter = "All" | "Certification" | "Education";

export default function Education() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? qualifications
      : qualifications.filter((q) => q.type === filter);

  return (
    <section className="section bg-gray-50 text-gray-900">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
          Qualifications
        </h2>
        <p className="mt-4 text-gray-600">
          Certifications, education, and achievements that validate my expertise
        </p>
      </div>

      {/* Filters */}
      <div className="mt-10 flex justify-center gap-4">
        {["All", "Certification", "Education"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item as Filter)}
            className={`px-6 py-2 rounded-xl font-medium transition ${
              filter === item
                ? "bg-gradient-to-r from-purple to-pink-500 text-white shadow-lg"
                : "bg-white text-gray-700 shadow hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {filtered.map((item, i) => (
          <QualificationCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}