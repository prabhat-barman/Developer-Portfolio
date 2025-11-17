import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { EDUCATION, CERTIFICATIONS } from '../constants/portfolio-data';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-12">
            {EDUCATION.title}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {EDUCATION.list.map((edu, index) => (
              <motion.div
                key={`${edu.degree}-${edu.institution}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-purple-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-700 mb-3">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-600" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-purple-600" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-12">
            {CERTIFICATIONS.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CERTIFICATIONS.list.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full bg-white/60 backdrop-blur-lg hover:shadow-xl transition-all border-2 border-white/20 hover:border-purple-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-2">{cert.name}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-600">{cert.issuer}</p>
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                            {cert.year}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
