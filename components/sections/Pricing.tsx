'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    icon: Zap,
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Free Wi-Fi',
      'Basic fitness assessment',
      'Mobile app access',
    ],
    popular: false,
    color: 'from-gray-600 to-gray-700',
  },
  {
    id: 2,
    name: 'Pro',
    price: 59,
    icon: Star,
    description: 'Most popular choice for serious fitness enthusiasts',
    features: [
      'All Basic features',
      'Unlimited group classes',
      '2 personal training sessions/month',
      'Nutrition consultation',
      'Priority booking',
      'Guest passes (2/month)',
      'Sauna & steam room access',
    ],
    popular: true,
    color: 'from-primary-500 to-secondary-500',
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    icon: Crown,
    description: 'Premium experience with all exclusive benefits',
    features: [
      'All Pro features',
      'Unlimited personal training',
      'Custom meal plans',
      'Recovery treatments',
      'VIP locker room',
      'Unlimited guest passes',
      'Priority equipment access',
      'Monthly body composition analysis',
    ],
    popular: false,
    color: 'from-yellow-500 to-orange-500',
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-dark-950">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas gradient-text mb-6">
            MEMBERSHIP PLANS
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the plan that fits your fitness goals and lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative glass rounded-3xl p-8 card-hover flex flex-col h-full ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-primary px-6 py-2 rounded-full text-white font-semibold text-sm animate-bounce-slow">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-2xl w-fit mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bebas gradient-text mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-white/60 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bebas gradient-text">
                    ${plan.price}
                  </span>
                  <span className="text-white/60 text-lg">/month</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary-500/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary-500" />
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/50'
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'secondary'}
                >
                  {plan.popular ? 'Start Now' : 'Choose Plan'}
                </Button>

                {/* Free Trial Note */}
                <p className="text-xs text-white/50 text-center mt-4">
                  7-day free trial included
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            All plans include access to our mobile app and basic fitness tracking.
            <br />
            Cancel anytime with 30-day notice. Student discounts available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 