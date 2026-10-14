import React from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * ROYAL WAX SEAL MONOGRAM COMPONENT — VIRAT & ANUSHKA (V & A)
 * 
 * Features:
 * - Uses the bespoke high-resolution 3D gold wax seal logo from `/images/VA.png`
 * - Hand-poured molten wax perimeter with natural fluid contours
 * - Stamped brass die basin with 3D beaded Motimala rim
 * - Deep maroon debossed 'V & A' monogram with ornamental ampersand flourish
 * - Shimmering directional metallic sheen highlight sweep
 * - Tactile hover elevation and press feedback
 */
export function RoyalWaxSeal({ size = 78, className = '', showSheen = true }) {
  const logoSrc = weddingConfig?.images?.logoSeal || '/images/VA.png';
  const logoAlt =
    weddingConfig?.images?.logoSealAlt ||
    'Royal Wax Seal Monogram V & A — Virat Kohli & Anushka Sharma';

  return (
    <div
      className={`royal-wax-seal-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-label="Royal Wax Seal Monogram — Virat & Anushka"
      role="img"
    >
      <img
        src={logoSrc}
        alt={logoAlt}
        className="royal-wax-seal-img"
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        draggable="false"
      />
      {showSheen && <div className="royal-wax-seal-sheen" aria-hidden="true" />}
    </div>
  );
}

export default RoyalWaxSeal;
