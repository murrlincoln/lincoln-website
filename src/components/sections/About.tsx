'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Image from 'next/image';

export default function About() {
  const { intro, paragraphs } = siteContent.about;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="grid gap-8 md:grid-cols-5 items-start">
        <div className="md:col-span-3 max-w-2xl">
          <h2 className="text-3xl font-serif mb-6 text-gray-900">{intro}</h2>

          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-md border border-gray-200">
            <Image
              src="/me.jpeg"
              alt="Winning a survival games tournament at Minecon (circa 2013)"
              width={1000}
              height={750}
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className="w-full h-auto object-cover"
              priority={true}
            />
          </div>
          <h3 className="text-xs lowercase tracking-wide text-gray-500 mt-2">
            me at my peak: winning a survival games tournament at minecon (circa 2013)
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
