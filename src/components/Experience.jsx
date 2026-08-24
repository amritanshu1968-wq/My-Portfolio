import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Practical Experience</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Work & Internships</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Real industry experience developing frontend components and working within team workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700/80 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-blue-400" size={18} />
                    <h3 className="font-bold text-slate-100 text-lg">{exp.role}</h3>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5">{exp.company}</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="text-blue-400 shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
