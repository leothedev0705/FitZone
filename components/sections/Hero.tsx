'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dark-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-padding max-w-6xl mx-auto">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wider gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            UNLEASH YOUR
            <br />
            INNER BEAST
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your body and mind with our state-of-the-art equipment,
            expert trainers, and supportive community. Your fitness journey starts here.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-8 md:gap-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary-500" />
              <span className="text-white/80">15K+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary-500" />
              <span className="text-white/80">4.9/5 Rating</span>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center mb-6">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group flex items-center gap-2"
                >
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Book Free Session
                </Button>
              </Link>
              
              <Link href="/classes">
                <Button
                  variant="secondary"
                  size="lg"
                  className="group flex items-center gap-2"
                >
                  View Classes
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <Link href="/membership" className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-sm text-white/80 hover:text-white">Membership</div>
              </Link>
              <Link href="/trainers" className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-sm text-white/80 hover:text-white">Trainers</div>
              </Link>
              <Link href="/success-stories" className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-sm text-white/80 hover:text-white">Success Stories</div>
              </Link>
              <Link href="/nutrition" className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-sm text-white/80 hover:text-white">Nutrition</div>
              </Link>
            </div>
            
            <motion.p
              className="text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              No commitment • 7-day free trial • Professional guidance
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 