import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, BookOpen, Code2, Database, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Background & Story</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">About Me</h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Natural Photo & Campus Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 p-2 shadow-xl">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative bg-slate-950">
                <img
                  src={portfolioData.personal.casualPhoto}
                  alt="Amritanshu Shukla on campus in Lucknow"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 backdrop-blur border border-slate-800 p-2.5 rounded text-xs">
                  <div className="font-semibold text-slate-200 flex items-center justify-between">
                    <span>Campus in Lucknow</span>
                    <span className="text-[10px] text-blue-400 font-mono">BBDU Student</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Final-Year B.Tech CSE (IoT) • NCC Cadet
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Content Description */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm leading-relaxed">
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">
                Data Analyst & Frontend Developer from Lucknow, India
              </h3>
              
              <p>
                I am currently in my final year of B.Tech in Computer Science & Engineering (IoT) at Babu Banarasi Das University, Lucknow. My technical focus bridges <strong className="text-slate-100">Data Analytics & Business Intelligence</strong> with <strong className="text-slate-100">Frontend Web Development</strong>.
              </p>

              <p>
                In data analytics, I work primarily with <strong className="text-slate-100 font-mono text-xs">Python, SQL, Power BI, and Excel</strong> to clean raw datasets, model relational data, and build interactive dashboards that answer practical business questions.
              </p>

              <p>
                On the web development side, I build clean, responsive user interfaces using <strong className="text-slate-100 font-mono text-xs">React.js, JavaScript, and Tailwind CSS</strong>. During my internship at Codveda Technologies, I developed production UI components and collaborated within real development workflows.
              </p>
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-200 text-xs mb-1">
                  <Database size={16} className="text-blue-400" />
                  <span>Data & Analytics Focus</span>
                </div>
                <p className="text-xs text-slate-400">
                  SQL queries, data cleaning in Python (Pandas), DAX measures, and Power BI interactive reports.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-200 text-xs mb-1">
                  <Code2 size={16} className="text-emerald-400" />
                  <span>Frontend Engineering</span>
                </div>
                <p className="text-xs text-slate-400">
                  React functional components, Tailwind utility styling, REST API integration, and responsive layouts.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-200 text-xs mb-1">
                  <BookOpen size={16} className="text-amber-400" />
                  <span>CS & IoT Foundation</span>
                </div>
                <p className="text-xs text-slate-400">
                  B.Tech CSE curriculum at BBDU Lucknow covering DBMS, IoT sensor networks, and software fundamentals.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-200 text-xs mb-1">
                  <ShieldCheck size={16} className="text-indigo-400" />
                  <span>NCC B & C Certificates</span>
                </div>
                <p className="text-xs text-slate-400">
                  National Cadet Corps certified—reflecting strong personal discipline, teamwork, and accountability.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
