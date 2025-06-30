'use client';

import { motion } from 'framer-motion';
import { Apple, Clock, Users, CheckCircle, Target } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const nutritionPrograms = [
  {
    id: 1,
    title: 'Weight Loss Program',
    description: 'Sustainable meal plans designed to help you lose weight while maintaining energy and muscle mass.',
    icon: Target,
    features: ['Calorie-controlled meals', 'High protein focus', 'Flexible food options', 'Weekly meal prep guides'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Muscle Building Program',
    description: 'Fuel your gains with nutrition plans optimized for muscle growth and recovery.',
    icon: Users,
    features: ['High protein intake', 'Strategic carb timing', 'Post-workout nutrition', 'Supplement guidance'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Performance Program',
    description: 'Optimize your athletic performance with sports-specific nutrition strategies.',
    icon: Apple,
    features: ['Pre/post workout meals', 'Hydration strategies', 'Competition prep', 'Recovery nutrition'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const nutritionTips = [
  {
    title: 'Hydration is Key',
    description: 'Drink at least 8-10 glasses of water daily. Proper hydration improves performance and recovery.',
    tip: 'Add lemon or cucumber for flavor without calories.'
  },
  {
    title: 'Protein with Every Meal',
    description: 'Include a protein source in every meal to support muscle growth and keep you feeling full.',
    tip: 'Aim for 20-30g of protein per meal.'
  },
  {
    title: 'Time Your Carbs',
    description: 'Eat carbs around your workouts for energy and recovery, limit them later in the day.',
    tip: 'Choose complex carbs like oats, quinoa, and sweet potatoes.'
  },
  {
    title: 'Prepare in Advance',
    description: 'Meal prep on weekends to ensure you always have healthy options available.',
    tip: 'Cook proteins in bulk and prep vegetables for easy assembly.'
  }
];

const sampleMeals = [
  {
    meal: 'Breakfast',
    option1: 'Greek yogurt with berries and granola',
    option2: 'Oatmeal with banana and almond butter',
    calories: '350-400',
    protein: '20-25g'
  },
  {
    meal: 'Lunch',
    option1: 'Grilled chicken salad with mixed vegetables',
    option2: 'Quinoa bowl with black beans and avocado',
    calories: '450-500',
    protein: '25-30g'
  },
  {
    meal: 'Dinner',
    option1: 'Salmon with roasted vegetables and brown rice',
    option2: 'Lean beef stir-fry with quinoa',
    calories: '500-550',
    protein: '30-35g'
  },
  {
    meal: 'Snacks',
    option1: 'Apple with almond butter',
    option2: 'Protein smoothie with spinach',
    calories: '150-200',
    protein: '10-15g'
  }
];

export default function Nutrition() {
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
              NUTRITION GUIDANCE
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Fuel your fitness journey with expert nutrition guidance. Our certified 
              nutritionists help you develop sustainable eating habits for lasting results.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Healthy nutrition foods"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Nutrition Programs */}
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
              NUTRITION PROGRAMS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Personalized nutrition plans designed to support your specific fitness goals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nutritionPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                className="glass rounded-3xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-primary p-3 rounded-xl">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bebas gradient-text mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-primary-500 font-semibold">What's Included:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
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
              SAMPLE MEAL PLAN
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Here's what a day of healthy eating looks like with our nutrition guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sampleMeals.map((meal, index) => (
              <motion.div
                key={meal.meal}
                className="glass rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary-500" />
                  <h3 className="text-2xl font-bebas gradient-text">{meal.meal}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-dark-800/50 rounded-xl p-4">
                    <p className="text-white/90 font-semibold mb-1">Option 1:</p>
                    <p className="text-white/70">{meal.option1}</p>
                  </div>
                  <div className="bg-dark-800/50 rounded-xl p-4">
                    <p className="text-white/90 font-semibold mb-1">Option 2:</p>
                    <p className="text-white/70">{meal.option2}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-primary-500/20 rounded-xl p-3">
                    <div className="text-lg font-bebas gradient-text">{meal.calories}</div>
                    <div className="text-white/60 text-sm">Calories</div>
                  </div>
                  <div className="text-center bg-primary-500/20 rounded-xl p-3">
                    <div className="text-lg font-bebas gradient-text">{meal.protein}</div>
                    <div className="text-white/60 text-sm">Protein</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
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
              EXPERT NUTRITION TIPS
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {nutritionTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                className="glass rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bebas gradient-text mb-4">{tip.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{tip.description}</p>
                <div className="bg-primary-500/20 rounded-xl p-4 border-l-4 border-primary-500">
                  <p className="text-primary-400 font-semibold text-sm">Pro Tip:</p>
                  <p className="text-white/80 text-sm">{tip.tip}</p>
                </div>
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
            <Apple className="h-16 w-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bebas gradient-text mb-6">
              READY TO TRANSFORM YOUR NUTRITION?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Work with our certified nutritionists to create a personalized meal plan 
              that fits your lifestyle and supports your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-8 py-4">
                Book Nutrition Consultation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Download Meal Plan Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 