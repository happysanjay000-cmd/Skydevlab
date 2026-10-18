import React, { useState } from 'react';
import { StudyNote } from '../types';
import { X, Download, Share2, Copy, Check, Printer, BookOpen, Clock, Tag } from 'lucide-react';

interface NoteReaderModalProps {
  note: StudyNote | null;
  onClose: () => void;
}

export const NoteReaderModal: React.FC<NoteReaderModalProps> = ({ note, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  if (!note) return null;

  const handleCopyText = () => {
    navigator.clipboard.writeText(`${note.title}\n\n${note.summary}\n\n${note.content}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${note.title} - SKYDEV LABS Notes`,
        text: note.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const handlePrintDownload = () => {
    // Open a formatted print window for clean PDF saving
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download or print this note.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${note.title} - SKYDEV LABS Study Notes</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #111827;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
            }
            h1 { color: #0284c7; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; }
            h2 { color: #0f172a; margin-top: 24px; border-bottom: 1px solid #f1f5f9; }
            .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; margin-bottom: 16px; }
            .summary { background: #f8fafc; border-left: 4px solid #0284c7; padding: 12px 16px; margin: 16px 0; font-style: italic; }
            pre { background: #f1f5f9; padding: 12px; border-radius: 6px; overflow-x: auto; font-family: monospace; }
            code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 14px; font-family: monospace; }
            .footer { margin-top: 40px; pt-4; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="badge">${note.classCategory} • ${note.subject}</div>
          <h1>${note.title}</h1>
          <div class="summary">${note.summary}</div>
          <div>${note.content.replace(/\n/g, '<br/>')}</div>
          <div class="footer">
            Published by <strong>SKYDEV LABS</strong> (Founder: Sanjay Raikwar) • Free Public Educational Notes
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden">
        {/* Reader Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span className="font-semibold">{note.classCategory}</span>
            <span>/</span>
            <span>{note.subject}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download / Print PDF */}
            <button
              onClick={handlePrintDownload}
              title="Download or Print PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-500 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save as PDF</span>
            </button>

            {/* Share Note */}
            <button
              onClick={handleShare}
              title="Share Note"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {shared ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{shared ? 'Link Copied!' : 'Share'}</span>
            </button>

            {/* Copy Content */}
            <button
              onClick={handleCopyText}
              title="Copy All Text"
              className="p-1.5 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Note Reader Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 text-slate-100">
          <div className="max-w-3xl mx-auto">
            {/* Header info */}
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {note.readTime}
              </span>
              <span>•</span>
              <span>Updated {note.date}</span>
              <span>•</span>
              <span className="text-cyan-400 font-medium">Free Public Notes</span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {note.title}
            </h1>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-sm text-cyan-200/90 leading-relaxed mb-8">
              <span className="font-bold text-cyan-300 block mb-1">Key Summary &amp; Takeaway:</span>
              {note.summary}
            </div>

            {/* Content Display */}
            <div className="space-y-6 text-slate-200 leading-relaxed font-sans text-sm sm:text-base">
              {note.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={pIdx}
                      className="font-display text-xl sm:text-2xl font-bold text-cyan-300 pt-4 pb-2 border-b border-slate-800"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={pIdx}
                      className="font-display text-lg font-semibold text-white pt-2"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('```')) {
                  const cleanedCode = paragraph.replace(/```[a-z]*\n?/gi, '').trim();
                  return (
                    <div key={pIdx} className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 my-4">
                      <div className="bg-slate-900/90 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-cyan-400">
                        Code / Terminal Syntax
                      </div>
                      <pre className="p-4 font-mono text-xs sm:text-sm text-cyan-100 overflow-x-auto leading-relaxed">
                        <code>{cleanedCode}</code>
                      </pre>
                    </div>
                  );
                } else {
                  return (
                    <p key={pIdx} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              {note.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300"
                >
                  <Tag className="w-3 h-3 text-cyan-400" />
                  {t}
                </span>
              ))}
            </div>

            {/* Citation box */}
            <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 text-center">
              Curated by <strong>Sanjay Raikwar</strong> • SKYDEV LABS Academic Research Unit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
