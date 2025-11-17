import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Sparkles } from 'lucide-react';
import { SKILLS } from '../constants/portfolio-data';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">{SKILLS.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {SKILLS.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group border border-white/20"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                    >
                      <Badge variant="secondary" className="px-4 py-2 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}