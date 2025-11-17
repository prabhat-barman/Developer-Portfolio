import { motion } from 'motion/react';
import { Code2, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { StatsCounter } from './StatsCounter';
import { ABOUT } from '../constants/portfolio-data';

export function About() {
  const iconMap = {
    "Performance Optimization": Zap,
    "Component Architecture": Code2,
    "Real-time Features": Palette,
  };

  const features = ABOUT.highlights.map(highlight => ({
    icon: iconMap[highlight.title as keyof typeof iconMap] || Code2,
    title: highlight.title,
    description: highlight.description,
  }));

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{ABOUT.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {ABOUT.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {ABOUT.industries.map((industry) => (
              <span key={industry} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md">
                {industry}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 group bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-gradient-to-r hover:border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:shadow-xl transition-shadow"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl"
        >
          <StatsCounter stats={ABOUT.stats} />
        </motion.div>
      </div>
    </section>
  );
}