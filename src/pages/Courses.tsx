import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Cpu, Heart, Clock, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const courses = [
  {
    id: 1,
    title: "The 7-Day Neuro-Reset",
    tagline: "Instant Nervous System Calibration",
    icon: Heart,
    duration: "7 Days",
    price: "$49",
    description: "A rapid protocol to pull you out of chronic stress and establish baseline calm. Essential for high performers.",
  },
  {
    id: 2,
    title: "Deep Work Architect",
    tagline: "Mastering Uninterrupted Focus",
    icon: Clock,
    duration: "4 Hours",
    price: "$99",
    description: "Learn to build environmental and cognitive shields to protect your most valuable asset: concentrated time.",
  },
  {
    id: 3,
    title: "AI Automation Blueprint",
    tagline: "Building Your Digital Assistant",
    icon: Cpu,
    duration: "6 Modules",
    price: "$199",
    description: "A hands-on guide to automating business tasks, lead generation, and communications using modern AI tools.",
  },
  {
    id: 4,
    title: "Financial System Zero",
    tagline: "The Automated Budgeting Protocol",
    icon: TrendingUp,
    duration: "2 Hours",
    price: "$49",
    description: "Set up a zero-effort financial system that handles budgeting, savings, and micro-investing automatically.",
  },
];

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 container mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Self-Paced <span className="text-sovereign-gold">Courses</span>
        </h1>
        <p className="text-xl text-white/60">
          Instant access micro-courses designed to solve a single, high-leverage problem in hours, not months.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <GlassCard key={course.id} className="p-6 flex flex-col justify-between" hoverEffect>
            <div>
              <div className="mb-4 p-3 w-12 h-12 bg-white/5 rounded-xl text-sovereign-gold">
                <course.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-sm font-medium text-white/80 mb-4">{course.tagline}</p>
              
              <p className="text-white/60 text-sm mb-6 flex-grow">{course.description}</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center text-sm text-white/70 mb-4 border-t border-white/10 pt-4">
                <span><BookOpen size={16} className="inline mr-2 text-sovereign-gold"/> {course.duration}</span>
                <span className="font-bold text-sovereign-gold text-lg">{course.price}</span>
              </div>
              
              <Link 
                to={`/enroll/${course.id}`} // Points to a generic enrollment/checkout route
                className="w-full py-3 rounded-lg bg-sovereign-gold text-midnight font-bold flex items-center justify-center gap-2 transition-all hover:bg-white text-sm"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
