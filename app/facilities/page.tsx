'use client';

import { motion } from 'framer-motion';
import { Wifi, Car, Users, Shield, Clock, Coffee } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';

const facilities = [
  {
    id: 1,
    name: 'Strength Training Zone',
    description: 'State-of-the-art powerlifting and strength equipment including Olympic lifting platforms, squat racks, and premium free weights.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['12 Olympic lifting platforms', 'Full range of free weights', 'Cable machines', 'Functional trainers']
  },
  {
    id: 2,
    name: 'Cardio Theater',
    description: 'High-tech cardio equipment with individual entertainment systems and panoramic city views to keep you motivated.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['50+ cardio machines', 'Individual TVs', 'Heart rate monitoring', 'Virtual training programs']
  },
  {
    id: 3,
    name: 'Group Fitness Studios',
    description: 'Spacious, mirrored studios with premium sound systems designed for our variety of group fitness classes.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['3 dedicated studios', 'Professional sound systems', 'Yoga props included', 'Climate controlled']
  },
  {
    id: 4,
    name: 'Recovery & Wellness Center',
    description: 'Dedicated space for stretching, mobility work, and recovery featuring massage chairs and foam rolling areas.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Stretching area', 'Massage chairs', 'Sauna & steam room', 'Recovery tools']
  },
  {
    id: 5,
    name: 'Functional Training Area',
    description: 'Open space designed for functional fitness, bootcamp-style workouts, and athletic training.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Turf training area', 'Battle ropes', 'Suspension trainers', 'Agility equipment']
  },
  {
    id: 6,
    name: 'Locker Rooms & Amenities',
    description: 'Luxurious locker rooms with premium amenities to complete your fitness experience in comfort.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Day-use lockers', 'Premium showers', 'Towel service', 'Hair dryers & amenities']
  }
];

const amenities = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Access the gym whenever it fits your schedule with our 24/7 member access.'
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Stay connected with complimentary high-speed WiFi throughout the facility.'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Convenient free parking available for all members and guests.'
  },
  {
    icon: Users,
    title: 'Personal Training',
    description: 'Expert personal trainers available for one-on-one and small group sessions.'
  },
  {
    icon: Shield,
    title: 'Secure Environment',
    description: 'State-of-the-art security systems and well-lit areas ensure your safety.'
  },
  {
    icon: Coffee,
    title: 'Juice Bar',
    description: 'Healthy smoothies, protein shakes, and recovery drinks available.'
  }
];

export default function Facilities() {
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
              WORLD-CLASS FACILITIES
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience fitness at its finest with our 15,000 square feet of premium 
              equipment, modern amenities, and thoughtfully designed spaces.
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
              alt="FitZone Main Gym Floor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              EXPLORE OUR SPACES
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                className="glass rounded-3xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bebas gradient-text mb-4">
                    {facility.name}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-primary-500 font-semibold mb-3">Key Features:</h4>
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
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
              MEMBER AMENITIES
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Enjoy premium amenities designed to enhance your fitness experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                className="text-center glass p-8 rounded-3xl card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-6">
                  <amenity.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bebas gradient-text mb-4">{amenity.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bebas gradient-text mb-6">
              READY TO EXPERIENCE FITZONE?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a tour today and see why FitZone is the premier fitness destination. 
              Our team will show you around and help you find the perfect membership plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform">
                Schedule a Tour
              </button>
              <button className="border border-primary-500 text-primary-400 px-8 py-4 rounded-xl font-semibold hover:bg-primary-500/10 transition-colors">
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 