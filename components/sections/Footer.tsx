'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Send 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer id="contact" className="bg-dark-950 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand & Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bebas tracking-wider gradient-text">
                FITZONE
              </span>
            </div>
            
            <p className="text-white/70 leading-relaxed">
              Transform your body and mind at FitZone. Join our community of 
              fitness enthusiasts and unlock your potential.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="bg-white/10 p-3 rounded-xl hover:bg-primary-500/80 transition-colors group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bebas gradient-text">QUICK LINKS</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Classes', 'Trainers', 'Membership', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-white/70 hover:text-primary-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bebas gradient-text">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-1" />
                <div>
                  <p className="text-white/70">
                    123 Fitness Street<br />
                    Wellness District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-primary-500 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href="mailto:info@fitzone.com" className="text-white/70 hover:text-primary-500 transition-colors">
                  info@fitzone.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-500 mt-1" />
                <div className="text-white/70">
                  <p>24/7 Gym Access</p>
                  <p className="text-sm text-white/50">Staff: Mon-Fri 6AM-10PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bebas gradient-text">STAY UPDATED</h3>
            <p className="text-white/70">
              Subscribe for fitness tips and exclusive offers.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:bg-white/20 transition-all"
              />
              
              <Button
                type="submit"
                className="w-full group flex items-center justify-center gap-2"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  'Subscribed!'
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="relative h-48 rounded-xl overflow-hidden bg-dark-800">
              <div className="absolute inset-0 flex items-center justify-center text-white/60">
                <MapPin className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 FitZone Gym. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 