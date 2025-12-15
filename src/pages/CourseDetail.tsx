import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { Award, Clock, BookOpen, Users, CheckCircle } from 'lucide-react';

const courseData: Record<string, any> = {
  'family-systems': {
    title: 'Relationship & Family Systems', subtitle: 'Restore harmony and build generational resilience', duration: '4 Weeks', level: 'Intermediate',
    description: 'A comprehensive framework for understanding and healing family dynamics.',
    curriculum: ['The Architecture of Family Dynamics', 'Conflict Resolution Frameworks', 'Healing Intergenerational Patterns'],
    gumroadLink: 'https://gum.co/familysystems'
  },
  'addiction-recovery': {
    title: 'Addiction Recovery Toolkit', subtitle: 'Science-backed protocols for lasting freedom', duration: '6 Weeks', level: 'All Levels',
    description: 'The Breaking Free Protocol combines neuroscience and spiritual principles.',
    curriculum: ['The Neuroscience of Addiction', 'Identifying Triggers', 'Physiology of Detox'],
    gumroadLink: 'https://gum.co/recovery'
  }
};

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? courseData[courseId] : undefined;
  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="pb-20 pt-12">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">{course.title}</h1>
        <p className="text-xl text-sovereign-gold font-light italic mb-6">{course.subtitle}</p>
        <div className="flex justify-center gap-6 text-sm text-gray-400">
           <span className="flex items-center gap-2"><Clock size={16} /> {course.duration}</span>
           <span className="flex items-center gap-2"><BookOpen size={16} /> {course.level}</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-8"><h2 className="text-2xl font-bold mb-4">Overview</h2><p className="text-gray-300">{course.description}</p></div>
           <div>
             <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
             <div className="space-y-4">{course.curriculum.map((m: string, i: number) => <div key={i} className="bg-white/5 p-4 rounded-xl flex gap-4"><span className="text-sovereign-gold font-bold">0{i+1}</span><span>{m}</span></div>)}</div>
           </div>
        </div>
        <div className="lg:col-span-1">
           <div className="bg-white/5 border border-sovereign-gold/30 rounded-2xl p-6 sticky top-24">
             <h3 className="text-xl font-bold mb-4">Enroll Today</h3>
             <a href={course.gumroadLink} target="_blank" rel="noreferrer" className="block w-full py-4 bg-sovereign-gold text-[#0F2027] font-bold text-center rounded-lg mb-4">Enroll Now</a>
           </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetail;
