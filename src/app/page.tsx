'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import StreamingHeader from '@/components/StreamingHeader';
import Navigation from '@/components/Navigation';
import Work from '@/components/sections/Work';
import Media from '@/components/sections/Media';
import About from '@/components/sections/About';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && ['work', 'media', 'about'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL when section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.history.pushState(null, '', `#${section}`);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'work':
        return <Work key="work" />;
      case 'media':
        return <Media key="media" />;
      case 'about':
        return <About key="about" />;
      default:
        return <About key="about" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="ml-0 md:ml-48 px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl">
          <StreamingHeader />
          
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}