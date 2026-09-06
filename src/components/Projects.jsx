import React, { useState } from "react";
import { soundManager } from "../utils/audio.js";

export default function Projects({ data }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", ...Array.from(new Set(data.projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === "All"
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest">
                03 // SHOWCASE
              </span>
              <span className="h-px w-12 bg-[#6BF500]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-[#6BF500]">Projects</span>
            </h2>
            <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-xl">
              Real-world Full-Stack MERN applications, freelance client deployments, and modern responsive web systems — backed by verified code and tangible results.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const count = tab === "All" ? data.projects.length : data.projects.filter(p => p.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveFilter(tab);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    activeFilter === tab
                      ? "bg-[#6BF500] text-[#050B04] font-bold shadow-[0_0_20px_rgba(107,245,0,0.35)]"
                      : "bg-[#0B130A] text-[#A0A5A0] hover:text-white hover:bg-[#111d10] border border-[#162714]"
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeFilter === tab ? "bg-[#050B04] text-[#6BF500]" : "bg-[#162714] text-[#A0A5A0]"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundManager.playHover()}
              className="group relative rounded-3xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(107,245,0,0.2)] flex flex-col overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-[#050B04]">
                <img
                  src={project.image}
                  alt={`${project.title} - Web Development Project by Haider Ali`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B130A] via-[#0B130A]/20 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#050B04]/90 border border-[#162714] backdrop-blur-md text-[11px] font-mono text-[#6BF500]">
                    {project.badge || project.category}
                  </span>
                  {project.liveUrl ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#050B04]/90 border border-[#6BF500]/50 backdrop-blur-md text-[10px] font-mono font-bold text-[#6BF500] shadow-[0_0_12px_rgba(107,245,0,0.3)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-ping" />
                      LIVE
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-[#050B04]/90 border border-[#162714] backdrop-blur-md text-[10px] font-mono text-[#A0A5A0]">
                      CODE
                    </span>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#6BF500] transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-xs font-mono text-[#6BF500]/90 mb-2.5 line-clamp-1">
                      {project.tagline}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-[#A0A5A0] line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4 p-3.5 rounded-xl bg-[#050B04]/70 border border-[#162714]">
                      <ul className="flex flex-col gap-1.5">
                        {project.highlights.slice(0, 2).map((hl, hIdx) => (
                          <li key={hIdx} className="text-[11px] text-[#A0A5A0] flex items-start gap-2 leading-tight">
                            <span className="text-[#6BF500] font-mono font-bold">▹</span>
                            <span className="line-clamp-2">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-[#050B04] border border-[#162714] text-[10px] font-mono text-[#A0A5A0]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#050B04] border border-[#162714] text-[10px] font-mono text-[#A0A5A0]/60">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#162714]">
                  {project.liveUrl ? (
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Code on GitHub"
                        onClick={() => soundManager.playClick()}
                        className="py-2.5 px-3 rounded-xl bg-[#050B04] border border-[#162714] hover:border-[#6BF500]/50 text-[#A0A5A0] hover:text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>&lt;/&gt;</span>
                        <span>Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open Live App"
                        onClick={() => soundManager.playClick()}
                        className="py-2.5 px-3 rounded-xl bg-[#6BF500] hover:bg-[#86fa24] text-[#050B04] font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(107,245,0,0.35)] flex items-center justify-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <span>↗</span>
                      </a>
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source on GitHub"
                      onClick={() => soundManager.playClick()}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#050B04] border border-[#162714] hover:border-[#6BF500]/50 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 hover:bg-[#111d10]"
                    >
                      <span>&lt;/&gt;</span>
                      <span>View GitHub Repository</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
