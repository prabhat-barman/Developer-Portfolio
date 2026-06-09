import { motion } from 'motion/react';
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-medium mb-4"
            >
              Hi, my name is
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Prabhat Barman
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            >
              Frontend Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-xl"
            >
              Specializing in React.js & React Native with 4+ years of experience building scalable,
              high-performance applications. Passionate about creating exceptional user experiences
              and clean, maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1aCCJpRj8gakAKSMC9389F8Gzs2SHhWD2/view?usp=sharing', '_blank')}
                className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium
                         hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download Resume
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-blue-500 rounded-lg font-medium hover:bg-blue-500/10
                         transition-all duration-300 flex items-center gap-2"
              >
                <FiMail />
                Contact Me
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10
                         transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center
                         transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center
                         transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <pre className="text-sm text-gray-300">
                    <code>
{`const developer = {
  name: "Prabhat Barman",
  role: "Frontend Engineer",
  experience: "4+ years",
  skills: [
    "React.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS"
  ],
  passion: "Building amazing UIs"
};`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
