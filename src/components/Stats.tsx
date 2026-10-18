import React from 'react';
import { SiteStats } from '../types';
import { FolderGit2, Globe2, Smartphone, GraduationCap } from 'lucide-react';

interface StatsProps {
  stats: SiteStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Projects Completed',
      value: stats.projectsCount,
      icon: FolderGit2,
      detail: 'AI, Web, Apps & Security',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      label: 'Live Websites Built',
      value: stats.websitesCount,
      icon: Globe2,
      detail: 'Responsive & Fast UI',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      label: 'Mobile & Web Apps',
      value: stats.appsCount,
      icon: Smartphone,
      detail: 'Android & Cross-platform',
      color: 'from-sky-400 to-cyan-500',
    },
    {
      label: 'Academic Foundation',
      value: stats.studentStatus,
      icon: GraduationCap,
      detail: 'Physics • Chemistry • Math',
      color: 'from-cyan-400 to-teal-400',
      isText: true,
    },
  ];

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">
                    {item.label}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <div
                    className={`font-display font-extrabold tracking-tight text-white mb-1 ${
                      item.isText
                        ? 'text-xl sm:text-2xl bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent'
                        : 'text-3xl sm:text-4xl tabular-nums bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent'
                    }`}
                  >
                    {item.value}
                  </div>
                  <p className="text-xs text-slate-400">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
