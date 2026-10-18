import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Shield, Sparkles, Moon, Sun, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  activeSection: string;
  themeMode: 'dark' | 'glow';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmin,
  activeSection,
  themeMode,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'AI Projects', href: '#projects' },
    { label: 'Websites', href: '#websites' },
    { label: 'Apps', href: '#apps' },
    { label: 'Notes', href: '#notes' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo Zone */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <Logo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium transition-all rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Glow/Dark Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title={themeMode === 'glow' ? 'Standard Dark Mode' : 'Cyber Glow Mode'}
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              aria-label="Toggle Glow Mode"
            >
              {themeMode === 'glow' ? (
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            {/* Admin Dashboard Shield */}
            <button
              onClick={onOpenAdmin}
              title="Admin CMS Dashboard (Sanjay Raikwar)"
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              aria-label="Admin Dashboard"
            >
              <Shield className="w-4 h-4 text-slate-300 hover:text-cyan-400" />
            </button>

            {/* "Get Started" CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger & Quick Admin */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg bg-slate-900/60 border border-slate-800"
              aria-label="Admin Login"
            >
              <Shield className="w-4 h-4 text-slate-300" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712]/98 border-b border-cyan-900/40 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/50'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-xs text-slate-400">
              <span>Theme Lighting</span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-medium"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {themeMode === 'glow' ? 'Electric Cyber Glow' : 'Subtle Dark'}
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 rounded-lg font-semibold text-xs tracking-wide bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-md"
            >
              Get Started with SKYDEV LABS
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
