'use client';

import { useParams } from 'next/navigation';
import { useBlogContext } from '../../context/BlogContext';

const BlogPost = () => {
  const { id } = useParams();
  const { blogs } = useBlogContext();

  const blog = blogs.find((post) => post.id === Number(id));

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-400 mb-4">{blog.excerpt}</p>
        <time className="text-sm text-gray-500">{blog.date}</time>
        <div className="mt-8">
          <p>{blog.content}</p>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
