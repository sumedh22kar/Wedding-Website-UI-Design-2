import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';

/**
 * FINAL SCENE — A WARM CLOSING
 * 
 * Minimal, quiet, luxury stationery sign-off:
 * - Warm ivory background
 * - Minimal champagne-gold divider
 * - WITH LOVE AND BLESSINGS
 * - VIRAT & ANUSHKA
 * - No RSVP forms, no navigation bars, no social links, no marketing copy.
 */
export function WarmClosingSection() {
  const { closingEyebrow, closingNames } = weddingConfig;

  return (
    <footer className="warm-closing-scene" aria-label="Invitation Sign-off">
      <div className="closing-inner-wrap">
        <span className="closing-kicker-text">{closingEyebrow}</span>
        <div className="closing-divider-box">
          <GoldDivider width={140} />
        </div>
        <p className="closing-names-text">{closingNames}</p>
      </div>
    </footer>
  );
}

export default WarmClosingSection;
