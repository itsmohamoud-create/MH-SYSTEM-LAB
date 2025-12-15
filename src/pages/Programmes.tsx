import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Rocket, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const Programmes: React.FC = () => {
  const programmes = [
    {
      id: 'sovereign-reset', title: 'Sovereign Reset™', subtitle: 'Health & Metabolic Optimization', icon: Leaf,
      description: 'Reverse chronic conditions, optimize metabolic health, and build sustainable wellness systems.',
      features: ['Personalized nutrition protocols', 'Metabolic health restoration', 'Fitness system design']
    },
    {
      id: 'sovereign-builder', title: 'Sovereign Builder™', subtitle: 'Business Launch & Growth', icon: Rocket, featured: true,
      description: 'From zero to profitable business in 30 days. Complete business development and AI automation.',
      features: ['Business ideation to launch', 'Brand identity & positioning', 'Marketing automation systems']
    },
    {
      id: 'sovereign-mind', title: 'Sovereign Mind™', subtitle: 'Mental Mastery', icon: Brain,
      description: 'Build unshakeable mental resilience, emotional mastery, and cognitive performance.',
      features: ['Emotional regulation frameworks', 'Cognitive restructuring', 'Stress management systems']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16"><h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Every Dimension</h1></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {programmes.map((prog) => (
          <div key={prog.id} className={`relative p-8 rounded-2xl border transition-all hover:scale-105 flex flex-col ${prog.featured ? 'bg-sovereign-gold/10 border-sovereign-gold' : 'bg-white/5 border-white/10'}`}>
            {prog.featured && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sovereign-gold text-[#0F2027] px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>}
            <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-sovereign-gold"><prog.icon size={32} /></div>
            <h3 className="text-2xl font-bold mb-1">{prog.title}</h3>
            <p className="text-sovereign-gold text-sm mb-4">{prog.subtitle}</p>
            <p className="text-gray-400 mb-8 flex-grow">{prog.description}</p>
            <ul className="space-y-3 mb-8">{prog.features.map((f, i) => (<li key={i} className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-sovereign-gold"/>{f}</li>))}</ul>
            <NavLink to={`/programmes/${prog.id}`} className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold transition-colors ${prog.featured ? 'bg-sovereign-gold text-[#0F2027]' : 'border border-sovereign-gold text-sovereign-gold'}`}>View Curriculum <ArrowRight size={18}/></NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Programmes;
