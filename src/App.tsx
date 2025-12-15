import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// CORE COMPONENTS (Placeholder files you still need to populate)
import Navigation from './components/Navigation';
import Footer from './components/Footer'; 
import Starfield from './components/Starfield';
import CustomCursor from './components/Cursor'; 
import FloatingWhatsApp from './components/FloatingWhatsApp'; 
import GlassCard from './components/GlassCard'; 
import AssessmentModal from './components/AssessmentModal'; 


// PAGE IMPORTS - Now using real components where code has been provided (Home, Programmes, Contact, AiTools, Experts)
import Home from './pages/Home';
import Programmes from './pages/Programmes';
import ProgramDetail from './pages/ProgramDetail'; 
import Experts from './pages/Experts'; 
import AiTools from './pages/AiTools'; 
import Courses from './pages/Courses'; 
import Contact from './pages/Contact';

// Content Pages (Currently empty files)
import Resources from './pages/Resources'; 
import About from './pages/About'; 
import Blog from './pages/Blog'; 
import BlogPost from './pages/BlogPost'; 
import Podcast from './pages/Podcast'; 
import Partners from './pages/Partners'; 

// Legal Pages (Currently empty files)
import TermsOfService from './pages/TermsOfService'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import RefundPolicy from './pages/RefundPolicy'; 
import Disclaimer from './pages/Disclaimer'; 
import CookiePolicy from './pages/CookiePolicy'; 

// A simple page for routes we haven't built yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 flex items-center justify-center container mx-auto text-center px-4">
    <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 max-w-2xl">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-white/60 mb-6">This section of the Sovereign ecosystem is currently under construction. Check back soon for updates.</p>
      <a href="#/" className="text-sovereign-gold hover:underline">Return Home</a>
    </div>
  </div>
);


const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen text-white font-sans selection:bg-sovereign-gold selection:text-midnight">
        {/* Core Layout Components */}
        <Starfield />
        <CustomCursor />
        <Navigation />
        
        <Routes>
          {/* LIVE COMPONENTS (Home, Programmes, Contact, AiTools, Experts) */}
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/:id" element={<ProgramDetail />} /> 
          <Route path="/experts" element={<Experts />} /> 
          <Route path="/ai-tools" element={<AiTools />} /> 
          <Route path="/contact" element={<Contact />} />
          
          {/* PLACEHOLDER PAGES - will use real components once you fill the files */}
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/podcast" element={<Podcast />} />
          
          {/* LEGAL PAGES */}
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
