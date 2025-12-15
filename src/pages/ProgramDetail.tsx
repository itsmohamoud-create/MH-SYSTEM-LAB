import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { Leaf, Rocket, Brain, CheckCircle, Layers, Shield, Video, FileText, MessageCircle, Award } from 'lucide-react';

const programData: Record<string, any> = {
  'sovereign-reset': {
    title: 'Sovereign Reset™', subtitle: 'Health & Metabolic Optimization', icon: Leaf, colorAccent: 'text-green-400',
    outcome: 'Restore metabolic health, energy, and long-term biological performance.',
    modules: [{title: 'Metabolic Foundation', items: ['Metabolic type awareness', 'Blood sugar control']}, {title: 'Nutrition Sovereignty', items: ['Personalized nutrition', 'Fasting protocols']}],
    gumroadLink: 'https://gum.co/sovereign-reset'
  },
  'sovereign-builder': {
    title: 'Sovereign Builder™', subtitle: 'Business Launch & Growth System', icon: Rocket, colorAccent: 'text-sovereign-gold',
    outcome: 'Launch, systemize, and scale a digital business using automation-first infrastructure.',
    modules: [{title: 'Business Foundation', items: ['Idea validation', 'Market research']}, {title: 'Brand Sovereignty', items: ['Brand identity', 'Digital presence']}],
    gumroadLink: 'https://gum.co/sovereign-builder'
  },
  'sovereign-mind': {
    title: 'Sovereign Mind™', subtitle: 'Mental Mastery & EQ', icon: Brain, colorAccent: 'text-blue-400',
    outcome: 'Develop clarity, emotional control, and elite decision-making under pressure.',
    modules: [{title: 'Mental Foundation', items: ['Cognitive restructuring', 'Mental clarity']}, {title: 'Emotional Mastery', items: ['Regulation frameworks', 'Stress control']}],
    gumroadLink: 'https://gum.co/sovereign-mind'
  }
};

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = programId ? programData[programId] : undefined;
  if (!program) return <Navigate to="/programmes" replace />;

  const Icon = program.icon;

  return (
    <div className="pb-20">
      <section className="pt-20 pb-20 px-4 bg-gradient-to-b from-sovereign-gold/5 to-[#0F2027]">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8 ${program.colorAccent}`}><Icon size={48} /></div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">{program.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">{program.outcome}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Layers className="text-sovereign-gold" /> Curriculum</h2>
            <div className="grid gap-6">
              {program.modules.map((module: any, idx: number) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">0{idx + 1} {module.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {module.items.map((item: string, i: number) => (<div key={i} className="flex gap-2 text-gray-300 text-sm"><CheckCircle size={16} className="text-sovereign-gold/60"/>{item}</div>))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-sovereign-gold/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Begin Your Journey</h3>
            <a href={program.gumroadLink} target="_blank" rel="noreferrer" className="block w-full py-4 bg-sovereign-gold text-[#0F2027] font-bold rounded-lg mb-4 hover:bg-white transition-colors">Request Catalog</a>
            <NavLink to="/contact" className="block w-full py-3 border border-sovereign-gold text-sovereign-gold rounded-lg">Scholarship Options</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgramDetail;
