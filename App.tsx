import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Programmes from './pages/Programmes';
import Contact from './pages/Contact';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 flex items-center justify-center container mx-auto text-center px-4">
    <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 max-w-2xl">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-white/60 mb-6">This section is under construction. Check back soon.</p>
      <a href="#/" className="text-sovereign-gold hover:underline">Return Home</a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen text-white font-sans selection:bg-sovereign-gold selection:text-midnight">
        <Starfield />
        <CustomCursor />
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programmes/:id" element={<Programmes />} />
          <Route path="/experts" element={<PlaceholderPage title="World-Class Expert Network" />} />
          <Route path="/courses" element={<PlaceholderPage title="Qualification Courses" />} />
          <Route path="/resources" element={<PlaceholderPage title="Free Resources" />} />
          <Route path="/about" element={<PlaceholderPage title="About MH Systems Lab" />} />
          <Route path="/blog" element={<PlaceholderPage title="Lab Notes" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
