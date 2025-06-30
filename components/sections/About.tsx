'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Trophy, Users, Clock, Star } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

const stats = [
  { icon: Users, label: 'Members Served', value: 15000, suffix: '+' },
  { icon: Trophy, label: 'Certified Trainers', value: 45, suffix: '+' },
  { icon: Clock, label: 'Operating Hours', value: 24, suffix: '/7' },
  { icon: Star, label: 'Success Stories', value: 8500, suffix: '+' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < value) {
          const increment = Math.ceil((value - prev) / 20);
          return Math.min(prev + increment, value);
        }
        clearInterval(timer);
        return value;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl md:text-5xl font-bebas gradient-text">
      {formatNumber(count)}{suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-900/50">
      <div className="container mx-auto container-padding">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Mission Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
                ABOUT FITZONE
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded mb-8" />
            </motion.div>

            <motion.div
              className="space-y-6 text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                At FitZone, we believe fitness is more than just physical transformation—
                it's about unlocking your full potential and becoming the best version of yourself.
              </p>
              <p>
                Our state-of-the-art facility combines cutting-edge equipment with expert guidance
                from certified trainers who are passionate about your success. Whether you're
                just starting your fitness journey or you're a seasoned athlete, we have
                everything you need to achieve your goals.
              </p>
              <p>
                Join our community of like-minded individuals who support and motivate each other
                every step of the way. Your transformation starts here.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass px-6 py-3 rounded-2xl">
                <span className="text-primary-500 font-semibold">Premium Equipment</span>
              </div>
              <div className="glass px-6 py-3 rounded-2xl">
                <span className="text-primary-500 font-semibold">Expert Training</span>
              </div>
              <div className="glass px-6 py-3 rounded-2xl">
                <span className="text-primary-500 font-semibold">Community Support</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-8 rounded-3xl text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-primary p-4 rounded-2xl">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-white/60 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 