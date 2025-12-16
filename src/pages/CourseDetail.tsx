
import React from 'react';
import GlassCard from '../components/GlassCard';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 min-h-screen container mx-auto px-6 mb-20 text-center">
    <GlassCard className="p-8">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-white/60">This page is a placeholder for future content.</p>
    </GlassCard>
  </div>
);

const CourseDetail: React.FC = () => <PlaceholderPage title="CourseDetail Page" />;

export default CourseDetail;

