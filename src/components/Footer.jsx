import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Name & Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <div className="font-semibold text-slate-200 text-sm">
            {portfolioData.personal.name}
          </div>
          <p className="text-slate-400">
            Data Analyst | BI Developer | Frontend Developer • B.Tech CSE (IoT) Lucknow
          </p>
          <div className="text-[11px] text-slate-500 pt-1">
            © {new Date().getFullYear()} Amritanshu Shukla. Designed & maintained personally.
          </div>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="hover:text-slate-200 transition"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
