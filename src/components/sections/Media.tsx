'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { HiExternalLink } from 'react-icons/hi';

export default function Media() {
  const { intro, items } = siteContent.media;

  const groupedItems = {
    authored: items.filter(item => item.category === 'authored'),
    interview: items.filter(item => item.category === 'interview'),
    'product-reference': items.filter(item => item.category === 'product-reference'),
  };

  const categoryTitles = {
    authored: 'Authored',
    interview: 'Interviews',
    'product-reference': 'Product Mentions',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl"
    >
      <p className="text-lg text-gray-700 mb-8 font-serif">{intro}</p>

      {Object.entries(groupedItems).map(([category, categoryItems]) => {
        if (categoryItems.length === 0) return null;
        
        return (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
              {categoryTitles[category as keyof typeof categoryTitles]}
            </h3>
            
            <ul className="space-y-4">
              {categoryItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-gray-400 group-hover:text-gray-700 transition-colors inline-flex items-center gap-1">
                          {item.title}
                          <HiExternalLink className="text-sm" />
                        </h4>
                        
                        {(item.publication || item.date) && (
                          <div className="text-sm text-gray-500 mt-1">
                            {item.publication}
                            {item.publication && item.date && ' · '}
                            {item.date}
                          </div>
                        )}
                        
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </motion.div>
  );
}
