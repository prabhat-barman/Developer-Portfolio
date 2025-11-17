import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Counter key={stat.label} stat={stat} delay={index * 0.2} />
      ))}
    </div>
  );
}

function Counter({ stat, delay }: { stat: Stat; delay: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-white mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-white/90">{stat.label}</p>
    </motion.div>
  );
}