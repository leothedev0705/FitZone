'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export const FloatingBookButton = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
    >
      <motion.button
        onClick={() => scrollToSection('contact')}
        className="bg-gradient-primary text-white p-4 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group"
        animate={{ 
          boxShadow: [
            '0 0 20px rgba(22, 224, 189, 0.3)',
            '0 0 40px rgba(22, 224, 189, 0.6)',
            '0 0 20px rgba(22, 224, 189, 0.3)'
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Book a session"
      >
        <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-dark-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Book a Session
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-800" />
        </div>
      </motion.button>
    </motion.div>
  );
}; 