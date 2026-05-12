import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'React JS Certification',
      issuer: 'Professional Development',
      year: '2023',
      description: 'Advanced React.js concepts including hooks, context, performance optimization, and modern patterns.',
      skills: ['React Hooks', 'State Management', 'Performance', 'Testing'],
      link: '#',
    },
    {
      title: 'Google UX Design',
      issuer: 'Google',
      year: '2022',
      description: 'User experience design principles, wireframing, prototyping, and user research methodologies.',
      skills: ['UX Design', 'Wireframing', 'Prototyping', 'User Research'],
      link: '#',
    },
    {
      title: 'Agile Scrum Certification',
      issuer: 'Scrum Alliance',
      year: '2022',
      description: 'Agile methodologies, Scrum framework, sprint planning, and team collaboration practices.',
      skills: ['Agile', 'Scrum', 'Sprint Planning', 'Team Collaboration'],
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full
                              hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center
                                  group-hover:scale-110 transition-transform duration-300">
                      <FiAward className="text-4xl text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-400 font-medium">{cert.issuer}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{cert.year}</span>
                  </div>

                  <p className="text-gray-300 mb-4 flex-1">{cert.description}</p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors font-medium"
                    >
                      View Certificate
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
