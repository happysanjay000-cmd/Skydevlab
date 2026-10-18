import React, { useState } from 'react';
import { FounderProfile } from '../types';
import { dataStore } from '../services/dataStore';
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  Github,
  Youtube,
  Instagram,
  Linkedin,
  MessageSquare,
} from 'lucide-react';

interface ContactProps {
  founder: FounderProfile;
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ founder, initialProjectType = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialProjectType || 'AI Solution',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Update project type if changed from outside
  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate quick network settlement & store locally/server
    setTimeout(() => {
      dataStore.addMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        projectType: formData.projectType,
        message: formData.message.trim(),
      });

      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'AI Solution',
        message: '',
      });
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] border-t border-slate-800/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET&apos;S TALK &amp; INNOVATE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Start Your Project With SKYDEV LABS
              </h2>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Have an AI idea, require a high-performance website or mobile application, or want to collaborate with Sanjay Raikwar? Reach out directly.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 mb-8">
                {/* Phone & WhatsApp Card */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Contact &amp; WhatsApp</div>
                      <a
                        href="tel:+919329683202"
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors tracking-wide"
                      >
                        +91 9329683202
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919329683202?text=Hi%20Sanjay,%20I%20visited%20SKYDEV%20LABS%20and%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/40 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${founder.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {founder.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Average Turnaround</div>
                    <div className="text-sm font-semibold text-white">Within 24 Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">{founder.location} • Remote Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Social Platforms:
                </span>
                <div className="flex items-center gap-3">
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800 to-blue-600/20 shadow-2xl">
              <div className="rounded-[14px] bg-slate-950 p-6 sm:p-10 border border-cyan-500/20">
                {submitted ? (
                  <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 mx-auto mb-5 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Message Received!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                      Thank you for reaching out to SKYDEV LABS. Sanjay Raikwar will review your inquiry and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-cyan-400 border border-cyan-500/40 hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-white">Send Direct Inquiry</span>
                    </div>

                    {error && (
                      <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-xs text-rose-300">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Project Type / Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-all"
                      >
                        <option value="AI Solution">AI Solutions &amp; Automation</option>
                        <option value="Web Development">Full-Stack Website Development</option>
                        <option value="Mobile App">Mobile &amp; Android App</option>
                        <option value="Landing Page">High-Converting Landing Page</option>
                        <option value="Portfolio Website">Personal / Portfolio Website</option>
                        <option value="Educational Website">Educational Portal &amp; Notes</option>
                        <option value="Cyber Security">Cyber Security Consultation</option>
                        <option value="Other">Other Collaboration</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Message Details <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project idea, requirements, timeline, or questions..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Message to Sanjay</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
