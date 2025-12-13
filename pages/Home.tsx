import React, { useState } from 'react';
import { ArrowRight, Star, Activity, Briefcase, Brain, Users, Globe } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AssessmentModal from '../components/AssessmentModal';

const Home: React.FC = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <div className="pt-24 min-h-screen">
      <AssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="container mx-auto text-center z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 backdrop-blur-sm animate-fade-in-up">
            <span className="text-sovereign-gold text-sm font-semibold tracking-wider uppercase">The Sovereign Method™</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
            From Struggle to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign-gold to-gold-light">Sovereign™</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Systems for Mind, Body & Business Mastery. The strategic ecosystem for total performance: 
            Emotional Mastery • Health Optimization • Educational Excellence • Business Growth
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-300">
            <button 
              className="px-8 py-4 bg-sovereign-gold hover:bg-gold-dark text-midnight font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 w-full md:w-auto"
              onClick={() => setIsAssessmentOpen(true)}
            >
              Take Assessment
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-sovereign-gold text-white rounded-full transition-all duration-300 hover:bg-white/5 w-full md:w-auto">
              Explore Programmes
            </button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 hidden md:block">
           <div className="container mx-auto px-6">
             <div className="grid grid-cols-4 gap-4">
               {[
                 { val: '750+', label: 'Lives Transformed' },
                 { val: '28', label: 'Businesses Launched' },
                 { val: '5', label: 'Continents Served' },
                 { val: '100%', label: 'Automated Systems' },
               ].map((stat, idx) => (
                 <GlassCard key={idx} className="p-6 text-center" hoverEffect={false}>
                   <h3 className="text-3xl font-bold text-sovereign-gold">{stat.val}</h3>
                   <p className="text-xs text-white/60 uppercase tracking-widest mt-1">{stat.label}</p>
                 </GlassCard>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* The Sovereign Method */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Sovereign Method™</h2>
            <p className="text-white/60 max-w-2xl mx-auto">A proven 4-phase transformation framework spanning mind, body, and business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { phase: '01', title: 'Assessment & Foundation', desc: 'Deep analysis of current state. Identify gaps, strengths, and transformation opportunities.' },
              { phase: '02', title: 'System Implementation', desc: 'Deploy proven frameworks across health, mindset, and business operations with AI.' },
              { phase: '03', title: 'Optimization & Scale', desc: 'Refine systems for maximum efficiency. Scale what works, eliminate what doesn\'t.' },
              { phase: '04', title: 'Sovereignty & Legacy', desc: 'Achieve complete autonomy. Build systems that run without you while creating lasting impact.' }
            ].map((item, idx) => (
              <GlassCard key={idx} className="p-8 h-full flex flex-col" goldBorder>
                <div className="text-6xl font-bold text-white/5 mb-6 absolute top-4 right-6 pointer-events-none">{item.phase}</div>
                <div className="w-12 h-12 rounded-full bg-sovereign-gold/20 flex items-center justify-center mb-6 text-sovereign-gold">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Showcase */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div className="max-w-xl">
               <h2 className="text-4xl font-bold text-white mb-4">Transform Every Dimension</h2>
               <p className="text-white/60">Three comprehensive programmes designed for total life mastery.</p>
             </div>
             <button className="hidden md:flex items-center space-x-2 text-sovereign-gold hover:text-white transition-colors">
               <span>View All Programmes</span>
               <ArrowRight size={20} />
             </button>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Card 1 */}
             <GlassCard className="p-8 group" goldBorder>
               <div className="mb-6 flex justify-between items-start">
                 <div className="p-3 bg-green-500/20 text-green-400 rounded-lg"><Activity /></div>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Sovereign Reset™</h3>
               <p className="text-sovereign-gold text-sm mb-4">Health & Metabolic Optimization</p>
               <p className="text-white/60 text-sm mb-6">Reverse chronic conditions, optimize metabolic health, and build sustainable wellness systems.</p>
               <ul className="space-y-2 mb-8">
                 {['Personalized nutrition', 'Metabolic restoration', 'Fitness systems'].map(f => (
                   <li key={f} className="flex items-center text-sm text-white/80">
                     <Star size={12} className="text-sovereign-gold mr-2" /> {f}
                   </li>
                 ))}
               </ul>
               <button className="w-full py-3 border border-white/20 rounded-xl text-white hover:bg-sovereign-gold hover:text-midnight transition-all">Learn More</button>
             </GlassCard>

             {/* Card 2 - Featured */}
             <GlassCard className="p-8 group relative transform md:-translate-y-4 border-sovereign-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]" goldBorder>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-sovereign-gold text-midnight text-xs font-bold px-4 py-1 rounded-b-lg uppercase tracking-wider">Most Popular</div>
               <div className="mb-6 flex justify-between items-start mt-4">
                 <div className="p-3 bg-sovereign-gold/20 text-sovereign-gold rounded-lg"><Briefcase /></div>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Sovereign Builder™</h3>
               <p className="text-sovereign-gold text-sm mb-4">Business Launch & Growth System</p>
               <p className="text-white/60 text-sm mb-6">From zero to profitable business in 30 days. Branding, website, marketing, and AI automation.</p>
               <ul className="space-y-2 mb-8">
                 {['30-day launch roadmap', 'Marketing automation', 'Revenue frameworks'].map(f => (
                   <li key={f} className="flex items-center text-sm text-white/80">
                     <Star size={12} className="text-sovereign-gold mr-2" /> {f}
                   </li>
                 ))}
               </ul>
               <button className="w-full py-3 bg-sovereign-gold rounded-xl text-midnight font-bold hover:bg-white transition-all">Start Building</button>
             </GlassCard>

             {/* Card 3 */}
             <GlassCard className="p-8 group" goldBorder>
               <div className="mb-6 flex justify-between items-start">
                 <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg"><Brain /></div>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Sovereign Mind™</h3>
               <p className="text-sovereign-gold text-sm mb-4">Mental Mastery & EQ</p>
               <p className="text-white/60 text-sm mb-6">Build unshakeable mental resilience, emotional mastery, and cognitive performance.</p>
               <ul className="space-y-2 mb-8">
                 {['Emotional regulation', 'Cognitive restructuring', 'Stress management'].map(f => (
                   <li key={f} className="flex items-center text-sm text-white/80">
                     <Star size={12} className="text-sovereign-gold mr-2" /> {f}
                   </li>
                 ))}
               </ul>
               <button className="w-full py-3 border border-white/20 rounded-xl text-white hover:bg-sovereign-gold hover:text-midnight transition-all">Learn More</button>
             </GlassCard>
           </div>
        </div>
      </section>

      {/* Expert Network Teaser */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Supported by World-Class Experts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { title: 'Medical Doctors', icon: <Activity /> },
                 { title: 'Business Mentors', icon: <Briefcase /> },
                 { title: 'Therapists', icon: <Users /> },
                 { title: 'AI Specialists', icon: <Globe /> },
               ].map((exp, idx) => (
                 <GlassCard key={idx} className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/10" goldBorder>
                    <div className="text-sovereign-gold mb-3">{exp.icon}</div>
                    <h4 className="text-white font-medium">{exp.title}</h4>
                 </GlassCard>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;