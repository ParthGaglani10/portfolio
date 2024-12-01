'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[120px] font-bold tracking-tighter leading-none text-center relative"
      >
        <div className="relative z-10">PARTH</div>
        <div className="-mt-8 relative z-10">GAGLANI</div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 filter blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl"
      >
        {/* Parth Gaglani - Futurist Software Engineer */}
      </motion.p>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        className="absolute bottom-8 flex space-x-1"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </main>
  );
}
