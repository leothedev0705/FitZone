'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Building Muscle Mass',
    excerpt: 'Discover the scientifically-backed strategies that will help you maximize your muscle-building potential and achieve the physique you\'ve always wanted.',
    author: 'Alex Rodriguez',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'The Complete Guide to HIIT Workouts',
    excerpt: 'High-intensity interval training can transform your fitness. Learn how to structure effective HIIT sessions for maximum fat burn and cardiovascular benefits.',
    author: 'Mike Thompson',
    date: '2024-01-12',
    readTime: '6 min read',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'Nutrition for Peak Performance',
    excerpt: 'What you eat directly impacts your workout performance and recovery. Our nutrition expert shares the foods that fuel success.',
    author: 'Lisa Chen',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Mind-Body Connection: Why Mental Health Matters in Fitness',
    excerpt: 'Explore the powerful connection between mental wellness and physical performance, and learn techniques to strengthen both.',
    author: 'Sarah Johnson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Recovery Science: Why Rest Days Are Crucial',
    excerpt: 'Understanding the science of recovery can accelerate your progress. Learn when to push hard and when to prioritize rest.',
    author: 'James Wilson',
    date: '2024-01-05',
    readTime: '9 min read',
    category: 'Recovery',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Home Workout Essentials: No Gym, No Problem',
    excerpt: 'Create an effective workout routine at home with minimal equipment. Perfect for busy schedules and travel days.',
    author: 'Emma Davis',
    date: '2024-01-03',
    readTime: '5 min read',
    category: 'Home Fitness',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
  }
];

const categories = ['All', 'Strength Training', 'Cardio', 'Nutrition', 'Wellness', 'Recovery', 'Home Fitness'];

export default function Blog() {
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
              FITNESS BLOG
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Expert insights, training tips, and wellness wisdom from our team of 
              certified professionals to help you on your fitness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.div
              key={post.id}
              className="glass rounded-3xl overflow-hidden card-hover mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-primary px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">FEATURED</span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bebas gradient-text mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-8 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button className="w-fit group">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto container-padding">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-primary-500/30 text-white/80 hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                className="glass rounded-3xl overflow-hidden card-hover flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold">{post.category}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bebas gradient-text mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white/50 text-xs">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary-400 hover:text-primary-300">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="h-12 w-12 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bebas gradient-text mb-4">
              NEVER MISS A BEAT
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest fitness tips, workout routines, 
              and wellness insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
              />
              <Button className="sm:w-auto">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 