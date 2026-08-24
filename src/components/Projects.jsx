import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { UberNCRPreview, SmartCityPreview, LlamaBuddyPreview, ChatbotPreview } from './ProjectPreviews';
import { Github, ExternalLink, HelpCircle, Hammer, Wrench, Trophy, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Data Analytics / BI', 'Frontend Development'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]));

  const renderPreview = (demoType) => {
    switch (demoType) {
      case 'powerbi_preview':
        return <UberNCRPreview />;
      case 'smartcity_preview':
        return <SmartCityPreview />;
      case 'llama_preview':
        return <LlamaBuddyPreview />;
      case 'chatbot_preview':
        return <ChatbotPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Practical Work</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Featured Projects</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Each project below is documented using a 4-question framework detailing the problem, solution, tech stack, and achievements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900/60 rounded-2xl border border-slate-800/90 overflow-hidden shadow-xl hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 p-6 sm:p-8">
                
                {/* Left Column: Real Project Story (4 Questions) */}
                <div className="xl:col-span-7 space-y-6 flex flex-col justify-between">
                  <div>
                    {/* Category Pill & Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded">
                        {project.tag}
                      </span>
                      <span className="text-xs text-slate-400">• {project.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                      {project.title}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">{project.subtitle}</div>

                    {/* The 4-Question Framework */}
                    <div className="mt-6 space-y-4 text-xs sm:text-sm">
                      
                      {/* Q1: What was the problem? */}
                      <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-1">
                          <HelpCircle size={14} />
                          <span>1. What was the problem?</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Q2: What did I build? */}
                      <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs mb-1">
                          <Hammer size={14} />
                          <span>2. What did I build?</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {project.built}
                        </p>
                      </div>

                      {/* Q3: Technologies Used */}
                      <div>
                        <div className="flex items-center gap-2 text-slate-400 font-semibold text-xs mb-2">
                          <Wrench size={14} />
                          <span>3. Technologies Used:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span 
                              key={t}
                              className="bg-slate-800 text-slate-200 text-[11px] font-mono px-2.5 py-1 rounded border border-slate-700/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Q4: Learnings & Achievements */}
                      <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                          <Trophy size={14} />
                          <span>4. What I learned / achieved:</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {project.learnings}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Metrics Row & GitHub Link */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    {/* Key Metrics Badges */}
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800 text-slate-300">
                          <span className="text-slate-400">{m.label}: </span>
                          <span className="font-semibold text-slate-100">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links (Live App & GitHub) */}
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1.5 rounded-lg transition shadow-sm"
                        >
                          <ExternalLink size={13} />
                          <span>Live Streamlit App</span>
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg font-medium transition"
                      >
                        <Github size={14} />
                        <span>Code Repo</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Column: Pixel-Perfect UI Preview Component */}
                <div className="xl:col-span-5 flex flex-col justify-center w-full min-w-0">
                  <div className="space-y-2 w-full">
                    <div className="text-[11px] text-slate-400 flex items-center justify-between px-1">
                      <span>Dashboard & Data Preview</span>
                      <span className="font-mono text-emerald-400 text-[10px]">Power BI / React</span>
                    </div>
                    {renderPreview(project.demoType)}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
