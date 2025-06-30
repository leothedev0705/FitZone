'use client';

import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Classes } from '@/components/sections/Classes';
import { Trainers } from '@/components/sections/Trainers';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';


// Page Showcase Component (inline for now)
const PageShowcase = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
            EXPLORE FITZONE
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover everything FitZone has to offer. From world-class training programs 
            to comprehensive wellness support, your complete fitness journey awaits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/classes" className="glass rounded-3xl p-6 card-hover group">
            <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-4">
              <span className="text-white text-2xl">🏋️</span>
            </div>
            <h3 className="text-xl font-bebas gradient-text mb-3">Fitness Classes</h3>
            <p className="text-white/70 text-sm mb-4">50+ weekly classes from HIIT to Yoga</p>
            <span className="text-primary-400 text-sm group-hover:underline">Learn More →</span>
          </a>

          <a href="/trainers" className="glass rounded-3xl p-6 card-hover group">
            <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-4">
              <span className="text-white text-2xl">👨‍💼</span>
            </div>
            <h3 className="text-xl font-bebas gradient-text mb-3">Expert Trainers</h3>
            <p className="text-white/70 text-sm mb-4">Certified professionals to guide your journey</p>
            <span className="text-primary-400 text-sm group-hover:underline">Meet Our Team →</span>
          </a>

          <a href="/success-stories" className="glass rounded-3xl p-6 card-hover group">
            <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-4">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bebas gradient-text mb-3">Success Stories</h3>
            <p className="text-white/70 text-sm mb-4">Real transformations from our members</p>
            <span className="text-primary-400 text-sm group-hover:underline">Get Inspired →</span>
          </a>

          <a href="/membership" className="glass rounded-3xl p-6 card-hover group">
            <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-4">
              <span className="text-white text-2xl">💳</span>
            </div>
            <h3 className="text-xl font-bebas gradient-text mb-3">Membership Plans</h3>
            <p className="text-white/70 text-sm mb-4">Flexible plans for every lifestyle</p>
            <span className="text-primary-400 text-sm group-hover:underline">View Plans →</span>
          </a>

          <a href="/nutrition" className="glass rounded-3xl p-6 card-hover group">
            <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-4">
              <span className="text-white text-2xl">🍎</span>
            </div>
            <h3 className="text-xl font-bebas gradient-text mb-3">Nutrition Guidance</h3>
            <p className="text-white/70 text-sm mb-4">Expert meal plans and nutrition advice</p>
            <span className="text-primary-400 text-sm group-hover:underline">Fuel Your Goals →</span>
          </a>

          <a href="/blog" className="glass rounded-3xl p-6 card-hover group">
            <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-4">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bebas gradient-text mb-3">Fitness Blog</h3>
            <p className="text-white/70 text-sm mb-4">Latest tips and wellness insights</p>
            <span className="text-primary-400 text-sm group-hover:underline">Read Articles →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <PageShowcase />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
} 