'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  tooltip: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'ens',
    name: 'ENS',
    url: 'https://basescan.org/address/0x4c8bbcfc6DaE447228FcbB220C1DD4cae623EaaF',
    icon: '/ens.png',
    tooltip: 'lincoln.base.eth',
  },
  {
    id: 'farcaster',
    name: 'Farcaster',
    url: 'https://farcaster.xyz/lincoln',
    icon: '/farcaster.png',
    tooltip: '@lincoln',
  },
  {
    id: 'x',
    name: 'X',
    url: 'https://x.com/murrlincoln',
    icon: '/twitter.png',
    tooltip: '@murrlincoln',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/murrlincoln',
    icon: '/github.png',
    tooltip: 'murrlincoln',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lincolnmurr/',
    icon: '/linkedin.png',
    tooltip: 'lincolnmurr',
  },
];

export default function SocialLinks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <div key={link.id} className="relative">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(link.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="block relative"
          >
            <div className="relative w-6 h-6 transition-all duration-300 hover:scale-110">
              <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
                className={`
                  transition-all duration-300
                  ${hoveredId === link.id ? '' : 'grayscale opacity-60'}
                  ${hoveredId === link.id ? 'grayscale-0 opacity-100' : ''}
                `}
              />
            </div>
          </a>
          
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredId === link.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50"
              >
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {link.tooltip}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

