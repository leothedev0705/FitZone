'use client';

import { motion } from 'framer-motion';
import { Star, Calendar, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const successStories = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    age: 35,
    achievement: 'Lost 45 lbs in 6 months',
    program: 'Strength Training + Nutrition',
    beforeImage: 'https://images.unsplash.com/photo-1594824425191-60eaa21f4b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    story: 'After having two kids, I felt like I had lost myself. FitZone helped me not just lose weight, but gain confidence and strength I never knew I had. The trainers became like family, supporting me every step of the way.',
    stats: [
      { label: 'Weight Lost', value: '45 lbs' },
      { label: 'Body Fat', value: '-15%' },
      { label: 'Muscle Gained', value: '8 lbs' },
    ],
    testimonial: 'FitZone transformed my life completely. I\'m stronger, healthier, and happier than I\'ve ever been.',
    featured: true,
  },
  {
    id: 2,
    name: 'James Thompson',
    age: 42,
    achievement: 'Gained 25 lbs of muscle',
    program: 'Powerlifting Program',
    beforeImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    story: 'I thought I was too old to make significant changes to my physique. FitZone proved me wrong. Their powerlifting program helped me build the strongest version of myself at 42.',
    stats: [
      { label: 'Muscle Gained', value: '25 lbs' },
      { label: 'Squat PR', value: '350 lbs' },
      { label: 'Deadlift PR', value: '425 lbs' },
    ],
    testimonial: 'At 42, I\'m in the best shape of my life. FitZone made the impossible possible.',
    featured: false,
  },
  {
    id: 3,
    name: 'Sarah Chen',
    age: 28,
    achievement: 'Marathon Finisher',
    program: 'Endurance Training',
    beforeImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    story: 'I never considered myself a runner. Through FitZone\'s endurance program, I went from struggling to run a mile to completing my first marathon in under 4 hours.',
    stats: [
      { label: 'Marathon Time', value: '3:58:32' },
      { label: 'Weekly Miles', value: '40+' },
      { label: 'Weight Lost', value: '20 lbs' },
    ],
    testimonial: 'FitZone helped me discover my inner athlete. I never thought I\'d be a marathon runner!',
    featured: false,
  },
  {
    id: 4,
    name: 'David Wilson',
    age: 55,
    achievement: 'Reversed Type 2 Diabetes',
    program: 'Wellness Program',
    beforeImage: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    story: 'My doctor said I\'d be on diabetes medication for life. Through FitZone\'s comprehensive wellness program, I reversed my Type 2 diabetes and got my life back.',
    stats: [
      { label: 'Weight Lost', value: '60 lbs' },
      { label: 'A1C Reduced', value: '9.2 to 5.4' },
      { label: 'Medications', value: 'None' },
    ],
    testimonial: 'FitZone didn\'t just change my body - they saved my life.',
    featured: false,
  },
  {
    id: 5,
    name: 'Emily Johnson',
    age: 24,
    achievement: 'Competed in Powerlifting',
    program: 'Competitive Training',
    beforeImage: 'https://images.unsplash.com/photo-1595956820464-6adea8daa4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1594824425191-60eaa21f4b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    story: 'From never lifting weights to competing at state level powerlifting meets. FitZone\'s competitive training program turned my hobby into a passion.',
    stats: [
      { label: 'Competition Total', value: '980 lbs' },
      { label: 'State Ranking', value: '3rd Place' },
      { label: 'Strength Gained', value: '300%' },
    ],
    testimonial: 'FitZone helped me discover strength I never knew I had, both physically and mentally.',
    featured: false,
  },
];

const achievements = [
  { icon: TrendingUp, number: '2,500+', label: 'Pounds Lost' },
  { icon: Award, number: '150+', label: 'Competition Athletes' },
  { icon: Star, number: '95%', label: 'Goal Achievement Rate' },
  { icon: Calendar, number: '5', label: 'Average Years Membership' },
];

export default function SuccessStories() {
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
              SUCCESS STORIES
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Real people, real transformations, real results. These inspiring stories 
              showcase what's possible when dedication meets expert guidance.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bebas gradient-text mb-2">{achievement.number}</div>
                <div className="text-white/70">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          {successStories.filter(story => story.featured).map((story) => (
            <motion.div
              key={story.id}
              className="glass rounded-3xl overflow-hidden card-hover mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full w-fit">
                    <span className="text-white font-semibold">FEATURED TRANSFORMATION</span>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bebas gradient-text mb-2">{story.name}</h2>
                    <p className="text-primary-500 font-semibold mb-1">{story.achievement}</p>
                    <p className="text-white/60">{story.program} • Age {story.age}</p>
                  </div>
                  
                  <blockquote className="text-lg text-white/90 italic border-l-4 border-primary-500 pl-6">
                    "{story.testimonial}"
                  </blockquote>
                  
                  <p className="text-white/80 leading-relaxed">{story.story}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat, idx) => (
                      <div key={idx} className="text-center bg-dark-800/50 rounded-xl p-4">
                        <div className="text-2xl font-bebas gradient-text">{stat.value}</div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-white/60 text-sm text-center">Before</p>
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <Image
                          src={story.beforeImage}
                          alt={`${story.name} before`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/60 text-sm text-center">After</p>
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <Image
                          src={story.afterImage}
                          alt={`${story.name} after`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Success Stories */}
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
              MORE TRANSFORMATIONS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {successStories.filter(story => !story.featured).map((story, index) => (
              <motion.div
                key={story.id}
                className="glass rounded-3xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={story.afterImage}
                        alt={story.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bebas gradient-text">{story.name}</h3>
                      <p className="text-primary-500 font-semibold text-sm">{story.achievement}</p>
                      <p className="text-white/60 text-sm">{story.program}</p>
                    </div>
                  </div>

                  <blockquote className="text-white/90 italic mb-6 border-l-2 border-primary-500 pl-4">
                    "{story.testimonial}"
                  </blockquote>

                  <p className="text-white/80 text-sm leading-relaxed mb-6">{story.story}</p>

                  <div className="grid grid-cols-3 gap-3">
                    {story.stats.map((stat, idx) => (
                      <div key={idx} className="text-center bg-dark-800/30 rounded-lg p-3">
                        <div className="text-lg font-bebas gradient-text">{stat.value}</div>
                        <div className="text-white/60 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              YOUR STORY STARTS HERE
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Every transformation begins with a single step. Join the thousands of members 
              who have already discovered their strongest, healthiest selves at FitZone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-8 py-4">
                Start Your Transformation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 