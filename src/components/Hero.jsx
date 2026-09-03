import React, { useState, useEffect } from "react";
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

export default function Hero({ data, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = data.personal.roles[roleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % data.personal.roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, data.personal.roles]);

  const handleCtaClick = (sectionId) => {
    soundManager.playClick();
    onNavigate(sectionId);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden select-none bg-transparent"
    >
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6BF500]/12 via-[#429a00]/5 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] rounded-full bg-[#6BF500]/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B130A] border border-[#6BF500]/35 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(107,245,0,0.18)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6BF500] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6BF500]" />
            </span>
            <span className="text-xs font-mono tracking-wider text-[#A0A5A0]">
              {data.personal.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BF500] via-[#86fa24] to-[#c2ff77] drop-shadow-[0_0_35px_rgba(107,245,0,0.45)]">
              {data.personal.name}
            </span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center mb-5">
            <p className="font-mono text-lg sm:text-2xl text-[#A0A5A0]">
              &gt; <span className="text-[#6BF500] font-bold">{displayText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-[#6BF500] animate-pulse align-middle" />
            </p>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-[#A0A5A0] leading-relaxed mb-8 font-normal">
            {data.personal.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
            <button
              onClick={() => handleCtaClick("projects")}
              onMouseEnter={() => soundManager.playHover()}
              className="group relative px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider text-[#050B04] bg-[#6BF500] hover:bg-[#86fa24] transition-all duration-300 shadow-[0_0_30px_rgba(107,245,0,0.4)] hover:shadow-[0_0_45px_rgba(107,245,0,0.65)] active:scale-95 flex items-center gap-2.5"
            >
              <span>Explore Work</span>
              <Icons.ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleCtaClick("contact")}
              onMouseEnter={() => soundManager.playHover()}
              className="group px-8 py-4 rounded-xl font-mono text-sm font-semibold uppercase tracking-wider text-white bg-[#0B130A] hover:bg-[#111d10] border border-[#162714] hover:border-[#6BF500]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,245,0,0.25)] active:scale-95 flex items-center gap-2.5"
            >
              <span>Contact Me</span>
              <Icons.ArrowRight className="w-4 h-4 text-[#6BF500] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="w-full pt-6 border-t border-[#162714] flex flex-col items-start">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A0A5A0] mb-3">
              Core Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "MERN Stack", "React & Node.js", "AI Models", "App Development", "WordPress", "Shopify", "E-Commerce AI", "Canva", "Excel"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0B130A] border border-[#162714] text-xs font-mono text-[#A0A5A0] hover:text-[#6BF500] hover:border-[#6BF500]/50 hover:bg-[#111d10] transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: User Portrait Showcase with Website Color Glow */}
        <div className="lg:col-span-5 relative flex justify-center items-center -translate-y-4 sm:-translate-y-6 lg:-translate-y-10">
          <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#6BF500]/30 via-[#429a00]/15 to-transparent blur-[80px] pointer-events-none animate-pulse" />
          
          <div className="absolute w-[340px] sm:w-[410px] h-[340px] sm:h-[410px] rounded-full border border-dashed border-[#6BF500]/30 pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />

          <div className="relative w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full p-2 bg-[#0B130A] border-2 border-[#6BF500]/70 shadow-[0_0_60px_rgba(107,245,0,0.45)] hover:shadow-[0_0_90px_rgba(107,245,0,0.65)] transition-all duration-500 group flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_50%_35%,#86fa24_0%,#6BF500_25%,#2e7002_60%,#0c2205_85%,#050B04_100%)] opacity-90 -z-10" />

            <div className="relative w-full h-full rounded-full overflow-hidden flex items-end justify-center">
              <img
                src="./src/assets/haider-about-cutout.png"
                alt={data.personal.name}
                className="w-full h-full object-cover object-[center_10%] scale-135 transition-transform duration-700 ease-out group-hover:scale-140"
                style={{
                  filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 25px rgba(107, 245, 0, 0.45))"
                }}
              />
            </div>

            {/* Vector Badge 1: Top Right */}
            <div
              className="absolute -top-3 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-[#0B130A]/95 border border-[#6BF500]/50 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex items-center gap-2.5 animate-bounce z-20 select-none"
              style={{ animationDuration: '4s' }}
            >
              <div className="p-1.5 rounded-lg bg-[#6BF500]/15 border border-[#6BF500]/40 text-[#6BF500]">
                <Icons.Code className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-tight">Full-Stack Pro</span>
                <span className="text-[10px] font-mono text-[#6BF500]">React & Node.js</span>
              </div>
            </div>

            {/* Vector Badge 2: Bottom Left */}
            <div
              className="absolute -bottom-4 -left-2 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#0B130A]/95 border border-[#162714] hover:border-[#6BF500]/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex items-center gap-2.5 z-20 select-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(107,245,0,0.3)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6BF500] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6BF500] shadow-[0_0_8px_#6BF500]" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-tight">Open for Roles</span>
                <span className="text-[10px] font-mono text-[#A0A5A0]">Remote / Full-Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => handleCtaClick("about")}
        className="mt-16 flex flex-col items-center gap-2 cursor-pointer text-[#A0A5A0] hover:text-[#6BF500] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-[#162714] flex justify-center pt-1.5">
          <span className="w-1.5 h-2 rounded-full bg-[#6BF500] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
