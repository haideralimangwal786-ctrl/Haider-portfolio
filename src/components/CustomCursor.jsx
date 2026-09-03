import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop/mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
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
        target.closest("[data-magnetic]") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerp loop for outer ring
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
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-400 pointer-events-none z-[9999] transition-opacity duration-150 shadow-[0_0_12px_#00FF87]"
      />
      {/* Smooth Trailing Glow Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full border border-neon-400/60 pointer-events-none z-[9998] transition-all duration-150 ${
          isHovered
            ? "bg-neon-400/15 border-neon-300 shadow-[0_0_20px_rgba(0,255,135,0.4)]"
            : "bg-transparent shadow-[0_0_8px_rgba(0,255,135,0.15)]"
        }`}
      />
    </>
  );
}
