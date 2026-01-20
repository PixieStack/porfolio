import { NavLink } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Code,
  Briefcase,
  Trophy,
  Mail,
} from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/education", label: "Education", icon: GraduationCap },
  { to: "/skills", label: "Skills", icon: Code },
  { to: "/projects", label: "Projects", icon: Briefcase },
  { to: "/experience", label: "Experience", icon: Trophy },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/70 to-black/40 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-primary">Thembinkosi</span>
          <span className="text-white">.dev</span>
        </div>

        <nav className="flex gap-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full text-sm transition
                 ${
                   isActive
                     ? "bg-primary text-black shadow-glow"
                     : "text-muted hover:text-white hover:bg-white/5"
                 }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}