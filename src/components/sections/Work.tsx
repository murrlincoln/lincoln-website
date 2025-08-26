'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { HiExternalLink } from 'react-icons/hi';
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl"
    >
      <p className="text-lg text-gray-700 mb-8 font-serif">{intro}</p>
      
      <div className="space-y-8">
        {projects.map(project => (
          <div key={project.id} className="border-t border-gray-200 pt-8 first:border-t-0 first:pt-0">
            <h3 className="text-2xl font-serif mb-3 text-gray-900">
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
                {project.technologies.map(tech => (
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
        ))}
      </div>
    </motion.div>
  );
}
