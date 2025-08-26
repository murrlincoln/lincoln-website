'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { HiExternalLink, HiChevronDown } from 'react-icons/hi';
import dynamic from 'next/dynamic';

// Dynamically import AgentKitChat to avoid SSR issues
const AgentKitChat = dynamic(() => import('@/components/AgentKitChat'), {
  ssr: false,
  loading: () => (
    <div className="mt-6 px-6 py-3 bg-gray-100 text-gray-500 rounded-lg">
      Loading interactive demo...
    </div>
  ),
});

export default function Work() {
  const { intro, projects } = siteContent.work;
  const [expandedSections, setExpandedSections] = useState<string[]>(['coinbase']);

  // Group projects by category
  const groupedProjects = {
    coinbase: projects.filter(p => p.category === 'coinbase'),
    'side-projects': projects.filter(p => p.category === 'side-projects'),
    'previous-work': projects.filter(p => p.category === 'previous-work' || !p.category),
  };

  const categoryTitles = {
    coinbase: 'Coinbase',
    'side-projects': 'Side Projects',
    'previous-work': 'Previous Work',
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const renderProject = (project: any) => (
    <div key={project.id} className="pb-6 last:pb-0">
      <h3 className="text-xl font-serif mb-3 text-gray-900">
        {project.title}
        {project.comingSoon && (
          <span className="ml-3 text-sm font-sans text-gray-400 italic">Coming Soon</span>
        )}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {(project.demoUrl || project.githubUrl) && (
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors"
            >
              Demo <HiExternalLink />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors"
            >
              GitHub <HiExternalLink />
            </a>
          )}
        </div>
      )}
      
      {project.comingSoon && project.id === 'agentkit' && (
        <AgentKitChat projectId={project.id} />
      )}
      
      {project.comingSoon && project.id !== 'agentkit' && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 italic">
            Interactive demo will be available here soon.
          </p>
        </div>
      )}
    </div>
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
      
      {/* Project Categories as Dropdowns */}
      {Object.entries(groupedProjects).map(([category, categoryProjects]) => {
        if (categoryProjects.length === 0) return null;
        const isExpanded = expandedSections.includes(category);
        
        return (
          <div key={category} className="mb-6">
            <button
              onClick={() => toggleSection(category)}
              className="w-full text-left flex items-center justify-between text-xl font-serif text-gray-900 pb-2 border-b border-gray-200 hover:text-gray-700 transition-colors"
            >
              <span>{categoryTitles[category as keyof typeof categoryTitles]}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-sans">
                  {categoryProjects.length} {categoryProjects.length === 1 ? 'project' : 'projects'}
                </span>
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
                  <div className="mt-6 space-y-6">
                    {categoryProjects.map(project => renderProject(project))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
