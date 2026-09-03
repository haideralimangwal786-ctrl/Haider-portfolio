import React, { useState } from "react";

const Icons = {
  Briefcase: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  GraduationCap: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Layers: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  CheckCircle: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
};

export default function Experience({ data }) {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest uppercase">
              04 // ACADEMIC & PROFESSIONAL CREDENTIALS
            </span>
            <span className="h-px w-12 bg-[#6BF500]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Journey & <span className="text-[#6BF500]">Milestones</span>
          </h2>
          <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive record of formal academic degrees from recognized institutions and commercial engineering leadership in Full-Stack & AI development.
          </p>
        </div>


        {/* Segmented Capsule Switcher */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3.5 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === "education"
                ? "bg-[#6BF500] text-[#050B04] font-bold shadow-[0_0_25px_rgba(107,245,0,0.4)]"
                : "bg-[#0B130A] text-[#A0A5A0] hover:text-white hover:bg-[#111d10] border border-[#162714]"
            }`}
          >
            <Icons.GraduationCap className="w-4 h-4" />
            <span>Academic Institutions ({data.education.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3.5 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === "experience"
                ? "bg-[#6BF500] text-[#050B04] font-bold shadow-[0_0_25px_rgba(107,245,0,0.4)]"
                : "bg-[#0B130A] text-[#A0A5A0] hover:text-white hover:bg-[#111d10] border border-[#162714]"
            }`}
          >
            <Icons.Briefcase className="w-4 h-4" />
            <span>Work Experience ({data.experience.length})</span>
          </button>
        </div>

        {/* Dynamic Cards Container */}
        <div className="flex flex-col gap-8">
          {/* TAB 1: ACADEMIC CREDENTIALS & CAMPUS SHOWCASE */}
          {activeTab === "education" &&
            data.education.map((edu, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(107,245,0,0.2)] overflow-hidden flex flex-col md:flex-row"
              >
                {/* Left: Campus Photograph Stage */}
                <div className="relative md:w-5/12 min-h-[280px] md:min-h-[340px] overflow-hidden bg-[#050B04] flex-shrink-0">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B130A] via-[#0B130A]/30 to-transparent" />
                  
                  {/* Floating Tags on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#050B04]/90 border border-[#162714] backdrop-blur-md text-[11px] font-mono text-[#6BF500] shadow-[0_0_12px_rgba(0,0,0,0.7)]">
                      {edu.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#050B04]/90 border border-[#162714] backdrop-blur-md text-[11px] font-mono text-white shadow-[0_0_12px_rgba(0,0,0,0.7)]">
                      {edu.period}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-white/90 bg-[#050B04]/90 px-3 py-1.5 rounded-xl border border-[#162714] backdrop-blur-md inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-pulse" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {/* Right: Academic Dossier & Direct Portal Link */}
                <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between gap-6">
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#6BF500] transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 rounded-lg bg-[#6BF500]/10 border border-[#6BF500]/30 text-xs font-mono text-[#6BF500] font-semibold">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Institution Name */}
                    <div className="text-base font-bold text-[#6BF500] mb-3 font-mono flex items-center gap-2">
                      <Icons.GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A0A5A0] leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Highlights Box */}
                    {edu.highlights && (
                      <div className="p-4 rounded-2xl bg-[#050B04]/80 border border-[#162714] mb-4">
                        <ul className="flex flex-col gap-2">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-[#A0A5A0] flex items-start gap-2.5 leading-relaxed">
                              <Icons.CheckCircle className="w-3.5 h-3.5 text-[#6BF500] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-[#162714] flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#6BF500] hover:bg-[#86fa24] text-[#050B04] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(107,245,0,0.35)] hover:shadow-[0_0_30px_rgba(107,245,0,0.5)] flex items-center gap-2 active:scale-95 group/btn"
                    >
                      <span>Visit Official Portal</span>
                      <Icons.ExternalLink className="w-4 h-4 text-[#050B04] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <span className="text-[11px] font-mono text-[#A0A5A0] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500]" />
                      <span>Verified Academic Institution</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

          {/* TAB 2: WORK EXPERIENCE SHOWCASE */}
          {activeTab === "experience" &&
            data.experience.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(107,245,0,0.2)] p-7 sm:p-9 flex flex-col justify-between gap-6"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#6BF500] transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-[#6BF500] bg-[#050B04] px-4 py-1.5 rounded-full border border-[#162714] flex items-center gap-2 shadow-[0_0_12px_rgba(107,245,0,0.15)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-ping" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  {/* Company Strip */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-5">
                    <span className="text-white font-bold text-sm">{item.company}</span>
                    <span className="text-[#162714]">•</span>
                    <span className="px-3 py-1 rounded-md bg-[#050B04] border border-[#162714] text-[#A0A5A0]">
                      {item.type}
                    </span>
                    {item.badge && (
                      <span className="px-3 py-1 rounded-md bg-[#6BF500]/10 border border-[#6BF500]/30 text-[#6BF500] font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#A0A5A0] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements Box */}
                  <div className="p-5 rounded-2xl bg-[#050B04]/80 border border-[#162714] mb-6">
                    <h4 className="text-[11px] font-mono text-[#6BF500] uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                      <Icons.CheckCircle className="w-3.5 h-3.5" />
                      <span>Key Architectural Milestones & Deliverables</span>
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-[#A0A5A0] flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[#6BF500] mt-0.5 font-mono font-bold">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#162714]">
                  <span className="text-[10px] font-mono text-[#A0A5A0]/80 uppercase mr-1">Stack Leveraged:</span>
                  {item.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#050B04] border border-[#162714] text-xs font-mono text-[#A0A5A0] hover:text-[#6BF500] hover:border-[#6BF500]/50 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
