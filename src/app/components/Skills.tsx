import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiBootstrap, SiJest } from 'react-icons/si';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95 },
        { name: 'React Native', icon: <FaReact />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
        { name: 'Redux', icon: <SiRedux />, level: 85 },
      ],
    },
    {
      title: 'UI Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
        { name: 'SCSS', icon: <FaSass />, level: 85 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
        { name: 'REST APIs', icon: <FaNodeJs />, level: 90 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Jest', icon: <SiJest />, level: 80 },
        { name: 'WebSockets', icon: <FaNodeJs />, level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full
                              hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {category.title}
                  </h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl text-blue-400 group-hover:text-purple-400 transition-colors">
                              {skill.icon}
                            </div>
                            <span className="font-medium text-gray-200">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>

                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
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
