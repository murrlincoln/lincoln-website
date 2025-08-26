'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'media', label: 'Media' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      )}

      {/* Navigation Sidebar */}
      <AnimatePresence>
        {(!isMobile || isMobileMenuOpen) && (
          <motion.nav
            initial={isMobile ? { x: -250 } : false}
            animate={{ x: 0 }}
            exit={isMobile ? { x: -250 } : undefined}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`
              fixed left-0 top-0 h-full w-48 bg-white border-r border-gray-200
              ${isMobile ? 'z-40 shadow-lg' : 'z-30'}
              ${isMobile ? 'pt-16' : 'pt-24'}
            `}
          >
            <ul className="space-y-1 px-4">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full text-left px-3 py-2 rounded-md transition-all duration-200
                      font-serif text-lg
                      ${activeSection === item.id 
                        ? 'text-gray-900 bg-gray-50' 
                        : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black z-30"
        />
      )}
    </>
  );
}
