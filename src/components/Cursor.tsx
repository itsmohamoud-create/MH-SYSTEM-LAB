import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Small delay for the outer cursor (z-9998)
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50); 
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements (buttons, links, or elements with hover effects)
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor-target="true"]') // Custom attribute for non-standard elements
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeaveDocument = () => {
        setIsVisible(false);
    }

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveDocument);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveDocument);
    };
  }, []);

  // Hide on touch devices (where maxTouchPoints > 0)
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
      return null;
  }

  // The code for the cursor itself
  return (
    <>
      {/* 1. Inner Cursor (Fast movement, solid color) */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out', // Make inner cursor snappier
        }}
      >
        <div
          className={`rounded-full bg-sovereign-gold/80 mix-blend-screen transition-all duration-150 ease-out ${
            isHovering ? 'w-8 h-8 blur-sm' : 'w-3 h-3 blur-[1px]'
          }`}
        />
      </div>

      {/* 2. Outer Cursor (Delayed movement, ring/border effect) */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          // Note: The slight delay is now handled by the outer div's size transition
        }}
      >
         <div
          className={`rounded-full border border-sovereign-gold/30 transition-all duration-300 ease-out ${
            isHovering ? 'w-12 h-12 scale-110 opacity-50' : 'w-8 h-8 scale-100 opacity-80'
          }`}
        />
      </div>
    </>
  );
};

export default Cursor;
