import React, { useEffect } from "react";
import { soundManager } from "../utils/audio.js";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        soundManager.playClick();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in select-none">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0C0C0C] border border-zinc-800 shadow-[0_0_80px_rgba(0,255,135,0.15)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          onMouseEnter={() => soundManager.playHover()}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-400 hover:text-white hover:border-neon-400 transition-all flex items-center justify-center"
        >
          ✕
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-3xl border-b border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-neon-400 text-black text-xs font-mono font-bold uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800 backdrop-blur-md">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-neon-400">
              {project.tagline}
            </p>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Architecture Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                Key Architectural Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80"
                  >
                    <span className="text-neon-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Technologies & APIs Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap gap-4 items-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              className="px-6 py-3 rounded-xl bg-neon-400 hover:bg-neon-300 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,255,135,0.4)] flex items-center gap-2"
            >
              <span>Launch Live App</span>
              <span>↗</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-neon-500/50 font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>GitHub Repository</span>
              <span>⚡</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
