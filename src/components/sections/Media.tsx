'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { HiExternalLink, HiStar, HiChevronDown } from 'react-icons/hi';

export default function Media() {
  const { intro, items } = siteContent.media;
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  // Helper function to parse dates for sorting
  const parseDate = (dateStr: string | undefined): Date => {
    if (!dateStr) return new Date(0); // Return epoch for items without dates
    
    // Handle "Present" dates
    if (dateStr.includes('Present')) return new Date();
    
    // Try to parse the date
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date(0) : parsed;
  };
  
  // Sort items by date (newest first)
  const sortByDate = (a: any, b: any) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  };
  
  // Group all items by category and sort by date
  const groupedItems = {
    talk: items.filter(item => item.category === 'talk').sort(sortByDate),
    authored: items.filter(item => item.category === 'authored').sort(sortByDate),
    interview: items.filter(item => item.category === 'interview').sort(sortByDate),
    research: items.filter(item => item.category === 'research').sort(sortByDate),
    mention: items.filter(item => item.category === 'mention').sort(sortByDate),
    'product-reference': items.filter(item => item.category === 'product-reference').sort(sortByDate),
  };

  const categoryTitles = {
    talk: 'Talks & Presentations',
    authored: 'Authored Content',
    interview: 'Interviews & Podcasts',
    research: 'Research Papers',
    mention: 'Media Mentions',
    'product-reference': 'Product Coverage',
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const renderMediaItem = (item: any) => (
    <li key={item.id} className={item.favorite ? "border-l-4 border-yellow-400 pl-4 bg-yellow-50/50 rounded-r p-3 -mx-3" : ""}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block ${!item.favorite && "hover:bg-gray-50 rounded p-2 -mx-2"} transition-colors`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className={`${item.favorite ? "text-gray-800 font-medium group-hover:text-gray-900" : "text-gray-700 group-hover:text-gray-900"} transition-colors inline-flex items-center gap-1`}>
              {item.favorite && <HiStar className="text-yellow-500 text-sm" />}
              {item.title}
              <HiExternalLink className="text-sm opacity-50 group-hover:opacity-100" />
            </h4>
            
            {(item.publication || item.date) && (
              <div className="text-sm text-gray-500 mt-0.5">
                {item.publication}
                {item.publication && item.date && ' · '}
                {item.date}
              </div>
            )}
            
            {item.description && (
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </a>
    </li>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl"
    >
      <p className="text-lg text-gray-700 mb-8 font-serif">{intro}</p>
      
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
        <HiStar className="text-yellow-500" />
        <span>Featured items are highlighted</span>
      </div>

      {/* Categories as Dropdowns */}
      {Object.entries(groupedItems).map(([category, categoryItems]) => {
        if (categoryItems.length === 0) return null;
        const isExpanded = expandedSections.includes(category);
        const favoriteCount = categoryItems.filter(item => item.favorite).length;
        
        return (
          <div key={category} className="mb-6">
            <button
              onClick={() => toggleSection(category)}
              className="w-full text-left flex items-center justify-between text-xl font-serif text-gray-900 pb-2 border-b border-gray-200 hover:text-gray-700 transition-colors"
            >
              <span className="flex items-center gap-2">
                {categoryTitles[category as keyof typeof categoryTitles]}
                {favoriteCount > 0 && (
                  <span className="text-xs text-yellow-600 font-sans">
                    ({favoriteCount} ⭐)
                  </span>
                )}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-sans">{categoryItems.length}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiChevronDown className="text-gray-400" />
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                                  <ul className="space-y-3 mt-4">
                  {categoryItems.map(item => renderMediaItem(item))}
                </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
