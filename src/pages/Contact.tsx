import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="section bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="mt-4 text-gray-600">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-4">
            <InfoCard
              icon={<Mail size={18} />}
              title="Email"
              value="thwalathembinkosi16@gmail.com"
            />
            <InfoCard
              icon={<Phone size={18} />}
              title="Phone"
              value="064 802 3069"
            />
            <InfoCard
              icon={<MapPin size={18} />}
              title="Location"
              value="Ennerdale, Johannesburg, 1830"
            />
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center hover:bg-gray-100"
            >
              in
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center hover:bg-gray-100"
            >
              GH
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple to-pink-500 hover:opacity-90"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}