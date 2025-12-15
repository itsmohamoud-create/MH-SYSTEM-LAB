import React, { useState } from 'react';
import { Play, Pause, Mic, Calendar } from 'lucide-react';

const Podcast: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12"><h1 className="text-4xl md:text-6xl font-bold mb-4">The Sovereign Systems Show</h1></div>
      <div className="bg-white/5 border border-sovereign-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl mb-20">
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full bg-black/40 border-4 border-sovereign-gold/20 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={48} className="text-sovereign-gold" /> : <Play size={48} className="text-sovereign-gold ml-2" />}
          </div>
          <div className="flex-1 space-y-4">
            <span className="text-sovereign-gold text-sm">Episode #47 • Dec 15, 2024</span>
            <h2 className="text-3xl font-bold">Breaking Free from Limiting Beliefs</h2>
            <p className="text-gray-300 text-lg">Discover how to identify and eliminate the beliefs that keep you stuck.</p>
            <button onClick={() => setIsPlaying(!isPlaying)} className="px-8 py-3 bg-sovereign-gold text-[#0F2027] font-bold rounded-lg hover:bg-white">{isPlaying ? 'Pause Episode' : 'Play Latest Episode'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Podcast;
