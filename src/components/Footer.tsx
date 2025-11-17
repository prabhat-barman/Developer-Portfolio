import { Github, Linkedin, Mail, Heart, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolio-data';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">{"<"}</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            <span className="text-blue-400">{"/>"}</span>
          </div>

          <div className="flex gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              title="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by {PERSONAL_INFO.name} © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}