import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Experts', path: '/experts' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F2027]/80 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col group">
          <h1 className="text-2xl font-bold tracking-tighter text-white group-hover:text-sovereign-gold transition-colors duration-300">
            MH SYSTEMS LAB
          </h1>
          <p className="text-xs italic text-sovereign-gold tracking-wide">
            The Sovereign Method™
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-sovereign-gold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
              {/* Underline Effect */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sovereign-gold transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`} />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-full border border-sovereign-gold/40 text-sovereign-gold hover:bg-sovereign-gold hover:text-midnight transition-all duration-300 text-sm font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Catalogue
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-sovereign-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0F2027]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="text-lg font-medium text-white hover:text-sovereign-gold transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
             <button className="px-8 py-3 rounded-full bg-sovereign-gold text-midnight font-bold uppercase tracking-wider">
              Request Catalogue
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;