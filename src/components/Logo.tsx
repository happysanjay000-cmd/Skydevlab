import React from 'react';

interface LogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'emblem' | 'full';
}

export const Logo: React.FC<LogoProps> = ({
  showTagline = true,
  size = 'md',
  className = '',
  variant = 'emblem',
}) => {
  const iconSize =
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : size === 'xl' ? 'w-20 h-20' : 'w-11 h-11';
  const titleSize =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-xl';
  const taglineSize =
    size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : size === 'xl' ? 'text-xs' : 'text-[10px]';

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center select-none group ${className}`}>
        <img
          src="/logo.png"
          alt="SKYDEV LAB - AI • Web • Apps • Innovation"
          className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Official SKYDEVLAB Emblem */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center`}>
        {/* Ambient neon glow behind logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/50 via-blue-600/40 to-sky-400/30 rounded-xl blur-[8px] group-hover:blur-[12px] group-hover:scale-105 transition-all duration-300" />

        {/* High-tech framed emblem container */}
        <div className="relative w-full h-full rounded-xl bg-black border border-cyan-500/40 p-0.5 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:border-cyan-400/80 transition-all duration-300">
          <img
            src="/logo.png"
            alt="SKYDEV LAB Logo"
            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col leading-tight">
        <div className={`font-display font-extrabold tracking-wider text-white ${titleSize} flex items-center`}>
          <span>SKYDEV</span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent ml-1 font-black">
            LAB
          </span>
        </div>
        {showTagline && (
          <span className={`font-medium tracking-widest uppercase text-cyan-400/90 ${taglineSize} mt-0.5`}>
            AI • Web • Apps • Innovation
          </span>
        )}
      </div>
    </div>
  );
};
