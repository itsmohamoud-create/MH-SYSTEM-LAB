import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  goldBorder?: boolean;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  goldBorder = false,
  hoverEffect = true
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-white/[0.06] backdrop-blur-xl
        border border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.37)]
        ${goldBorder ? 'border-sovereign-gold/30' : ''}
        ${hoverEffect ? 'transition-all duration-300 hover:border-sovereign-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {goldBorder && hoverEffect && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sovereign-gold to-gold-dark opacity-0 hover:opacity-10 pointer-events-none transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;