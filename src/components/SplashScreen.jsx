import React, { useEffect, useState } from "react";
import { soundManager } from "../utils/audio.js";

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM CORE...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const statusMessages = [
      { at: 15, text: "INITIALIZING SYSTEM CORE..." },
      { at: 40, text: "COMPILING NEON MATRIX & ASSETS..." },
      { at: 70, text: "CALIBRATING GSAP PHYSICS & LAYERS..." },
      { at: 90, text: "READY. LAUNCHING PORTFOLIO..." }
    ];

    const startTime = Date.now();
    const duration = 2000; // 2 seconds high-speed luxury splash

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      const currentStatus = statusMessages
        .slice()
        .reverse()
        .find((msg) => pct >= msg.at);
      if (currentStatus) {
        setStatusText(currentStatus.text);
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#070707] text-white transition-opacity duration-700 select-none ${
        isFading ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Ambient glowing backdrop circle */}
      <div className="absolute w-96 h-96 rounded-full bg-neon-500/10 blur-[120px] pointer-events-none animate-pulse" />

      {/* Center Monogram Logo */}
      <div className="relative mb-10 flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-[#0F0F0F] border border-neon-500/30 shadow-[0_0_50px_rgba(0,255,135,0.2)]">
          {/* Animated SVG Border */}
          <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 100 100">
            <rect
              x="2"
              y="2"
              width="96"
              height="96"
              rx="16"
              fill="none"
              stroke="#00FF87"
              strokeWidth="2.5"
              strokeDasharray="360"
              strokeDashoffset={360 - (progress / 100) * 360}
              className="transition-all duration-100 ease-out"
            />
          </svg>

          {/* Glowing Monogram / Initial */}
          <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-neon-300 to-neon-500 drop-shadow-[0_0_15px_rgba(0,255,135,0.6)]">
            HA
          </span>
        </div>

        {/* Brand Tag */}
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-neon-400 animate-ping" />
          <span className="text-xs font-mono tracking-widest uppercase text-neon-400">
            HAIDER ALI // PORTFOLIO 2026
          </span>
        </div>
      </div>

      {/* Real-time Loading Meter */}
      <div className="w-64 sm:w-80 flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
          <span className="truncate pr-2">{statusText}</span>
          <span className="text-neon-400 font-bold">{progress}%</span>
        </div>

        {/* Progress Track */}
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-neon-400 to-neon-300 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#00FF87]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
    </div>
  );
}
