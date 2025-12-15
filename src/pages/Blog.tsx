import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { Clock, ArrowRight, Tag, Loader2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const categories = [
    "All Articles", "Mental Mastery", "Health Optimization", "Business Growth", "AI & Technology", "Success Stories"
  ];

  const articles = [
    {
      title: "The Neurochemistry of Focus: Reclaiming Your Attention",
      category: "Mental Mastery",
      excerpt: "In a world of constant dopamine spikes, deep work is a superpower. Here is the protocol for resetting your attention span.",
      readTime: "5 min read",
      date: "Jan 15, 2025"
    },
    {
      title: "Reversing Type 2 Diabetes: A 90-Day Case Study",
      category: "Health Optimization",
      excerpt: "Ahmed K. went from an A1C of 9.4 to 5.6 in three months. We break down the exact nutritional systems used.",
      readTime: "8 min read",
      date: "Jan 10, 2025"
    },
    {
      title: "Automating Agency Operations with AI Agents",
      category: "AI & Technology",
      excerpt: "Stop trading time for money. How to build a fleet of AI agents to handle customer support and lead generation.",
      readTime: "6 min read",
      date: "Jan 02, 2025"
    },
    {
      title: "The Sovereign Morning Routine",
      category: "Mental Mastery",
      excerpt: "How you start the day dictates how you end it. The 4-step sequence for priming mind and body.",
      readTime: "4 min read",
      date: "Dec 28, 2024"
    },
    {
      title: "Financial Sovereignty in a Volatile Economy",
      category: "Business Growth",
      excerpt: "Why diversifying income streams is no longer optional. Building resilience through digital assets.",
      readTime: "7 min read",
      date: "Dec 15, 2024"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you for subscribing! We've sent a confirmation to ${email}.`);
      setEmail('');
      setIsSubscribing(false);
    }, 1500);
  };

  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Lab Notes</h1>
        <p className="text-white/60 text-lg">Insights, strategies, and breakthroughs in human transformation.</p>
      </section>

      <section className="mb-12 overflow-x-auto pb-4">
        <div className="flex space-x-4 min-w-max px-2">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                idx === 0 
                  ? 'bg-sovereign-gold text-midnight' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {articles.map((article, idx) => (
            <GlassCard key={idx} className="p-8 group cursor-pointer" goldBorder>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sovereign-gold text-xs font-bold uppercase tracking-wider">{article.category}</span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-white/40 text-xs">{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sovereign-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                 <div className="flex items-center text-white/50 text-sm">
                   <Clock size={16} className="mr-2" /> {article.readTime}
                 </div>
                 <span className="text-sovereign-gold flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">
                   Read Article <ArrowRight size={16} className="ml-2" />
                 </span>
              </div>
            </GlassCard>
          ))}
        </div>

        <aside className="space-y-8">
           <GlassCard className="p-8 relative overflow-hidden" goldBorder>
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Mail size={120} className="text-sovereign-gold transform -rotate-12" />
             </div>

             <h3 className="text-xl font-bold text-white mb-4 relative z-10">Subscribe to Lab Notes</h3>
             <p className="text-white/60 text-sm mb-6 relative z-10">Get the latest protocols and strategies delivered to your inbox.</p>
             <form onSubmit={handleSubscribe} className="relative z-10">
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 placeholder="Your email address" 
                 className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white mb-4 focus:border-sovereign-gold outline-none placeholder:text-white/30 transition-colors" 
               />
               <button 
                 type="submit" 
                 disabled={isSubscribing}
                 className="w-full btn-primary bg-sovereign-gold text-midnight font-bold py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
               >
                 {isSubscribing ? (
                   <>
                     <Loader2 className="animate-spin mr-2" size={20} />
                     Subscribing...
                   </>
                 ) : (
                   'Subscribe Now'
                 )}
               </button>
             </form>
           </GlassCard>

           <GlassCard className="p-8">
             <h3 className="text-xl font-bold text-white mb-4">Popular Topics</h3>
             <div className="flex flex-wrap gap-2">
               {['Diabetes Reversal', 'AI Systems', 'Stoicism', 'Business Launch', 'Ruqya', 'Focus', 'Sleep Optimization'].map(tag => (
                 <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70 hover:border-sovereign-gold cursor-pointer transition-colors hover:text-white">
                   {tag}
                 </span>
               ))}
             </div>
           </GlassCard>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
