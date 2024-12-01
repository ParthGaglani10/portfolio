'use client';

import { motion } from 'framer-motion';

const skills = [
  'AI/ML',
  'Quantum Computing',
  'Blockchain',
  'AR/VR',
  'IoT',
];

const experiences = [
  { year: '2023', role: 'Lead AI Engineer', company: 'FutureTech Inc.' },
  { year: '2021', role: 'Senior Blockchain Developer', company: 'CryptoInnovate' },
  { year: '2019', role: 'VR/AR Specialist', company: 'ImmersiveWorlds' },
];

export default function About() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center"
      >
        About Me
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl mb-12 text-center">
            I'm a visionary software engineer pushing the boundaries of what's possible in tech. 
            With a focus on emerging technologies, I'm dedicated to shaping the future of digital experiences.
          </p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Expertise
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="text-2xl font-bold text-gray-500">{exp.year}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
