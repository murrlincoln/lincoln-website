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
    'side-projects': 'Side Projects & Demos',
    'previous-work': 'Experience & Leadership',
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const renderProject = (project: any, isCompact: boolean = false) => {
    // Compact format for Experience & Leadership section
    if (isCompact) {
      return (
        <div key={project.id} className="border-l-2 border-gray-200 pl-4 pb-4 last:pb-0">
          <div className="flex items-start justify-between mb-1">
            <h4 className="font-medium text-gray-900">
              {project.title}
            </h4>
            {project.date && (
              <span className="text-xs text-gray-500 ml-4 whitespace-nowrap">
                {project.date}
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            {/* Show shortened description for compact view */}
            {project.shortDescription || project.description}
          </p>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors mt-2"
            >
              View Project <HiExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      );
    }
    
    // Side projects with demos - render without title/description
    if (project.category === 'side-projects' && project.demos) {
      return (
        <div key={project.id} className="space-y-3">
          {project.demos.map((demo: any, idx: number) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-1">
                <a 
                  href={demo.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center gap-1"
                >
                  {demo.name}
                  <HiExternalLink className="w-3 h-3" />
                </a>
                {demo.date && (
                  <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{demo.date}</span>
                )}
              </div>
              <p className="text-sm text-gray-600">{demo.description}</p>
            </div>
          ))}
        </div>
      );
    }
    
    // Full card format for Coinbase section
    return (
      <div key={project.id} className={`border border-gray-200 rounded-lg p-5 bg-white ${project.isUpcoming ? 'bg-gradient-to-br from-white to-gray-50' : 'hover:shadow-md transition-shadow'}`}>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif text-gray-900">
            {project.title}
          </h3>
          {project.isUpcoming && (
            <span className="text-xs font-sans text-amber-600 px-2 py-1 bg-amber-50 rounded">
              Upcoming
            </span>
          )}
          {project.date && (
            <span className="text-xs font-sans text-gray-500">
              {project.date}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
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
        
        {project.id === 'agentkit' && (
          <AgentKitChat projectId={project.id} />
        )}
      </div>
    );
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
      
      {/* Project Categories as Dropdowns */}
      {Object.entries(groupedProjects).map(([category, categoryProjects]) => {
        if (categoryProjects.length === 0) return null;
        const isExpanded = expandedSections.includes(category);
        const itemCount = category === 'side-projects'
          ? categoryProjects.reduce((sum, p) => sum + ((p as any).demos?.length || 0), 0)
          : categoryProjects.length;
        const itemLabel = category === 'side-projects'
          ? (itemCount === 1 ? 'demo' : 'demos')
          : category === 'previous-work'
            ? (itemCount === 1 ? 'role' : 'roles')
            : (itemCount === 1 ? 'project' : 'projects');
        
        return (
          <div key={category} className="mb-6">
            <button
              onClick={() => toggleSection(category)}
              className="w-full text-left flex items-center justify-between text-xl font-serif text-gray-900 py-3 md:py-2 border-b border-gray-200 hover:text-gray-700 transition-colors min-h-[44px]"
            >
              <span>{categoryTitles[category as keyof typeof categoryTitles]}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-sans">
                  {itemCount} {itemLabel}
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
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    opacity: { duration: 0.2 }
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="mt-6 space-y-6">
                    {categoryProjects.map(project => 
                      renderProject(project, category === 'previous-work')
                    )}
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
