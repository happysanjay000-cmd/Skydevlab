/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { dataStore } from './services/dataStore';
import { AppDatabase } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Websites } from './components/Websites';
import { Apps } from './components/Apps';
import { NotesSection } from './components/NotesSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';

export default function App() {
  const [db, setDb] = useState<AppDatabase>(() => dataStore.getData());
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<'dark' | 'glow'>('glow');
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Refresh local state when dataStore changes in Admin
  const handleDataUpdated = () => {
    setDb({ ...dataStore.getData() });
  };

  // Scrollspy to highlight active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'websites', 'apps', 'notes', 'services', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestService = (serviceName: string) => {
    setPrefilledService(serviceName);
    scrollToSection('contact');
  };

  const handleOpenAppInquiry = (appName: string) => {
    setPrefilledService(`Access to ${appName}`);
    scrollToSection('contact');
  };

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'glow' ? 'dark' : 'glow'));
  };

  return (
    <div
      className={`min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 ${
        themeMode === 'glow' ? 'cyber-glow-mode' : ''
      }`}
    >
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 bg-tech-grid opacity-25 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-tech-dots opacity-15 pointer-events-none z-0" />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        activeSection={activeSection}
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Dynamic Statistics Bar */}
        <Stats stats={db.stats} />

        {/* Services & Capabilities */}
        <Services onRequestService={handleRequestService} />

        {/* AI Projects Gallery */}
        <Projects projects={dataStore.getProjects(false)} />

        {/* Websites Showcase */}
        <Websites websites={dataStore.getWebsites(false)} />

        {/* Apps Showcase */}
        <Apps
          apps={dataStore.getApps(false)}
          onOpenAppInquiry={handleOpenAppInquiry}
        />

        {/* Free Public Study Notes System */}
        <NotesSection notes={dataStore.getNotes(false)} />

        {/* About Founder Sanjay Raikwar */}
        <About
          founder={db.founder}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Contact & Inquiries Form */}
        <Contact
          founder={db.founder}
          initialProjectType={prefilledService}
        />
      </main>

      {/* Footer */}
      <Footer
        founder={db.founder}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Admin CMS Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataUpdated={handleDataUpdated}
      />
    </div>
  );
}
