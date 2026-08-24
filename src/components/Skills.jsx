import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Database, Layout, Terminal, CheckCircle2, Info } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    if (category.includes('Data')) return <Database className="text-blue-400" size={18} />;
    if (category.includes('Frontend')) return <Layout className="text-emerald-400" size={18} />;
    return <Terminal className="text-amber-400" size={18} />;
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Technical Profile</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Skills & Tooling</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Interview-defensible skills reflecting my actual project work and B.Tech CSE (IoT) coursework.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700/80 transition"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2 pb-3 border-b border-slate-800">
                  {getCategoryIcon(group.category)}
                  <h3 className="font-bold text-slate-100 text-base">{group.category}</h3>
                </div>

                <p className="text-slate-400 text-xs mb-5">
                  {group.description}
                </p>

                {/* Skill Items List */}
                <div className="space-y-3.5">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10.5px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                <span>Defensible in technical interviews</span>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Technology Presentation */}
        <div className="mt-8 bg-slate-900/40 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-200">Grounded Skill Representation: </span>
            I differentiate between core technologies I use regularly (Python, SQL, Power BI, React, Tailwind) and specialized libraries used in specific academic projects.
          </div>
        </div>

      </div>
    </section>
  );
}
