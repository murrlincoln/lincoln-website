'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';

export default function StreamingHeader() {
  const text = "Hi, I'm Lincoln.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  // Start fading in social links halfway through the text animation
  useEffect(() => {
    if (currentIndex > text.length / 2) {
      setShowSocials(true);
    }
  }, [currentIndex, text.length]);

  return (
    <div className="mb-12">
      <h1 className="text-5xl md:text-6xl font-serif mb-6">
        {displayedText}
        {!isComplete && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        )}
      </h1>
      
      {/* Social Links with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: showSocials ? 1 : 0, 
          y: showSocials ? 0 : 10 
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <SocialLinks />
      </motion.div>
    </div>
  );
}