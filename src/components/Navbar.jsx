import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand & Status */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
            AS
          </div>
          <div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base leading-tight tracking-tight group-hover:text-blue-400 transition">
              {portfolioData.personal.name}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="truncate max-w-[170px] sm:max-w-none">B.Tech CSE (IoT) • Lucknow</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-white hover:underline underline-offset-8 decoration-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Resume Download */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Amritanshu_Shukla_Resume.pdf"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm shadow-blue-900/20 active:scale-95"
          >
            <Download size={14} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg border border-slate-800 bg-slate-900/60"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-4 py-5 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 font-medium text-sm text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Amritanshu_Shukla_Resume.pdf"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2.5 rounded-lg flex items-center justify-center gap-2"
            >
              <Download size={14} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
