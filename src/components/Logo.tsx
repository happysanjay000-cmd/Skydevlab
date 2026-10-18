import React from 'react';

interface LogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ showTagline = true, size = 'md', className = '' }) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const taglineSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Modern stylized letter S emblem */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center`}>
        {/* Ambient glow behind logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 via-blue-600/30 to-sky-400/20 rounded-xl blur-[6px] group-hover:blur-[10px] transition-all duration-300" />
        
        {/* Futuristic S SVG Icon */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 p-1.5 flex items-center justify-center shadow-inner group-hover:border-cyan-400/60 transition-colors duration-300">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]"
          >
            <defs>
              <linearGradient id="skydevGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="cyanNeon" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Top geometric loop of S */}
            <path
              d="M78 28 C78 18, 68 12, 50 12 C30 12, 22 22, 22 34 C22 48, 42 52, 58 58 C72 62, 78 70, 78 80 C78 92, 64 98, 48 98 C28 98, 20 86, 20 76"
              stroke="url(#skydevGrad)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* High-tech circuit accent cuts */}
            <circle cx="23" cy="34" r="3" fill="#ffffff" />
            <circle cx="77" cy="74" r="3" fill="#ffffff" />
            <path
              d="M38 32 L62 32"
              stroke="url(#cyanNeon)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col leading-tight">
        <div className={`font-display font-extrabold tracking-wider text-white ${titleSize} flex items-center`}>
          <span>SKYDEV</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-1.5 font-black">
            LABS
          </span>
        </div>
        {showTagline && (
          <span className={`font-medium tracking-widest uppercase text-cyan-400/80 ${taglineSize} mt-0.5`}>
            AI • Web • Apps • Innovation
          </span>
        )}
      </div>
    </div>
  );
};
