'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center"
      >
        Contact Me
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-lg">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
            rows={4}
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </main>
  );
}
