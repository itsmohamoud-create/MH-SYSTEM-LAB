import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Programmes',
    path: '/programmes',
    children: [
      { label: 'Sovereign Reset™', path: '/programmes/sovereign-reset' },
      { label: 'Sovereign Builder™', path: '/programmes/sovereign-builder' },
      { label: 'Sovereign Mind™', path: '/programmes/sovereign-mind' },
    ]
  },
  { label: 'Courses', path: '/courses' },
  { label: 'AI Tools', path: '/ai-tools' },
  { label: 'Teams & Experts', path: '/experts' },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Free Downloads', path: '/resources' },
      { label: 'Lab Notes', path: '/blog' },
      { label: 'Podcast', path: '/podcast' },
    ]
  },
  { label: 'About', path: '/about' },
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

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F2027]/80 backdrop-blur-lg border-b border-white/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group z-50">
          <img 
            src="/logo.jpg" 
            alt="MH Systems Lab" 
            className="h-16 md:h-20 w-auto mix-blend-screen object-contain transition-transform duration-300 group-hover:scale-105 select-none"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-sovereign-gold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                )}
              </Link>
              
              {/* Underline Effect */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sovereign-gold transition-all duration-300 group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`} />
              
              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
                  <ul className="bg-[#0F2027]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl w-56 py-2">
                    {item.children.map(child => (
                      <li key={child.label}>
                        <Link
                          to={child.path}
                          className={`block px-6 py-3 text-sm transition-colors ${
                            location.pathname === child.path 
                              ? 'text-sovereign-gold bg-white/5' 
                              : 'text-white/80 hover:text-sovereign-gold hover:bg-white/5'
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="px-6 py-2 rounded-full border border-sovereign-gold/40 text-sovereign-gold hover:bg-sovereign-gold hover:text-midnight transition-all duration-300 text-sm font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-sovereign-gold transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-[#0F2027]/98 backdrop-blur-xl transition-all duration-300 overflow-y-auto ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
          <ul className="flex flex-col items-center space-y-6 w-full max-w-sm">
            {navItems.map((item) => (
              <li key={item.label} className="w-full text-center group">
                <Link
                  to={item.path}
                  className={`text-2xl font-medium transition-colors block py-2 ${
                    isActive(item.path) ? 'text-sovereign-gold' : 'text-white hover:text-sovereign-gold'
                  }`}
                  onClick={() => !item.children && setIsOpen(false)}
                >
                  {item.label}
                </Link>
                
                {/* Mobile Submenu */}
                {item.children && (
                  <ul className="mt-2 space-y-3 bg-white/5 rounded-xl p-4 w-full">
                    {item.children.map(child => (
                      <li key={child.label}>
                        <Link
                          to={child.path}
                          className={`text-base block py-1 ${
                            location.pathname === child.path
                              ? 'text-sovereign-gold'
                              : 'text-white/70 hover:text-white'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-8 w-full">
               <Link 
                 to="/contact" 
                 className="w-full py-4 rounded-full bg-sovereign-gold text-midnight font-bold uppercase tracking-wider block text-center shadow-lg shadow-sovereign-gold/20"
                 onClick={() => setIsOpen(false)}
               >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
