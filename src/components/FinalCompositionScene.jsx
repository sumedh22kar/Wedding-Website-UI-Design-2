import React, { useState, useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import RoyalWaxSeal from './RoyalWaxSeal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE SEVEN — THE FINAL COMPOSITION
 * 
 * Features:
 * - Concluding frame of the cinematic wedding journey in dark royal velvet & gold
 * - Refined architectural medallion with Royal S & K wax seal
 * - Interactive tap on wax seal triggers a GSAP celebratory blessing shower
 * - Couple names: SIDHARTH MALHOTRA & KIARA ADVANI
 * - No conventional footer, no marketing copy, no RSVP section
 */
export function FinalCompositionScene() {
  const { couple } = weddingConfig;
  const [blessingActive, setBlessingActive] = useState(false);
  const sectionRef = useRef(null);
  const sealBtnRef = useRef(null);
  const namesRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Seal & card entrance
      gsap.fromTo(
        sealBtnRef.current,
        { scale: 0.7, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );

      // Names reveal
      gsap.fromTo(
        namesRef.current,
        { y: 30, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: namesRef.current,
            start: 'top 90%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTriggerBlessing = () => {
    setBlessingActive(true);
    // Pulse seal with GSAP
    if (sealBtnRef.current) {
      gsap.fromTo(
        sealBtnRef.current,
        { scale: 1.15, filter: 'drop-shadow(0 0 30px #F5D77F)' },
        { scale: 1, filter: 'none', duration: 0.8, ease: 'elastic.out(1, 0.4)' }
      );
    }
    setTimeout(() => {
      setBlessingActive(false);
    }, 4500);
  };

  return (
    <footer ref={sectionRef} className="final-composition-scene dark-final-theme" aria-label="Final Invitation Sign-off">
      {/* Celebratory Petals & Gold Sparkle Shower on Tap */}
      {blessingActive && (
        <div className="final-blessing-shower" aria-hidden="true">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className={`shower-petal petal-style-${i % 4}`}
              style={{
                left: `${(i * 3.1 + 2) % 96}%`,
                animationDelay: `${(i * 0.12) % 1.5}s`,
                animationDuration: `${2.6 + (i % 4) * 0.5}s`,
              }}
            />
          ))}
          <div className="blessing-banner">
            <span>Blessed by Your Love &amp; Presence ❀</span>
          </div>
        </div>
      )}

      <div className="final-composition-inner">
        {/* Interactive 3D Gold Wax Seal */}
        <button
          ref={sealBtnRef}
          type="button"
          className="final-seal-trigger-btn"
          onClick={handleTriggerBlessing}
          aria-label="Tap to bestow blessings upon Sidharth and Kiara"
          title="Tap for royal blessings"
        >
          <RoyalWaxSeal size={106} />
          <span className="seal-hint-badge">Tap for blessings</span>
        </button>

        <span className="final-eyebrow">WITH LOVE AND BLESSINGS</span>

        <div className="final-gold-filigree-divider" aria-hidden="true">
          <span className="filigree-line" />
          <span className="filigree-rosette">◈</span>
          <span className="filigree-line" />
        </div>

        <div ref={namesRef} className="final-names-block">
          <h2 className="final-couple-names">
            <span>{couple.groom}</span>
            <span className="final-ampersand">&amp;</span>
            <span>{couple.bride}</span>
          </h2>
        </div>

        <p className="final-city-tag">Jaipur · Rajasthan · India</p>
      </div>
    </footer>
  );
}

export default FinalCompositionScene;
