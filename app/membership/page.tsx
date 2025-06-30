'use client';

import { motion } from 'framer-motion';
import { Check, Star, Crown, Users, Clock, Dumbbell } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const membershipPlans = [
  {
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for fitness beginners and casual gym-goers',
    icon: Dumbbell,
    popular: false,
    features: [
      'Access to gym floor',
      'Basic cardio and strength equipment',
      'Locker room access',
      'Mobile app access',
      'Guest passes (2 per month)',
    ],
    restrictions: [
      'No group classes',
      'No personal training discount',
      'Standard hours only',
    ]
  },
  {
    name: 'Pro',
    price: 59,
    period: 'month',
    description: 'Most popular choice for serious fitness enthusiasts',
    icon: Star,
    popular: true,
    features: [
      'Everything in Basic',
      'Unlimited group fitness classes',
      'Functional training area access',
      '24/7 gym access',
      'Nutrition tracking app',
      'Guest passes (5 per month)',
      '10% discount on personal training',
      'Towel service',
    ],
    restrictions: []
  },
  {
    name: 'Elite',
    price: 99,
    period: 'month',
    description: 'Ultimate fitness experience with premium perks',
    icon: Crown,
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited personal training sessions',
      'Nutrition consultation (monthly)',
      'Recovery room access (sauna, massage)',
      'Priority class booking',
      'Unlimited guest passes',
      'Exclusive member events',
      'Free fitness assessments',
      'Supplement discounts',
      'Dedicated concierge service',
    ],
    restrictions: []
  }
];

const benefits = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Work out on your schedule with round-the-clock gym access'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Certified professionals to guide your fitness journey'
  },
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    description: 'State-of-the-art machines and free weights'
  },
  {
    icon: Star,
    title: 'Group Classes',
    description: '50+ weekly classes from yoga to HIIT'
  }
];

const faqs = [
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.'
  },
  {
    question: 'Is there a joining fee?',
    answer: 'New members pay a one-time joining fee of $50, which includes your welcome package and initial fitness assessment.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your membership anytime with 30 days notice. No cancellation fees apply.'
  },
  {
    question: 'Are there family discounts?',
    answer: 'Yes! Families of 3+ get 15% off all memberships when signing up together.'
  }
];

export default function Membership() {
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
              MEMBERSHIP PLANS
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect membership plan that fits your lifestyle and fitness goals. 
              All plans include access to our world-class facilities and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative glass rounded-3xl p-8 card-hover flex flex-col h-full ${
                  plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary px-6 py-2 rounded-full">
                      <span className="text-white font-semibold">MOST POPULAR</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bebas gradient-text mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bebas gradient-text">${plan.price}</span>
                    <span className="text-white/60">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <h4 className="text-primary-500 font-semibold">Included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.restrictions.length > 0 && (
                    <div className="pt-4 border-t border-white/10">
                      <h5 className="text-white/60 font-semibold mb-2 text-sm">Not included:</h5>
                      {plan.restrictions.map((restriction, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">×</span>
                          <span className="text-white/60 text-sm">{restriction}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              MEMBER BENEFITS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Every FitZone member enjoys these amazing benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bebas gradient-text mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-primary-400 mb-3">{faq.question}</h3>
                <p className="text-white/80 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto container-padding">
          <motion.div
            className="text-center glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              READY TO JOIN?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Start your fitness journey today with a 7-day free trial. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Schedule Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 