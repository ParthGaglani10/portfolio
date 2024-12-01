'use client';

import { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';

export default function AdminPage() {
  const { blogs, addBlog, deleteBlog } = useBlogContext();
  const [newBlog, setNewBlog] = useState({
    title: '',
    excerpt: '',
    date: '',
    content: '',
  });

  const handleAddPost = () => {
    const newId = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    addBlog({ id: newId, ...newBlog });
    setNewBlog({ title: '', excerpt: '', date: '', content: '' });
  };

  const handleDeletePost = (id) => {
    deleteBlog(id);
  };

  return (
    <main className="min-h-screen p-8 md:p-24 bg-black text-white relative">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
        />
        <input
          type="text"
          placeholder="Excerpt"
          value={newBlog.excerpt}
          onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
          className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
        />
        <input
          type="date"
          value={newBlog.date}
          onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
          className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
        />
        <textarea
          placeholder="Content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Blog
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Existing Blogs</h2>
        {blogs.map(blog => (
          <div key={blog.id} className="mb-4 p-4 bg-gray-900 rounded">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-gray-400">{blog.excerpt}</p>
            <button
              onClick={() => handleDeletePost(blog.id)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
