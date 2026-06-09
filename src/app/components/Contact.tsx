import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setErrorMessage('Email service not configured. Please set EmailJS env variables.');
      return;
    }

    if (!formRef.current) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      label: 'Email',
      value: 'Prabhatbarman98@gmail.com',
      link: 'mailto:Prabhatbarman98@gmail.com',
    },
    {
      icon: <FiPhone className="text-2xl" />,
      label: 'Phone',
      value: '+91 7879029044',
      link: 'tel:+917879029044',
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      label: 'Location',
      value: 'Bhopal, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4
                                    hover:border-blue-500/50 transition-all duration-300">
                        {item.link ? (
                          <a href={item.link} className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">{item.label}</p>
                              <p className="text-white font-medium">{item.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">{item.label}</p>
                              <p className="text-white font-medium">{item.value}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/prabhat-barman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                           flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                           flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="to_name" value="Prabhat" />
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white
                               focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white
                               focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={status === 'sending'}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white
                               focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium
                             hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2
                             disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    {status === 'sending' ? (
                      <>
                        <FiLoader className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
                      >
                        <FiCheckCircle className="text-xl flex-shrink-0" />
                        <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                      >
                        <FiAlertCircle className="text-xl flex-shrink-0" />
                        <span className="text-sm">{errorMessage || 'Something went wrong. Please try again or email me directly.'}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
