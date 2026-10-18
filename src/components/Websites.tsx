import React from 'react';
import { Website } from '../types';
import { ExternalLink, Github, Globe, Sparkles } from 'lucide-react';

interface WebsitesProps {
  websites: Website[];
}

export const Websites: React.FC<WebsitesProps> = ({ websites }) => {
  return (
    <section id="websites" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>WEB ENGINEERING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Websites Built by SKYDEV LABS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-converting landing pages, interactive portals, and bespoke modern web applications tailored for speed and visual excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site) => (
            <div
              key={site.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div>
                {/* Browser-styled mock frame */}
                <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[150px]">
                    https://skydev.network/{site.category.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                  <div className="w-3" />
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={site.screenshotUrl}
                    alt={site.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                    {site.category}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {site.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                    {site.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {site.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] text-cyan-300/80 bg-cyan-950/40 border border-cyan-900/50 px-2 py-0.5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 mt-auto flex items-center gap-3">
                <a
                  href={site.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>

                {site.sourceCodeUrl && (
                  <a
                    href={site.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                    title="View Source Code"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
