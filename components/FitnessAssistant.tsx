'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot, 
  Minimize2, 
  Maximize2,
  Calendar,
  Dumbbell,
  Users,
  CreditCard,
  Trophy,
  Apple
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface UserBiodata {
  name?: string;
  age?: number;
  gender?: string;
  height?: number;
  weight?: number;
  fitnessGoal?: string;
  experienceLevel?: string;
  medicalConditions?: string;
}

// Essential profile fields that must be completed
const ESSENTIAL_FIELDS = ['name', 'age', 'experienceLevel'];

// Helper function to check profile completion
const isProfileComplete = (biodata: UserBiodata) => {
  return ESSENTIAL_FIELDS.every(field => biodata[field as keyof UserBiodata]);
};

const quickActions = [
  { label: 'Book Session', icon: Calendar, href: '/contact' },
  { label: 'Classes', icon: Dumbbell, href: '/classes' },
  { label: 'Trainers', icon: Users, href: '/trainers' },
  { label: 'Membership', icon: CreditCard, href: '/membership' },
  { label: 'Success Stories', icon: Trophy, href: '/success-stories' },
  { label: 'Nutrition', icon: Apple, href: '/nutrition' },
];

export const FitnessAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userBiodata, setUserBiodata] = useState<UserBiodata>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fitbot-profile');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  const [collectingBiodata, setCollectingBiodata] = useState(false);
  const [biodataStep, setBiodataStep] = useState(0);
  const [profileCompleted, setProfileCompleted] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fitbot-profile');
      if (saved) {
        const profile = JSON.parse(saved);
        return isProfileComplete(profile);
      }
    }
    return false;
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fitbot-profile', JSON.stringify(userBiodata));
    }
  }, [userBiodata]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      if (profileCompleted) {
        setTimeout(() => {
          addBotMessage(`Hi again, ${userBiodata.name}! 👋\n\nWelcome back to FitBot! I have your profile saved:\n• **Age:** ${userBiodata.age}\n• **Experience:** ${userBiodata.experienceLevel}\n\nI'm ready to help with personalized fitness advice! What would you like to know?`);
        }, 500);
      } else {
        setCollectingBiodata(true);
        setBiodataStep(0);
        setTimeout(() => {
          addBotMessage("Hi! I'm FitBot, your AI-powered fitness assistant! 🏋️‍♂️\n\nBefore I can provide personalized fitness and nutrition advice, I need to know a bit about you.\n\nThis helps me give you the best recommendations for your health and safety. Let's start with some basic information.\n\n**What's your name?**");
        }, 500);
      }
    }
  }, [isOpen, profileCompleted, userBiodata, messages.length]);

  const addBotMessage = (content: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newMessage]);
    }, delay);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleBiodataCollection = (input: string) => {
    // Essential steps only - minimum required for safety
    const steps = [
      { key: 'name', question: "**Thanks! How old are you?**\n\n(This helps me recommend age-appropriate exercises)" },
      { key: 'age', question: "**Perfect! What's your fitness experience level?**\n\n1. **Beginner** - Just starting out\n2. **Intermediate** - Some experience (6+ months)\n3. **Advanced** - Experienced (2+ years)" },
      { key: 'experienceLevel', question: null }, // End of essential questions
    ];

    if (biodataStep < steps.length) {
      const currentStep = steps[biodataStep];
      let value: string | number = input.trim();

      // Handle different input types
      if (currentStep.key === 'age') {
        value = parseInt(value);
        if (isNaN(value) || value < 13 || value > 100) {
          addBotMessage("Please enter a valid age between 13 and 100 years.");
          return;
        }
      } else if (currentStep.key === 'experienceLevel') {
        const levels = ['beginner', 'intermediate', 'advanced'];
        const numericChoice = parseInt(value);
        if (numericChoice >= 1 && numericChoice <= 3) {
          value = levels[numericChoice - 1];
        } else {
          value = value.toLowerCase();
          if (!levels.includes(value)) {
            addBotMessage("Please choose 1, 2, or 3 for your experience level.");
            return;
          }
        }
      }

      const updatedBiodata = { ...userBiodata, [currentStep.key]: value };
      setUserBiodata(updatedBiodata);
      setBiodataStep(prev => prev + 1);

      if (biodataStep + 1 < steps.length && steps[biodataStep + 1].question !== null) {
        addBotMessage(steps[biodataStep + 1].question!);
      } else {
        // Essential profile completed
        setCollectingBiodata(false);
        setProfileCompleted(true);
        setBiodataStep(0);
        
        addBotMessage(`**Great, ${updatedBiodata.name}!** 🎉\n\nYour essential profile is complete! Now I can safely provide:\n\n• **Personalized workout plans**\n• **Nutrition guidance**\n• **Health calculations** (BMI, calories)\n• **Expert fitness advice**\n• **FitZone service recommendations**\n\nWhat would you like to know about? I'm powered by Google Gemini AI for intelligent responses!`);
      }
    }
  };

  const sendToGeminiAPI = async (message: string, biodata?: UserBiodata) => {
    setIsTyping(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          userBiodata: biodata || userBiodata,
          conversationHistory: messages.slice(-6), // Send last 6 messages for context
        }),
      });

      const data = await response.json();
      
      setIsTyping(false);
      
      if (data.success) {
        const newMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          content: data.message,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, newMessage]);
      } else {
        // Fallback to local response if API fails
        addBotMessage(data.message || "I'm having some connectivity issues, but I'm still here to help! Ask me about our classes, trainers, or membership plans.", 500);
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setIsTyping(false);
      addBotMessage("I'm experiencing some technical difficulties, but I can still help you with basic information about FitZone! What would you like to know?", 500);
    }
  };

  const processMessage = (input: string) => {
    if (collectingBiodata) {
      handleBiodataCollection(input);
      return;
    }

    // If profile not completed, guide user back to completing it
    if (!profileCompleted) {
      addBotMessage("I need to complete your basic profile first before I can help with specific fitness advice. This ensures I give you safe, age-appropriate recommendations.\n\nPlease answer the previous question to continue. 😊");
      return;
    }

    // Check if user wants to update their profile
    if (input.toLowerCase().includes('update profile') || input.toLowerCase().includes('change profile')) {
      setCollectingBiodata(true);
      setBiodataStep(0);
      setProfileCompleted(false);
      addBotMessage("Sure! Let's update your profile. **What's your name?**");
      return;
    }

    // Send to Gemini API for intelligent response
    sendToGeminiAPI(input);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    addUserMessage(inputValue);
    processMessage(inputValue);
    setInputValue('');
  };

  const handleQuickAction = (action: { href: string; title?: string }) => {
    if (!profileCompleted) {
      addBotMessage("Please complete your basic profile first so I can provide personalized recommendations! 😊");
      return;
    }

    if (action.href.startsWith('/')) {
      // Internal navigation
      window.location.href = action.href;
    } else {
      window.open(action.href, '_blank');
    }
  };

  return (
    <>
      {/* Chat Toggle Button - Fixed positioning with high z-index */}
      {!isOpen && (
        <motion.button
          className="fixed bottom-6 right-6 bg-gradient-primary text-white p-4 rounded-full shadow-2xl hover:shadow-3xl"
          style={{ zIndex: 9999 }}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle className="h-6 w-6" />
          <motion.div 
            className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AI
          </motion.div>
        </motion.button>
      )}

      {/* Chat Window - Fixed positioning with very high z-index */}
      <AnimatePresence>
        {isOpen && (
                      <motion.div
              className={`fixed bottom-6 right-6 glass rounded-3xl shadow-2xl backdrop-blur-xl ${
                isMinimized ? 'w-80 h-16' : 'w-96 h-[650px]'
              } transition-all duration-300 flex flex-col`}
              style={{ 
                zIndex: 10000,
                background: 'rgba(13, 13, 13, 0.95)',
                border: '1px solid rgba(22, 224, 189, 0.3)',
                backdropFilter: 'blur(20px)'
              }}
              initial={{ scale: 0, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-primary p-2 rounded-full shadow-lg">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">FitBot AI Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online & Powered by Gemini
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/60 hover:text-white p-1 transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/60 hover:text-white p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Quick Actions */}
                <div className="flex-shrink-0 p-4 border-b border-white/10">
                  <p className="text-xs text-white/60 mb-3">Quick Actions:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action)}
                        disabled={!profileCompleted}
                        className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors text-xs group ${
                          profileCompleted 
                            ? 'bg-white/5 hover:bg-white/10' 
                            : 'bg-white/2 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <action.icon className={`h-4 w-4 transition-colors ${
                          profileCompleted
                            ? 'text-primary-400 group-hover:text-primary-300'
                            : 'text-white/30'
                        }`} />
                        <span className={`transition-colors ${
                          profileCompleted
                            ? 'text-white/80 group-hover:text-white'
                            : 'text-white/40'
                        }`}>{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 scrollbar-hide">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start gap-2 max-w-[85%]`}>
                        {message.type === 'bot' && (
                          <div className="bg-gradient-primary p-1 rounded-full flex-shrink-0">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                        )}
                                                 <div className={`rounded-2xl px-4 py-2 ${
                           message.type === 'user' 
                             ? 'bg-gradient-primary text-white ml-auto' 
                             : 'bg-white/10 text-white border border-white/10'
                         }`}>
                           {message.type === 'bot' ? (
                             <div className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none">
                               <ReactMarkdown
                                 components={{
                                   h1: ({children}) => <h1 className="text-lg font-bold text-primary-400 mb-2">{children}</h1>,
                                   h2: ({children}) => <h2 className="text-base font-semibold text-primary-400 mb-2">{children}</h2>,
                                   h3: ({children}) => <h3 className="text-sm font-semibold text-primary-400 mb-1">{children}</h3>,
                                   p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                                   ul: ({children}) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                                   ol: ({children}) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                                   li: ({children}) => <li className="text-white/90">{children}</li>,
                                   strong: ({children}) => <strong className="font-semibold text-primary-300">{children}</strong>,
                                   em: ({children}) => <em className="italic text-white/90">{children}</em>,
                                   code: ({children}) => <code className="bg-black/30 px-1 py-0.5 rounded text-primary-400 text-xs">{children}</code>,
                                   blockquote: ({children}) => <blockquote className="border-l-2 border-primary-500 pl-3 italic text-white/80">{children}</blockquote>,
                                 }}
                               >
                                 {message.content}
                               </ReactMarkdown>
                             </div>
                           ) : (
                             <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                           )}
                           <p className="text-xs opacity-60 mt-1">
                             {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                           </p>
                         </div>
                        {message.type === 'user' && (
                          <div className="bg-primary-500 p-1 rounded-full flex-shrink-0">
                            <User className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="bg-gradient-primary p-1 rounded-full">
                          <Bot className="h-3 w-3 text-white" />
                        </div>
                        <div className="bg-white/10 rounded-2xl px-4 py-2 border border-white/10">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-primary-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="h-2 w-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex-shrink-0 p-4 border-t border-white/10 bg-black/20 rounded-b-3xl">
                                      <div className="flex gap-3">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder={
                          collectingBiodata 
                            ? "Type your answer..." 
                            : !profileCompleted 
                              ? "Complete your profile first..." 
                              : "Ask me anything about fitness..."
                        }
                        className="flex-1 bg-white/15 text-white placeholder-white/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 border border-white/30 focus:border-primary-400 focus:bg-white/20 transition-all"
                        disabled={isTyping}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-primary text-white p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  <p className="text-xs text-white/40 mt-2 text-center">
                    Powered by Google Gemini AI
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 