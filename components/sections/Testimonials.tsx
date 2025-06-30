'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Adams',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1594824425191-60eaa21f4b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: "FitZone completely transformed my relationship with fitness. The trainers are incredibly supportive, and the community here feels like family. I've never been stronger or more confident!",
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: "As someone who works long hours, FitZone's 24/7 access is a game-changer. The equipment is top-notch, and the HIIT classes help me stay energized throughout my busy days.",
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: "The yoga classes at FitZone are exceptional. The instructors create such a peaceful environment, and I love how they accommodate all skill levels. It's my sanctuary after stressful days.",
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: "FitZone helped me lose 40 pounds and gain confidence I never thought possible. The personal trainers designed a program that worked with my busy schedule and dietary restrictions.",
  },
  {
    id: 5,
    name: 'Emily Johnson',
    role: 'Nurse',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: "Working night shifts made it hard to maintain a routine, but FitZone's flexible class schedule and supportive community helped me stay consistent. Best investment I've made!",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="section-padding bg-dark-900/50">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
            SUCCESS STORIES
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from our members who have transformed their lives at FitZone
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="glass rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-primary p-4 rounded-2xl">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <StarRating rating={testimonials[currentIndex].rating} />
                
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed my-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold gradient-text">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-primary-500/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-primary-500/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
}; 