import React from "react";
import { soundManager } from "../utils/audio.js";

const Icons = {
  ArrowRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  ),
  Code: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
};

export default function About({ data, onNavigate }) {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest">
              01 // DISCOVER
            </span>
            <span className="h-px w-12 bg-[#6BF500]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-[#6BF500]">My Mission</span> & Craft
          </h2>
        </div>

        {/* Main Content Grid with Left Image & Right Story + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Transparent Cutout Portrait with Neon Ring & Aura */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Background Neon Glow */}
            <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[#6BF500]/25 via-[#429a00]/15 to-transparent blur-[70px] pointer-events-none animate-pulse" />
            
            {/* Circular Orbit / Tech Pattern */}
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-dashed border-[#6BF500]/25 pointer-events-none animate-spin" style={{ animationDuration: '45s' }} />

            {/* Main Showcase Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[460px] sm:h-[500px] rounded-3xl p-4 bg-gradient-to-b from-[#0B130A] to-[#050B04] border-2 border-[#162714] hover:border-[#6BF500]/60 transition-all duration-500 shadow-[0_0_50px_rgba(107,245,0,0.2)] hover:shadow-[0_0_80px_rgba(107,245,0,0.4)] group flex flex-col justify-end items-center overflow-hidden">
              {/* Radial Backdrop inside card */}
              <div className="absolute inset-x-4 top-12 bottom-0 rounded-full bg-gradient-to-t from-[#6BF500]/15 via-[#6BF500]/5 to-transparent blur-[40px] pointer-events-none" />

              {/* Behind-Head Glowing Colored Neon Circle Disc */}
              <div className="absolute top-10 sm:top-12 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[radial-gradient(circle_at_40%_40%,#86fa24_0%,#6BF500_30%,#2d6f02_70%,#0c2205_100%)] border-2 sm:border-[3px] border-[#86fa24] shadow-[0_0_60px_rgba(107,245,0,0.6),inset_0_0_30px_rgba(0,0,0,0.4)] pointer-events-none flex items-center justify-center">
                {/* Inner subtle concentric glow ring */}
                <div className="w-[82%] h-[82%] rounded-full border border-[#c2ff77]/40 pointer-events-none" />
              </div>

              {/* Concentric Outer Dashed Orbit Ring */}
              <div className="absolute top-6 sm:top-8 w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-[#6BF500]/40 pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />

              {/* Transparent Cutout Image */}
              <img
                src="./src/assets/haider-about-cutout.png"
                alt="Haider Ali"
                className="relative z-10 w-full h-[95%] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 25px rgba(107, 245, 0, 0.35))"
                }}
              />

              {/* Floating Badge 1: Top Left */}
              <div className="absolute top-6 left-5 z-20 px-3.5 py-1.5 rounded-xl bg-[#0B130A]/90 border border-[#6BF500]/40 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.8)] flex items-center gap-2 select-none">
                <span className="w-2 h-2 rounded-full bg-[#6BF500] animate-ping" />
                <span className="text-xs font-mono font-bold text-white tracking-wider">Haider Ali</span>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute bottom-5 right-5 z-20 px-4 py-2 rounded-xl bg-[#0B130A]/95 border border-[#162714] group-hover:border-[#6BF500]/60 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.85)] flex items-center gap-2 select-none transition-all">
                <Icons.Code className="w-3.5 h-3.5 text-[#6BF500]" />
                <span className="text-[11px] font-mono text-[#A0A5A0] group-hover:text-white transition-colors">
                  Web Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-white text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-white text-xl sm:text-2xl leading-snug">
              "Building digital products is more than writing code — it's about solving intricate problems with speed, elegance, and unyielding precision."
            </p>
            <p className="text-[#A0A5A0]">
              I am a passionate Full-Stack Engineer with deep expertise in modern React architectures, server-side design, and high-performance animation systems. Over the years, I've transformed ambitious visions into scalable, resilient web applications that users love.
            </p>
            <p className="text-[#A0A5A0]">
              Whether building enterprise-grade SaaS platforms, real-time analytics hubs, or award-worthy creative frontends, I ensure every single line of code is modular, well-tested, and optimized for sub-second interactions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              {data.personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundManager.playHover()}
                  className="group relative p-4 rounded-2xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,245,0,0.18)] flex flex-col justify-between"
                >
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#6BF500] group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] font-mono text-[#A0A5A0] group-hover:text-white uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onNavigate("contact");
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#6BF500] hover:text-[#86fa24] border-b-2 border-[#6BF500] hover:border-[#86fa24] pb-1 transition-all"
              >
                <span>Let's collaborate on your next project</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.personal.pillars.map((pillar, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundManager.playHover()}
              className="relative p-8 rounded-2xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/50 hover:bg-[#111d10] transition-all duration-300 group"
            >
              <div className="font-mono text-xs font-bold text-[#6BF500] mb-4 tracking-widest">
                {pillar.number} // PILLAR
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6BF500] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#A0A5A0] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
