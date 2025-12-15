import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 pt-20 pb-10 border-t border-white/10 bg-[#0F2027]/90 backdrop-blur-lg mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
               <img 
                src="/logo.jpg" 
                alt="MH Systems Lab" 
                className="h-24 w-auto mix-blend-screen mb-4"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "From Struggle to Sovereign™"<br />
              Systems for Mind, Body & Business Mastery
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/mhsystemslab" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sovereign-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/mhsystemslab" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sovereign-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/mhsystemslab" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sovereign-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/mhsystemslab" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sovereign-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com/@mhsystemslab" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sovereign-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-white font-bold mb-6">Programmes</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/programmes" className="hover:text-sovereign-gold transition-colors">Sovereign Reset™</Link></li>
              <li><Link to="/programmes" className="hover:text-sovereign-gold transition-colors">Sovereign Builder™</Link></li>
              <li><Link to="/programmes" className="hover:text-sovereign-gold transition-colors">Sovereign Mind™</Link></li>
              <li><Link to="/programmes" className="hover:text-sovereign-gold transition-colors">All Programmes</Link></li>
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="text-white font-bold mb-6">Learning</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/courses" className="hover:text-sovereign-gold transition-colors">Certification Courses</Link></li>
              <li><Link to="/ai-tools" className="hover:text-sovereign-gold transition-colors">AI Tools Suite</Link></li>
              <li><Link to="/resources" className="hover:text-sovereign-gold transition-colors">Free Resources</Link></li>
              <li><Link to="/blog" className="hover:text-sovereign-gold transition-colors">Lab Notes (Blog)</Link></li>
              <li><Link to="/podcast" className="hover:text-sovereign-gold transition-colors">Podcast</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/experts" className="hover:text-sovereign-gold transition-colors">Teams & Experts</Link></li>
              <li><Link to="/partners" className="hover:text-sovereign-gold transition-colors">Partnership Opportunities</Link></li>
              <li><Link to="/about" className="hover:text-sovereign-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sovereign-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="mb-2 text-sovereign-gold/80">✨ Built with love as a living memorial. Every transformation honors a legacy of service to humanity. ✨</p>
            <p>&copy; 2025 MH Systems Lab. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
