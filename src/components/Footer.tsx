import React, { useState } from 'react';
import { Logo } from './Logo';
import { FounderProfile } from '../types';
import { Github, Youtube, Instagram, Linkedin, Twitter, ArrowUp, X, Shield, Lock } from 'lucide-react';

interface FooterProps {
  founder: FounderProfile;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ founder, onOpenAdmin }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Websites', href: '#websites' },
    { label: 'Apps', href: '#apps' },
    { label: 'Notes', href: '#notes' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2">
            <Logo size="lg" showTagline={true} className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              SKYDEV LABS creates modern websites, powerful apps and smart AI solutions to make your digital journey easier, faster and smarter. Founded by Sanjay Raikwar.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={founder.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={founder.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-red-400 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={founder.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/40 text-slate-400 hover:text-pink-400 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={founder.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Explore More
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Founder & Admin column */}
          <div>
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Organization
            </span>
            <div className="text-xs text-slate-400 space-y-2">
              <p className="font-medium text-slate-200">{founder.name}</p>
              <p>{founder.title}</p>
              <p>
                <a href="tel:+919329683202" className="hover:text-cyan-300 text-emerald-400 font-semibold transition-colors">
                  +91 9329683202
                </a>
              </p>
              <p>{founder.location}</p>
              <div className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium py-1 px-2.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 SKYDEV LABS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs text-slate-300 space-y-3 max-h-72 overflow-y-auto pr-2 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    At <strong>SKYDEV LABS</strong> (founded by Sanjay Raikwar), we respect user privacy. We do not sell or monetize personal student or client data.
                  </p>
                  <p>
                    Information submitted via our contact inquiry form is strictly used to reply to technical project inquiries and collaborations.
                  </p>
                  <p>
                    All public study notes and resources provided on this portal are free of charge for students and educators worldwide.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>SKYDEV LABS</strong>. By accessing this portal, you agree to comply with open intellectual ethics.
                  </p>
                  <p>
                    Our open notes and reference materials are shared freely for educational study and non-commercial learning.
                  </p>
                  <p>
                    Software prototypes, client deliverables, and custom code engineered by SKYDEV LABS are governed by respective client agreements and open-source licenses.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
