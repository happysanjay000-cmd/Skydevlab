import React from 'react';
import { FounderProfile } from '../types';
import {
  Github,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Code2,
  Atom,
  Brain,
  Rocket,
} from 'lucide-react';

interface AboutProps {
  founder: FounderProfile;
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ founder, onContactClick }) => {
  const pillars = [
    {
      title: 'PCM Science Student',
      desc: 'Physics, Chemistry & Math rigorous foundation driving algorithmic logic and analytical problem solving.',
      icon: Atom,
      color: 'text-cyan-400',
    },
    {
      title: 'AI & Web Developer',
      desc: 'Building intelligent applications with React, modern LLMs, responsive interfaces, and performant backends.',
      icon: Brain,
      color: 'text-blue-400',
    },
    {
      title: 'Founder & Visionary',
      desc: 'Creating SKYDEV LABS to bridge technology, academic learning, and real-world digital tools for everyone.',
      icon: Rocket,
      color: 'text-sky-300',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Card with Avatar / Tech Crest */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-500/40 via-blue-600/30 to-slate-900 shadow-[0_0_35px_rgba(6,182,212,0.2)]">
                <div className="relative rounded-[22px] bg-slate-950 p-8 border border-cyan-500/20 flex flex-col items-center text-center overflow-hidden">
                  {/* Glowing background inside card */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl" />
                  
                  {/* Stylized Brand Logo Badge */}
                  <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-sky-400 p-1 shadow-[0_0_25px_rgba(6,182,212,0.4)] mb-5 group">
                    <div className="w-full h-full rounded-[14px] bg-black flex items-center justify-center p-1.5 overflow-hidden">
                      <img
                        src="/logo.png"
                        alt="SKYDEV LABS Official Brand Logo"
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {founder.name}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Founder of SKYDEV LABS
                  </div>
                  <div className="text-xs text-slate-400 mb-6 flex flex-wrap items-center justify-center gap-y-1 gap-x-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{founder.location}</span>
                    </span>
                    <span>•</span>
                    <a href={`mailto:${founder.email}`} className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>{founder.email}</span>
                    </a>
                    <span>•</span>
                    <a href="tel:+919329683202" className="flex items-center gap-1 hover:text-cyan-300 transition-colors text-emerald-400">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 9329683202</span>
                    </a>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
                      Class 12 PCM Student
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-950/70 border border-blue-800/60 text-blue-300">
                      AI Web Developer
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300">
                      Young Innovator
                    </span>
                  </div>

                  {/* Social Icons row */}
                  <div className="pt-4 border-t border-slate-800/80 w-full flex items-center justify-center gap-3">
                    <a
                      href={founder.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="YouTube"
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:bg-red-950/40 text-slate-300 hover:text-red-400 flex items-center justify-center transition-all"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-950/40 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/40 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    {founder.socials.twitter && (
                      <a
                        href={founder.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter / X"
                        className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-950/40 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE FOUNDER STORY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Hi, I&apos;m Sanjay Raikwar
            </h2>

            <p className="text-cyan-400 font-medium text-base sm:text-lg mb-6">
              Class 12 PCM Student • AI Web Developer • Founder of SKYDEV LABS
            </p>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              <p>
                {founder.bio}
              </p>
              <p className="text-slate-400 text-sm">
                Balancing rigorous higher secondary studies in Physics, Chemistry, and Mathematics alongside active software engineering gives me a distinct vantage point: I approach software and AI systems with scientific discipline, mathematical clarity, and tireless passion for problem-solving.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all"
                  >
                    <Icon className={`w-5 h-5 ${p.color} mb-2`} />
                    <div className="font-semibold text-white text-sm mb-1">{p.title}</div>
                    <div className="text-xs text-slate-400 leading-normal">{p.desc}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
              >
                Work with Sanjay
              </button>

              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all"
              >
                Browse Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
