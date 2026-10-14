import React from 'react';

/**
 * Pure non-religious Indian wedding ornamental SVG motifs.
 * Features architectural arches, botanical leaves, marigold petals,
 * ghungroo-inspired rhythm circles, and mandap geometric structures.
 */

// Subtle rotating geometric mandala (pure non-religious geometry)
export function MandalaOrnament({ className = '', size = 520 }) {
  return (
    <svg
      className={`mandala-ornament ${className}`}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="250" cy="250" r="195" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.5" />
      <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="250" cy="250" r="75" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <circle cx="250" cy="250" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
      
      {/* 12-axis non-religious geometric petal lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 250 250)`}>
          <line x1="250" y1="55" x2="250" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <path
            d="M 250 120 Q 235 155 250 195 Q 265 155 250 120"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.55"
          />
          <circle cx="250" cy="48" r="3" fill="currentColor" opacity="0.6" />
          <path
            d="M 250 195 Q 240 220 250 240 Q 260 220 250 195"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
}

// Thin gold divider with small central diamond motif
export function GoldDivider({ className = '', width = 160 }) {
  return (
    <div className={`gold-divider-wrap ${className}`} aria-hidden="true">
      <svg width={width} height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="8" x2="68" y2="8" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="73" cy="8" r="1.5" fill="currentColor" />
        <polygon points="80,4 84,8 80,12 76,8" fill="currentColor" />
        <circle cx="87" cy="8" r="1.5" fill="currentColor" />
        <line x1="92" y1="8" x2="160" y2="8" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    </div>
  );
}

// Botanical leaf & henna-inspired curve motif for Mehendi
export function MehendiMotif({ className = '' }) {
  return (
    <svg
      className={`ceremony-motif mehendi-motif ${className}`}
      width="240"
      height="120"
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 20 60 C 60 20, 100 20, 120 60 C 140 20, 180 20, 220 60"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.75"
      />
      <path
        d="M 50 60 Q 65 35 90 45 Q 75 55 50 60"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M 190 60 Q 175 35 150 45 Q 165 55 190 60"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M 120 60 Q 110 30 120 15 Q 130 30 120 60"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <circle cx="120" cy="10" r="2.5" fill="currentColor" />
      <circle cx="80" cy="38" r="1.5" fill="currentColor" />
      <circle cx="160" cy="38" r="1.5" fill="currentColor" />
      <path
        d="M 30 60 C 70 95, 170 95, 210 60"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        opacity="0.5"
      />
    </svg>
  );
}

// Marigold floral & petal garland motif for Haldi
export function HaldiMotif({ className = '' }) {
  return (
    <svg
      className={`ceremony-motif haldi-motif ${className}`}
      width="240"
      height="120"
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Gentle garland curve */}
      <path
        d="M 15 40 Q 120 95 225 40"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.65"
      />
      {/* Stylized marigold blossoms along the garland */}
      {[45, 85, 120, 155, 195].map((cx, i) => {
        const cy = i === 2 ? 68 : i === 1 || i === 3 ? 60 : 48;
        return (
          <g key={cx} transform={`translate(${cx}, ${cy})`}>
            <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.18" />
            <circle cx="0" cy="0" r="5" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
            {/* Fine petal accents */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <line
                key={a}
                x1="0"
                y1="0"
                x2={12 * Math.cos((a * Math.PI) / 180)}
                y2={12 * Math.sin((a * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.75"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// Ghungroo rhythm dots and musical geometric circles for Sangeet
export function SangeetMotif({ className = '' }) {
  return (
    <svg
      className={`ceremony-motif sangeet-motif ${className}`}
      width="240"
      height="120"
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="120" cy="60" r="42" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="120" cy="60" r="28" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.7" />
      <circle cx="120" cy="60" r="14" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      <circle cx="120" cy="60" r="3" fill="currentColor" />
      
      {/* Rhythm dots around concentric rings */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 120 + 42 * Math.cos(rad);
        const y = 60 + 42 * Math.sin(rad);
        return <circle key={deg} cx={x} cy={y} r="2" fill="currentColor" opacity="0.85" />;
      })}

      {/* Flanking rhythmic wave lines */}
      <path
        d="M 20 60 Q 40 45 60 60 T 100 60"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M 140 60 Q 180 75 200 60 T 220 60"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

// Architectural Mandap-inspired structural arch for Wedding
export function MandapArchMotif({ className = '' }) {
  return (
    <svg
      className={`ceremony-motif wedding-motif ${className}`}
      width="260"
      height="130"
      viewBox="0 0 260 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer symmetrical mandap arch */}
      <path
        d="M 30 120 L 30 65 Q 30 20 130 20 Q 230 20 230 65 L 230 120"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.85"
      />
      {/* Inner arch */}
      <path
        d="M 45 120 L 45 70 Q 45 35 130 35 Q 215 35 215 70 L 215 120"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="4 4"
        opacity="0.65"
      />
      {/* Central apex finial */}
      <circle cx="130" cy="12" r="3.5" fill="currentColor" />
      <polygon points="130,4 133,10 127,10" fill="currentColor" />
      {/* Small corner rosettes */}
      <circle cx="45" cy="70" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="215" cy="70" r="2.5" fill="currentColor" opacity="0.8" />
      {/* Base pedestals */}
      <line x1="20" y1="120" x2="55" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="205" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
