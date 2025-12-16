import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useParams, Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  
  const post = {
    title: "The Sovereign Method: A Complete Transformation Framework",
    content: "This comprehensive guide explores the revolutionary approach that has helped hundreds of individuals achieve complete life mastery...",
    date: "December 15, 2024",
    author: "MH Systems Lab Team",
    category: "Transformation"
  };

  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sovereign-gold hover:text-sovereign-gold/80 mb-8">
        <ArrowLeft size={16} /> Back to Blog
      </Link>
      
      <GlassCard className="p-8 md:p-12">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-sovereign-gold/20 text-sovereign-gold text-sm rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/80 leading-relaxed text-lg">{post.content}</p>
        </div>
      </GlassCard>
    </div>
  );
};

export default BlogPost;
