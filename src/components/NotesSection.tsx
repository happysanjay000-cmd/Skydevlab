import React, { useState, useMemo } from 'react';
import { StudyNote, ClassCategory, SubjectCategory } from '../types';
import { Search, BookOpen, Clock, ArrowRight, Download, Filter, Sparkles } from 'lucide-react';
import { NoteReaderModal } from './NoteReaderModal';

interface NotesSectionProps {
  notes: StudyNote[];
}

export const NotesSection: React.FC<NotesSectionProps> = ({ notes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [activeNote, setActiveNote] = useState<StudyNote | null>(null);

  const classFilters = ['All', 'Class 10', 'Class 11', 'Class 12', 'B.Sc. Computer Science'];

  const subjectFilters = [
    'All',
    'Physics',
    'Chemistry',
    'Mathematics',
    'Computer Science',
    'Operating System',
    'Linux',
    'Cyber Security',
  ];

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      // Class filter
      if (selectedClass !== 'All' && n.classCategory !== selectedClass) {
        return false;
      }
      // Subject filter
      if (selectedSubject !== 'All' && n.subject !== selectedSubject) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = n.title.toLowerCase().includes(query);
        const matchesSummary = n.summary.toLowerCase().includes(query);
        const matchesTags = n.tags.some((t) => t.toLowerCase().includes(query));
        const matchesSubject = n.subject.toLowerCase().includes(query);
        return matchesTitle || matchesSummary || matchesTags || matchesSubject;
      }
      return true;
    });
  }, [notes, selectedClass, selectedSubject, searchQuery]);

  return (
    <section id="notes" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>OPEN ACADEMIC KNOWLEDGE BASE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Free Educational &amp; Technical Notes
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-yield revision notes, derivations, and computer science concepts curated by Sanjay Raikwar (Class 12 PCM &amp; AI Developer). Open &amp; free for all learners.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes by topic, theorem, formula, or keyword (e.g. Gauss, Calculus, Linux, OWASP)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Class Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap pl-1">
              Class:
            </span>
            {classFilters.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedClass(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedClass === c
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Subject Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap pl-1">
              Subject:
            </span>
            {subjectFilters.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSubject(s)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedSubject === s
                    ? 'bg-blue-600 text-white font-bold shadow-[0_0_12px_rgba(37,99,235,0.35)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
            >
              <div>
                {/* Meta info row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-900/60 px-2.5 py-0.5 rounded">
                    {note.subject}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{note.readTime}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-medium mb-1">
                  {note.classCategory}
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 line-clamp-2">
                  {note.title}
                </h3>

                <p className="text-xs text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
                  {note.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {note.tags.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveNote(note)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>Read Full Notes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 max-w-xl mx-auto">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-base mb-1">No notes found matching your filters</p>
            <p className="text-slate-500 text-xs mb-4">
              Try adjusting your search terms or clearing the subject/class filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedClass('All');
                setSelectedSubject('All');
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Note Reader Modal */}
      <NoteReaderModal note={activeNote} onClose={() => setActiveNote(null)} />
    </section>
  );
};
