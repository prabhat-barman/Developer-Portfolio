import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { EXPERIENCE } from '../constants/portfolio-data';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {EXPERIENCE.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {EXPERIENCE.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {EXPERIENCE.timeline.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                <Card className="md:ml-20 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-purple-200">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-700 mb-2">
                          <Briefcase className="h-4 w-4 text-blue-600" />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-gray-600 mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-purple-600" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-pink-600" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
