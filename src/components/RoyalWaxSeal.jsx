import React from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * ROYAL WAX SEAL MONOGRAM COMPONENT — SIDHARTH & KIARA (S & K)
 * 
 * Features:
 * - Bespoke high-resolution 3D gold wax seal logo for Sidharth & Kiara (`S & K`)
 * - Hand-poured molten wax perimeter with natural fluid contours
 * - Stamped brass die basin with 3D beaded Motimala rim
 * - Deep royal debossed 'S & K' monogram with ornamental ampersand flourish
 * - Shimmering directional metallic sheen highlight sweep
 * - Tactile hover elevation and press feedback
 */
export function RoyalWaxSeal({ size = 78, className = '', showSheen = true }) {
  const logoSrc = weddingConfig?.images?.logoSeal || '/images/SK-seal.svg';
  const logoAlt =
    weddingConfig?.images?.logoSealAlt ||
    'Royal Wax Seal Monogram S & K — Sidharth Malhotra & Kiara Advani';

  return (
    <div
      className={`royal-wax-seal-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-label="Royal Wax Seal Monogram — Sidharth & Kiara"
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
