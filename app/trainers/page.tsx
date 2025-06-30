'use client';

import { motion } from 'framer-motion';
import { Calendar, Star, Award, Instagram, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const trainers = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    title: 'Head Strength Coach',
    specialty: 'Powerlifting & Strength Training',
    experience: '8 years',
    certifications: ['NSCA-CSCS', 'USA Powerlifting Coach'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Former competitive powerlifter who has helped over 500 clients reach their strength goals. Alex specializes in building functional strength and proper lifting technique. His approach combines scientific training methods with personalized coaching.',
    achievements: [
      'National Powerlifting Champion 2019',
      'Trained 12 competitive athletes',
      'Published researcher in strength training'
    ],
    socials: { instagram: '@alexfit', twitter: '@alexrodriguez', facebook: 'alex.fitness' },
    classes: ['Power Lifting', 'Strength Training Basics', 'Olympic Lifting'],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Wellness Director',
    specialty: 'Yoga & Mindfulness',
    experience: '6 years',
    certifications: ['RYT-500', 'Mindfulness Coach'],
    image: 'https://images.unsplash.com/photo-1594824425191-60eaa21f4b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Sarah brings peace and strength together through her unique approach to yoga and mindfulness. With a background in psychology, she helps clients find balance in both body and mind.',
    achievements: [
      'Certified Yoga Alliance E-RYT 500',
      'Meditation teacher for 4+ years',
      'Workshops in stress management'
    ],
    socials: { instagram: '@sarahyoga', twitter: '@sarahj_fit', facebook: 'sarah.yoga' },
    classes: ['Vinyasa Yoga', 'Meditation & Stretch', 'Stress Relief Yoga'],
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Mike Thompson',
    title: 'HIIT Specialist',
    specialty: 'High-Intensity Training',
    experience: '10 years',
    certifications: ['ACSM-CPT', 'CrossFit Level 2'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'High-energy coach who makes every workout an adventure. Mike specializes in metabolic conditioning and functional fitness that translates to real-world strength and endurance.',
    achievements: [
      'CrossFit Games Regional Competitor',
      'Designed FitZone HIIT Program',
      '1000+ successful transformations'
    ],
    socials: { instagram: '@mikehiit', twitter: '@mikethompson', facebook: 'mike.crossfit' },
    classes: ['HIIT Blast', 'CrossFit', 'Metabolic Conditioning'],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Emma Davis',
    title: 'Group Fitness Coordinator',
    specialty: 'Dance & Cardio',
    experience: '5 years',
    certifications: ['ACE-GFI', 'Zumba Instructor'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Emma makes fitness fun! With a background in dance and choreography, she creates energetic classes that feel more like a party than a workout.',
    achievements: [
      'Professional dancer for 8 years',
      'Choreographed for local theater',
      'Master trainer in group fitness'
    ],
    socials: { instagram: '@emmadance', twitter: '@emma_fitness', facebook: 'emma.dance' },
    classes: ['Zumba Dance', 'Spin Class', 'Dance Cardio'],
    rating: 4.7,
    reviews: 92,
  },
  {
    id: 5,
    name: 'James Wilson',
    title: 'Personal Training Director',
    specialty: 'Body Transformation',
    experience: '12 years',
    certifications: ['NASM-CPT', 'Precision Nutrition'],
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'James is the transformation expert. With over a decade of experience, he has helped hundreds of clients achieve dramatic body transformations through personalized training and nutrition.',
    achievements: [
      'Master trainer with 12+ years',
      'Transformed 500+ clients',
      'Nutrition specialist certification'
    ],
    socials: { instagram: '@jamesPT', twitter: '@jameswilson', facebook: 'james.personal' },
    classes: ['Personal Training', 'Body Transformation', 'Nutrition Coaching'],
    rating: 5.0,
    reviews: 203,
  },
  {
    id: 6,
    name: 'Lisa Chen',
    title: 'Nutrition Specialist',
    specialty: 'Wellness & Nutrition',
    experience: '7 years',
    certifications: ['RD', 'Certified Nutrition Coach'],
    image: 'https://images.unsplash.com/photo-1595956820464-6adea8daa4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Lisa combines her passion for nutrition with fitness to help clients achieve sustainable lifestyle changes. Her holistic approach addresses both physical and nutritional wellness.',
    achievements: [
      'Registered Dietitian',
      'Published nutrition researcher',
      'Wellness program developer'
    ],
    socials: { instagram: '@lisanutrition', twitter: '@lisa_wellness', facebook: 'lisa.nutrition' },
    classes: ['Nutrition Workshops', 'Healthy Cooking', 'Wellness Seminars'],
    rating: 4.9,
    reviews: 74,
  }
];

export default function Trainers() {
  return (
    <main className="min-h-screen bg-dark-950">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bebas gradient-text mb-6">
              MEET OUR TRAINERS
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our world-class team of certified trainers is here to guide, motivate, 
              and help you achieve your fitness goals safely and effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                className="glass rounded-3xl overflow-hidden card-hover flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-primary px-3 py-2 rounded-full flex items-center gap-2">
                    <Star className="h-4 w-4 text-white fill-current" />
                    <span className="text-white font-semibold">{trainer.rating}</span>
                    <span className="text-white/80 text-sm">({trainer.reviews})</span>
                  </div>

                  {/* Social Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
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
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bebas gradient-text mb-2">
                      {trainer.name}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-1">{trainer.title}</p>
                    <p className="text-white/60 text-sm">{trainer.specialty} • {trainer.experience} experience</p>
                  </div>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="text-primary-500 font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-dark-800/50 px-3 py-1 rounded-full text-white/80 text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Classes */}
                  <div className="mb-6">
                    <h4 className="text-primary-500 font-semibold mb-3">Classes & Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.classes.map((className, idx) => (
                        <span key={idx} className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                          {className}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-primary-500 font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {trainer.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                          <span className="text-primary-500 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button
                      className="w-full group flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      Book Session with {trainer.name.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Trainers */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              WHY CHOOSE OUR TRAINERS?
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Certified Experts',
                description: 'All our trainers hold nationally recognized certifications and continue their education regularly.',
              },
              {
                title: 'Personalized Approach',
                description: 'Every trainer adapts their methods to your unique goals, fitness level, and preferences.',
              },
              {
                title: 'Proven Results',
                description: 'Our trainers have helped thousands of clients achieve remarkable transformations safely.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bebas gradient-text mb-4">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 