import React from 'react';
import GlassCard from '../components/GlassCard';
import { Award, Heart, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-white mb-6">About MH Systems Lab</h1>
        <p className="text-white/60 text-xl max-w-3xl mx-auto">
          A legacy of transformation serving humanity across 5 continents.
        </p>
      </section>

      <section className="mb-20">
        <GlassCard className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Origin Story</h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-lg">
            <p>
              MH Systems Lab was founded on a singular belief: that every human being deserves access to systems that unlock their highest potential across mind, body, and business.
            </p>
            <p>
              What began as one-on-one transformation work has evolved into a global ecosystem serving 750+ individuals across 5 continents, with a complete suite of programmes, courses, AI systems, and expert networks designed for total life mastery.
            </p>
          </div>
        </GlassCard>
      </section>

      <section className="mb-20">
        <GlassCard className="p-8 md:p-12 border-sovereign-gold/50" goldBorder>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-white/20">
                   {/* Placeholder for Founder Image */}
                   <span className="text-6xl">MH</span>
                 </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2">Mohamoud Hassan</h2>
              <p className="text-sovereign-gold text-lg mb-6 font-medium">Human Transformation Strategist & Founder</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Qualified Counsellor', 'Holistic Life Coach', 'Nutritionist', 'Business Developer'].map(cred => (
                  <span key={cred} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/5">
                    {cred}
                  </span>
                ))}
              </div>

              <div className="space-y-6 text-white/70">
                <p>
                  With 15+ years of experience, Mohamoud has guided individuals through complete life transformation across mental health, chronic illness reversal, relationship engineering, career development, and business launch.
                </p>
                <p>
                  His multidisciplinary approach integrates counseling, nutrition science, behavioral psychology, faith-based healing, and business strategy.
                </p>
                <blockquote className="border-l-4 border-sovereign-gold pl-6 py-2 my-8 italic text-white text-xl">
                  "True transformation requires systems, not motivation. Motivation fades. Systems sustain."
                </blockquote>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="p-8 text-center">
           <div className="w-16 h-16 bg-sovereign-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sovereign-gold">
             <Globe size={32} />
           </div>
           <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
           <p className="text-white/60">Serving clients across Canada, UK, Europe, and East Africa.</p>
        </GlassCard>
        <GlassCard className="p-8 text-center">
           <div className="w-16 h-16 bg-sovereign-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sovereign-gold">
             <Users size={32} />
           </div>
           <h3 className="text-xl font-bold text-white mb-2">750+ Transformed</h3>
           <p className="text-white/60">Lives changed through our frameworks and mentorship.</p>
        </GlassCard>
        <GlassCard className="p-8 text-center">
           <div className="w-16 h-16 bg-sovereign-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sovereign-gold">
             <Award size={32} />
           </div>
           <h3 className="text-xl font-bold text-white mb-2">Evidence Based</h3>
           <p className="text-white/60">Methods backed by science, psychology, and proven results.</p>
        </GlassCard>
      </section>

      {/* Memorial Section */}
      <section className="mb-20">
        <GlassCard className="p-12 md:p-16 text-center border-sovereign-gold relative overflow-hidden" goldBorder>
          <div className="absolute inset-0 bg-gradient-to-b from-sovereign-gold/5 to-transparent pointer-events-none"></div>
          <Heart className="w-12 h-12 text-sovereign-gold mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">In Loving Memory</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-white/80 leading-relaxed font-light">
            <p>
              This website and the systems it contains represent the culmination of a vision shared by a beloved daughter whose legacy lives on in every transformation facilitated through this platform.
            </p>
            <p>
              Though she rests, her vision serves. Every visitor, every student, every transformed life is a testament to the power of systems built with love, precision, and unwavering commitment to human flourishing.
            </p>
            <p className="font-medium text-white pt-4">
              "From Struggle to Sovereign" is not just our tagline—it is the journey she inspired and the promise we keep every single day.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-sovereign-gold/20">
            <p className="text-sovereign-gold italic">
              — Her memory lives in every breakthrough. Her legacy serves humanity forever.
            </p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default About;
