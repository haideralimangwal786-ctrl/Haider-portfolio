// ==========================================
// LUXURY PORTFOLIO WEB APPLICATION (REACT 18)
// Palette:
// • Bright Lime Green (Accents & Buttons): #6BF500
// • Dark Background (Main Layout): #050B04
// • Card/Section Background: #0B130A
// • Pure White (Primary Text): #FFFFFF
// • Muted Gray (Secondary Text): #A0A5A0
// ==========================================

const { useState, useEffect, useRef } = React;

// ------------------------------------------
// 00 — ICON SYSTEM (PURE SVG VECTOR ICONS)
// ------------------------------------------
const Icons = {
  ArrowRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Code: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
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
  CheckCircle: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  AlertCircle: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Send: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Layers: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
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
  Download: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  FileText: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  BarChart: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Globe: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Mail: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Copy: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Close: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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
  ShoppingCart: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
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
  Briefcase: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  GraduationCap: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  // Social Media Vector Icons
  Github: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Linkedin: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0-1.76 1.75c0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  ),
  Twitter: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Whatsapp: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
    </svg>
  ),
  Instagram: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  Discord: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  Telegram: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  Youtube: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
};

// ------------------------------------------
// 01 — DATA STORE
// ------------------------------------------
const portfolioData = {
  personal: {
    name: "Haider Ali",
    role: "Web Developer & React Developer | Full-Stack Engineer",
    roles: [
      "Web Developer in Pakistan",
      "React Developer",
      "Frontend Developer",
      "JavaScript Developer",
      "Website Developer in Chakwal",
      "Portfolio Website Developer",
      "Full-Stack MERN Developer"
    ],
    status: "Available for Freelance & Full-time Roles",
    location: "Chakwal & Islamabad, Pakistan (Remote & Worldwide)",
    email: "haideralimangwal786@gmail.com",
    phone: "+92 311 5809634",
    whatsapp: "https://wa.me/923115809634",
    github: "https://github.com/haideralimangwal786-ctrl",
    linkedin: "https://www.linkedin.com/in/haider-ali-8a008325a/",
    facebook: "https://www.facebook.com/share/18PW8D9uGc/",
    instagram: "https://www.instagram.com/haiderali26122?igsi=eGdrbWkwczJkNDlm",
    bio: "Haider Ali is a professional Web Developer & React Developer based in Pakistan. Specializing in React, JavaScript, Tailwind CSS, and modern responsive websites, I provide high-performance web development services for businesses in Chakwal, Islamabad, and worldwide.",
    shortBio: "Architecting high-performance web applications with obsessive attention to typography, micro-interactions, and scalable engineering.",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Shipped", value: "25+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Code Commits", value: "1.2k+" }
    ],
    pillars: [
      {
        number: "01",
        title: "Clean Architecture",
        description: "Writing scalable, maintainable, and modular code following industry-best software design patterns."
      },
      {
        number: "02",
        title: "Pixel-Perfect Aesthetics",
        description: "Obsessive focus on fluid typography, golden ratio spacing, and subtle micro-interactions that captivate users."
      },
      {
        number: "03",
        title: "Blazing Speed & SEO",
        description: "Optimizing bundle sizes, Core Web Vitals, and server-side rendering for sub-second load times."
      }
    ]
  },

  socials: [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/haideralimangwal786-ctrl",
      handle: "@haideralimangwal786-ctrl",
      icon: Icons.Github,
      description: "Open-source repositories, components & dev tools"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/haider-ali-8a008325a/",
      handle: "haider-ali-8a008325a",
      icon: Icons.Linkedin,
      description: "Professional networking & career recommendations"
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/923115809634",
      handle: "+92 311 5809634",
      icon: Icons.Whatsapp,
      description: "Direct instant chat & project discovery calls"
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/haiderali26122?igsi=eGdrbWkwczJkNDlm",
      handle: "@haiderali26122",
      icon: Icons.Instagram,
      description: "Design mockups, workspace setup & creative highlights"
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/share/18PW8D9uGc/",
      handle: "Haider Ali",
      icon: Icons.Facebook,
      description: "Social updates, community & networking"
    }
  ],

  skills: {
    mern: [
      { name: "Full-Stack MERN Architecture", level: 96, category: "Full-Stack", experience: "3+ yrs", highlight: "End-to-end MongoDB, Express, React, and Node.js web applications", icon: "Layers" },
      { name: "React.js (Frontend Architecture)", level: 96, category: "Frontend", experience: "3+ yrs", highlight: "Component Lifecycle, Custom Hooks, State Management, Redux & Vite", icon: "Code" },
      { name: "Node.js & Express APIs", level: 93, category: "Backend", experience: "3+ yrs", highlight: "High-throughput RESTful services, Middleware, JWT auth & Microservices", icon: "Cpu" },
      { name: "MongoDB & Database Systems", level: 92, category: "Database", experience: "3+ yrs", highlight: "Complex Aggregation pipelines, Mongoose ODM, Schema indexing", icon: "Shield" },
      { name: "JavaScript (ES6+ / Modern JS)", level: 96, category: "Language", experience: "4+ yrs", highlight: "Modern async/await paradigms, closures, DOM manipulation & Web APIs", icon: "Terminal" },
      { name: "Tailwind CSS & Modern UI", level: 98, category: "Styling", experience: "3+ yrs", highlight: "Pixel-perfect responsive design, custom tokens, glassmorphism & dark modes", icon: "Sparkles" }
    ],
    ai_app: [
      { name: "AI Models & LLM Integration", level: 93, category: "AI & ML", experience: "2+ yrs", highlight: "OpenAI GPT-4, Claude, Custom Embeddings, LangChain & Prompt Design", icon: "Bot" },
      { name: "Full-Stack App Development", level: 95, category: "Applications", experience: "3+ yrs", highlight: "High-performance Progressive Web Apps, Enterprise SaaS platforms", icon: "Globe" },
      { name: "E-Commerce AI Automation", level: 91, category: "Smart Systems", experience: "2+ yrs", highlight: "AI-driven Product Recommendations, Dynamic Search & Smart Chatbots", icon: "Sparkles" },
      { name: "REST & Real-time WebSockets", level: 94, category: "Networking", experience: "3+ yrs", highlight: "Bi-directional real-time feeds, Socket.io, Server-Sent Events", icon: "Terminal" }
    ],
    ecommerce: [
      { name: "Shopify Store Development", level: 94, category: "E-Commerce", experience: "2.5+ yrs", highlight: "Custom Liquid templates, High-converting product pages & App integrations", icon: "ShoppingCart" },
      { name: "WordPress & WooCommerce", level: 95, category: "CMS", experience: "3+ yrs", highlight: "Bespoke custom themes, Plugin development, Speed optimization & SEO", icon: "Globe" },
      { name: "Payment Gateways & Checkout", level: 93, category: "Fintech", experience: "3+ yrs", highlight: "Stripe, PayPal, Local payment gateways & 1-click checkout flows", icon: "Shield" },
      { name: "Store CRO & Speed Optimization", level: 92, category: "Optimization", experience: "2.5+ yrs", highlight: "Core Web Vitals tuning, 90+ Mobile Lighthouse scores & Cart recovery", icon: "BarChart" }
    ],
    tools_design: [
      { name: "Canva Pro & Visual Branding", level: 96, category: "Design", experience: "3+ yrs", highlight: "Brand Identity, Pitch Decks, High-impact Social Media Creatives & Ads", icon: "Palette" },
      { name: "Advanced Microsoft Excel", level: 95, category: "Analytics", experience: "3.5+ yrs", highlight: "Complex Formulas, Financial Modeling, Pivot Tables & Data Dashboards", icon: "BarChart" },
      { name: "Git & GitHub Version Control", level: 95, category: "DevOps", experience: "4+ yrs", highlight: "Branching strategies, CI/CD automation, Pull Requests & Code Reviews", icon: "Code" },
      { name: "Postman & API QA Testing", level: 94, category: "Testing", experience: "3+ yrs", highlight: "Automated regression testing, endpoint validation & Mock servers", icon: "CheckCircle" }
    ]
  },

  projects: [
    {
      id: "homedify-marketplace",
      title: "Homedify – AI Powered Marketplace",
      category: "Full-Stack & AI",
      tagline: "Full-stack marketplace connecting buyers & sellers with AI verification & escrow",
      description: "A full-stack marketplace platform featuring AI-based verification, secure authentication, role-based dashboards, and modern web architecture. This platform connects buyers and sellers seamlessly while ensuring maximum security.",
      image: "./src/assets/homedify.png",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      highlights: [
        "AI Verification System for user profiles, identity & listing authenticity",
        "Role-Based User Dashboards with secure JWT-based access controls",
        "Escrow Payment Integration for trustworthy, protected financial transactions",
        "Real-time Chat Support & Dynamic Search with high-speed indexing"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "⚡ AI Verified Platform | Escrow Protected"
    },
    {
      id: "dr-waseem-iqbal-hub",
      title: "Dr. Waseem Iqbal Research Hub",
      category: "Full-Stack & AI",
      tagline: "Dynamic academic research portfolio & CMS powered by custom MERN architecture",
      description: "High-performance, fully dynamic academic research portfolio and content management system designed to showcase scientific publications, global experience, and research impact, powered by a custom MERN architecture.",
      image: "./src/assets/proj_waseem.jpg",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "JWT", "Axios"],
      highlights: [
        "Custom-built Admin Control Panel for zero-code, real-time content updates",
        "Secure JWT-based authentication system for administrative access",
        "Fully dynamic, database-driven frontend powered by MongoDB and Express REST APIs",
        "Premium glassmorphic UI design with smooth micro-animations and optimistic updates"
      ],
      liveUrl: "https://waseemiqbalresearchhub.vercel.app/",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "🔬 Global Research CMS | Real-time Admin"
    },
    {
      id: "premium-naat-player",
      title: "Premium Naat Player",
      category: "App Development",
      tagline: "Multi-user audio streaming platform with IndexedDB offline storage & visualizer",
      description: "Developed a multi-user audio streaming platform featuring advanced audio controls, custom audio visualizers, and offline playback capabilities for seamless listening experiences.",
      image: "./src/assets/naatplayer.png",
      tech: ["HTML5", "CSS3", "JavaScript", "IndexedDB", "Web Audio API"],
      highlights: [
        "Engineered an offline playback system utilizing IndexedDB storage without internet",
        "Custom interactive audio visualizers and responsive playback controls",
        "Comprehensive user authentication system and custom playlist management",
        "Smooth hardware-accelerated playback with Web Audio API"
      ],
      liveUrl: "https://naat-coral.vercel.app/",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "🎵 Offline Storage | Web Audio API"
    },
    {
      id: "wallnest-app",
      title: "WallNest — HD Wallpaper App",
      category: "App Development",
      tagline: "High-performance mobile wallpaper application powered by the Pexels API",
      description: "Engineered a high-performance cross-platform wallpaper application powered by the Pexels API with search, categories, favorites, and wallpaper setting functionality.",
      image: "./src/assets/wallnest.jpg",
      tech: ["Flutter", "Dart", "Pexels API", "Provider", "REST APIs"],
      highlights: [
        "Infinite scrolling and dynamic category filtering for instant content discovery",
        "Robust state management using Provider to handle favorites and downloads",
        "Optimized for high performance, delivering instant HD images across diverse devices",
        "One-tap wallpaper apply and high-resolution background caching"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "📱 Cross-Platform | High-Res Wallpapers"
    },
    {
      id: "haiderweb-portfolio-cms",
      title: "Dynamic Developer Portfolio & CMS",
      category: "Full-Stack & AI",
      tagline: "Personal portfolio with custom-built CMS dashboard for zero-code updates",
      description: "A premium, fully responsive personal portfolio website featuring a custom-built Content Management System (CMS). Designed with modern aesthetics and glassmorphism, it allows seamless management of projects, skills, services, and client testimonials.",
      image: "./src/assets/proj_haiderweb.jpg",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Vite", "Mongoose"],
      highlights: [
        "Custom Secure Admin Dashboard for complete content & project management",
        "Dynamic showcase of Projects, Skills, and Services from MongoDB database",
        "Integrated Contact Form with a dedicated Messages Inbox in the admin panel",
        "Real-time content updates without requiring a code redeploy"
      ],
      liveUrl: "https://haiderweb-alpha.vercel.app/",
      githubUrl: "https://github.com/haideralimangwal786-ctrl/haiderweb",
      metrics: "🚀 Production CMS | Real-time Database"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Lead Full-Stack & MERN Architect",
      company: "Apex Digital Solutions",
      period: "2023 — Present",
      type: "Full-Time",
      badge: "Active Leadership",
      description: "Directing the end-to-end full-stack MERN architecture, AI model integration pipelines, and high-conversion headless storefronts for enterprise clients.",
      achievements: [
        "Architected enterprise MERN applications handling over 250k+ daily requests with sub-100ms response times",
        "Integrated custom AI models and LLM APIs for automated content generation and dynamic customer recommendation engines",
        "Orchestrated reusable UI design systems and secure JWT-based microservices"
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "AI Models", "Express.js", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      role: "AI & E-Commerce Web Developer",
      company: "Vortex Interactive Lab",
      period: "2022 — 2023",
      type: "Full-Time",
      badge: "Client SaaS & CRO",
      description: "Engineered high-converting Shopify stores, bespoke WordPress/WooCommerce themes, and smart SaaS web applications featuring dynamic animations.",
      achievements: [
        "Developed 15+ custom Shopify stores & WordPress websites resulting in an average 38% increase in checkout conversions",
        "Engineered real-time features using WebSockets and integrated Stripe/PayPal 1-click payment workflows",
        "Collaborated with cross-functional design teams translating complex Figma specifications into responsive web code"
      ],
      skills: ["Shopify Liquid", "WordPress", "React", "Node.js", "WooCommerce", "Stripe API", "GSAP"]
    },
    {
      id: "exp-3",
      role: "Full-Stack Engineer & Digital Solutions Freelancer",
      company: "Upwork & Global Clients",
      period: "2021 — 2022",
      type: "Contract / Remote",
      badge: "100% Job Success",
      description: "Delivered tailor-made web applications, e-commerce storefronts, Canva visual branding assets, and advanced Excel analytics dashboards for international clients.",
      achievements: [
        "Shipped 25+ completed projects with 100% 5-star client satisfaction and on-time milestones",
        "Built automated Microsoft Excel financial modeling spreadsheets and KPI analytics dashboards",
        "Designed high-impact Canva Pro marketing pitch decks, social media creatives, and digital brand identities"
      ],
      skills: ["Full-Stack Dev", "WordPress", "Shopify", "Canva Pro", "Advanced Excel", "Git & GitHub"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "University of Chakwal (UOC)",
      location: "Chakwal, Punjab, Pakistan",
      period: "2022 — 2026",
      grade: "Session 2022 — 2026",
      website: "https://uoc.edu.pk",
      image: "./src/assets/uoc-campus.jpg?v=2",
      tag: "Higher Education",
      description: "Focused on core Computer Science, Software Architecture, Full-Stack Web Development, Data Structures, Database Systems, and Intelligent Software Engineering.",
      highlights: [
        "Specialized in modern full-stack development, distributed databases & API engineering",
        "Developed scalable capstone software applications with high academic performance"
      ]
    },
    {
      degree: "F.Sc Pre-Engineering",
      institution: "Kallar Science College, Kallar Kahar",
      location: "Kallar Kahar, District Chakwal",
      period: "2020 — 2022",
      grade: "First Division • Grade A",
      website: "http://www.kksc.edu.pk",
      image: "./src/assets/kksc-campus.jpg?v=2",
      tag: "Intermediate College",
      description: "Rigorous scientific foundation in Advanced Mathematics, Physics, Chemistry, and Analytical Problem Solving at one of the premier science institutions of the region.",
      highlights: [
        "Strong analytical and mathematical reasoning foundation for computational engineering",
        "Active participation in science exhibitions and academic competitions"
      ]
    },
    {
      degree: "Matriculation (Science & Computer Studies)",
      institution: "Government High School for Boys, Mangwal",
      location: "Mangwal, District Chakwal",
      period: "2018 — 2020",
      grade: "First Division • Grade A",
      website: "https://chakwal.pk/directory/government-high-school-for-boys-mangwal_10828.html",
      image: "./src/assets/ghs-mangwal.jpg?v=2",
      tag: "Secondary Education",
      description: "Completed secondary education with high distinction in Physics, Chemistry, Mathematics, and foundational computer sciences.",
      highlights: [
        "Established strong academic excellence and early interest in digital technology and programming"
      ]
    }
  ]
};

// ------------------------------------------
// 02 — SOUND SYSTEM (COMPLETELY REMOVED / DISABLED)
// ------------------------------------------
const soundManager = {
  enabled: false,
  init: () => {},
  toggle: () => false,
  playHover: () => {},
  playClick: () => {},
  playSuccess: () => {},
  playChime: () => {}
};

// ------------------------------------------
// 03 — BACKGROUND CANVAS (DOT GRID & PARTICLES)
// ------------------------------------------
function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(Math.floor((width * height) / 12000), 95);
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 180 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.5 + 0.35
      });
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius
        );
        gradient.addColorStop(0, "rgba(107, 245, 0, 0.14)");
        gradient.addColorStop(0.6, "rgba(107, 245, 0, 0.04)");
        gradient.addColorStop(1, "rgba(107, 245, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.8;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107, 245, 0, ${p.alpha})`;
        ctx.shadowColor = "#6BF500";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const edgeAlpha = (1 - dist2 / 130) * 0.22;
            ctx.strokeStyle = `rgba(107, 245, 0, ${edgeAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.95 }} />;
}

// ------------------------------------------
// 04 — CUSTOM CURSOR
// ------------------------------------------
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#6BF500] pointer-events-none z-[9999] shadow-[0_0_12px_#6BF500]"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full border border-[#6BF500]/70 pointer-events-none z-[9998] transition-all duration-150 ${
          isHovered
            ? "bg-[#6BF500]/20 border-[#6BF500] shadow-[0_0_22px_rgba(107,245,0,0.45)]"
            : "bg-transparent shadow-[0_0_8px_rgba(107,245,0,0.2)]"
        }`}
      />
    </>
  );
}

