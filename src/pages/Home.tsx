import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Activity, Shield, TrendingUp, Star, Leaf, Rocket, Brain } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sovereign-gold/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block animate-fade-in-up"><span className="px-4 py-1.5 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 text-sovereign-gold text-sm font-medium tracking-wide italic">The Sovereign Method™</span></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">From Struggle to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign-gold via-white to-sovereign-gold animate-shimmer">Sovereign™</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Systems for Mind, Body & Business Mastery. The strategic ecosystem for total performance.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <NavLink to="/programmes" className="w-full sm:w-auto px-8 py-4 bg-sovereign-gold text-[#0F2027] rounded-lg font-bold text-lg hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2">Explore Programmes <ArrowRight size={20} /></NavLink>
            <NavLink to="/contact" className="w-full sm:w-auto px-8 py-4 border border-sovereign-gold text-sovereign-gold rounded-lg font-bold text-lg hover:bg-sovereign-gold/10 transition-all">Free Consultation</NavLink>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <NavLink to="/programmes/sovereign-reset" className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-green-400/50 transition-all hover:-translate-y-2">
            <div className="bg-green-400/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-green-400"><Leaf size={32} /></div>
            <h3 className="text-2xl font-bold text-white mb-2">Sovereign Reset™</h3>
            <p className="text-gray-400 text-sm mb-6">Restore metabolic health and long-term biological performance.</p>
            <div className="flex items-center text-green-400 font-bold text-sm">View Curriculum <ArrowRight size={16} className="ml-2" /></div>
          </NavLink>
          <NavLink to="/programmes/sovereign-builder" className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-sovereign-gold/50 transition-all hover:-translate-y-2 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-sovereign-gold text-[#0F2027] text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
            <div className="bg-sovereign-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-sovereign-gold"><Rocket size={32} /></div>
            <h3 className="text-2xl font-bold text-white mb-2">Sovereign Builder™</h3>
            <p className="text-gray-400 text-sm mb-6">Launch, systemize, and scale a digital business in 30 days.</p>
            <div className="flex items-center text-sovereign-gold font-bold text-sm">View Curriculum <ArrowRight size={16} className="ml-2" /></div>
          </NavLink>
          <NavLink to="/programmes/sovereign-mind" className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-400/50 transition-all hover:-translate-y-2">
            <div className="bg-blue-400/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-400"><Brain size={32} /></div>
            <h3 className="text-2xl font-bold text-white mb-2">Sovereign Mind™</h3>
            <p className="text-gray-400 text-sm mb-6">Develop clarity, emotional control, and elite decision-making.</p>
            <div className="flex items-center text-blue-400 font-bold text-sm">View Curriculum <ArrowRight size={16} className="ml-2" /></div>
          </NavLink>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{l:'Lives Transformed',v:'750+'},{l:'Businesses Launched',v:'28'},{l:'Continents Served',v:'5'},{l:'Automated Systems',v:'100%'}].map((s,i)=>(
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center"><h3 className="text-3xl font-bold text-sovereign-gold mb-2">{s.v}</h3><p className="text-sm text-gray-400 uppercase tracking-wider">{s.l}</p></div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">The Sovereign Method™</h2><p className="text-gray-400">A proven 4-phase transformation framework.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{s:'01',t:'Assessment',d:'Deep analysis of current state.',i:Activity},{s:'02',t:'Systemize',d:'Deploy proven frameworks.',i:Shield},{s:'03',t:'Optimize',d:'Refine systems for efficiency.',i:TrendingUp},{s:'04',t:'Sovereignty',d:'Achieve complete autonomy.',i:Star}].map((p,i)=>(
            <div key={i} className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition-transform"><div className="absolute top-4 right-4 text-sovereign-gold/20 text-6xl font-bold">{p.s}</div><p.i className="w-10 h-10 text-sovereign-gold mb-6"/><h3 className="text-xl font-bold mb-3">{p.t}</h3><p className="text-gray-400 text-sm">{p.d}</p></div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
