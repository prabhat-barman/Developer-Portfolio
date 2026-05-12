import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}