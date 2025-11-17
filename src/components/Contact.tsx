import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { PERSONAL_INFO, CONTACT } from '../constants/portfolio-data';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{CONTACT.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {CONTACT.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {CONTACT.info}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="bg-white/60 backdrop-blur-lg border-2 border-white/20 hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/60 backdrop-blur-lg border-2 border-white/20 shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required className="border-2 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="border-2 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required className="border-2 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="border-2 focus:border-blue-500"
                    />
                  </div>
                  <Button type="submit" className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}