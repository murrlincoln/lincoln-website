'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { HiExternalLink, HiStar } from 'react-icons/hi';

export default function Media() {
  const { intro, items } = siteContent.media;

  // Extract favorites
  const favorites = items.filter(item => item.favorite);
  
  // Group remaining items by category
  const groupedItems = {
    talk: items.filter(item => item.category === 'talk' && !item.favorite),
    authored: items.filter(item => item.category === 'authored' && !item.favorite),
    interview: items.filter(item => item.category === 'interview' && !item.favorite),
    research: items.filter(item => item.category === 'research' && !item.favorite),
    mention: items.filter(item => item.category === 'mention'),
    'product-reference': items.filter(item => item.category === 'product-reference'),
  };

  const categoryTitles = {
    talk: 'Talks & Presentations',
    authored: 'Authored Content',
    interview: 'Interviews & Podcasts',
    research: 'Research Papers',
    mention: 'Media Mentions',
    'product-reference': 'Product Coverage',
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

      {/* Featured/Favorites Section */}
      {favorites.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2 inline-flex items-center gap-2">
            <HiStar className="text-yellow-500" />
            Featured Highlights
          </h3>
          
          <ul className="space-y-4">
            {favorites.map(item => (
              <li key={item.id} className="border-l-4 border-yellow-400 pl-4 bg-yellow-50 rounded-r p-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors inline-flex items-center gap-1">
                        {item.title}
                        <HiExternalLink className="text-sm" />
                      </h4>
                      
                      {(item.publication || item.date) && (
                        <div className="text-sm text-gray-600 mt-1">
                          {item.publication}
                          {item.publication && item.date && ' · '}
                          {item.date}
                        </div>
                      )}
                      
                      {item.description && (
                        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
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
      )}

      {/* Regular Categories */}
      {Object.entries(groupedItems).map(([category, categoryItems]) => {
        if (categoryItems.length === 0) return null;
        
        return (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
              {categoryTitles[category as keyof typeof categoryTitles]}
            </h3>
            
            <ul className="space-y-3">
              {categoryItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block hover:bg-gray-50 rounded p-2 -mx-2 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-gray-700 group-hover:text-gray-900 transition-colors inline-flex items-center gap-1">
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
              ))}
            </ul>
          </div>
        );
      })}
    </motion.div>
  );
}
