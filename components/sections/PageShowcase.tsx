'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Users, BookOpen, Trophy, Apple, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const pages = [
  {
    title: 'Fitness Classes',
    description: 'Discover our diverse range of group fitness classes designed for all skill levels. From high-intensity HIIT to relaxing yoga sessions.',
    icon: Dumbbell,
    href: '/classes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['50+ Weekly Classes', 'Expert Instructors', 'All Skill Levels'],
    featured: true,
  },
  {
    title: 'Expert Trainers',
    description: 'Meet our certified trainers who are passionate about helping you achieve your fitness goals safely and effectively.',
    icon: Users,
    href: '/trainers',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Certified Professionals', 'Personalized Training', 'Proven Results'],
    featured: false,
  },
  {
    title: 'Success Stories',
    description: 'Be inspired by real transformations from our members. See how dedication and expert guidance create incredible results.',
    icon: Trophy,
    href: '/success-stories',
    image: 'https://images.unsplash.com/photo-1594824425191-60eaa21f4b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['2,500+ lbs Lost', '150+ Athletes', '95% Success Rate'],
    featured: false,
  },
  {
    title: 'Nutrition Guidance',
    description: 'Fuel your fitness journey with expert nutrition plans tailored to your goals, whether it\'s weight loss, muscle gain, or performance.',
    icon: Apple,
    href: '/nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Custom Meal Plans', 'Expert Guidance', 'Sustainable Results'],
    featured: false,
  },
  {
    title: 'Membership Plans',
    description: 'Choose the perfect membership plan that fits your lifestyle. From basic access to premium unlimited training.',
    icon: MapPin,
    href: '/membership',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Flexible Plans', '24/7 Access', 'Premium Benefits'],
    featured: false,
  },
  {
    title: 'Fitness Blog',
    description: 'Stay updated with the latest fitness tips, workout routines, and wellness insights from our team of experts.',
    icon: BookOpen,
    href: '/blog',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Expert Articles', 'Weekly Updates', 'Proven Tips'],
    featured: false,
  },
];

export const PageShowcase = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
            EXPLORE FITZONE
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover everything FitZone has to offer. From world-class training programs 
            to comprehensive wellness support, your complete fitness journey awaits.
          </p>
        </motion.div>

        {/* Featured Page */}
        <div className="mb-16">
          {pages.filter(page => page.featured).map((page) => (
            <motion.div
              key={page.title}
              className="glass rounded-3xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-primary px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">FEATURED</span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <page.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bebas gradient-text">{page.title}</h3>
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
                    {page.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {page.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={page.href}>
                    <Button className="w-fit group text-lg px-8 py-4">
                      Explore {page.title}
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Pages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.filter(page => !page.featured).map((page, index) => (
            <motion.div
              key={page.title}
              className="glass rounded-3xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-primary p-2 rounded-xl">
                  <page.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bebas gradient-text mb-3">
                  {page.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {page.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {page.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-dark-800/50 text-white/70 px-2 py-1 rounded text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <Link href={page.href}>
                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bebas gradient-text mb-6">
            READY TO START YOUR JOURNEY?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives at FitZone. 
            Your strongest, healthiest self is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-4">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/membership">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Membership Plans
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 