import React, { useState } from 'react';
import { AppDatabase, Project, Website, AppItem, StudyNote, ContactMessage, SiteStats, FounderProfile } from '../types';
import { dataStore } from '../services/dataStore';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  Check,
  Eye,
  EyeOff,
  FolderGit2,
  Globe2,
  Smartphone,
  BookOpen,
  MessageSquare,
  BarChart3,
  Database,
  Lock,
  Download,
  Upload,
  RefreshCw,
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataUpdated: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onDataUpdated }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'websites' | 'apps' | 'notes' | 'stats' | 'inbox' | 'backup'>('projects');

  // Form states for modals/editing
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const [editingWebsite, setEditingWebsite] = useState<Website | null>(null);
  const [isAddingWebsite, setIsAddingWebsite] = useState(false);

  const [editingApp, setEditingApp] = useState<AppItem | null>(null);
  const [isAddingApp, setIsAddingApp] = useState(false);

  const [editingNote, setEditingNote] = useState<StudyNote | null>(null);
  const [isAddingNote, setIsAddingNote] = useState(false);

  const [importStatus, setImportStatus] = useState<string>('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === 'sanjay2026' || pinInput === 'admin') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const db = dataStore.getData();

  // --- PROJECT ACTIONS ---
  const handleSaveProject = (proj: Project) => {
    dataStore.saveProject(proj);
    setEditingProject(null);
    setIsAddingProject(false);
    onDataUpdated();
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Delete this project?')) {
      dataStore.deleteProject(id);
      onDataUpdated();
    }
  };

  const handleTogglePublishProject = (id: string) => {
    dataStore.togglePublishProject(id);
    onDataUpdated();
  };

  // --- WEBSITE ACTIONS ---
  const handleSaveWebsite = (site: Website) => {
    dataStore.saveWebsite(site);
    setEditingWebsite(null);
    setIsAddingWebsite(false);
    onDataUpdated();
  };

  const handleDeleteWebsite = (id: string) => {
    if (confirm('Delete this website entry?')) {
      dataStore.deleteWebsite(id);
      onDataUpdated();
    }
  };

  const handleTogglePublishWebsite = (id: string) => {
    dataStore.togglePublishWebsite(id);
    onDataUpdated();
  };

  // --- APP ACTIONS ---
  const handleSaveApp = (app: AppItem) => {
    dataStore.saveApp(app);
    setEditingApp(null);
    setIsAddingApp(false);
    onDataUpdated();
  };

  const handleDeleteApp = (id: string) => {
    if (confirm('Delete this app entry?')) {
      dataStore.deleteApp(id);
      onDataUpdated();
    }
  };

  const handleTogglePublishApp = (id: string) => {
    dataStore.togglePublishApp(id);
    onDataUpdated();
  };

  // --- NOTE ACTIONS ---
  const handleSaveNote = (note: StudyNote) => {
    dataStore.saveNote(note);
    setEditingNote(null);
    setIsAddingNote(false);
    onDataUpdated();
  };

  const handleDeleteNote = (id: string) => {
    if (confirm('Delete this study note?')) {
      dataStore.deleteNote(id);
      onDataUpdated();
    }
  };

  const handleTogglePublishNote = (id: string) => {
    dataStore.togglePublishNote(id);
    onDataUpdated();
  };

  // --- EXPORT / IMPORT ---
  const handleExportJSON = () => {
    const jsonStr = dataStore.exportDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `skydev_labs_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = dataStore.importDataJSON(content);
      if (success) {
        setImportStatus('Database successfully restored!');
        onDataUpdated();
      } else {
        setImportStatus('Error importing JSON. Please check file format.');
      }
      setTimeout(() => setImportStatus(''), 4000);
    };
    reader.readAsText(file);
  };

  const handleResetDefaults = () => {
    if (confirm('Reset entire database to original defaults?')) {
      dataStore.resetToDefaults();
      onDataUpdated();
      setImportStatus('Reset to defaults complete.');
      setTimeout(() => setImportStatus(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white leading-tight">
                SKYDEV LABS Control Center
              </h2>
              <p className="text-[11px] text-cyan-400 font-mono">
                Admin Content Management &amp; Persistence
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate if not logged in */}
        {!isAuthenticated ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Founder &amp; Admin Access
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Enter Sanjay Raikwar&apos;s administrative PIN to manage projects, notes, apps, stats, and view client inquiry submissions.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: sanjay2026)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-center font-mono tracking-widest text-base outline-none"
                  autoFocus
                />
              </div>

              {pinError && (
                <p className="text-xs text-rose-400">Incorrect PIN. Try: sanjay2026</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all cursor-pointer shadow-md"
              >
                Authenticate &amp; Open CMS
              </button>

              <button
                type="button"
                onClick={() => setPinInput('sanjay2026')}
                className="text-[11px] text-cyan-400 hover:underline block mx-auto"
              >
                Click to Auto-fill Default PIN (sanjay2026)
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {/* Tab navigation */}
            <div className="flex items-center gap-1 px-6 py-2.5 border-b border-slate-800 bg-slate-950/40 overflow-x-auto">
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'projects'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Projects ({db.projects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('websites')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'websites'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Websites ({db.websites.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('apps')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'apps'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Apps ({db.apps.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('notes')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'notes'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Notes ({db.notes.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('stats')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'stats'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Stats &amp; Founder</span>
              </button>

              <button
                onClick={() => setActiveTab('inbox')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'inbox'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquiries ({db.messages.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('backup')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'backup'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Backup &amp; Reset</span>
              </button>
            </div>

            {/* Tab content area */}
            <div className="flex-1 overflow-y-auto p-6 text-slate-200">
              {/* --- TAB 1: PROJECTS --- */}
              {activeTab === 'projects' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        AI Projects Manager
                      </h3>
                      <p className="text-xs text-slate-400">
                        Add, edit, delete, or toggle publish states for project cards.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingProject({
                          id: 'proj-' + Date.now(),
                          title: '',
                          category: 'AI',
                          description: '',
                          fullDetails: '',
                          image: db.projects[0]?.image || '',
                          demoUrl: '',
                          githubUrl: '',
                          tags: ['AI', 'React'],
                          published: true,
                          featured: false,
                          date: '2026',
                        });
                        setIsAddingProject(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>New Project</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {db.projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={proj.image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover bg-slate-900 flex-shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded">
                                {proj.category}
                              </span>
                              {!proj.published && (
                                <span className="text-[10px] font-semibold text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded">
                                  Unpublished
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {proj.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button
                            onClick={() => handleTogglePublishProject(proj.id)}
                            title={proj.published ? 'Unpublish' : 'Publish'}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                          >
                            {proj.published ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                          </button>
                          <button
                            onClick={() => setEditingProject(proj)}
                            title="Edit"
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            title="Delete"
                            className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- TAB 2: WEBSITES --- */}
              {activeTab === 'websites' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        Websites Manager
                      </h3>
                      <p className="text-xs text-slate-400">
                        Manage website screenshots, live demo links, and descriptions.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingWebsite({
                          id: 'web-' + Date.now(),
                          title: '',
                          description: '',
                          screenshotUrl: db.websites[0]?.screenshotUrl || '',
                          liveDemoUrl: 'https://',
                          sourceCodeUrl: 'https://github.com',
                          technologies: ['React', 'TypeScript'],
                          category: 'Startup Portal',
                          published: true,
                          date: '2026',
                        });
                        setIsAddingWebsite(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>New Website</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {db.websites.map((site) => (
                      <div
                        key={site.id}
                        className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={site.screenshotUrl}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover bg-slate-900 flex-shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white text-sm">{site.title}</h4>
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded">
                                {site.category}
                              </span>
                              {!site.published && (
                                <span className="text-[10px] font-semibold text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded">
                                  Unpublished
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {site.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button
                            onClick={() => handleTogglePublishWebsite(site.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 transition-colors"
                          >
                            {site.published ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                          </button>
                          <button
                            onClick={() => setEditingWebsite(site)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteWebsite(site.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- TAB 3: APPS --- */}
              {activeTab === 'apps' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">Apps Manager</h3>
                      <p className="text-xs text-slate-400">
                        Add or edit mobile and desktop applications.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingApp({
                          id: 'app-' + Date.now(),
                          title: '',
                          description: '',
                          iconUrl: 'https://api.iconify.design/lucide:smartphone.svg?color=%2338bdf8',
                          platform: 'Android',
                          features: ['Offline support', 'Fast performance'],
                          downloadUrl: '#contact',
                          rating: 4.8,
                          version: 'v1.0.0',
                          published: true,
                          date: '2026',
                        });
                        setIsAddingApp(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>New App</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {db.apps.map((app) => (
                      <div
                        key={app.id}
                        className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={app.iconUrl}
                            alt=""
                            className="w-10 h-10 rounded-lg object-contain bg-slate-900 p-1 flex-shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white text-sm">{app.title}</h4>
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded">
                                {app.platform} • {app.version}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {app.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button
                            onClick={() => handleTogglePublishApp(app.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 transition-colors"
                          >
                            {app.published ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                          </button>
                          <button
                            onClick={() => setEditingApp(app)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteApp(app.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- TAB 4: NOTES --- */}
              {activeTab === 'notes' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        Educational Notes Manager
                      </h3>
                      <p className="text-xs text-slate-400">
                        Create and publish curriculum notes for Class 10/11/12 &amp; B.Sc. CS.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setEditingNote({
                          id: 'note-' + Date.now(),
                          title: '',
                          classCategory: 'Class 12',
                          subject: 'Physics',
                          summary: '',
                          content: '## 1. Overview\nEnter notes content here...',
                          readTime: '5 min read',
                          downloadPdfAvailable: true,
                          published: true,
                          date: '2026-03',
                          tags: ['Exam Prep'],
                        });
                        setIsAddingNote(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>New Study Note</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {db.notes.map((note) => (
                      <div
                        key={note.id}
                        className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white">{note.title}</span>
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded">
                              {note.classCategory}
                            </span>
                            <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-1.5 py-0.5 rounded">
                              {note.subject}
                            </span>
                            {!note.published && (
                              <span className="text-[10px] font-semibold text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded">
                                Unpublished
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-1">{note.summary}</p>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button
                            onClick={() => handleTogglePublishNote(note.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 transition-colors"
                          >
                            {note.published ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                          </button>
                          <button
                            onClick={() => setEditingNote(note)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- TAB 5: STATS & FOUNDER --- */}
              {activeTab === 'stats' && (
                <div className="max-w-2xl space-y-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      Statistics &amp; Metrics
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Update the animated counters shown on the home page.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Projects Count
                        </label>
                        <input
                          type="text"
                          defaultValue={db.stats.projectsCount}
                          onBlur={(e) => {
                            dataStore.updateStats({ projectsCount: e.target.value });
                            onDataUpdated();
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Websites Count
                        </label>
                        <input
                          type="text"
                          defaultValue={db.stats.websitesCount}
                          onBlur={(e) => {
                            dataStore.updateStats({ websitesCount: e.target.value });
                            onDataUpdated();
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Apps Count
                        </label>
                        <input
                          type="text"
                          defaultValue={db.stats.appsCount}
                          onBlur={(e) => {
                            dataStore.updateStats({ appsCount: e.target.value });
                            onDataUpdated();
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Student Status
                        </label>
                        <input
                          type="text"
                          defaultValue={db.stats.studentStatus}
                          onBlur={(e) => {
                            dataStore.updateStats({ studentStatus: e.target.value });
                            onDataUpdated();
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Founder Profile & Socials */}
                  <div className="pt-6 border-t border-slate-800">
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      Founder Profile &amp; Social Links
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Customize Sanjay Raikwar&apos;s bio and social channel links.
                    </p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1">
                            Contact Phone / WhatsApp Number
                          </label>
                          <input
                            type="text"
                            defaultValue={db.founder.phone || '+91 9329683202'}
                            onBlur={(e) => {
                              dataStore.updateFounder({ phone: e.target.value });
                              onDataUpdated();
                            }}
                            placeholder="+91 9329683202"
                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            defaultValue={db.founder.email}
                            onBlur={(e) => {
                              dataStore.updateFounder({ email: e.target.value });
                              onDataUpdated();
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Founder Bio
                        </label>
                        <textarea
                          rows={3}
                          defaultValue={db.founder.bio}
                          onBlur={(e) => {
                            dataStore.updateFounder({ bio: e.target.value });
                            onDataUpdated();
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1">
                            GitHub URL
                          </label>
                          <input
                            type="text"
                            defaultValue={db.founder.socials.github}
                            onBlur={(e) => {
                              dataStore.updateFounder({
                                socials: { ...db.founder.socials, github: e.target.value },
                              });
                              onDataUpdated();
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1">
                            YouTube URL
                          </label>
                          <input
                            type="text"
                            defaultValue={db.founder.socials.youtube}
                            onBlur={(e) => {
                              dataStore.updateFounder({
                                socials: { ...db.founder.socials, youtube: e.target.value },
                              });
                              onDataUpdated();
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1">
                            Instagram URL
                          </label>
                          <input
                            type="text"
                            defaultValue={db.founder.socials.instagram}
                            onBlur={(e) => {
                              dataStore.updateFounder({
                                socials: { ...db.founder.socials, instagram: e.target.value },
                              });
                              onDataUpdated();
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1">
                            LinkedIn URL
                          </label>
                          <input
                            type="text"
                            defaultValue={db.founder.socials.linkedin}
                            onBlur={(e) => {
                              dataStore.updateFounder({
                                socials: { ...db.founder.socials, linkedin: e.target.value },
                              });
                              onDataUpdated();
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- TAB 6: INBOX --- */}
              {activeTab === 'inbox' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        Client &amp; Visitor Inquiries Inbox
                      </h3>
                      <p className="text-xs text-slate-400">
                        Messages sent through the contact form are stored here.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {db.messages.length === 0 ? (
                      <p className="text-xs text-slate-500 py-8 text-center">
                        No contact submissions received yet.
                      </p>
                    ) : (
                      db.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-bold text-white text-sm">{msg.name}</span>
                              <span className="text-xs text-slate-400 ml-2">
                                &lt;{msg.email}&gt;
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">
                              {msg.projectType}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                            {msg.message}
                          </p>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>Received: {msg.date}</span>
                            <div className="flex items-center gap-3">
                              <a
                                href={`mailto:${msg.email}?subject=Reply from Sanjay Raikwar (SKYDEV LABS)`}
                                className="text-cyan-400 hover:underline font-semibold"
                              >
                                Reply via Email
                              </a>
                              <button
                                onClick={() => {
                                  dataStore.deleteMessage(msg.id);
                                  onDataUpdated();
                                }}
                                className="text-rose-400 hover:text-rose-300"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* --- TAB 7: BACKUP & RESTORE --- */}
              {activeTab === 'backup' && (
                <div className="max-w-xl space-y-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      Database Backup &amp; Portability
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      Export your entire SKYDEV LABS database (projects, websites, apps, notes, stats, and inquiries) to a JSON file, or restore from a previous backup anytime.
                    </p>

                    <div className="space-y-4">
                      {/* Export Button */}
                      <button
                        onClick={handleExportJSON}
                        className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 flex items-center justify-center gap-2 hover:from-cyan-300 hover:to-sky-300 transition-all cursor-pointer shadow-md"
                      >
                        <Download className="w-4 h-4" />
                        <span>Export Database as JSON</span>
                      </button>

                      {/* Import Input */}
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <label className="text-xs font-semibold text-slate-300 block mb-2">
                          Restore Database from JSON Backup:
                        </label>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportJSON}
                          className="text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-cyan-400 hover:file:bg-slate-700 cursor-pointer"
                        />
                      </div>

                      {/* Cloud Firestore Status Badge */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Google Firebase Firestore
                          </span>
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                            LIVE &amp; CONNECTED
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Cloud Database ID: <code className="text-cyan-300 font-mono">nimble-inkwell-g83d0</code>. Contact form submissions and inquiries are synced to the cloud and stored securely.
                        </p>
                      </div>

                      {importStatus && (
                        <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-300">
                          {importStatus}
                        </div>
                      )}

                      {/* Reset defaults */}
                      <div className="pt-4 border-t border-slate-800">
                        <button
                          onClick={handleResetDefaults}
                          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-rose-400 bg-rose-950/30 hover:bg-rose-950/60 border border-rose-900/60 flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Reset Database to Default Seed Data</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal: Add/Edit Project */}
        {(editingProject || isAddingProject) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl">
              <h4 className="font-bold text-white text-base mb-4">
                {isAddingProject ? 'Add New Project' : 'Edit Project'}
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Title</label>
                  <input
                    type="text"
                    value={editingProject?.title || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject!, title: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Category</label>
                    <select
                      value={editingProject?.category || 'AI'}
                      onChange={(e) =>
                        setEditingProject({
                          ...editingProject!,
                          category: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    >
                      <option value="AI">AI</option>
                      <option value="Web">Web</option>
                      <option value="App">App</option>
                      <option value="Security">Security</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Year/Date</label>
                    <input
                      type="text"
                      value={editingProject?.date || '2026'}
                      onChange={(e) =>
                        setEditingProject({ ...editingProject!, date: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={editingProject?.description || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject!, description: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white resize-none"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Full Details / Architecture</label>
                  <textarea
                    rows={2}
                    value={editingProject?.fullDetails || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject!, fullDetails: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white resize-none"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={editingProject?.tags.join(', ') || ''}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject!,
                        tags: e.target.value.split(',').map((t) => t.trim()),
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="projPublished"
                    checked={editingProject?.published ?? true}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject!, published: e.target.checked })
                    }
                  />
                  <label htmlFor="projPublished" className="text-slate-300">
                    Publish immediately on live website
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setEditingProject(null);
                    setIsAddingProject(false);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveProject(editingProject!)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add/Edit Website */}
        {(editingWebsite || isAddingWebsite) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl">
              <h4 className="font-bold text-white text-base mb-4">
                {isAddingWebsite ? 'Add New Website' : 'Edit Website'}
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Website Title</label>
                  <input
                    type="text"
                    value={editingWebsite?.title || ''}
                    onChange={(e) =>
                      setEditingWebsite({ ...editingWebsite!, title: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Category</label>
                  <input
                    type="text"
                    value={editingWebsite?.category || ''}
                    onChange={(e) =>
                      setEditingWebsite({ ...editingWebsite!, category: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={editingWebsite?.description || ''}
                    onChange={(e) =>
                      setEditingWebsite({ ...editingWebsite!, description: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Live Demo URL</label>
                    <input
                      type="text"
                      value={editingWebsite?.liveDemoUrl || ''}
                      onChange={(e) =>
                        setEditingWebsite({ ...editingWebsite!, liveDemoUrl: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Source Code URL</label>
                    <input
                      type="text"
                      value={editingWebsite?.sourceCodeUrl || ''}
                      onChange={(e) =>
                        setEditingWebsite({ ...editingWebsite!, sourceCodeUrl: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Technologies (comma separated)</label>
                  <input
                    type="text"
                    value={editingWebsite?.technologies.join(', ') || ''}
                    onChange={(e) =>
                      setEditingWebsite({
                        ...editingWebsite!,
                        technologies: e.target.value.split(',').map((t) => t.trim()),
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setEditingWebsite(null);
                    setIsAddingWebsite(false);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveWebsite(editingWebsite!)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400"
                >
                  Save Website
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add/Edit App */}
        {(editingApp || isAddingApp) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl">
              <h4 className="font-bold text-white text-base mb-4">
                {isAddingApp ? 'Add New App' : 'Edit App'}
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">App Name</label>
                  <input
                    type="text"
                    value={editingApp?.title || ''}
                    onChange={(e) => setEditingApp({ ...editingApp!, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Platform</label>
                    <select
                      value={editingApp?.platform || 'Android'}
                      onChange={(e) =>
                        setEditingApp({ ...editingApp!, platform: e.target.value as any })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    >
                      <option value="Android">Android</option>
                      <option value="Web">Web</option>
                      <option value="Cross-Platform">Cross-Platform</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Version</label>
                    <input
                      type="text"
                      value={editingApp?.version || 'v1.0.0'}
                      onChange={(e) =>
                        setEditingApp({ ...editingApp!, version: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={editingApp?.description || ''}
                    onChange={(e) =>
                      setEditingApp({ ...editingApp!, description: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white resize-none"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Features (newline separated)</label>
                  <textarea
                    rows={3}
                    value={editingApp?.features.join('\n') || ''}
                    onChange={(e) =>
                      setEditingApp({
                        ...editingApp!,
                        features: e.target.value.split('\n').filter((f) => f.trim()),
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white resize-none font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setEditingApp(null);
                    setIsAddingApp(false);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveApp(editingApp!)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400"
                >
                  Save App
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add/Edit Note */}
        {(editingNote || isAddingNote) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl">
              <h4 className="font-bold text-white text-base mb-4">
                {isAddingNote ? 'Add New Study Note' : 'Edit Study Note'}
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Note Title</label>
                  <input
                    type="text"
                    value={editingNote?.title || ''}
                    onChange={(e) => setEditingNote({ ...editingNote!, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Class</label>
                    <select
                      value={editingNote?.classCategory || 'Class 12'}
                      onChange={(e) =>
                        setEditingNote({
                          ...editingNote!,
                          classCategory: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    >
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                      <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Subject</label>
                    <select
                      value={editingNote?.subject || 'Physics'}
                      onChange={(e) =>
                        setEditingNote({
                          ...editingNote!,
                          subject: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    >
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Operating System">Operating System</option>
                      <option value="Linux">Linux</option>
                      <option value="Cyber Security">Cyber Security</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Key Summary</label>
                  <textarea
                    rows={2}
                    value={editingNote?.summary || ''}
                    onChange={(e) =>
                      setEditingNote({ ...editingNote!, summary: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white resize-none"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">
                    Detailed Content (Supports Markdown &amp; Sections)
                  </label>
                  <textarea
                    rows={8}
                    value={editingNote?.content || ''}
                    onChange={(e) =>
                      setEditingNote({ ...editingNote!, content: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setEditingNote(null);
                    setIsAddingNote(false);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveNote(editingNote!)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400"
                >
                  Save Study Note
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
