import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FiBriefcase, FiTrendingUp } from 'react-icons/fi';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Netlink Software Pvt Ltd',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise-level applications in automotive and healthcare domains.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Built reusable component library used across 5+ projects',
        'Mentored junior developers in React best practices',
        'Implemented WebSocket integration for real-time features',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Netlink Strategic Solutions',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and contributed to multiple client projects.',
      achievements: [
        'Reduced duplicate code by 30% through component refactoring',
        'Implemented authentication and authorization systems',
        'Created data visualization dashboards using Recharts',
        'Collaborated with cross-functional teams in Agile environment',
      ],
    },
    {
      title: 'Trainee Consultant',
      company: 'Netlink Strategic Solutions',
      period: '2020 - 2021',
      description: 'Started career learning React.js, JavaScript, and modern web development practices.',
      achievements: [
        'Built student management dashboard from scratch',
        'Learned and applied React hooks and state management',
        'Implemented responsive UI designs using CSS and Bootstrap',
        'Participated in code reviews and team learning sessions',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6
                                    hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                            <FiBriefcase className="text-2xl text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.period}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 text-left">{exp.description}</p>

                        <div className="space-y-2 text-left">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <FiTrendingUp className="text-green-400 mt-1 flex-shrink-0" />
                              <p className="text-gray-300 text-sm">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 z-10">
                  <div className="w-8 h-8 rounded-full bg-white" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
