import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, ArrowDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Data Analyst",
    "BI Developer",
    "Business Analyst",
    "Frontend Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }, 45);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, 85);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center border-b border-slate-900 overflow-hidden">
      {/* Subtle Background Grid & Glow (Clean & Minimal) */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Column (Recruiter First - Clear in 10s) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{portfolioData.personal.statusPill}</span>
            </div>

            {/* Candidate Name & Looping Typewriter Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 font-sans">
                {portfolioData.personal.name}
              </h1>
              
              {/* Typewriter Effect */}
              <div className="text-lg sm:text-2xl font-semibold text-blue-400 min-h-[36px] flex items-center gap-1 font-mono">
                <span className="text-slate-300 font-sans font-medium text-base sm:text-xl">I am a </span>
                <span className="text-blue-400 border-b-2 border-blue-500/80 pb-0.5">{currentText}</span>
                <span className="inline-block w-2 h-5 sm:h-6 bg-blue-400 animate-pulse ml-0.5"></span>
              </div>
            </div>

            {/* Authentic Non-AI Intro */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {portfolioData.personal.bioFull}
            </p>

            {/* Quick Credentials Badge Bar */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>B.Tech CSE (IoT) @ BBDU Lucknow</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>Ex-Frontend Intern @ Codveda</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>IBM Certified Data Visualization</span>
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg transition flex items-center gap-2 shadow-md shadow-blue-950"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Amritanshu_Shukla_Resume.pdf"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg transition flex items-center gap-2"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Direct Contact Social Row */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-200 transition"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-1.5 hover:text-slate-200 transition"
              >
                <Mail size={15} />
                <span>{portfolioData.personal.email}</span>
              </a>

              <div className="flex items-center gap-1 text-slate-500">
                <MapPin size={14} />
                <span>Lucknow, UP</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Natural Border Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl p-3">
                <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={portfolioData.personal.formalPhoto}
                    alt="Amritanshu Shukla"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Caption on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700/80 text-xs">
                    <div className="font-semibold text-slate-100">Amritanshu Shukla</div>
                    <div className="text-[11px] text-slate-400">Final-Year B.Tech CSE • Lucknow, India</div>
                  </div>
                </div>

                {/* Quick Info Grid Under Photo */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-950 p-2 rounded border border-slate-800/80 text-center">
                    <span className="text-slate-400 block text-[10px]">PRIMARY FOCUS</span>
                    <span className="text-slate-200 font-medium">Python, SQL, Power BI</span>
                  </div>
                  <div className="bg-slate-950 p-2 rounded border border-slate-800/80 text-center">
                    <span className="text-slate-400 block text-[10px]">FRONTEND STACK</span>
                    <span className="text-slate-200 font-medium">React.js & Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
