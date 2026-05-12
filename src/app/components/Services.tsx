import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FiCode, FiSmartphone, FiLayout, FiZap, FiLink, FiTrendingUp } from 'react-icons/fi';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <FiCode className="text-4xl" />,
      title: 'Frontend Web Development',
      description: 'Building modern, responsive web applications with clean code and best practices.',
      features: ['Single Page Applications', 'Progressive Web Apps', 'Cross-browser Compatibility'],
    },
    {
      icon: <FiCode className="text-4xl" />,
      title: 'React.js Development',
      description: 'Expert React.js development with hooks, context, and modern state management.',
      features: ['Component Architecture', 'State Management', 'Code Splitting'],
    },
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: 'React Native App Development',
      description: 'Cross-platform mobile app development for iOS and Android with React Native.',
      features: ['Native Performance', 'Cross-platform Code', 'App Store Deployment'],
    },
    {
      icon: <FiLayout className="text-4xl" />,
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect implementation of designs with attention to detail and accessibility.',
      features: ['Responsive Design', 'Accessibility (WCAG)', 'Design Systems'],
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: 'Performance Optimization',
      description: 'Optimizing application performance for faster load times and better user experience.',
      features: ['Code Optimization', 'Lazy Loading', 'Bundle Size Reduction'],
    },
    {
      icon: <FiLink className="text-4xl" />,
      title: 'API Integration',
      description: 'Seamless integration with REST APIs, GraphQL, and real-time WebSocket connections.',
      features: ['RESTful APIs', 'WebSocket Integration', 'Data Management'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full
                              hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white
                                  group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <FiTrendingUp className="text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
