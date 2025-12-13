import React from 'react';
import GlassCard from '../components/GlassCard';
import { CheckCircle2 } from 'lucide-react';

const Programmes: React.FC = () => {
  const programmes = [
    {
      title: "Sovereign Reset™",
      subtitle: "Health & Metabolic Optimization",
      desc: "Reverse chronic conditions, optimize metabolic health, and build sustainable wellness systems. From diabetes reversal to peak physical performance.",
      features: ["Personalized nutrition protocols", "Metabolic health restoration", "Fitness system design", "Chronic condition management", "Specialist network access"]
    },
    {
      title: "Sovereign Builder™",
      subtitle: "Business Launch & Growth System",
      desc: "From zero to profitable business in 30 days. Complete business development: strategy, branding, website, marketing, and AI automation.",
      features: ["Business ideation to launch (30 days)", "Brand identity & positioning", "Website & digital presence", "Marketing automation systems", "Revenue generation frameworks"]
    },
    {
      title: "Sovereign Mind™",
      subtitle: "Mental Mastery & Emotional Intelligence",
      desc: "Build unshakeable mental resilience, emotional mastery, and cognitive performance. From anxiety management to peak mental performance.",
      features: ["Emotional regulation frameworks", "Cognitive restructuring", "Stress management systems", "Relationship engineering", "Faith-integrated healing"]
    }
  ];

  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-white mb-6">Transformation Programmes</h1>
        <p className="text-white/60 text-lg">
          Three comprehensive pathways designed for total life mastery. Choose your starting point.
        </p>
      </div>

      <div className="grid gap-12">
        {programmes.map((prog, idx) => (
          <GlassCard key={idx} className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center" goldBorder>
             <div className="flex-1">
               <div className="text-sovereign-gold font-semibold uppercase tracking-wider text-sm mb-2">{prog.subtitle}</div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{prog.title}</h2>
               <p className="text-white/70 mb-8 leading-relaxed text-lg">{prog.desc}</p>
               <button className="btn-primary bg-transparent border border-sovereign-gold text-sovereign-gold hover:bg-sovereign-gold hover:text-midnight px-8 py-3 rounded-full transition-all">
                 View Curriculum
               </button>
             </div>
             <div className="flex-1 w-full bg-white/5 rounded-2xl p-8 border border-white/10">
               <h3 className="text-white font-semibold mb-6">What's Included:</h3>
               <ul className="space-y-4">
                 {prog.features.map((feat, i) => (
                   <li key={i} className="flex items-start">
                     <CheckCircle2 className="text-sovereign-gold mr-3 shrink-0" size={20} />
                     <span className="text-white/80">{feat}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </GlassCard>
        ))}
      </div>
      
      <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-sovereign-gold/20 to-transparent border border-sovereign-gold/30 text-center">
        <p className="text-white/90">
          💰 <span className="font-bold text-sovereign-gold">Flexible Pricing:</span> We believe transformation should be accessible. Contact us for custom payment plans, scholarships, or reduced rates.
        </p>
      </div>
    </div>
  );
};

export default Programmes;