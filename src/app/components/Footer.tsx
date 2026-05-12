import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiHeart, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Prabhat Barman
            </h3>
            <p className="text-gray-400">
              Frontend Software Engineer specializing in React.js and React Native.
              Building exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center
                         transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center
                         transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center
                         transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">prabhat.barman@example.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prabhat Barman. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <FiHeart className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                 flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50
                 transition-all duration-300 z-40"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>
    </footer>
  );
}
