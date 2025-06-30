'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/', type: 'link' },
  { name: 'About', href: '/about', type: 'link' },
  { name: 'Classes', href: '/classes', type: 'link' },
  { name: 'Trainers', href: '/trainers', type: 'link' },
  { name: 'Membership', href: '/membership', type: 'link' },
  { name: 'Success Stories', href: '/success-stories', type: 'link' },
  { name: 'Blog', href: '/blog', type: 'link' },
  { name: 'Contact', href: '/contact', type: 'link' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: { name: string; href: string; type: string; section?: string }) => {
    setIsMobileMenuOpen(false);
    
    // If we're on the home page and the item has a section, scroll to it
    if (pathname === '/' && item.section) {
      scrollToSection(item.section);
    }
  };

  const isActivePage = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2 backdrop-blur-xl bg-dark-950/80 border-b border-white/10'
          : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bebas tracking-wider gradient-text">
                FITZONE
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={`text-white/80 hover:text-white transition-colors relative group cursor-pointer ${
                    isActivePage(item.href) ? 'text-primary-400' : ''
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                    isActivePage(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button size="sm">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 glass rounded-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    className={`text-white/80 hover:text-white transition-colors text-left py-2 cursor-pointer ${
                      isActivePage(item.href) ? 'text-primary-400' : ''
                    }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <Button 
                  className="mt-4 w-full"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}; 