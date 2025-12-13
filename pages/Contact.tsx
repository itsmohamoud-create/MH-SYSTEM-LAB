import React from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-white/60 text-lg">Your transformation journey starts with a conversation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <GlassCard className="p-8 md:p-12" goldBorder>
            <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-sovereign-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email Address *</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-sovereign-gold focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-white/70 text-sm mb-2">I'm Interested In *</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-sovereign-gold focus:outline-none transition-colors [&>option]:text-midnight">
                  <option>Select Programme/Service</option>
                  <option>Sovereign Reset™ (Health)</option>
                  <option>Sovereign Builder™ (Business)</option>
                  <option>Sovereign Mind™ (Mental)</option>
                  <option>AI Tools & Systems</option>
                  <option>Partnership Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message *</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-sovereign-gold focus:outline-none transition-colors"></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-white/60 text-sm">I understand that pricing is provided upon request and flexible payment options are available.</span>
              </div>

              <button type="submit" className="w-full py-4 bg-sovereign-gold text-midnight font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6">Connect Directly</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-sovereign-gold mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:contact@mhsystemslab.com" className="text-white/60 hover:text-white transition-colors">contact@mhsystemslab.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-sovereign-gold mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Global Infrastructure</h4>
                  <p className="text-white/60 text-sm">
                    Serving 5 Continents:<br/>
                    Canada • UK • Europe • East Africa
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 bg-sovereign-gold/10 border-sovereign-gold/30">
            <h3 className="text-xl font-bold text-white mb-3">Response Time</h3>
            <p className="text-white/70 text-sm">We aim to respond to all inquiries within 24 hours. Urgent matters can be escalated via WhatsApp.</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;