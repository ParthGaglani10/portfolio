'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const blogData = {
  1: {
    title: 'Exploring the Future of AI',
    date: 'October 10, 2023',
    content: `Artificial Intelligence (AI) is rapidly evolving, transforming industries and creating new opportunities. In this blog, we explore the future of AI and its potential impact on society. This detailed exploration covers various aspects of AI advancements and their implications for the future. We delve into AI ethics, machine learning advancements, and the integration of AI in everyday life.`,
  },
  2: {
    title: 'The Rise of Quantum Computing',
    date: 'September 25, 2023',
    content: `Quantum computing is set to revolutionize the tech world. This blog delves into the basics of quantum computing and its potential applications. We explore the fundamental principles of quantum mechanics and how they are applied in computing. The blog also discusses the challenges and breakthroughs in quantum computing research.`,
  },
  3: {
    title: 'Blockchain Beyond Cryptocurrency',
    date: 'August 15, 2023',
    content: `While blockchain technology is widely known for its role in cryptocurrencies, its applications extend far beyond. Discover how blockchain is being utilized in various sectors, including supply chain management, healthcare, and finance. This blog provides an in-depth analysis of blockchain's potential to transform industries.`,
  },
};

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogData[id];

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center"
      >
        {blog.title}
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-400 mb-4">{blog.date}</p>
        <p className="text-lg">{blog.content}</p>
      </div>
    </main>
  );
};

export default BlogPost;
