import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, Code, Sparkles, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { TypewriterText } from './TypewriterText';
import { PERSONAL_INFO, HERO } from '../constants/portfolio-data';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Add your resume PDF link here
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-blue-600 tracking-wider uppercase"
                >
                  {HERO.greeting}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
                >
                  {PERSONAL_INFO.name}
                </motion.h1>
                <h2 className="text-gray-600 min-h-[2.5rem]">
                  <TypewriterText texts={HERO.roles} />
                </h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 max-w-lg text-lg leading-relaxed"
              >
                {HERO.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                  Explore Projects
                </Button>
                <Button variant="outline" size="lg" className="border-2 hover:border-blue-600 hover:text-blue-600 shadow-md" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:shadow-lg transition-shadow"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-lg transition-shadow"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:shadow-lg transition-shadow"
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-3 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white hover:shadow-lg transition-shadow"
                  title="Phone"
                >
                  <Phone className="h-5 w-5" />
                </motion.a>
              </motion.div>

              {/* Contact Info Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200">
                  <Code className="h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">{PERSONAL_INFO.experience} Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzYzMzA5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating icons */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-xl"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <Sparkles className="h-6 w-6 text-white" />
            </motion.div>
            
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}