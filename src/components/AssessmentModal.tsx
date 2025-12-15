import React, { useState } from 'react';
import { X, ChevronRight, Check } from 'lucide-react';
import GlassCard from './GlassCard';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    category: 'Mind',
    question: "How often do you feel overwhelmed or anxious about the future?",
    options: ["Daily", "Weekly", "Rarely", "Never"],
    weights: [1, 2, 3, 4]
  },
  {
    category: 'Body',
    question: "How would you rate your consistent energy levels throughout the day?",
    options: ["Low/Crash often", "Inconsistent", "Good", "Peak Performance"],
    weights: [1, 2, 3, 4]
  },
  {
    category: 'Education & Skills',
    question: "How consistently are you acquiring and implementing new high-value skills?",
    options: ["Rarely learning", "Learning but not applying", "Consistent growth", "Rapid acquisition & execution"],
    weights: [1, 2, 3, 4]
  },
  {
    category: 'Business',
    question: "Do you have automated systems generating revenue without your active presence?",
    options: ["None", "Some manual systems", "Partially automated", "Fully automated"],
    weights: [1, 2, 3, 4]
  }
];

const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  if (!isOpen) return null;

  const handleOptionSelect = (weight: number) => {
    setScore(prev => prev + weight);
    if (step < questions.length) {
      setStep(prev => prev + 1);
    }
  };

  const getResult = () => {
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;
    
    // Archetype Logic based on total score percentage
    if (percentage < 50) return { title: "Foundation Needed", desc: "You are in the survival phase. Prioritize Sovereign Reset™ to stabilize your baseline." };
    if (percentage < 80) return { title: "Building Momentum", desc: "You have potential but lack systems. Sovereign Builder™ will automate your growth." };
    return { title: "Sovereign State", desc: "You are operating at a high level. Join our Mastermind to scale your legacy." };
  };

  const result = getResult();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-midnight/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      <GlassCard className="w-full max-w-lg p-8 relative z-10 animate-fade-in-up" goldBorder>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {step < questions.length ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
               <span className="text-sovereign-gold text-sm font-bold uppercase tracking-widest">
                 Step {step + 1} of {questions.length}
               </span>
               <span className="text-white/50 text-xs">{questions[step].category} Mastery</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 leading-tight">
              {questions[step].question}
            </h3>

            <div className="space-y-3">
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(questions[step].weights[idx])}
                  className="w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sovereign-gold hover:bg-sovereign-gold/10 transition-all duration-200 flex items-center justify-between group"
                >
                  <span className="text-white group-hover:text-sovereign-gold transition-colors">{option}</span>
                  <ChevronRight size={18} className="text-white/30 group-hover:text-sovereign-gold group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
             <div className="w-20 h-20 rounded-full border-2 border-sovereign-gold mx-auto flex items-center justify-center mb-6">
               <Check size={40} className="text-sovereign-gold" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-2">Analysis Complete</h2>
             <p className="text-gold-light mb-6">Your Archetype: <span className="text-sovereign-gold font-bold">{result.title}</span></p>
             <p className="text-white/80 mb-8 leading-relaxed">
               {result.desc}
             </p>
             <button onClick={onClose} className="btn-primary w-full py-4 bg-sovereign-gold text-[#0F2027] font-bold rounded-lg hover:bg-white transition-colors">
               Get Your Full Roadmap
             </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default AssessmentModal;
