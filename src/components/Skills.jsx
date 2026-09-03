import React from "react";

const Icons = {
  Layers: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Code: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Cpu: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  ),
  Shield: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Terminal: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Sparkles: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
    </svg>
  ),
  Bot: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="2.5" />
      <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="2.5" />
    </svg>
  ),
  Globe: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ShoppingCart: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  BarChart: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Palette: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="1" fill="currentColor" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.07 0 1.93-.86 1.93-1.93 0-.5-.2-.96-.53-1.3-.32-.34-.53-.8-.53-1.3 0-1.07.86-1.94 1.94-1.94H17c2.76 0 5-2.24 5-5 0-4.42-4.48-8.5-10-8.5z" />
    </svg>
  ),
  CheckCircle: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Github: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
};

export default function Skills() {
  const row1 = [
    { name: "React.js", icon: Icons.Code, tag: "Frontend Library", level: "95%" },
    { name: "Node.js", icon: Icons.Cpu, tag: "Backend Runtime", level: "93%" },
    { name: "MongoDB", icon: Icons.Shield, tag: "NoSQL Database", level: "92%" },
    { name: "Express.js", icon: Icons.Terminal, tag: "REST & APIs", level: "94%" },
    { name: "RESTful APIs", icon: Icons.Layers, tag: "Scalable Architecture", level: "95%" },
    { name: "JavaScript ES6+", icon: Icons.Code, tag: "Core Language", level: "96%" },
    { name: "HTML5 & CSS3", icon: Icons.Code, tag: "Semantic Responsive Web", level: "98%" },
    { name: "Tailwind CSS", icon: Icons.Sparkles, tag: "Modern UI Styling", level: "98%" },
    { name: "MERN Stack", icon: Icons.Layers, tag: "Full Architecture", level: "96%" }
  ];

  const row2 = [
    { name: "AI Models & LLMs", icon: Icons.Bot, tag: "OpenAI & Claude APIs", level: "93%" },
    { name: "Shopify Store Development", icon: Icons.ShoppingCart, tag: "Custom Liquid & CRO", level: "95%" },
    { name: "Full-Stack App Dev", icon: Icons.Globe, tag: "PWAs & SaaS Platforms", level: "94%" },
    { name: "WordPress & WooCommerce", icon: Icons.Globe, tag: "Bespoke Themes & Speed", level: "95%" },
    { name: "E-Commerce AI Automation", icon: Icons.Sparkles, tag: "Recommendations & Bots", level: "91%" },
    { name: "Payment Gateways", icon: Icons.Shield, tag: "Stripe & 1-Click Checkout", level: "94%" },
    { name: "REST & WebSockets", icon: Icons.Terminal, tag: "Real-time Event Feeds", level: "93%" },
    { name: "Prompt Engineering", icon: Icons.Bot, tag: "Context Embeddings", level: "92%" }
  ];

  const row3 = [
    { name: "Canva Pro Visuals", icon: Icons.Palette, tag: "Brand Identity & Assets", level: "96%" },
    { name: "Advanced Microsoft Excel", icon: Icons.BarChart, tag: "Financial Models & Pivot", level: "95%" },
    { name: "Git & GitHub", icon: Icons.Github, tag: "CI/CD & Branch Workflows", level: "95%" },
    { name: "Postman API Testing", icon: Icons.CheckCircle, tag: "Automated QA Suites", level: "94%" },
    { name: "UI/UX Architecture", icon: Icons.Layers, tag: "Design Systems & Tokens", level: "96%" },
    { name: "Data Dashboards", icon: Icons.BarChart, tag: "Excel Analytics & KPIs", level: "94%" },
    { name: "Redis Caching", icon: Icons.Cpu, tag: "Sub-100ms In-Memory", level: "88%" },
    { name: "Performance & SEO", icon: Icons.Sparkles, tag: "99+ Core Web Vitals", level: "97%" }
  ];

  const doubleRow1 = [...row1, ...row1];
  const doubleRow2 = [...row2, ...row2];
  const doubleRow3 = [...row3, ...row3];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest">
              02 // CAPABILITIES & STACK
            </span>
            <span className="h-px w-12 bg-[#6BF500]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technical <span className="text-[#6BF500]">Arsenal & Skills</span>
          </h2>
          <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-2xl">
            A dynamic, battle-tested repertoire spanning Full-Stack MERN, AI Models & App Development, Shopify & WordPress e-commerce, and Canva/Excel visual analytics.
          </p>
        </div>

        {/* 4 Core Domain Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            {
              title: "Full-Stack MERN",
              desc: "React.js, Node.js, Express.js & MongoDB ecosystem.",
              icon: Icons.Layers,
              tag: "Core Engineering"
            },
            {
              title: "AI Models & Apps",
              desc: "LLM prompt APIs, custom embeddings & intelligent web apps.",
              icon: Icons.Bot,
              tag: "Next-Gen Tech"
            },
            {
              title: "Shopify & WordPress",
              desc: "Custom storefronts, WooCommerce, CRO & 1-click checkout.",
              icon: Icons.ShoppingCart,
              tag: "E-Commerce"
            },
            {
              title: "Canva & Excel Analytics",
              desc: "High-impact visual branding & financial modeling dashboards.",
              icon: Icons.Palette,
              tag: "Design & Data"
            }
          ].map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(107,245,0,0.18)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#050B04] border border-[#162714] group-hover:border-[#6BF500]/50 text-[#6BF500] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#6BF500] px-2.5 py-0.5 rounded-md bg-[#050B04] border border-[#162714]">
                    {pillar.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#6BF500] transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#A0A5A0] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3-Row Infinite Marquee Showcase with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-5">
        {/* Left & Right Ambient Faders */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#050B04] via-[#050B04]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#050B04] via-[#050B04]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Full-Stack & MERN (Left) */}
        <div className="marquee-row overflow-hidden flex w-full">
          <div className="marquee-track-left gap-4 flex py-1">
            {doubleRow1.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#0B130A]/90 border border-[#162714] hover:border-[#6BF500]/70 hover:bg-[#111d10] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(107,245,0,0.35)] group select-none flex-shrink-0 cursor-default"
                >
                  <div className="p-2.5 rounded-xl bg-[#050B04] border border-[#162714] group-hover:border-[#6BF500]/50 text-[#6BF500] transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left pr-2">
                    <span className="text-sm font-bold text-white group-hover:text-[#6BF500] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#A0A5A0] whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-3 border-l border-[#162714]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#6BF500]">
                      {item.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: AI Models & E-Commerce (Right) */}
        <div className="marquee-row overflow-hidden flex w-full">
          <div className="marquee-track-right gap-4 flex py-1">
            {doubleRow2.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#0B130A]/90 border border-[#162714] hover:border-[#6BF500]/70 hover:bg-[#111d10] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(107,245,0,0.35)] group select-none flex-shrink-0 cursor-default"
                >
                  <div className="p-2.5 rounded-xl bg-[#050B04] border border-[#162714] group-hover:border-[#6BF500]/50 text-[#6BF500] transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left pr-2">
                    <span className="text-sm font-bold text-white group-hover:text-[#6BF500] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#A0A5A0] whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-3 border-l border-[#162714]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#6BF500]">
                      {item.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 3: Design, Excel Analytics & Tools (Left) */}
        <div className="marquee-row overflow-hidden flex w-full">
          <div className="marquee-track-left-fast gap-4 flex py-1">
            {doubleRow3.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r3-${idx}`}
                  className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#0B130A]/90 border border-[#162714] hover:border-[#6BF500]/70 hover:bg-[#111d10] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(107,245,0,0.35)] group select-none flex-shrink-0 cursor-default"
                >
                  <div className="p-2.5 rounded-xl bg-[#050B04] border border-[#162714] group-hover:border-[#6BF500]/50 text-[#6BF500] transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left pr-2">
                    <span className="text-sm font-bold text-white group-hover:text-[#6BF500] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#A0A5A0] whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-3 border-l border-[#162714]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#6BF500]">
                      {item.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
