'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Target, Users, Zap, Star } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about fitness and helping you achieve your goals with dedication and enthusiasm.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from our equipment to our training programs.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build a supportive community where everyone feels welcome and motivated to succeed.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We constantly innovate our methods and facilities to provide the best fitness experience.',
  },
];

const milestones = [
  { year: '2015', event: 'FitZone founded with a vision to transform lives through fitness' },
  { year: '2017', event: 'Expanded to 5,000 sq ft facility with state-of-the-art equipment' },
  { year: '2019', event: 'Introduced group fitness classes and personal training programs' },
  { year: '2021', event: 'Reached 10,000+ members milestone and added nutrition counseling' },
  { year: '2023', event: 'Launched 24/7 access and virtual training options' },
  { year: '2024', event: 'Celebrating 15,000+ transformed lives and counting!' },
];

const achievements = [
  { icon: Award, title: 'Best Gym Award', subtitle: '2023 Fitness Excellence' },
  { icon: Star, title: '4.9/5 Rating', subtitle: 'Google Reviews' },
  { icon: Users, title: '15K+ Members', subtitle: 'Active Community' },
  { icon: Zap, title: '50+ Classes', subtitle: 'Weekly Programs' },
];

export default function About() {
  return (
    <main className="min-h-screen bg-dark-950">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bebas gradient-text mb-6">
              ABOUT FITZONE
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              More than just a gym - we're a community dedicated to transforming lives 
              through fitness, nutrition, and unwavering support.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="FitZone Gym Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Founded in 2015 by fitness enthusiasts Maria Rodriguez and David Chen, 
                  FitZone began as a small neighborhood gym with a big dream: to create 
                  a space where everyone could feel comfortable on their fitness journey.
                </p>
                <p>
                  What started with just 500 square feet and basic equipment has grown 
                  into a 10,000 square foot state-of-the-art facility serving over 15,000 
                  members. But our core mission remains the same - to provide exceptional 
                  fitness experiences that transform lives.
                </p>
                <p>
                  Today, FitZone is more than a gym; it's a community where friendships 
                  are forged, goals are achieved, and lives are transformed every single day.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bebas text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-white/90">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              OUR VALUES
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These core values guide everything we do at FitZone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass p-8 rounded-3xl text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bebas gradient-text mb-4">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              ACHIEVEMENTS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-primary p-6 rounded-2xl w-fit mx-auto mb-4">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bebas gradient-text mb-2">{achievement.title}</h3>
                <p className="text-white/60">{achievement.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 