import { ArrowDown, Database, Code2 } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark bg-grid bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-radial" />

      <div className="relative section grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <br />
            <span className="text-primary">Thembinkosi</span>{" "}
            <span className="text-primary">Thwala</span>
          </h1>

          <p className="mt-6 text-xl text-muted">
            Full Stack Developer & Data Analyst
          </p>

          <p className="mt-6 max-w-xl text-muted leading-relaxed">
            Transforming data into insights and building scalable solutions
            with cutting-edge technologies. Specializing in full-stack
            development, data analysis, and enterprise applications.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-primary text-black font-medium shadow-glow hover:scale-105 transition">
              Let's Connect
            </button>
            <button className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition">
              View My Work
            </button>
          </div>

          <div className="mt-16 flex items-center gap-2 text-muted">
            Scroll to explore <ArrowDown size={18} />
          </div>
        </div>

        {/* RIGHT - PROFILE */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl" />

          {/* Profile Ring */}
          <div className="relative w-72 h-72 rounded-full border-4 border-primary p-2">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />

            {/* Floating Icons */}
            <div className="absolute -right-6 top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black shadow-glow">
              <Code2 size={20} />
            </div>

            <div className="absolute -left-6 bottom-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black shadow-glow">
              <Database size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}