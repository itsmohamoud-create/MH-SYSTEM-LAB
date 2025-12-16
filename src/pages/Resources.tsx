import React from 'react';
import { Book, Download, Video, FileText } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Resources: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-white mb-6">Transformation Resources</h1>
        <p className="text-white/60 text-xl max-w-3xl mx-auto">
          Curated tools, guides, and materials to support your journey from struggle to sovereign.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <GlassCard className="p-8 text-center">
          <div className="w-16 h-16 bg-sovereign-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sovereign-gold">
            <Book size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">E-Books & Guides</h3>
          <p className="text-white/60">Comprehensive guides on transformation, health, and business development.</p>
        </GlassCard>

        <GlassCard className="p-8 text-center">
          <div className="w-16 h-16 bg-sovereign-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sovereign-gold">
            <Video size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Video Library</h3>
          <p className="text-white/60">Training videos, workshops, and masterclasses from our expert network.</p>
        </GlassCard>

        <GlassCard className="p-8 text-center">
          <div className="w-16 h-16 bg-sovereign-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sovereign-gold">
            <Download size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Downloadable Tools</h3>
          <p className="text-white/60">Templates, checklists, and frameworks for immediate implementation.</p>
        </GlassCard>
      </section>

      <section className="mb-20">
        <GlassCard className="p-12 md:p-16 text-center border-sovereign-gold relative overflow-hidden" goldBorder>
          <div className="absolute inset-0 bg-gradient-to-b from-sovereign-gold/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Resources Built with Love</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-white/80 leading-relaxed font-light">
            <p>
              Every resource in this collection represents the dedication and vision of a beloved daughter whose legacy continues to transform lives across the globe.
            </p>
            <p>
              These tools are crafted with the same precision, care, and love that she brought to every aspect of life - ensuring that each person who accesses them finds the support they need for their transformation journey.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-sovereign-gold/20">
            <p className="text-sovereign-gold italic">
              — Her wisdom lives in every resource. Her love guides every transformation.
            </p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Resources;
