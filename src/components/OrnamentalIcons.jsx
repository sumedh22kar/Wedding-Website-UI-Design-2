import React from 'react';

/**
 * Reusable Indian Wedding Traditional SVG Motifs & Architectural Ornaments
 */

export function LotusIcon({ size = 28, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 5C20 14 14 22 7 24C12 24 18 20 20 12C22 20 28 24 33 24C26 22 20 14 20 5Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M20 12C17 21 10 27 3 28C8 28 14 26 17 21C20 26 26 28 31 28C24 27 17 21 20 12Z"
        fill={color}
        fillOpacity="0.6"
      />
      <path
        d="M20 22C18 27 12 32 6 34C11 34 16 32 18 28C20 32 25 34 30 34C24 32 18 27 20 22Z"
        fill={color}
        fillOpacity="0.45"
      />
      <circle cx="20" cy="35" r="2" fill={color} />
    </svg>
  );
}

export function DiyaFlame({ size = 26, color = '#ECA324', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Diya Base */}
      <path
        d="M6 18C6 24 10 27 16 27C22 27 26 24 26 18C20 20 12 20 6 18Z"
        fill="#C59B51"
      />
      <ellipse cx="16" cy="18" rx="10" ry="3.5" fill="#A87A32" />
      
      {/* Flickering Flame */}
      <path
        className="flicker-flame"
        d="M16 4C14 8 12 11 13 15C14 18 18 18 19 15C20 11 18 8 16 4Z"
        fill="url(#diyaFlameGrad)"
      />
      <defs>
        <radialGradient id="diyaFlameGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF7CC" />
          <stop offset="40%" stopColor="#FFC837" />
          <stop offset="100%" stopColor="#FF4B1F" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function MandapArch({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', maxWidth: '320px', height: 'auto', display: 'block', margin: '0 auto' }}
      aria-hidden="true"
    >
      <path
        d="M20 85 C60 85, 100 20, 200 12 C300 20, 340 85, 380 85"
        stroke="url(#mandapGoldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 85 C85 85, 120 30, 200 24 C280 30, 315 85, 350 85"
        stroke="url(#mandapGoldGrad)"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
      />
      {/* Crown Finial */}
      <circle cx="200" cy="12" r="4" fill="#C59B51" />
      <path d="M200 4 L203 10 L197 10 Z" fill="#C59B51" />
      {/* Hanging Bell Details */}
      <circle cx="100" cy="50" r="2.5" fill="#C59B51" />
      <line x1="100" y1="42" x2="100" y2="50" stroke="#C59B51" strokeWidth="1" />
      <circle cx="300" cy="50" r="2.5" fill="#C59B51" />
      <line x1="300" y1="42" x2="300" y2="50" stroke="#C59B51" strokeWidth="1" />
      <defs>
        <linearGradient id="mandapGoldGrad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C59B51" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#ECC880" />
          <stop offset="100%" stopColor="#C59B51" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CornerFlourish({ position = 'top-left', size = 38 }) {
  const transforms = {
    'top-left': 'none',
    'top-right': 'scaleX(-1)',
    'bottom-left': 'scaleY(-1)',
    'bottom-right': 'scale(-1, -1)',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: position.includes('top') ? '8px' : 'auto',
        bottom: position.includes('bottom') ? '8px' : 'auto',
        left: position.includes('left') ? '8px' : 'auto',
        right: position.includes('right') ? '8px' : 'auto',
        transform: transforms[position],
        pointerEvents: 'none',
        opacity: 0.75,
      }}
      aria-hidden="true"
    >
      <path
        d="M4 4 C18 4, 32 10, 38 24 C42 32, 44 42, 44 48"
        stroke="#C59B51"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M4 14 C14 14, 24 18, 28 28 C30 34, 32 40, 32 46"
        stroke="#C59B51"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        fill="none"
      />
      <circle cx="8" cy="8" r="2.5" fill="#C59B51" />
      <circle cx="4" cy="4" r="1.5" fill="#C59B51" />
    </svg>
  );
}

export function PaisleyMotif({ size = 32, color = '#6B8369' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 4 C24 8, 30 16, 26 24 C22 32, 10 32, 8 22 C6 14, 12 8, 14 6 C15 5, 17 3, 18 4 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="18" cy="20" r="4" fill={color} fillOpacity="0.35" />
      <path d="M18 16 C20 18, 21 22, 18 24" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
