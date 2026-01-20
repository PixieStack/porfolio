export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-pink-500 flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-bold text-lg">Thembinkosi</span>
          </div>
          <p className="text-gray-600">
            Crafting exceptional digital experiences with modern technologies.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Email Me</li>
            <li>Call Me</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <div className="flex gap-4 text-gray-600">
            <span>in</span>
            <span>GH</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-6">
        <span>
          © 2025 Thembinkosi Eden Thwala. All rights reserved.
        </span>
        <span>
          Built with React, Tailwind CSS & TypeScript ✨
        </span>
      </div>
    </footer>
  );
}