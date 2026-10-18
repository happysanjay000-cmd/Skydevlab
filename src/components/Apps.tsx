import React from 'react';
import { AppItem } from '../types';
import { Smartphone, Download, Star, CheckCircle, Sparkles } from 'lucide-react';

interface AppsProps {
  apps: AppItem[];
  onOpenAppInquiry: (appName: string) => void;
}

export const Apps: React.FC<AppsProps> = ({ apps, onOpenAppInquiry }) => {
  return (
    <section id="apps" className="relative py-24 bg-[#030712] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>MOBILE &amp; APPLICATION LAB</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Applications Engineered by SKYDEV LABS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Purpose-built mobile and desktop solutions focused on academic mastery, digital security, and daily efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div>
                {/* Header: App Icon & Meta */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-cyan-500/30 p-2.5 flex items-center justify-center shadow-inner group-hover:border-cyan-400/60 transition-colors">
                      <img
                        src={app.iconUrl}
                        alt={app.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {app.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span className="font-mono text-cyan-400">{app.version}</span>
                        <span>•</span>
                        <span>{app.platform}</span>
                      </div>
                    </div>
                  </div>

                  {app.rating && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{app.rating}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {app.description}
                </p>

                {/* Features list */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90 block mb-2.5">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {app.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <button
                  onClick={() => onOpenAppInquiry(app.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Get App Access</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
