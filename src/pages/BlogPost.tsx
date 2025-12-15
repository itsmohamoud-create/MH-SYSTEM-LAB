import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // In a real app, fetch based on slug. Mock for now:
  const post = {
    title: "The Neuroscience of Breaking Limiting Beliefs", category: "Mental Mastery", author: "MH Systems Team", date: "Dec 15, 2024", readTime: "8 min read",
    content: <><p className="mb-6 text-lg text-gray-300">Your brain is a prediction machine...</p><h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Neuroscience</h2><p className="text-gray-400">Beliefs are physical structures in the brain...</p></>
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <NavLink to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-sovereign-gold mb-8"><ArrowLeft size={16} /> Back to Lab Notes</NavLink>
      <header className="mb-12 text-center">
        <span className="text-sovereign-gold text-xs font-bold uppercase tracking-wider">{post.category}</span>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6">{post.title}</h1>
        <div className="flex justify-center gap-6 text-sm text-gray-400"><span className="flex items-center gap-2"><User size={14} />{post.author}</span><span className="flex items-center gap-2"><Clock size={14} />{post.readTime}</span></div>
      </header>
      <div className="prose prose-invert prose-lg max-w-none mb-12">{post.content}</div>
    </article>
  );
};
export default BlogPost;
