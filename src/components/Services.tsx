import React, { useState } from 'react';
import {
  Bot,
  Code,
  Smartphone,
  Layers,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle,
} from 'lucide-react';

interface ServicesProps {
  onRequestService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestService }) => {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'offerings'>('capabilities');

  const coreCapabilities = [
    {
      id: 'cap-1',
      title: 'AI Solutions',
      tagline: 'Smart tools, AI apps & automation services.',
      description:
        'Transform complex workflows with custom LLM integrations, conversational agents, automated data parsing, and intelligent assistants.',
      icon: Bot,
      features: ['LLM Prompt Engineering', 'Context Memory Systems', 'Voice & Text AI Agents'],
      accent: 'from-cyan-500/20 to-blue-600/10',
    },
    {
      id: 'cap-2',
      title: 'Web Development',
      tagline: 'Modern, responsive & fast websites.',
      description:
        'Hand-crafted web applications engineered with React, Next.js, and TypeScript for blazing load speeds and seamless user experiences on all screens.',
      icon: Code,
      features: ['High-Performance React/TS', 'Sub-second Load Speeds', 'Pixel-Perfect Mobile UI'],
      accent: 'from-blue-600/20 to-sky-500/10',
    },
    {
      id: 'cap-3',
      title: 'Mobile Apps',
      tagline: 'Android and web apps for your ideas.',
      description:
        'Intuitive, lightweight native Android and Progressive Web Apps engineered for smooth gestures, offline caching, and high battery efficiency.',
      icon: Smartphone,
      features: ['Native Android & PWA', 'Offline Data Storage', 'Touch-First Ergonomics'],
      accent: 'from-sky-500/20 to-cyan-500/10',
    },
    {
      id: 'cap-4',
      title: 'Digital Products',
      tagline: 'Tools, platforms & custom solutions.',
      description:
        'Full-scale utilities, calculator suites, interactive software portals, and developer platforms built with modern scalable foundations.',
      icon: Layers,
      features: ['Custom Calculators & Dashboards', 'Developer API Engines', 'Interactive Tools'],
      accent: 'from-indigo-600/20 to-cyan-500/10',
    },
    {
      id: 'cap-5',
      title: 'Study Notes',
      tagline: 'Class 10/11/12 & college notes, free & public.',
      description:
        'Open-access high-yield revision summaries, formula sheets, and computer science study guides curated directly from academic curriculums.',
      icon: BookOpen,
      features: ['Physics, Chemistry, Math', 'CS & Operating Systems', 'Free PDF Downloads'],
      accent: 'from-cyan-500/20 to-emerald-500/10',
    },
    {
      id: 'cap-6',
      title: 'Cyber Security',
      tagline: 'Learn about secure technology and digital safety.',
      description:
        'Practical cybersecurity toolkits, OWASP vulnerability awareness, cryptographic verification utilities, and safe digital hygiene guides.',
      icon: ShieldCheck,
      features: ['OWASP Web Hardening', 'Crypto Hash Inspectors', 'Safe Architecture Audits'],
      accent: 'from-blue-500/20 to-teal-500/10',
    },
  ];

  const clientServices = [
    {
      title: 'AI Website Development',
      desc: 'Next-gen websites integrated with dynamic AI generation, smart search, and chat assistants.',
      idealFor: 'Startups, businesses & agencies looking to leverage modern AI.',
      category: 'AI Solution',
    },
    {
      title: 'AI App Development',
      desc: 'Mobile and desktop-friendly apps utilizing artificial intelligence models for automation.',
      idealFor: 'Founders creating specialized AI tools or workflow helpers.',
      category: 'Mobile App',
    },
    {
      title: 'Website Development',
      desc: 'End-to-end full-stack web applications with interactive state management and backend APIs.',
      idealFor: 'Enterprises needing robust, maintainable digital platforms.',
      category: 'Web Development',
    },
    {
      title: 'Landing Page Development',
      desc: 'High-converting, visually striking product launch pages designed to turn visitors into users.',
      idealFor: 'Product drops, SaaS waitlists, and promotional campaigns.',
      category: 'Landing Page',
    },
    {
      title: 'Portfolio Websites',
      desc: 'Distinctive, personal developer, creator, or executive showcase websites that leave an impact.',
      idealFor: 'Engineers, designers, freelancers and students.',
      category: 'Portfolio Website',
    },
    {
      title: 'Educational Websites',
      desc: 'Comprehensive learning management portals, quiz engines, and structured notes hubs.',
      idealFor: 'Institutes, tutors, and educational creators.',
      category: 'Educational Website',
    },
    {
      title: 'Digital Products',
      desc: 'SaaS prototypes, web-based tools, calculators, and custom automated utilities.',
      idealFor: 'Entrepreneurs building niche software as a service.',
      category: 'Digital Product',
    },
    {
      title: 'AI Automation',
      desc: 'Streamline repetitive daily operations, content pipelines, and customer support with automated scripts.',
      idealFor: 'Growing teams wanting to save hours every single week.',
      category: 'AI Automation',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE DELIVER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialized Tech &amp; AI Engineering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From modern AI applications and responsive websites to academic study systems — built with precision, speed, and clean code.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800 mt-8">
            <button
              onClick={() => setActiveTab('capabilities')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'capabilities'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Core Pillars &amp; Features
            </button>
            <button
              onClick={() => setActiveTab('offerings')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'offerings'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Client Services (8)
            </button>
          </div>
        </div>

        {/* Tab 1: Core 6 Pillars */}
        {activeTab === 'capabilities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 p-7 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between"
                >
                  {/* Subtle top glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-cyan-400/90 font-medium">{cap.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                      {cap.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6 text-xs text-slate-400">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onRequestService(cap.title)}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-800/80 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: 8 Detailed Client Services */}
        {activeTab === 'offerings' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientServices.map((svc, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
              >
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    {svc.category}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{svc.desc}</p>
                  <p className="text-[11px] text-slate-400 border-l-2 border-cyan-500/40 pl-2 mb-6">
                    {svc.idealFor}
                  </p>
                </div>

                <button
                  onClick={() => onRequestService(svc.title)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 hover:border-cyan-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request a Project</span>
                  <Zap className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
