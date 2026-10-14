import React, { useState } from 'react';
import { weddingConfig } from '../weddingConfig';
import RoyalWaxSeal from './RoyalWaxSeal';

/**
 * SCENE SEVEN — THE FINAL COMPOSITION
 * 
 * Features:
 * - Concluding frame of the cinematic wedding journey
 * - Refined architectural medallion with Royal S & K wax seal
 * - Interactive tap on wax seal releases celebratory blessing shower
 * - Couple names: SIDHARTH MALHOTRA & KIARA ADVANI
 * - No conventional footer, no marketing copy, no RSVP section
 */
export function FinalCompositionScene() {
  const { couple } = weddingConfig;
  const [blessingActive, setBlessingActive] = useState(false);

  const handleTriggerBlessing = () => {
    setBlessingActive(true);
    setTimeout(() => {
      setBlessingActive(false);
    }, 4500);
  };

  return (
    <footer className="final-composition-scene" aria-label="Final Invitation Sign-off">
      {/* Celebratory Petals & Gold Sparkle Shower on Tap */}
      {blessingActive && (
        <div className="final-blessing-shower" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`shower-petal petal-style-${i % 4}`}
              style={{
                left: `${(i * 4.3 + 3) % 94}%`,
                animationDelay: `${(i * 0.15) % 1.6}s`,
                animationDuration: `${2.8 + (i % 4) * 0.5}s`,
              }}
            />
          ))}
          <div className="blessing-banner">
            <span>Blessed by Your Presence &amp; Love ❀</span>
          </div>
        </div>
      )}

      <div className="final-composition-inner">
        {/* Interactive 3D Gold Wax Seal */}
        <button
          type="button"
          className="final-seal-trigger-btn"
          onClick={handleTriggerBlessing}
          aria-label="Tap to bestow blessings upon Sidharth and Kiara"
          title="Tap for royal blessings"
        >
          <RoyalWaxSeal size={102} />
          <span className="seal-hint-badge">Tap for blessings</span>
        </button>

        <span className="final-eyebrow">WITH LOVE AND BLESSINGS</span>

        <div className="final-gold-filigree-divider" aria-hidden="true">
          <span className="filigree-line" />
          <span className="filigree-rosette">◈</span>
          <span className="filigree-line" />
        </div>

        <h2 className="final-couple-names">
          <span>{couple.groom}</span>
          <span className="final-ampersand">&amp;</span>
          <span>{couple.bride}</span>
        </h2>

        <p className="final-city-tag">Jaipur · Rajasthan · India</p>
      </div>
    </footer>
  );
}

export default FinalCompositionScene;
