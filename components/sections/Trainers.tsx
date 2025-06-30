'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const trainers = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    specialty: 'Strength Training',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Former competitive powerlifter specializing in strength and muscle building',
    socials: { instagram: '@alexfit', twitter: '@alexrodriguez', facebook: 'alex.fitness' },
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    specialty: 'Yoga & Pilates',
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1594824425191-60eaa21f4b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Certified yoga instructor focusing on mindfulness and flexibility',
    socials: { instagram: '@sarahyoga', twitter: '@sarahj_fit', facebook: 'sarah.yoga' },
  },
  {
    id: 3,
    name: 'Mike Thompson',
    specialty: 'HIIT & CrossFit',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'High-intensity training expert with a passion for functional fitness',
    socials: { instagram: '@mikehiit', twitter: '@mikethompson', facebook: 'mike.crossfit' },
  },
  {
    id: 4,
    name: 'Emma Davis',
    specialty: 'Dance Fitness',
    experience: '5 years',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Professional dancer turned fitness instructor making workouts fun',
    socials: { instagram: '@emmadance', twitter: '@emma_fitness', facebook: 'emma.dance' },
  },
  {
    id: 5,
    name: 'James Wilson',
    specialty: 'Personal Training',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Veteran personal trainer with expertise in body transformation',
    socials: { instagram: '@jamesPT', twitter: '@jameswilson', facebook: 'james.personal' },
  },
  {
    id: 6,
    name: 'Lisa Chen',
    specialty: 'Nutrition & Wellness',
    experience: '7 years',
    image: 'https://images.unsplash.com/photo-1595956820464-6adea8daa4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Licensed nutritionist combining fitness with healthy lifestyle coaching',
    socials: { instagram: '@lisanutrition', twitter: '@lisa_wellness', facebook: 'lisa.nutrition' },
  },
];

export const Trainers = () => {
  return (
    <section id="trainers" className="section-padding bg-dark-900/50">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
            MEET YOUR TRAINERS
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our certified experts are here to guide you every step of the way
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-8 pb-4"
            style={{ width: 'max-content' }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                className="flex-none w-80 glass rounded-3xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {/* Trainer Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  
                  {/* Social Icons Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://instagram.com/${trainer.socials.instagram}`}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-primary-500/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={`https://twitter.com/${trainer.socials.twitter}`}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-primary-500/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={`https://facebook.com/${trainer.socials.facebook}`}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-primary-500/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bebas gradient-text mb-2">
                    {trainer.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-500 font-semibold">
                      {trainer.specialty}
                    </span>
                    <span className="text-white/60 text-sm">
                      {trainer.experience} exp.
                    </span>
                  </div>

                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <Button
                    variant="secondary"
                    className="w-full group flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Book Session
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Scroll to see all trainers</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-500"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 