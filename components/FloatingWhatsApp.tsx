import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;