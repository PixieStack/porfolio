export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black/70 to-transparent text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-pink-500 flex items-center justify-center text-white font-bold">T</div>
            <span className="font-bold text-lg">Thembinkosi</span>
          </div>
          <p className="text-gray-400">Crafting exceptional digital experiences with modern technologies.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email Me</li>
            <li>Call Me</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <div className="flex gap-4 text-gray-400">
            <a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10">in</a>
            <a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10">GH</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-sm text-gray-500">
        <span>© 2026 Thembinkosi Eden Thwala. All rights reserved.</span>
      </div>
    </footer>
  );
} 
