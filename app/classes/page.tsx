'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Zap, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const classCategories = [
  {
    id: 'strength',
    name: 'Strength Training',
    description: 'Build muscle and increase power with our strength-focused classes',
    classes: [
      {
        name: 'Power Lifting',
        instructor: 'Mike Thompson',
        duration: '60 min',
        capacity: '8 people',
        difficulty: 'Advanced',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        schedule: [
          { day: 'Monday', time: '6:00 AM' },
          { day: 'Wednesday', time: '6:00 AM' },
          { day: 'Friday', time: '6:00 AM' },
        ],
        description: 'Master the big three lifts: squat, bench press, and deadlift. Perfect for those looking to build serious strength.',
      },
      {
        name: 'Functional Fitness',
        instructor: 'Sarah Johnson',
        duration: '45 min',
        capacity: '12 people',
        difficulty: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        schedule: [
          { day: 'Tuesday', time: '7:00 PM' },
          { day: 'Thursday', time: '7:00 PM' },
          { day: 'Saturday', time: '10:00 AM' },
        ],
        description: 'Real-world movement patterns that improve your daily life activities and overall functional strength.',
      }
    ]
  },
  {
    id: 'cardio',
    name: 'Cardio & HIIT',
    description: 'High-energy classes to boost your cardiovascular fitness',
    classes: [
      {
        name: 'HIIT Blast',
        instructor: 'Alex Rodriguez',
        duration: '30 min',
        capacity: '15 people',
        difficulty: 'High',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        schedule: [
          { day: 'Monday', time: '6:30 PM' },
          { day: 'Wednesday', time: '6:30 PM' },
          { day: 'Friday', time: '6:30 PM' },
        ],
        description: 'Maximum calorie burn in minimum time. Intense intervals that will push your limits.',
      },
      {
        name: 'Spin Class',
        instructor: 'Emma Davis',
        duration: '45 min',
        capacity: '20 people',
        difficulty: 'Medium',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        schedule: [
          { day: 'Tuesday', time: '6:00 AM' },
          { day: 'Thursday', time: '6:00 AM' },
          { day: 'Saturday', time: '9:00 AM' },
        ],
        description: 'High-energy cycling with motivating music. Burn calories while having fun!',
      }
    ]
  },
  {
    id: 'mindfulness',
    name: 'Mind & Body',
    description: 'Balance your physical and mental wellness',
    classes: [
      {
        name: 'Vinyasa Yoga',
        instructor: 'Lisa Chen',
        duration: '60 min',
        capacity: '18 people',
        difficulty: 'Low',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        schedule: [
          { day: 'Monday', time: '7:00 AM' },
          { day: 'Wednesday', time: '7:00 AM' },
          { day: 'Friday', time: '7:00 AM' },
        ],
        description: 'Flow through poses that build strength, flexibility, and inner peace.',
      },
      {
        name: 'Meditation & Stretch',
        instructor: 'David Wilson',
        duration: '45 min',
        capacity: '15 people',
        difficulty: 'Low',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        schedule: [
          { day: 'Sunday', time: '8:00 AM' },
          { day: 'Tuesday', time: '8:00 PM' },
          { day: 'Thursday', time: '8:00 PM' },
        ],
        description: 'Gentle stretching combined with mindfulness meditation for total relaxation.',
      }
    ]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Low': return 'text-green-400';
    case 'Medium': return 'text-yellow-400';
    case 'High': return 'text-red-400';
    case 'Advanced': return 'text-purple-400';
    default: return 'text-white';
  }
};

export default function Classes() {
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
              FITNESS CLASSES
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of fitness classes designed to challenge, 
              inspire, and transform your body and mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class Categories */}
      {classCategories.map((category, categoryIndex) => (
        <section key={category.id} className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-4">
                {category.name}
              </h2>
              <p className="text-lg text-white/70 max-w-2xl">
                {category.description}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {category.classes.map((classItem, index) => (
                <motion.div
                  key={classItem.name}
                  className="glass rounded-3xl overflow-hidden card-hover flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64">
                    <Image
                      src={classItem.image}
                      alt={classItem.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-semibold">{classItem.instructor}</span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bebas gradient-text mb-4">
                      {classItem.name}
                    </h3>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {classItem.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                        <span className="text-white/70 text-sm">{classItem.duration}</span>
                      </div>
                      <div className="text-center">
                        <Users className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                        <span className="text-white/70 text-sm">{classItem.capacity}</span>
                      </div>
                      <div className="text-center">
                        <Zap className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                        <span className={`text-sm font-semibold ${getDifficultyColor(classItem.difficulty)}`}>
                          {classItem.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h4 className="text-primary-500 font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Schedule
                      </h4>
                      <div className="space-y-2">
                        {classItem.schedule.map((slot, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-dark-800/50 px-4 py-2 rounded-lg">
                            <span className="text-white/80">{slot.day}</span>
                            <span className="text-primary-500 font-semibold">{slot.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button className="w-full">
                        Book This Class
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Class Tips */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              CLASS TIPS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Arrive Early',
                description: 'Come 10-15 minutes before class starts to check in and set up your equipment.',
              },
              {
                title: 'Bring Water',
                description: 'Stay hydrated throughout your workout. Water fountains are available if you forget.',
              },
              {
                title: 'Listen to Your Body',
                description: 'Modify exercises as needed. Our instructors will provide alternatives for all fitness levels.',
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bebas gradient-text mb-4">{tip.title}</h3>
                <p className="text-white/70">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 