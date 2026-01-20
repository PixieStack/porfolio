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
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-pink-500 flex items-center justify-center text-white font-bold">T</div>
          <div className="flex flex-col leading-none">
            <span className="text-primary font-extrabold">Thembinkosi</span>
            <span className="text-muted text-xs">.dev</span>
          </div>
        </div>

        <nav className="flex gap-2 items-center">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-pill flex items-center gap-2 text-sm transition ${
                  isActive
                    ? 'bg-primary text-black shadow-glow'
                    : 'text-muted hover:text-white hover:bg-white/5'
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
