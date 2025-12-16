import React from 'react';
import GlassCard from '../components/GlassCard';
import {
  Stethoscope,
  Brain,
  Heart,
  Briefcase,
  Apple,
  Dumbbell,
  Cpu,
  ShieldCheck
} from 'lucide-react';

const Experts: React.FC = () => {
  const categories = [
    {
      title: "Medical Doctors",
      subtitle: "Healthcare Specialists",
      desc: "Cardiologists, physicians, and medical professionals for comprehensive health guidance.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Psychiatrists & Therapists",
      subtitle: "Mental Health Experts",
      desc: "Licensed professionals for anxiety, depression, trauma, and emotional wellbeing.",
      icon: <Brain size={32} />
    },
    {
      title: "Faith-Based Support",
      subtitle: "Spiritual Guidance & Ruqya",
      desc: "Faith-integrated healing practices and spiritual counseling.",
      icon: <Heart size={32} />
    },
    {
      title: "Business Mentors",
      subtitle: "Career & Entrepreneurship",
      desc: "Strategic mentoring for business growth and professional advancement.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Nutrition Specialists",
      subtitle: "Dietary & Metabolic Health",
      desc: "Personalized nutrition protocols for optimal health and disease reversal.",
      icon: <Apple size={32} />
    },
    {
      title: "Fitness Trainers",
      subtitle: "Movement & Performance",
      desc: "Exercise programming and physical optimization strategies.",
      icon: <Dumbbell size={32} />
    },
    {
      title: "AI Implementation",
      subtitle: "Technology & Automation",
      desc: "AI integration specialists for business and personal optimization.",
      icon: <Cpu size={32} />
    },
    {
      title: "Life Coaches",
      subtitle: "Holistic Development",
      desc: "Certified coaches guiding you through total life transformation.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">
          World-Class Expert Network
        </h1>
        <p className="text-white/60 text-lg">
          8 specialist categories. Decades of combined expertise. One unified mission: Your transformation.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <GlassCard
            key={idx}
            className="p-6 flex flex-col items-center text-center h-full hover:border-sovereign-gold group"
            goldBorder
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-sovereign-gold mb-6 group-hover:bg-sovereign-gold group-hover:text-midnight transition-all duration-300">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
            <p className="text-sovereign-gold text-xs font-bold uppercase tracking-wider mb-4">
              {cat.subtitle}
            </p>
            <p className="text-white/60 text-sm mb-6 flex-grow">
              {cat.desc}
            </p>
            <button className="w-full py-2 border border-white/10 rounded-lg text-white/80 hover:bg-sovereign-gold hover:text-midnight hover:border-transparent transition-all text-sm font-medium">
              Find Specialist
            </button>
          </GlassCard>
        ))}
      </div>

      <section className="mt-20">
        <GlassCard className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-sovereign-gold/10 to-transparent">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              How It Works
            </h2>
            <p className="text-white/70">
              Select your expert, book a session, and receive instant confirmation.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-sovereign-gold mb-1">01</div>
              <div className="text-xs text-white/50 uppercase">Select</div>
            </div>
            <div className="text-center px-4 border-l border-white/10">
              <div className="text-3xl font-bold text-sovereign-gold mb-1">02</div>
              <div className="text-xs text-white/50 uppercase">Book</div>
            </div>
            <div className="text-center px-4 border-l border-white/10">
              <div className="text-3xl font-bold text-sovereign-gold mb-1">03</div>
              <div className="text-xs text-white/50 uppercase">Transform</div>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Experts;

