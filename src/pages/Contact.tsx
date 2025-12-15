import React, { useState } from 'react';
import { Mail, MessageSquare, Globe, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setTimeout(() => setSubmitted(true), 1000); };

  if (submitted) return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-md border border-sovereign-gold p-8 rounded-2xl max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-sovereign-gold mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Message Received</h2>
        <p className="text-gray-300 mb-6">A member of our team will contact you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="text-sovereign-gold underline">Send another message</button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12"><h1 className="text-4xl font-bold mb-4">Get In Touch</h1><p className="text-gray-400">Your transformation journey starts with a conversation.</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-sovereign-gold mb-6">Connect Directly</h3>
            <div className="space-y-4">
              <div className="flex gap-4"><Mail className="text-sovereign-gold" /><div><h4>Email</h4><p className="text-sm text-gray-400">contact@mhsystemslab.com</p></div></div>
              <div className="flex gap-4"><MessageSquare className="text-sovereign-gold" /><div><h4>WhatsApp</h4><p className="text-sm text-gray-400">+971 50 147 2676</p></div></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="text-sm text-gray-300">Name *</label><input required className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white" /></div>
              <div><label className="text-sm text-gray-300">Email *</label><input type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white" /></div>
            </div>
            <div><label className="text-sm text-gray-300">Interest *</label><select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white"><option className="bg-gray-900">Sovereign Reset™</option><option className="bg-gray-900">Business Builder</option></select></div>
            <div><label className="text-sm text-gray-300">Message *</label><textarea required rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white"></textarea></div>
            <button type="submit" className="w-full py-4 bg-sovereign-gold text-[#0F2027] font-bold rounded-lg hover:bg-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
