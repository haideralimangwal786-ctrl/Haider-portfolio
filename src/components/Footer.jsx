import React, { useState, useEffect } from "react";
import { soundManager } from "../utils/audio.js";

export default function Footer({ data, onNavigate }) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-8 border-t border-zinc-900 bg-[#050505] text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-neon-500/30 flex items-center justify-center font-mono font-black text-neon-400">
              HA
            </div>
            <div>
              <div className="font-bold text-white tracking-tight">
                {data.personal.name}
              </div>
              <div className="text-xs font-mono text-zinc-500">
                {data.personal.role}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-wider">
            {["hero", "about", "skills", "projects", "experience", "contact"].map(
              (sec) => (
                <button
                  key={sec}
                  onClick={() => {
                    soundManager.playClick();
                    onNavigate(sec);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className="hover:text-neon-400 transition-colors"
                >
                  {sec}
                </button>
              )
            )}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-neon-400 hover:border-neon-500/50 transition-all flex items-center gap-2"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>

        {/* Bottom Row: Local Time & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-400 animate-ping" />
            <span>ALL SYSTEMS OPERATIONAL</span>
            <span>•</span>
            <span className="text-zinc-400">LOCAL TIME: {timeString}</span>
          </div>

          <div>
            © {new Date().getFullYear()} {data.personal.name}. Built with React, Tailwind & GSAP.
          </div>
        </div>
      </div>
    </footer>
  );
}
