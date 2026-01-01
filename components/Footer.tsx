import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-midnight/95 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sovereign-gold to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-midnight font-bold text-xl">MH</span>
              </div>
              <span className="text-lg font-bold text-white">SYSTEMS LAB</span>
            </div>
            <p className="text-white/60 text-sm">
              Building sovereign systems for the next generation of leaders.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/programmes" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">Programmes</Link></li>
              <li><Link to="/experts" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">Experts</Link></li>
              <li><Link to="/courses" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">Courses</Link></li>
              <li><Link to="/resources" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-sovereign-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@mhsystemslab.com</span>
              </li>
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © {currentYear} MH Systems Lab. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-sovereign-gold transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-sovereign-gold transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-sovereign-gold transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
