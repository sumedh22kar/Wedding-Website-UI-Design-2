import React, { useState } from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';
import RoyalWaxSeal from './RoyalWaxSeal';

/**
 * FINAL SCENE — A WARM CLOSING (3D INTERACTIVE TACTILE SEAL)
 * 
 * Features:
 * - Warm ivory background with subtle vignette
 * - Interactive 3D champagne-gold wax seal stamp `S & K`
 * - Tap wax seal to trigger celebratory blessing petals & sparkles
 * - Minimal champagne-gold divider
 * - WITH LOVE AND BLESSINGS / SIDHARTH & KIARA
 */
export function WarmClosingSection() {
  const { closingEyebrow, closingNames } = weddingConfig;
  const [blessingActive, setBlessingActive] = useState(false);

  const triggerBlessing = () => {
    setBlessingActive(true);
    setTimeout(() => {
      setBlessingActive(false);
    }, 4000);
  };

  return (
    <footer className="warm-closing-scene" aria-label="Invitation Sign-off">
      {/* Interactive Floating Confetti & Petals Shower */}
      {blessingActive && (
        <div className="closing-blessing-shower" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className={`closing-petal petal-var-${i % 3}`}
              style={{
                left: `${(i * 5.6 + 4) % 92}%`,
                animationDelay: `${(i * 0.18) % 1.5}s`,
                animationDuration: `${2.8 + (i % 4) * 0.6}s`,
              }}
            />
          ))}
          <div className="blessing-toast-message">
            <span>Blessed by Your Presence &amp; Love ❀</span>
          </div>
        </div>
      )}

      <div className="closing-inner-wrap">
        {/* Interactive 3D Gold Wax Seal Signet */}
        <button
          type="button"
          className="closing-3d-seal-btn"
          onClick={triggerBlessing}
          aria-label="Tap to bestow blessings upon Sidharth and Kiara"
          title="Tap to bestow blessings"
        >
          <RoyalWaxSeal size={96} />
          <span className="seal-tap-hint">Tap for blessings</span>
        </button>

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

