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
 * - Concluding frame of the cinematic wedding journey in rich royal maroon & gold
 * - Refined architectural medallion with Royal S & K wax seal
 * - Interactive tap on wax seal triggers a celebratory blessing shower
 * - Couple names: SIDHARTH MALHOTRA & KIARA ADVANI
 * - Lightweight, smooth GPU animation
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
      if (sealBtnRef.current) {
        gsap.fromTo(
          sealBtnRef.current,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.75,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: sealBtnRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (namesRef.current) {
        gsap.fromTo(
          namesRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: namesRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTriggerBlessing = () => {
    setBlessingActive(true);
    setTimeout(() => {
      setBlessingActive(false);
    }, 4000);
  };

  return (
    <footer ref={sectionRef} className="final-composition-scene rich-final-theme" aria-label="Final Invitation Sign-off">
      {/* Celebratory Petals & Gold Sparkle Shower on Tap */}
      {blessingActive && (
        <div className="final-blessing-shower" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`shower-petal petal-style-${i % 4}`}
              style={{
                left: `${(i * 4.1 + 3) % 94}%`,
                animationDelay: `${(i * 0.1) % 1.2}s`,
                animationDuration: `${2.6 + (i % 4) * 0.4}s`,
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
          <RoyalWaxSeal size={96} />
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
