'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: 'AI-Powered Analytics', 
    description: 'Revolutionizing data insights with machine learning',
    tech: ['TensorFlow', 'Python', 'React'],
  },
  { 
    id: 2, 
    title: 'Quantum Encryption', 
    description: 'Next-gen security for the post-quantum era',
    tech: ['Q#', 'Python', 'C++'],
  },
  { 
    id: 3, 
    title: 'Neural Interface', 
    description: 'Bridging human cognition and digital realms',
    tech: ['Rust', 'C++', 'CUDA'],
  },
  { 
    id: 4, 
    title: 'Holographic Display', 
    description: 'Immersive 3D visualizations without glasses',
    tech: ['OpenGL', 'C++', 'Unity'],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center"
      >
        Pioneering Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`border border-white/20 p-6 md:p-8 rounded-xl backdrop-blur-sm bg-white/5 h-full flex flex-col transition-all duration-300 ${hoveredIndex === index ? 'bg-white/10' : ''}`}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs">{tech}</span>
                ))}
              </div>
              <motion.div
                className="absolute top-4 right-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
