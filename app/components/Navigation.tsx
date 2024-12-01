'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-8 right-8 z-50 text-sm font-medium bg-black text-white px-4 py-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-64 bg-black text-white z-40 flex flex-col justify-center"
          >
            <ul className="text-4xl font-bold space-y-8 pl-12">
              {['Home', 'Projects', 'About', 'Contact', 'Blog'].map((item, index) => (
                <motion.li key={item} variants={linkVariants} transition={{ duration: 0.5 }}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
