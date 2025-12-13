import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
        setIsVisible(false);
    }

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, []);

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
      return null;
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-sovereign-gold/80 mix-blend-screen transition-all duration-150 ease-out ${
            isHovering ? 'w-8 h-8 blur-sm' : 'w-3 h-3 blur-[1px]'
          }`}
        />
      </div>
      <div
        className={`fixed pointer-events-none z-[9998] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s ease-out'
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

export default CustomCursor;