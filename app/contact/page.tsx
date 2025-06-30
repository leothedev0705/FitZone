'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

export default function Contact() {
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
              CONTACT US
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team. We're here to help you start your fitness journey 
              or answer any questions you might have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bebas gradient-text mb-8">
                GET IN TOUCH
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Our Location</h3>
                    <p className="text-white/70 leading-relaxed">
                      123 Fitness Street<br />
                      Downtown District<br />
                      Your City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone Number</h3>
                    <p className="text-white/70">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email Address</h3>
                    <p className="text-white/70">info@fitzone.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Hours</h3>
                    <div className="text-white/70 space-y-1">
                      <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                      <p>Saturday: 6:00 AM - 10:00 PM</p>
                      <p>Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="glass rounded-3xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="h-8 w-8 text-primary-500" />
                <h2 className="text-3xl font-bebas gradient-text">
                  SEND US A MESSAGE
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white focus:outline-none focus:border-primary-500">
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Information</option>
                    <option value="classes">Class Schedules</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="facilities">Facilities Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 