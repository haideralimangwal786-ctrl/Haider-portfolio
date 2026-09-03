import React, { useState } from "react";
import { soundManager } from "../utils/audio.js";

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
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

    // Simulate luxury API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      soundManager.playSuccess();

      // Trigger Confetti if canvas-confetti is loaded on window
      if (typeof window !== "undefined" && window.confetti) {
        window.confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00FF87", "#22C55E", "#10B981", "#ffffff"]
        });
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 border-t border-zinc-900 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-neon-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-neon-400 font-bold tracking-widest">
              05 // CONNECT
            </span>
            <span className="h-px w-12 bg-neon-500/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Build Something <span className="text-neon-400">Legendary</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Have a project in mind, an engineering role to discuss, or just want to connect? Send a message or reach out directly.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Card */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-neon-500/50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-500 mb-1">
                  Direct Email
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-neon-300 transition-colors">
                  {data.personal.email}
                </span>
              </div>
              <button
                onClick={() => handleCopy(data.personal.email, "email")}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-neon-400 hover:border-neon-400/50 transition-all"
                title="Copy to Clipboard"
              >
                {copiedField === "email" ? "COPIED! ✓" : "COPY"}
              </button>
            </div>

            {/* WhatsApp / Phone Card */}
            <div
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-neon-500/50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-500 mb-1">
                  WhatsApp / Phone
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-neon-300 transition-colors">
                  {data.personal.phone}
                </span>
              </div>
              <button
                onClick={() => handleCopy(data.personal.phone, "phone")}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-neon-400 hover:border-neon-400/50 transition-all"
                title="Copy to Clipboard"
              >
                {copiedField === "phone" ? "COPIED! ✓" : "COPY"}
              </button>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-zinc-500">
                  Location & Timezone
                </span>
                <span className="text-xs font-mono text-neon-400">GMT+5 (Remote Friendly)</span>
              </div>
              <p className="text-sm text-zinc-300">
                Available for worldwide remote contracts, consulting, and full-time technical leadership.
              </p>
            </div>

            {/* Social Link Chips */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-3">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "GitHub", url: data.personal.github },
                  { name: "LinkedIn", url: data.personal.linkedin },
                  { name: "WhatsApp", url: data.personal.whatsapp },
                  { name: "Facebook", url: data.personal.facebook },
                  { name: "Instagram", url: data.personal.instagram }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-neon-500/50 transition-all hover:shadow-[0_0_15px_rgba(0,255,135,0.2)]"
                  >
                    {social.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all shadow-[0_0_50px_rgba(0,0,0,0.6)] flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Send Direct Message
              </h3>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/50 text-red-400 text-xs font-mono animate-fade-in">
                  ⚠ {errorMessage}
                </div>
              )}

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-950/50 border border-neon-500 text-neon-300 text-xs font-mono animate-fade-in flex items-center gap-2">
                  <span>🎉</span>
                  <span>Message delivered successfully! I will respond within 24 hours.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Your Name <span className="text-neon-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-400 focus:ring-1 focus:ring-neon-400 transition-all font-mono"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Email Address <span className="text-neon-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-400 focus:ring-1 focus:ring-neon-400 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase text-zinc-400">
                  Project Type / Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Web App Development"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-400 focus:ring-1 focus:ring-neon-400 transition-all font-mono"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase text-zinc-400">
                  Your Message <span className="text-neon-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or objectives..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-400 focus:ring-1 focus:ring-neon-400 transition-all font-mono resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => soundManager.playHover()}
                className="w-full py-4 rounded-xl bg-neon-400 hover:bg-neon-300 text-black font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(0,255,135,0.35)] hover:shadow-[0_0_45px_rgba(0,255,135,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>🚀</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
