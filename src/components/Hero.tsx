import React from 'react';
import { ArrowRight, Terminal, Sparkles, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import heroVisualImg from '../assets/images/hero_workspace_tech_1791249607554.jpg';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-sky-400/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="text-base">🚀</span>
              <span className="font-semibold tracking-wide">Welcome to SKYDEV LABS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-2xl">
              Build Your Ideas Into{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl">
              We create modern websites, powerful apps and smart AI solutions to make your digital journey easier, faster and smarter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreWork}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust & Foundation Pills */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Founder: Sanjay Raikwar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Class 12 PCM Student & AI Dev</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Production-Ready Code</span>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Workspace Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer glowing frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/50 to-blue-600/20 shadow-[0_0_40px_rgba(6,182,212,0.25)] group">
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-cyan-500/20">
                  {/* High fidelity generated image */}
                  <img
                    src={heroVisualImg}
                    alt="SKYDEV LABS Futuristic Workspace with AI & Code"
                    className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Gradient Scrim for crisp readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* High-tech overlay widgets */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3.5 shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono font-semibold text-slate-200">
                          skydev-core // terminal
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                          ACTIVE ENGINE
                        </span>
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-slate-300 leading-snug">
                      <p className="text-cyan-300/90">&gt; skydev.deploy(&apos;AI Solutions&apos;, &apos;Web&apos;, &apos;Apps&apos;)</p>
                      <p className="text-slate-400 mt-0.5">&gt; Status: 100% Operational • Ready for innovation</p>
                    </div>
                  </div>

                  {/* Top floating official brand pill */}
                  <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 rounded-xl px-2.5 py-1.5 flex items-center gap-2 shadow-xl">
                    <img src="/logo.png" alt="SKYDEVLAB" className="w-5 h-5 rounded-md object-cover" />
                    <span className="text-[11px] font-bold text-cyan-300 font-display tracking-wide">SKYDEVLAB</span>
                  </div>

                  {/* Top floating mini pill */}
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px] font-medium text-slate-200">AI Powered</span>
                  </div>
                </div>
              </div>

              {/* Decorative side accent elements */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Full-Stack &amp; AI</div>
                    <div className="text-[10px] text-cyan-400 font-mono">React • Node • Models</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -top-5 -right-5 bg-slate-900/90 border border-blue-500/30 rounded-xl p-3 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Clean Architecture</div>
                    <div className="text-[10px] text-slate-400 font-mono">100% Tested Logic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
