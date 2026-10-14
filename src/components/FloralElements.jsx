import React from 'react';

/**
 * Pure SVG floral, botanical, and cultural non-religious Indian ornamental elements.
 * Features:
 * - Floating petals for Hero
 * - Botanical vines for Mehendi
 * - Layered marigolds & falling petals for Haldi
 * - Rhythmic ghungroo circles for Sangeet
 * - Symmetrical Mandap arch for Wedding
 * - Minimal champagne-gold divider
 */

// Minimal champagne-gold ornamental divider
export function GoldDivider({ className = '', width = 140 }) {
  return (
    <div className={`gold-divider-wrap ${className}`} aria-hidden="true">
      <svg width={width} height="14" viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="7" x2="58" y2="7" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="63" cy="7" r="1.5" fill="currentColor" />
        <polygon points="70,3 74,7 70,11 66,7" fill="currentColor" />
        <circle cx="77" cy="7" r="1.5" fill="currentColor" />
        <line x1="82" y1="7" x2="140" y2="7" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

// Delicate floating flower petals for the Hero screen edges
export function FloatingPetals({ count = 8 }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 13) % 94 + 3}%`,
    animationDelay: `${(i * 1.8) % 7}s`,
    animationDuration: `${12 + (i % 5) * 3}s`,
    size: 14 + (i % 4) * 4,
    opacity: 0.25 + (i % 3) * 0.15,
  }));

  return (
    <div className="floating-petals-container" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="floating-petal"
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

// Falling marigold petals for Haldi scene
export function MarigoldFallingPetals({ count = 14 }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 7.2 + 4) % 92}%`,
    animationDelay: `${(i * 1.2) % 6}s`,
    animationDuration: `${7 + (i % 5) * 2}s`,
    rotation: `${(i * 35) % 360}deg`,
    size: 12 + (i % 4) * 4,
    color: i % 2 === 0 ? '#E5B92E' : '#F29C1B',
  }));

  return (
    <div className="marigold-petals-container" aria-hidden="true">
      {petals.map((p) => (
        <svg
          key={p.id}
          className="marigold-petal"
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            transform: `rotate(${p.rotation})`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
          }}
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 0 C 18 5, 20 18, 10 26 C 0 18, 2 5, 10 0 Z"
            fill={p.color}
            opacity="0.8"
          />
        </svg>
      ))}
    </div>
  );
}

// Illustrated marigold corner clusters for Haldi
export function MarigoldGarlandCluster({ className = '' }) {
  return (
    <svg
      className={`marigold-cluster-svg ${className}`}
      width="220"
      height="140"
      viewBox="0 0 220 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Curved garland string */}
      <path d="M 10 20 Q 110 80 210 20" stroke="#C88E14" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      
      {/* Marigold blossoms */}
      {[
        { cx: 35, cy: 35, r: 16 },
        { cx: 75, cy: 52, r: 20 },
        { cx: 110, cy: 58, r: 22 },
        { cx: 145, cy: 52, r: 20 },
        { cx: 185, cy: 35, r: 16 },
      ].map((b, idx) => (
        <g key={idx} className="marigold-blossom">
          <circle cx={b.cx} cy={b.cy} r={b.r} fill="#E5B92E" opacity="0.85" />
          <circle cx={b.cx} cy={b.cy} r={b.r * 0.7} fill="#F29C1B" opacity="0.9" />
          <circle cx={b.cx} cy={b.cy} r={b.r * 0.4} fill="#8E2036" opacity="0.75" />
          <circle cx={b.cx} cy={b.cy} r={b.r * 0.18} fill="#D2AA55" />
        </g>
      ))}
    </svg>
  );
}

// Mehendi botanical line drawing motif
export function MehendiBotanicalVine({ className = '' }) {
  return (
    <svg
      className={`mehendi-vine-svg ${className}`}
      width="300"
      height="140"
      viewBox="0 0 300 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="vine-path"
        d="M 20 70 C 80 30, 120 110, 150 70 C 180 30, 220 110, 280 70"
        stroke="#D2AA55"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Symmetrical delicate leaves */}
      {[
        { x: 60, y: 50, rot: -30 },
        { x: 100, y: 85, rot: 40 },
        { x: 150, y: 70, rot: 0 },
        { x: 200, y: 85, rot: -40 },
        { x: 240, y: 50, rot: 30 },
      ].map((l, i) => (
        <g key={i} transform={`translate(${l.x}, ${l.y}) rotate(${l.rot})`}>
          <path
            d="M 0 0 Q 15 -12 25 0 Q 15 12 0 0"
            stroke="#D2AA55"
            strokeWidth="0.8"
            fill="#D2AA55"
            fillOpacity="0.2"
          />
          <circle cx="28" cy="0" r="1.5" fill="#D2AA55" />
        </g>
      ))}
      <circle cx="150" cy="30" r="2.5" fill="#D2AA55" />
    </svg>
  );
}

// Sangeet rhythmic circles & ghungroo dots
export function SangeetRhythmCircles({ className = '' }) {
  return (
    <svg
      className={`sangeet-rhythm-svg ${className}`}
      width="260"
      height="140"
      viewBox="0 0 260 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle className="pulse-ring-1" cx="130" cy="70" r="55" stroke="#D2AA55" strokeWidth="0.8" opacity="0.4" />
      <circle className="pulse-ring-2" cx="130" cy="70" r="38" stroke="#D2AA55" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
      <circle className="pulse-ring-3" cx="130" cy="70" r="20" stroke="#D2AA55" strokeWidth="1.2" opacity="0.85" />
      <circle cx="130" cy="70" r="4" fill="#D2AA55" />

      {/* Ghungroo rhythm dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 130 + 55 * Math.cos(rad);
        const y = 70 + 55 * Math.sin(rad);
        return <circle key={deg} cx={x} cy={y} r="2.5" fill="#D2AA55" opacity="0.9" />;
      })}
    </svg>
  );
}

// Symmetrical grand mandap arch with floral garland for The Wedding
export function GrandMandapArch({ className = '' }) {
  return (
    <svg
      className={`mandap-grand-arch-svg ${className}`}
      width="320"
      height="160"
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Grand Arch */}
      <path
        d="M 30 150 L 30 80 Q 30 20 160 20 Q 290 20 290 80 L 290 150"
        stroke="#D2AA55"
        strokeWidth="1.5"
        opacity="0.9"
      />
      {/* Inner Decorative Arch */}
      <path
        d="M 46 150 L 46 84 Q 46 36 160 36 Q 274 36 274 84 L 274 150"
        stroke="#D2AA55"
        strokeWidth="0.8"
        strokeDasharray="4 4"
        opacity="0.65"
      />
      {/* Apex finial ornament */}
      <circle cx="160" cy="12" r="3.5" fill="#D2AA55" />
      <polygon points="160,3 164,10 156,10" fill="#D2AA55" />
      {/* Garland drops */}
      <path d="M 46 84 Q 103 105 160 84 Q 217 105 274 84" stroke="#D2AA55" strokeWidth="1" opacity="0.75" />
      {/* Small rosettes */}
      <circle cx="103" cy="95" r="3" fill="#D2AA55" opacity="0.85" />
      <circle cx="217" cy="95" r="3" fill="#D2AA55" opacity="0.85" />
      {/* Pedestal bases */}
      <line x1="20" y1="150" x2="56" y2="150" stroke="#D2AA55" strokeWidth="2" />
      <line x1="264" y1="150" x2="300" y2="150" stroke="#D2AA55" strokeWidth="2" />
    </svg>
  );
}