// ------------------------------------------
// 05 — SPLASH SCREEN
// ------------------------------------------
function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM CORE...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const statusMessages = [
      { at: 15, text: "INITIALIZING SYSTEM CORE..." },
      { at: 40, text: "COMPILING LIME MATRIX & ASSETS..." },
      { at: 70, text: "CALIBRATING GSAP PHYSICS & LAYERS..." },
      { at: 90, text: "READY. LAUNCHING PORTFOLIO..." }
    ];

    const startTime = Date.now();
    const duration = 2000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      const currentStatus = statusMessages.slice().reverse().find((msg) => pct >= msg.at);
      if (currentStatus) setStatusText(currentStatus.text);

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
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050B04] text-white transition-opacity duration-700 select-none ${
        isFading ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="absolute w-96 h-96 rounded-full bg-[#6BF500]/10 blur-[130px] pointer-events-none animate-pulse" />

      <div className="relative mb-10 flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-[#0B130A] border border-[#6BF500]/30 shadow-[0_0_50px_rgba(107,245,0,0.25)]">
          <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 100 100">
            <rect
              x="2" y="2" width="96" height="96" rx="16"
              fill="none" stroke="#6BF500" strokeWidth="2.5"
              strokeDasharray="360"
              strokeDashoffset={360 - (progress / 100) * 360}
              className="transition-all duration-100 ease-out"
            />
          </svg>
          <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-[#6BF500] to-[#86fa24] drop-shadow-[0_0_20px_rgba(107,245,0,0.6)]">
            HA
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#6BF500] animate-ping" />
          <span className="text-xs font-mono tracking-widest uppercase text-[#6BF500]">
            HAIDER ALI // PORTFOLIO 2026
          </span>
        </div>
      </div>

      <div className="w-64 sm:w-80 flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs font-mono text-[#A0A5A0]">
          <span className="truncate pr-2">{statusText}</span>
          <span className="text-[#6BF500] font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#0B130A] rounded-full overflow-hidden border border-[#162714]">
          <div
            className="h-full bg-gradient-to-r from-[#429a00] via-[#6BF500] to-[#86fa24] rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#6BF500]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------
// 06 — NAVBAR
// ------------------------------------------
function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
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

          <div className="hidden md:flex items-center gap-3">
            <a
              href="./Haider_Ali_CV.pdf"
              download="Haider_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playHover()}
              className="px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white hover:text-[#6BF500] bg-[#0B130A] hover:bg-[#111d10] border border-[#162714] hover:border-[#6BF500]/50 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <Icons.Download className="w-3.5 h-3.5 text-[#6BF500]" />
              <span>CV</span>
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              onMouseEnter={() => soundManager.playHover()}
              className="relative group px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-[#050B04] bg-[#6BF500] hover:bg-[#86fa24] transition-all duration-300 shadow-[0_0_20px_rgba(107,245,0,0.35)] hover:shadow-[0_0_30px_rgba(107,245,0,0.65)] active:scale-95 flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

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
                <span className={`w-full h-0.5 bg-[#6BF500] rounded-full transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`w-full h-0.5 bg-[#6BF500] rounded-full transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-[#6BF500] rounded-full transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050B04]/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
          <div className="pt-6 flex flex-col gap-3">
            <a
              href="./Haider_Ali_CV.pdf"
              download="Haider_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="w-full py-3.5 rounded-xl bg-[#0B130A] border border-[#6BF500]/50 text-[#6BF500] font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Icons.Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full py-4 rounded-xl bg-[#6BF500] text-[#050B04] font-bold font-mono uppercase tracking-wider shadow-[0_0_25px_rgba(107,245,0,0.5)] flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ------------------------------------------
// 07 — HERO SECTION
// ------------------------------------------
function Hero({ data, onNavigate }) {
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
        {/* Left Column: Content */}
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

          <div className="flex flex-col mb-4">
            <span className="text-base sm:text-lg font-mono text-[#6BF500] mb-2 font-medium">
              Hello, I'm {data.personal.name}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Web Developer &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BF500] via-[#86fa24] to-[#c2ff77] drop-shadow-[0_0_35px_rgba(107,245,0,0.45)]">
                React Developer
              </span>
            </h1>
          </div>

          <div className="h-10 sm:h-12 flex items-center mb-5">
            <p className="font-mono text-lg sm:text-2xl text-[#A0A5A0]">
              &gt; <span className="text-[#6BF500] font-bold">{displayText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-[#6BF500] animate-pulse align-middle" />
            </p>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-[#A0A5A0] leading-relaxed mb-8 font-normal">
            {data.personal.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
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

            <a
              href="./Haider_Ali_CV.pdf"
              download="Haider_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playHover()}
              className="group px-7 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider text-[#6BF500] bg-[#050B04] hover:bg-[#0e1c0a] border border-[#6BF500]/50 hover:border-[#6BF500] transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,245,0,0.35)] active:scale-95 flex items-center gap-2.5"
            >
              <Icons.Download className="w-4 h-4 text-[#6BF500] transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Media Row in Hero */}
          <div className="w-full flex flex-col gap-2.5 pt-6 border-t border-[#162714] mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A0A5A0]">
              Connect & Follow
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {data.socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${social.name} (${social.handle})`}
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="group/btn p-2.5 rounded-xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/50 hover:bg-[#111d10] text-[#A0A5A0] hover:text-[#6BF500] transition-all duration-200 hover:shadow-[0_0_15px_rgba(107,245,0,0.25)] hover:scale-105 flex items-center justify-center"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="w-full flex flex-col items-start">
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
                src="./src/assets/haider-web-developer.png"
                alt="Haider Ali - Web Developer & React Developer in Chakwal, Pakistan"
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

// ------------------------------------------
// 08 — ABOUT SECTION
// ------------------------------------------
function About({ data, onNavigate }) {
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
            About <span className="text-[#6BF500]">Me</span>
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
                src="./src/assets/haider-web-developer.png"
                alt="Haider Ali - Web Developer & React Developer in Pakistan"
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
              "Building digital products is more than writing code — it's about solving real-world business problems with speed, elegance, and unyielding precision."
            </p>
            <p className="text-[#A0A5A0]">
              I am a professional <strong className="text-white font-semibold">Web Developer in Pakistan</strong> and dedicated <strong className="text-[#6BF500] font-semibold">React Developer</strong> &amp; <strong className="text-white font-semibold">Frontend Developer</strong> specializing in building fast, scalable, and responsive web applications. Based as a premier <strong className="text-white font-semibold">Website Developer in Chakwal</strong> and working with businesses in Islamabad and across Pakistan, I help brands establish an authoritative online presence.
            </p>
            <p className="text-[#A0A5A0]">
              As a seasoned <strong className="text-white font-semibold">JavaScript Developer</strong> and <strong className="text-[#6BF500] font-semibold">Portfolio Website Developer</strong>, I ensure every website is built with clean semantics, robust architecture, and 100% responsive design optimized for top search engine rankings.
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

            <div className="pt-2 flex flex-wrap items-center gap-5">
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

              <a
                href="./Haider_Ali_CV.pdf"
                download="Haider_Ali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                className="px-4 py-2 rounded-xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 text-white hover:text-[#6BF500] font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(107,245,0,0.25)]"
              >
                <Icons.Download className="w-3.5 h-3.5 text-[#6BF500]" />
                <span>Download CV (PDF)</span>
              </a>
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

// ------------------------------------------
// 09 — SKILLS SECTION (INFINITE 3-ROW MARQUEE)
// ------------------------------------------
function Skills() {
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
            My <span className="text-[#6BF500]">Services</span>
          </h2>
          <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-2xl">
            Professional Web Development, React Frontend Engineering, Full-Stack MERN solutions, and modern digital services tailored for businesses in Chakwal, Islamabad, and across Pakistan.
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

// ------------------------------------------
// 11 — PROJECTS SHOWCASE
// ------------------------------------------
function Projects({ data }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", ...Array.from(new Set(data.projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === "All"
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent">
      <div className="max-w-6xl mx-auto">
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
            <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-lg">
              A curated selection of high-performance web applications, responsive websites, and full-stack systems developed by Haider Ali.
            </p>
          </div>

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
                    ? "bg-[#6BF500] text-[#050B04] font-bold shadow-[0_0_20px_rgba(107,245,0,0.35)]"
                    : "bg-[#0B130A] text-[#A0A5A0] hover:text-white hover:bg-[#111d10] border border-[#162714]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundManager.playHover()}
              className="group relative rounded-3xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(107,245,0,0.2)] flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-52 overflow-hidden bg-[#050B04]">
                <img
                  src={project.image}
                  alt={`${project.title} - Web Development Project by Haider Ali`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B130A] via-[#0B130A]/20 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#050B04]/90 border border-[#162714] backdrop-blur-md text-[11px] font-mono text-[#6BF500]">
                    {project.category}
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

              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#6BF500] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0A5A0] line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-md bg-[#050B04] border border-[#162714] text-[10px] font-mono text-[#A0A5A0]">
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
                        <Icons.Code className="w-3.5 h-3.5 text-[#6BF500]" />
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
                        <Icons.ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source on GitHub"
                      onClick={() => soundManager.playClick()}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#050B04] border border-[#162714] hover:border-[#6BF500]/50 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 hover:bg-[#0B130A]"
                    >
                      <Icons.Code className="w-3.5 h-3.5 text-[#6BF500]" />
                      <span>View GitHub Repository</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 text-[#6BF500]" />
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

// ------------------------------------------
// 12 — EXPERIENCE & EDUCATION (WORLD-CLASS ARCHITECTURAL SHOWCASE)
// ------------------------------------------
function Experience({ data }) {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest uppercase">
              04 // ACADEMIC & PROFESSIONAL CREDENTIALS
            </span>
            <span className="h-px w-12 bg-[#6BF500]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Journey & <span className="text-[#6BF500]">Milestones</span>
          </h2>
          <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive record of formal academic degrees from recognized institutions and commercial engineering leadership in Full-Stack & AI development.
          </p>
        </div>


        {/* Segmented Capsule Switcher */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3.5 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === "education"
                ? "bg-[#6BF500] text-[#050B04] font-bold shadow-[0_0_25px_rgba(107,245,0,0.4)]"
                : "bg-[#0B130A] text-[#A0A5A0] hover:text-white hover:bg-[#111d10] border border-[#162714]"
            }`}
          >
            <Icons.GraduationCap className="w-4 h-4" />
            <span>Academic Institutions ({data.education.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3.5 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === "experience"
                ? "bg-[#6BF500] text-[#050B04] font-bold shadow-[0_0_25px_rgba(107,245,0,0.4)]"
                : "bg-[#0B130A] text-[#A0A5A0] hover:text-white hover:bg-[#111d10] border border-[#162714]"
            }`}
          >
            <Icons.Briefcase className="w-4 h-4" />
            <span>Work Experience ({data.experience.length})</span>
          </button>
        </div>

        {/* Dynamic Cards Container */}
        <div className="flex flex-col gap-8">
          {/* TAB 1: ACADEMIC CREDENTIALS & CAMPUS SHOWCASE */}
          {activeTab === "education" &&
            data.education.map((edu, idx) => (
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

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-white/90 bg-[#050B04]/90 px-3 py-1.5 rounded-xl border border-[#162714] backdrop-blur-md inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-pulse" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {/* Right: Academic Dossier & Direct Portal Link */}
                <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between gap-6">
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#6BF500] transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 rounded-lg bg-[#6BF500]/10 border border-[#6BF500]/30 text-xs font-mono text-[#6BF500] font-semibold">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Institution Name */}
                    <div className="text-base font-bold text-[#6BF500] mb-3 font-mono flex items-center gap-2">
                      <Icons.GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A0A5A0] leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Highlights Box */}
                    {edu.highlights && (
                      <div className="p-4 rounded-2xl bg-[#050B04]/80 border border-[#162714] mb-4">
                        <ul className="flex flex-col gap-2">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-[#A0A5A0] flex items-start gap-2.5 leading-relaxed">
                              <Icons.CheckCircle className="w-3.5 h-3.5 text-[#6BF500] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-[#162714] flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#6BF500] hover:bg-[#86fa24] text-[#050B04] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(107,245,0,0.35)] hover:shadow-[0_0_30px_rgba(107,245,0,0.5)] flex items-center gap-2 active:scale-95 group/btn"
                    >
                      <span>Visit Official Portal</span>
                      <Icons.ExternalLink className="w-4 h-4 text-[#050B04] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <span className="text-[11px] font-mono text-[#A0A5A0] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500]" />
                      <span>Verified Academic Institution</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

          {/* TAB 2: WORK EXPERIENCE SHOWCASE */}
          {activeTab === "experience" &&
            data.experience.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(107,245,0,0.2)] p-7 sm:p-9 flex flex-col justify-between gap-6"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#6BF500] transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-[#6BF500] bg-[#050B04] px-4 py-1.5 rounded-full border border-[#162714] flex items-center gap-2 shadow-[0_0_12px_rgba(107,245,0,0.15)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6BF500] animate-ping" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  {/* Company Strip */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-5">
                    <span className="text-white font-bold text-sm">{item.company}</span>
                    <span className="text-[#162714]">•</span>
                    <span className="px-3 py-1 rounded-md bg-[#050B04] border border-[#162714] text-[#A0A5A0]">
                      {item.type}
                    </span>
                    {item.badge && (
                      <span className="px-3 py-1 rounded-md bg-[#6BF500]/10 border border-[#6BF500]/30 text-[#6BF500] font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#A0A5A0] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements Box */}
                  <div className="p-5 rounded-2xl bg-[#050B04]/80 border border-[#162714] mb-6">
                    <h4 className="text-[11px] font-mono text-[#6BF500] uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                      <Icons.CheckCircle className="w-3.5 h-3.5" />
                      <span>Key Architectural Milestones & Deliverables</span>
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-[#A0A5A0] flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[#6BF500] mt-0.5 font-mono font-bold">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#162714]">
                  <span className="text-[10px] font-mono text-[#A0A5A0]/80 uppercase mr-1">Stack Leveraged:</span>
                  {item.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#050B04] border border-[#162714] text-xs font-mono text-[#A0A5A0] hover:text-[#6BF500] hover:border-[#6BF500]/50 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------
// 13 — CONTACT SECTION
// ------------------------------------------
function Contact({ data }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text, fieldName) => {
    soundManager.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playClick();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      soundManager.playSuccess();

      if (typeof window !== "undefined" && window.confetti) {
        window.confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6BF500", "#86fa24", "#429a00", "#FFFFFF"]
        });
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 border-t border-[#162714] bg-transparent overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#6BF500]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#6BF500] font-bold tracking-widest">
              05 // CONNECT
            </span>
            <span className="h-px w-12 bg-[#6BF500]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-[#6BF500]">Me</span>
          </h2>
          <p className="text-[#A0A5A0] text-sm sm:text-base mt-2 max-w-xl">
            Have a project in mind, need a modern responsive website, or want to discuss frontend engineering? Send a direct message or get in touch below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 rounded-2xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#050B04] border border-[#162714] text-[#6BF500]">
                  <Icons.Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase text-[#A0A5A0] mb-0.5">Direct Email</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-[#6BF500] transition-colors">
                    {data.personal.email}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(data.personal.email, "email")}
                className="p-2.5 rounded-xl bg-[#050B04] border border-[#162714] text-xs font-mono text-[#A0A5A0] hover:text-[#6BF500] hover:border-[#6BF500]/50 transition-all flex items-center gap-1.5"
                title="Copy to Clipboard"
              >
                <Icons.Copy className="w-3.5 h-3.5" />
                <span>{copiedField === "email" ? "COPIED" : "COPY"}</span>
              </button>
            </div>

            <div
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 rounded-2xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#050B04] border border-[#162714] text-[#6BF500]">
                  <Icons.Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase text-[#A0A5A0] mb-0.5">Phone / WhatsApp</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-[#6BF500] transition-colors">
                    {data.personal.phone}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(data.personal.phone, "phone")}
                className="p-2.5 rounded-xl bg-[#050B04] border border-[#162714] text-xs font-mono text-[#A0A5A0] hover:text-[#6BF500] hover:border-[#6BF500]/50 transition-all flex items-center gap-1.5"
                title="Copy to Clipboard"
              >
                <Icons.Copy className="w-3.5 h-3.5" />
                <span>{copiedField === "phone" ? "COPIED" : "COPY"}</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B130A] border border-[#162714] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#A0A5A0]">Location & Services</span>
                <span className="text-xs font-mono text-[#6BF500]">Chakwal & Islamabad, Pakistan</span>
              </div>
              <p className="text-sm text-[#A0A5A0]">
                Providing website development services for businesses in Chakwal, Islamabad, and throughout Pakistan, as well as worldwide remote web development contracts.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/40 transition-all shadow-[0_0_50px_rgba(0,0,0,0.7)] flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send Direct Message</h3>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/50 text-red-400 text-xs font-mono flex items-center gap-2">
                  <Icons.AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-[#6BF500]/15 border border-[#6BF500] text-[#6BF500] text-xs font-mono flex items-center gap-2">
                  <Icons.CheckCircle className="w-4 h-4 flex-shrink-0 text-[#6BF500]" />
                  <span>Message delivered successfully! I will respond within 24 hours.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase text-[#A0A5A0]">
                    Your Name <span className="text-[#6BF500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050B04] border border-[#162714] text-white placeholder-[#A0A5A0]/40 text-sm focus:outline-none focus:border-[#6BF500] focus:ring-1 focus:ring-[#6BF500] transition-all font-mono"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase text-[#A0A5A0]">
                    Email Address <span className="text-[#6BF500]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050B04] border border-[#162714] text-white placeholder-[#A0A5A0]/40 text-sm focus:outline-none focus:border-[#6BF500] focus:ring-1 focus:ring-[#6BF500] transition-all font-mono"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase text-[#A0A5A0]">
                  Project Type / Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Web App Development"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#050B04] border border-[#162714] text-white placeholder-[#A0A5A0]/40 text-sm focus:outline-none focus:border-[#6BF500] focus:ring-1 focus:ring-[#6BF500] transition-all font-mono"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase text-[#A0A5A0]">
                  Your Message <span className="text-[#6BF500]">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or objectives..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-[#050B04] border border-[#162714] text-white placeholder-[#A0A5A0]/40 text-sm focus:outline-none focus:border-[#6BF500] focus:ring-1 focus:ring-[#6BF500] transition-all font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => soundManager.playHover()}
                className="w-full py-4 rounded-xl bg-[#6BF500] hover:bg-[#86fa24] text-[#050B04] font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(107,245,0,0.4)] hover:shadow-[0_0_45px_rgba(107,245,0,0.65)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Icons.Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Complete Social Media Grid Matrix */}
        <div className="pt-10 border-t border-[#162714]">
          <div className="flex flex-col items-start mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6BF500] mb-1">
              Social Ecosystem
            </span>
            <h3 className="text-2xl font-bold text-white">
              Connect Across All Platforms
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  onMouseEnter={() => soundManager.playHover()}
                  className="group p-5 rounded-2xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/60 hover:bg-[#111d10] transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,245,0,0.2)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#050B04] border border-[#162714] text-[#6BF500] group-hover:border-[#6BF500]/50 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <Icons.ExternalLink className="w-4 h-4 text-[#A0A5A0] group-hover:text-[#6BF500] transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#6BF500] transition-colors mb-0.5">
                      {social.name}
                    </h4>
                    <span className="text-xs font-mono text-[#6BF500] block mb-2">
                      {social.handle}
                    </span>
                    <p className="text-xs text-[#A0A5A0] line-clamp-2">
                      {social.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------
// 14 — FOOTER
// ------------------------------------------
function Footer({ data, onNavigate }) {
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
    <footer className="relative py-16 px-4 sm:px-8 border-t border-[#162714] bg-transparent text-[#A0A5A0]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B130A] border border-[#6BF500]/30 flex items-center justify-center font-mono font-black text-[#6BF500]">
              HA
            </div>
            <div>
              <div className="font-bold text-white tracking-tight">{data.personal.name}</div>
              <div className="text-xs font-mono text-[#A0A5A0]">{data.personal.role}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-wider">
            {["hero", "about", "skills", "projects", "experience", "contact"].map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  soundManager.playClick();
                  onNavigate(sec);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="hover:text-[#6BF500] transition-colors"
              >
                {sec}
              </button>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="px-4 py-2 rounded-xl bg-[#0B130A] border border-[#162714] text-xs font-mono text-white hover:text-[#6BF500] hover:border-[#6BF500]/50 transition-all flex items-center gap-2"
          >
            <span>BACK TO TOP</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Footer Social Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[#162714]/60">
          <div className="flex flex-wrap items-center gap-3">
            {data.socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  onClick={() => soundManager.playClick()}
                  onMouseEnter={() => soundManager.playHover()}
                  className="p-2.5 rounded-xl bg-[#0B130A] border border-[#162714] hover:border-[#6BF500]/50 text-[#A0A5A0] hover:text-[#6BF500] transition-all hover:scale-110"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="text-xs font-mono text-[#A0A5A0]">
            © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A0A5A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6BF500] animate-ping" />
            <span>ALL SYSTEMS OPERATIONAL</span>
            <span>•</span>
            <span className="text-white">LOCAL TIME: {timeString}</span>
          </div>

          <div>
            Built with React, Tailwind & GSAP.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------
// 15 — MASTER ROOT APP
// ------------------------------------------
function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (loading) return;

    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-[#6BF500] selection:text-[#050B04] relative overflow-x-hidden">
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      <BackgroundCanvas />
      <CustomCursor />

      {!loading && (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
          <Hero data={portfolioData} onNavigate={handleNavigate} />
          <About data={portfolioData} onNavigate={handleNavigate} />
          <Skills data={portfolioData} />
          <Projects data={portfolioData} />
          <Experience data={portfolioData} />
          <Contact data={portfolioData} />
          <Footer data={portfolioData} onNavigate={handleNavigate} />
        </div>
      )}
    </div>
  );
}

// Mount Root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
