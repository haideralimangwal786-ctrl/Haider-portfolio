import React, { useState, useEffect } from "react";
import { soundManager } from "../utils/audio.js";

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("hero");
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="group flex items-center gap-3 select-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#0B130A] border border-[#6BF500]/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#6BF500] group-hover:shadow-[0_0_20px_rgba(107,245,0,0.4)]">
              <span className="font-mono font-black text-lg text-white group-hover:text-[#6BF500] transition-colors">
                H
              </span>
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#6BF500] shadow-[0_0_6px_#6BF500]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#6BF500] transition-colors">
                HAIDER.DEV
              </span>
              <span className="text-[10px] font-mono text-[#A0A5A0] tracking-wider">
                PORTFOLIO // 2026
              </span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0B130A]/90 border border-[#162714] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-full select-none ${
                    isActive ? "text-[#050B04] font-bold" : "text-[#A0A5A0] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6BF500] to-[#86fa24] shadow-[0_0_18px_rgba(107,245,0,0.5)] -z-10" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick("contact")}
              onMouseEnter={() => soundManager.playHover()}
              className="relative group px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-[#050B04] bg-[#6BF500] hover:bg-[#86fa24] transition-all duration-300 shadow-[0_0_20px_rgba(107,245,0,0.35)] hover:shadow-[0_0_30px_rgba(107,245,0,0.65)] active:scale-95 flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl bg-[#0B130A] border border-[#162714] text-white hover:border-[#6BF500] transition-colors"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#6BF500] rounded-full transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#6BF500] rounded-full transition-opacity duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#6BF500] rounded-full transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050B04]/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-2xl font-bold font-mono uppercase tracking-widest text-[#A0A5A0] hover:text-[#6BF500] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-6">
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full py-4 rounded-xl bg-[#6BF500] text-[#050B04] font-bold font-mono uppercase tracking-wider shadow-[0_0_25px_rgba(107,245,0,0.5)]"
            >
              Get In Touch 🚀
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
