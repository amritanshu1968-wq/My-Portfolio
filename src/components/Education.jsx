import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Shield, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Academic Foundation</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Education & Certifications</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            My B.Tech degree coursework, school foundation in Lucknow, and industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <GraduationCap className="text-blue-400" size={20} />
              <span>Academic Credentials</span>
            </h3>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700/80 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-bold text-slate-100 text-sm sm:text-base">{edu.degree}</h4>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-400 flex items-center gap-1.5 mb-2">
                    <span>{edu.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{edu.location}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Honors */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Award className="text-emerald-400" size={20} />
              <span>Certifications & Leadership</span>
            </h3>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700/80 transition"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-slate-100 text-xs sm:text-sm">{cert.title}</h4>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      {cert.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Highlight Box for NCC */}
            <div className="bg-slate-900/90 border border-indigo-500/30 p-4 rounded-xl flex items-start gap-3">
              <Shield className="text-indigo-400 shrink-0 mt-0.5" size={20} />
              <div className="text-xs space-y-1">
                <div className="font-semibold text-slate-200">National Cadet Corps (NCC) Cadet</div>
                <p className="text-slate-400 leading-relaxed">
                  Holding NCC B & C Certificates represents rigorous physical training, drill excellence, emergency response skills, and team management during state and national camps.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
