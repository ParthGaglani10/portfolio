'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useBlogContext } from '../context/BlogContext';

const Blog = () => {
  const { blogs } = useBlogContext();

  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center"
      >
        Blog
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        {blogs.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12"
          >
            <Link href={`/blog/${post.id}`} className="block group relative z-10">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-2">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default Blog;
