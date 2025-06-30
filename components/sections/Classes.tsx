'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const classes = [
  {
    id: 1,
    name: 'HIIT Training',
    description: 'High-intensity interval training for maximum fat burn',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '45 min',
    capacity: '15 people',
    difficulty: 'High',
    schedule: ['Mon 6:00 AM', 'Wed 6:00 AM', 'Fri 6:00 AM'],
  },
  {
    id: 2,
    name: 'Yoga Flow',
    description: 'Relaxing yoga sessions for flexibility and mindfulness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '60 min',
    capacity: '20 people',
    difficulty: 'Low',
    schedule: ['Tue 7:00 AM', 'Thu 7:00 AM', 'Sat 9:00 AM'],
  },
  {
    id: 3,
    name: 'Strength Training',
    description: 'Build muscle and increase strength with guided workouts',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '50 min',
    capacity: '12 people',
    difficulty: 'High',
    schedule: ['Mon 5:00 PM', 'Wed 5:00 PM', 'Fri 5:00 PM'],
  },
  {
    id: 4,
    name: 'Spin Class',
    description: 'High-energy cycling workouts with motivating music',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '45 min',
    capacity: '25 people',
    difficulty: 'Medium',
    schedule: ['Tue 6:30 PM', 'Thu 6:30 PM', 'Sat 10:00 AM'],
  },
  {
    id: 5,
    name: 'CrossFit',
    description: 'Functional fitness combining cardio, strength, and agility',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '60 min',
    capacity: '10 people',
    difficulty: 'High',
    schedule: ['Mon 7:00 PM', 'Wed 7:00 PM', 'Fri 7:00 PM'],
  },
  {
    id: 6,
    name: 'Zumba Dance',
    description: 'Fun dance workouts that make fitness feel like a party',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '50 min',
    capacity: '30 people',
    difficulty: 'Medium',
    schedule: ['Tue 8:00 PM', 'Thu 8:00 PM', 'Sun 11:00 AM'],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Low':
      return 'text-green-400';
    case 'Medium':
      return 'text-yellow-400';
    case 'High':
      return 'text-red-400';
    default:
      return 'text-white';
  }
};

export const Classes = () => {
  return (
    <section id="classes" className="section-padding bg-dark-950">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
            FITNESS CLASSES
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose from our diverse range of classes designed to challenge and inspire you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              className="group relative h-96 rounded-3xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Front Card */}
              <div className="absolute inset-0 z-10 transition-transform duration-700 group-hover:rotate-y-180 backface-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={classItem.image}
                    alt={classItem.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bebas gradient-text mb-2">
                      {classItem.name}
                    </h3>
                    <p className="text-white/80">{classItem.description}</p>
                  </div>
                </div>
              </div>

              {/* Back Card */}
              <div className="absolute inset-0 z-0 glass p-6 flex flex-col justify-center transition-transform duration-700 rotate-y-180 group-hover:rotate-y-0 backface-hidden">
                <h3 className="text-2xl font-bebas gradient-text mb-6 text-center">
                  {classItem.name}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary-500" />
                    <span className="text-white/80">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary-500" />
                    <span className="text-white/80">{classItem.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary-500" />
                    <span className={`font-semibold ${getDifficultyColor(classItem.difficulty)}`}>
                      {classItem.difficulty} Intensity
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-primary-500 font-semibold mb-3">Schedule:</h4>
                  <div className="space-y-2">
                    {classItem.schedule.map((time, idx) => (
                      <div key={idx} className="text-sm text-white/70">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-primary w-full">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 