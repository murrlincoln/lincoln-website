'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';

export default function StreamingHeader() {
  const text = "Hi, I'm Lincoln.";
  const tagline = "Building at the intersection of AI agents and crypto infrastructure";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      setTimeout(() => setShowTagline(true), 200);
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
      <h1 className="text-6xl md:text-7xl font-serif mb-4">
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
      
      {/* Tagline with fade-in animation */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: showTagline ? 1 : 0, 
          y: showTagline ? 0 : 10 
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        className="text-lg md:text-xl text-gray-600 mb-6 font-serif"
      >
        {showTagline && tagline}
      </motion.p>
      
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