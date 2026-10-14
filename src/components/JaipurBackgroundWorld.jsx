import React, { useEffect, useRef } from 'react';

/**
 * JAIPUR BACKGROUND WORLD — LAYER 1 & LAYER 2
 * 
 * Provides a continuous, stable visual universe across all scenes:
 * - Layer 1: Warm, rich, royal Jaipur sunset sky (Warm Ivory, Soft Jaipur Rose & Sandstone Amber)
 * - Layer 2: Distant palace chhatri silhouettes, heritage domes & Nahargarh hill curves
 * - Layer 4 (Ambient): Drifting golden dust particles
 * - Lightweight, GPU-friendly rendering (zero scroll jitter)
 */
export function JaipurBackgroundWorld({ activeTheme = 'default' }) {
  const worldRef = useRef(null);

  return (
    <div ref={worldRef} className={`jaipur-background-world theme-${activeTheme}`} aria-hidden="true">
      {/* Dynamic Ambient Sky Gradient — Rich, Warm Royal Jaipur Sunset */}
      <div className="jaipur-sky-layer" />

      {/* Subtle Sandstone & Paper Grain Texture */}
      <div className="jaipur-paper-texture" />

      {/* Distant Royal Palace Silhouettes (Chhatris, Fortresses, Domes) */}
      <div className="jaipur-distant-skyline">
        <svg
          className="skyline-svg"
          viewBox="0 0 1600 360"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skylineGradRich" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C75B78" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8E2036" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4A0F22" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="hillsGradRich" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B9634A" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#8E2036" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F8EEE9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Nahargarh & Aravalli Distant Hills */}
          <path
            d="M 0 360 L 0 240 Q 180 180 380 230 Q 560 270 780 200 Q 980 140 1200 210 Q 1420 260 1600 190 L 1600 360 Z"
            fill="url(#hillsGradRich)"
          />

          {/* Palace Chhatris and Heritage Silhouettes */}
          {/* Chhatri 1 (Left) */}
          <g transform="translate(180, 140)" fill="url(#skylineGradRich)">
            <path d="M 40 10 Q 40 0 42 0 Q 44 0 44 10 Z" />
            <circle cx="42" cy="12" r="3" fill="#D2AA55" opacity="0.8" />
            <path d="M 12 45 C 12 18, 72 18, 72 45 Z" />
            <rect x="18" y="45" width="4" height="60" />
            <rect x="34" y="45" width="4" height="60" />
            <rect x="46" y="45" width="4" height="60" />
            <rect x="62" y="45" width="4" height="60" />
            <rect x="10" y="105" width="64" height="15" rx="2" />
          </g>

          {/* Grand Palace Central Tower (Mid-Left) */}
          <g transform="translate(480, 110)" fill="url(#skylineGradRich)">
            <path d="M 60 5 Q 60 0 62 0 Q 64 0 64 5 Q 70 30 90 70 L 34 70 Q 54 30 60 5 Z" />
            <circle cx="62" cy="7" r="3.5" fill="#D2AA55" opacity="0.8" />
            <rect x="30" y="70" width="64" height="90" />
            <path d="M 48 160 C 48 115, 76 115, 76 160 Z" fill="#D2AA55" fillOpacity="0.25" />
          </g>

          {/* Chhatri 2 (Center Right) */}
          <g transform="translate(940, 130)" fill="url(#skylineGradRich)">
            <path d="M 38 10 Q 38 0 40 0 Q 42 0 42 10 Z" />
            <circle cx="40" cy="12" r="3" fill="#D2AA55" opacity="0.8" />
            <path d="M 10 42 C 10 16, 70 16, 70 42 Z" />
            <rect x="16" y="42" width="4" height="65" />
            <rect x="32" y="42" width="4" height="65" />
            <rect x="44" y="42" width="4" height="65" />
            <rect x="60" y="42" width="4" height="65" />
            <rect x="8" y="107" width="64" height="15" rx="2" />
          </g>

          {/* Palace Pavilion (Far Right) */}
          <g transform="translate(1320, 150)" fill="url(#skylineGradRich)">
            <path d="M 30 35 C 30 10, 80 10, 80 35 Z" />
            <rect x="34" y="35" width="3" height="50" />
            <rect x="53" y="35" width="4" height="50" />
            <rect x="73" y="35" width="3" height="50" />
            <rect x="26" y="85" width="58" height="12" />
          </g>
        </svg>
      </div>

      {/* Layer 4: Ambient Floating Gold Bokeh Dust (Optimized 10 particles) */}
      <div className="jaipur-ambient-bokeh" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="ambient-dust-particle"
            style={{
              left: `${(i * 9.5 + 4) % 94}%`,
              top: `${(i * 10.2 + 6) % 90}%`,
              animationDelay: `${(i * 0.5) % 4}s`,
              animationDuration: `${5.5 + (i % 4) * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Soft Vignette Framing */}
      <div className="jaipur-world-vignette" />
    </div>
  );
}

export default JaipurBackgroundWorld;
