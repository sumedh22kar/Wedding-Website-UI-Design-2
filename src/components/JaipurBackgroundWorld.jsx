import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * JAIPUR BACKGROUND WORLD — LAYER 1 & LAYER 2
 * 
 * Provides a continuous, stable visual universe across all scenes:
 * - Layer 1: Dark, rich, vibrant royal twilight sky (Velvety Midnight Plum, Deep Maroon & Twilight Rose)
 * - Layer 2: Distant palace chhatri silhouettes, illuminated fortress windows & Nahargarh hill curves
 * - Layer 4 (Ambient): Drifting golden stardust & firefly bokeh
 * - GSAP ScrollTrigger parallax on distant hills and palace silhouettes
 */
export function JaipurBackgroundWorld({ activeTheme = 'default' }) {
  const worldRef = useRef(null);
  const skylineRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (skylineRef.current) {
        gsap.to(skylineRef.current, {
          y: '12%',
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
        });
      }
    }, worldRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={worldRef} className={`jaipur-background-world theme-${activeTheme} dark-royal-world`} aria-hidden="true">
      {/* Dynamic Ambient Sky Gradient — Dark, Rich Royal Twilight */}
      <div className="jaipur-sky-layer" />

      {/* Subtle Sandstone & Paper Grain Texture */}
      <div className="jaipur-paper-texture" />

      {/* Distant Royal Palace Silhouettes (Chhatris, Fortresses, Domes) with GSAP Parallax */}
      <div ref={skylineRef} className="jaipur-distant-skyline">
        <svg
          className="skyline-svg"
          viewBox="0 0 1600 360"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skylineGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D2AA55" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#C75B78" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1E030C" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="hillsGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A0F22" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0F0107" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Nahargarh & Aravalli Distant Hills */}
          <path
            d="M 0 360 L 0 240 Q 180 180 380 230 Q 560 270 780 200 Q 980 140 1200 210 Q 1420 260 1600 190 L 1600 360 Z"
            fill="url(#hillsGradDark)"
          />

          {/* Palace Chhatris and Heritage Silhouettes */}
          {/* Chhatri 1 (Left) */}
          <g transform="translate(180, 140)" fill="url(#skylineGradDark)">
            <path d="M 40 10 Q 40 0 42 0 Q 44 0 44 10 Z" />
            <circle cx="42" cy="12" r="3" fill="#F5D77F" />
            <path d="M 12 45 C 12 18, 72 18, 72 45 Z" />
            <rect x="18" y="45" width="4" height="60" />
            <rect x="34" y="45" width="4" height="60" />
            <rect x="46" y="45" width="4" height="60" />
            <rect x="62" y="45" width="4" height="60" />
            <rect x="10" y="105" width="64" height="15" rx="2" />
          </g>

          {/* Grand Palace Central Tower (Mid-Left) */}
          <g transform="translate(480, 110)" fill="url(#skylineGradDark)">
            <path d="M 60 5 Q 60 0 62 0 Q 64 0 64 5 Q 70 30 90 70 L 34 70 Q 54 30 60 5 Z" />
            <circle cx="62" cy="7" r="3.5" fill="#F5D77F" />
            <rect x="30" y="70" width="64" height="90" />
            <path d="M 48 160 C 48 115, 76 115, 76 160 Z" fill="#F5D77F" fillOpacity="0.2" />
          </g>

          {/* Chhatri 2 (Center Right) */}
          <g transform="translate(940, 130)" fill="url(#skylineGradDark)">
            <path d="M 38 10 Q 38 0 40 0 Q 42 0 42 10 Z" />
            <circle cx="40" cy="12" r="3" fill="#F5D77F" />
            <path d="M 10 42 C 10 16, 70 16, 70 42 Z" />
            <rect x="16" y="42" width="4" height="65" />
            <rect x="32" y="42" width="4" height="65" />
            <rect x="44" y="42" width="4" height="65" />
            <rect x="60" y="42" width="4" height="65" />
            <rect x="8" y="107" width="64" height="15" rx="2" />
          </g>

          {/* Palace Pavilion (Far Right) */}
          <g transform="translate(1320, 150)" fill="url(#skylineGradDark)">
            <path d="M 30 35 C 30 10, 80 10, 80 35 Z" />
            <rect x="34" y="35" width="3" height="50" />
            <rect x="53" y="35" width="4" height="50" />
            <rect x="73" y="35" width="3" height="50" />
            <rect x="26" y="85" width="58" height="12" />
          </g>
        </svg>
      </div>

      {/* Layer 4: Ambient Floating Gold Bokeh Dust */}
      <div className="jaipur-ambient-bokeh" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="ambient-dust-particle"
            style={{
              left: `${(i * 5.3 + 3) % 96}%`,
              top: `${(i * 7.1 + 5) % 92}%`,
              animationDelay: `${(i * 0.35) % 4}s`,
              animationDuration: `${4.5 + (i % 5) * 1.5}s`,
              transform: `scale(${0.7 + (i % 4) * 0.4})`,
            }}
          />
        ))}
      </div>

      {/* Deep Royal Vignette Framing */}
      <div className="jaipur-world-vignette" />
    </div>
  );
}

export default JaipurBackgroundWorld;
