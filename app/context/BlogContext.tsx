'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const initialBlogs: Blog[] = [
  {
    id: 1,
    title: 'Exploring the Future of AI',
    excerpt: 'AI is rapidly evolving, transforming industries and creating new opportunities.',
    date: '2023-10-10',
    content: 'Detailed content about AI.',
  },
  {
    id: 2,
    title: 'The Rise of Quantum Computing',
    excerpt: 'Quantum computing is set to revolutionize the tech world.',
    date: '2023-09-25',
    content: 'Detailed content about Quantum Computing.',
  },
  {
    id: 3,
    title: 'Blockchain Beyond Cryptocurrency',
    excerpt: 'Blockchain technology is widely known for its role in cryptocurrencies.',
    date: '2023-08-15',
    content: 'Detailed content about Blockchain.',
  },
];

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBlogs = localStorage.getItem('blogs');
      if (storedBlogs) {
        setBlogs(JSON.parse(storedBlogs));
      }
    }
  }, []);

  const addBlog = (blog: Blog) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = [...prevBlogs, blog];
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      return updatedBlogs;
    });
  };

  const deleteBlog = (id: number) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.filter(blog => blog.id !== id);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      return updatedBlogs;
    });
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};
