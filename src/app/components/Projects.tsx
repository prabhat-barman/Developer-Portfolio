import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { FiGithub, FiExternalLink, FiGlobe } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

type ProjectLink = {
  label: string;
  href: string;
  icon: ReactNode;
  primary?: boolean;
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects: Array<{
    title: string;
    description: string;
    image: string;
    tags: string[];
    features: string[];
    links: ProjectLink[];
  }> = [
    {
      title: 'FLOQ — Enterprise UI System',
      description:
        'Standardized enterprise design system and reusable component framework deployed across 6+ production modules at Netlink Software. Reduced duplicate code by 30%, slashed initial load times by 35–40%, and accelerated sprint delivery by ~20%.',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop',
      tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Storybook 8', 'Radix UI', 'Design Tokens'],
      features: ['Design System', '6+ Modules', '30% Less Code', '35-40% Faster Load'],
      links: [{ label: 'Architecture', href: '#', icon: <FiExternalLink /> }],
    },
    {
      title: 'Demand Management System — B2B Vendor Portal',
      description:
        'High-throughput enterprise B2B SaaS platform streamlining vendor subcontracting, requirement allocation, candidate pipeline screening, and interview scheduling with fine-grained RBAC and real-time SLA metrics.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['React.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'RBAC Security', 'Virtual Tables'],
      features: ['Demand Workflow', 'Vendor Outsourcing', 'Candidate Tracking', 'RBAC Security'],
      links: [{ label: 'Enterprise Portal', href: '#', icon: <FiExternalLink /> }],
    },
    {
      title: 'IrisInsights Healthcare',
      description:
        'HIPAA-compliant EMR & therapy practice-management platform with clinician-designed UI for ABA, Speech, Occupational, Physical, and Mental Health therapy. Integrated scheduling, billing, real-time data capture, and a family/parent portal — all built with WCAG accessibility standards.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['React.js', 'TypeScript', 'REST APIs', 'HIPAA Vault', 'WCAG AA'],
      features: ['EMR Platform', 'HIPAA Compliance', 'Parent Portal', 'WCAG Accessibility'],
      links: [{ label: 'Website', href: 'https://irisinsights.us/', icon: <FiGlobe />, primary: true }],
    },
    {
      title: 'SiriusXM Drive Mobile Companion',
      description:
        'Cross-platform React Native connected-vehicle companion application. Features Bluetooth LE key fob proximity authentication, remote lock/unlock, engine start/stop, real-time GPS tracking, and fluid 60 FPS gesture animations powered by Reanimated 3 worklets.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      tags: ['React Native', 'TypeScript', 'Bluetooth LE', 'Reanimated 3', 'Redux Toolkit', 'iOS & Android'],
      features: ['BLE Proximity Pairing', 'Remote Vehicle Control', '60 FPS Gestures', 'Offline MMKV Caching'],
      links: [{ label: 'Mobile Architecture', href: '#', icon: <FiExternalLink /> }],
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden h-full
                              hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
                        {(() => {
                          const hasExplicitPrimary = project.links.some((l) => l.primary);
                          return project.links.map((link, linkIndex) => {
                            const isPrimary = hasExplicitPrimary ? !!link.primary : linkIndex === 0;
                            return (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 min-w-[110px] px-4 py-2 rounded-lg font-medium text-sm
                                           transition-all duration-300 flex items-center justify-center gap-2
                                           ${
                                             isPrimary
                                               ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50'
                                               : 'bg-gray-700 hover:bg-gray-600'
                                           }`}
                              >
                                {link.icon}
                                {link.label}
                              </a>
                            );
                          });
                        })()}
                      </div>
                    </div>
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
