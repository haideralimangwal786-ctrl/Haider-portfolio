import React from "react";

const Icons = {
  GraduationCap: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
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
  ),
  Shield: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ArrowRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  )
};

export default function Education({ data, onNavigate }) {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest uppercase">
              04 // ACADEMIC FOUNDATION & CREDENTIALS
            </span>
            <span className="h-px w-12 bg-[#6BF500]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Academic <span className="text-[#6BF500]">Credentials</span>
          </h2>
          <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-2xl">
            Formal computer science education from recognized institutions, foundational software engineering training, and real-world project execution.
          </p>
        </div>

        {/* Dynamic Cards Container */}
        <div className="flex flex-col gap-8">
          {data.education.map((edu, idx) => (
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
              </div>

              {/* Right: Academic Details Stage */}
              <div className="p-7 sm:p-9 md:w-7/12 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#6BF500] transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-[#6BF500] bg-[#050B04] px-3.5 py-1.5 rounded-full border border-[#162714] flex items-center gap-1.5 shadow-[0_0_12px_rgba(107,245,0,0.15)]">
                      <Icons.CheckCircle className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </span>
                  </div>

                  <div className="text-sm font-mono text-[#6BF500] mb-3 flex items-center gap-2">
                    <span className="font-bold">{edu.institution}</span>
                    <span className="text-[#A0A5A0]">•</span>
                    <span className="text-[#A0A5A0] text-xs">{edu.location}</span>
                  </div>

                  <p className="text-sm text-[#A0A5A0] leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-[#050B04]/80 border border-[#162714]">
                    <h4 className="text-[11px] font-mono text-[#6BF500] uppercase tracking-wider mb-2.5 flex items-center gap-2 font-bold">
                      <Icons.GraduationCap className="w-3.5 h-3.5" />
                      <span>Core Studies & Specialization Focus</span>
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs sm:text-sm text-[#A0A5A0] flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[#6BF500] mt-0.5 font-mono font-bold">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#162714]">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#A0A5A0] hover:text-[#6BF500] transition-colors"
                  >
                    <span>Visit Institution Website</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] font-mono text-[#A0A5A0] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500]" />
                    <span>Verified Academic Institution</span>
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Authentic Engineering Trust Banner */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0B130A] border border-[#162714] flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#6BF500]/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6BF500]/10 border border-[#6BF500]/30 flex items-center justify-center flex-shrink-0 text-[#6BF500]">
                <Icons.Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Authentic, Project-Driven Engineering</h3>
                <p className="text-xs sm:text-sm text-[#A0A5A0] leading-relaxed max-w-2xl">
                  Instead of unverified claims or inflated corporate titles, my skills are demonstrated through tangible, production-ready MERN &amp; React code, open-source GitHub repositories, and verified academic training at University of Chakwal.
                </p>
              </div>
            </div>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate && onNavigate("projects");
              }}
              className="px-6 py-3 rounded-xl bg-[#6BF500] hover:bg-[#86fa24] text-[#050B04] font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(107,245,0,0.35)] flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore All Projects</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Named alias for backwards compatibility
export { Education as Experience };
