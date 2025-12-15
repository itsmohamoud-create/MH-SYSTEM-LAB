import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bot, BarChart2, Activity, PenTool, Sun, Wallet, Zap, Clock, Users, Target, ArrowRight } from 'lucide-react';

const AiTools: React.FC = () => {
  const tools = [
    { icon: Bot, name: "AI Life Architect", category: "Personal Development", description: "Design your life structure and habits with algorithmic precision." },
    { icon: BarChart2, name: "Business Intelligence Suite", category: "Business Growth", description: "Real-time dashboards and predictive modeling for your business." },
    { icon: Activity, name: "Health Optimization AI", category: "Health", description: "Analyze nutritional data and biometric feedback." },
    { icon: PenTool, name: "Content Creation System", category: "Marketing", description: "Generate months of social media content in minutes." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pb-24 pt-32">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">10 AI Systems for Transformation</h1>
        <p className="text-xl text-gray-400">Automated intelligence amplifying your results.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {tools.map((tool, idx) => (
          <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sovereign-gold/50 transition-all hover:-translate-y-1">
            <div className="mb-5 p-3 rounded-xl bg-white/5 w-fit text-sovereign-gold"><tool.icon size={28} /></div>
            <h3 className="text-lg font-bold mb-2 text-white">{tool.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
            <span className="text-[10px] uppercase tracking-widest text-gold-light/70 font-semibold">{tool.category}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <NavLink to="/contact" className="px-8 py-4 bg-sovereign-gold text-[#0F2027] rounded-lg font-bold hover:bg-gold-light transition-colors">Request AI Tools Catalogue</NavLink>
      </div>
    </div>
  );
};
export default AiTools;
