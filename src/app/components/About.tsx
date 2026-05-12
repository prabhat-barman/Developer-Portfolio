import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FiCode, FiZap, FiTarget } from 'react-icons/fi';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <FiCode className="text-2xl" />,
      title: '4+ Years Experience',
      description: 'Building production-ready applications',
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: 'Performance Focused',
      description: 'Optimized applications by 40%',
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: 'Code Quality',
      description: 'Reduced duplicate code by 30%',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-2xl opacity-20" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate <span className="text-blue-400 font-semibold">Frontend Software Engineer</span> with
                  over 4 years of experience specializing in <span className="text-purple-400 font-semibold">React.js</span> and{' '}
                  <span className="text-pink-400 font-semibold">React Native</span> development.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I've worked across diverse industries including <span className="text-blue-400">Automotive</span>,{' '}
                  <span className="text-purple-400">Healthcare</span>, and{' '}
                  <span className="text-pink-400">Enterprise applications</span>, delivering scalable and
                  high-performance solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My expertise lies in building reusable component architectures, performance optimization,
                  and creating responsive, accessible user interfaces that provide exceptional user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6
                                hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
