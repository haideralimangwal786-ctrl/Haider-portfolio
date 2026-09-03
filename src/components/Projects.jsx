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
    <section id="projects" className="relative py-28 px-4 sm:px-8 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-neon-400 font-bold tracking-widest">
                03 // SHOWCASE
              </span>
              <span className="h-px w-12 bg-neon-500/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-neon-400">Creations</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
              A curated selection of high-impact web apps, digital products, and experimental UI prototypes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  soundManager.playClick();
                  setActiveFilter(tab);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === tab
                    ? "bg-neon-400 text-black font-bold shadow-[0_0_20px_rgba(0,255,135,0.3)]"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundManager.playHover()}
              className="group relative rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-neon-500/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,255,135,0.18)] flex flex-col overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md text-[11px] font-mono text-neon-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-zinc-800/80">
                  {project.liveUrl ? (
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Code on GitHub"
                        onClick={() => soundManager.playClick()}
                        className="py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
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
                        className="py-2.5 px-3 rounded-xl bg-neon-400 hover:bg-neon-300 text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,255,135,0.3)] flex items-center justify-center gap-1.5"
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
                      className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-neon-500/50 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 hover:bg-zinc-800/80"
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
