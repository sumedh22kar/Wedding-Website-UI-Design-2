import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';
import RoyalWaxSeal from './RoyalWaxSeal';

/**
 * PREMIUM OPENING ANIMATION — THE LIVING WEDDING INVITATION
 * Featuring: Virat Kohli & Anushka Sharma
 * 
 * 6-Phase Precise Motion Timeline (~3.0s total):
 * Phase 1 (0.00–0.25s): The invitation responds (instruction fades, warm glow intensifies, envelope settles)
 * Phase 2 (0.20–0.55s): The wax seal releases (subtle lift, scale-down, smooth fade without explosion)
 * Phase 3 (0.40–1.05s): The envelope flap opens (true 3D rotateX backward, revealing maroon inner lining)
 * Phase 4 (0.75–1.55s): The invitation card emerges (slides upward from inside envelope pocket, settles in center)
 * Phase 5 (1.50–2.35s): The card becomes the screen (VIRAT KOHLI & ANUSHKA SHARMA reveal, expands toward viewport)
 * Phase 6 (2.20–3.10s): Seamless handoff to existing full-screen couple hero
 */
export function InvitationOpening({ isOpen, onOpenStart, onComplete }) {
  // Animation phases: 'idle' | 'phase1-responding' | 'phase2-seal' | 'phase3-flap' | 'phase4-card' | 'phase5-expand' | 'complete'
  const [phase, setPhase] = useState('idle');
  const isActivatingRef = useRef(false);

  // Lock body scroll only while opening overlay is active
  useEffect(() => {
    if (isOpen && phase !== 'complete') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, phase]);

  const handleActivate = () => {
    if (isActivatingRef.current || phase !== 'idle') return;
    isActivatingRef.current = true;

    // Trigger Kudmayi wedding music on user interaction
    if (onOpenStart) {
      onOpenStart();
    }

    // Check prefers-reduced-motion: reveal immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setPhase('complete');
      if (onComplete) onComplete();
      return;
    }

    // Phase 1: Tap response (0.00s)
    setPhase('phase1-responding');

    // Phase 2: Seal release & lift (0.22s)
    const t2 = setTimeout(() => {
      setPhase('phase2-seal');
    }, 220);

    // Phase 3: 3D Flap opens backwards (0.45s)
    const t3 = setTimeout(() => {
      setPhase('phase3-flap');
    }, 450);

    // Phase 4: Card emerges upward from pocket (0.85s)
    const t4 = setTimeout(() => {
      setPhase('phase4-card');
    }, 850);

    // Phase 5: Card expands toward viewport (1.65s)
    const t5 = setTimeout(() => {
      setPhase('phase5-expand');
    }, 1650);

    // Phase 6: Seamless handoff & complete (2.65s - 2.95s)
    const t6 = setTimeout(() => {
      setPhase('complete');
      if (onComplete) onComplete();
    }, 2850);

    // Failsafe timer: guarantee user is never trapped
    const tFailSafe = setTimeout(() => {
      setPhase('complete');
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(tFailSafe);
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      handleActivate();
    }
  };

  if (!isOpen || phase === 'complete') {
    return null;
  }

  // Derive animation state flags
  const isInteracted = phase !== 'idle';
  const isSealReleasing = phase === 'phase2-seal' || phase === 'phase3-flap' || phase === 'phase4-card' || phase === 'phase5-expand';
  const isFlapOpen = phase === 'phase3-flap' || phase === 'phase4-card' || phase === 'phase5-expand';
  const isCardEmerging = phase === 'phase4-card' || phase === 'phase5-expand';
  const isExpanding = phase === 'phase5-expand';

  return (
    <div
      className={`living-invitation-overlay ${isExpanding ? 'overlay-expanding' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Handcrafted Wedding Invitation"
      onClick={handleActivate}
    >
      {/* Background Atmosphere: Champagne Glow & Vignette */}
      <div className={`living-ambient-glow ${isInteracted ? 'glow-warmed' : ''}`} aria-hidden="true" />
      <div className="living-paper-vignette" aria-hidden="true" />

      {/* Faint Botanical Line Art Near 4 Outer Corners */}
      <div className="living-corner-botanical top-left" aria-hidden="true">
        <BotanicalCornerSVG />
      </div>
      <div className="living-corner-botanical top-right" aria-hidden="true">
        <BotanicalCornerSVG />
      </div>
      <div className="living-corner-botanical bottom-left" aria-hidden="true">
        <BotanicalCornerSVG />
      </div>
      <div className="living-corner-botanical bottom-right" aria-hidden="true">
        <BotanicalCornerSVG />
      </div>

      {/* Floating Ambient Petals Near Outer Screen Edges */}
      <div className="living-petals-drift" aria-hidden="true">
        <span className="living-petal petal-1" />
        <span className="living-petal petal-2" />
        <span className="living-petal petal-3" />
        <span className="living-petal petal-4" />
        <span className="living-petal petal-5" />
      </div>

      {/* Interactive Envelope Button Control */}
      <button
        type="button"
        className={`living-envelope-button ${isInteracted ? 'button-active' : ''}`}
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        aria-label="Tap to open wedding invitation from Virat Kohli and Anushka Sharma"
        disabled={isInteracted}
        tabIndex={0}
      >
        <div
          className={`living-envelope-stage ${
            isInteracted ? 'stage-settled' : ''
          } ${isExpanding ? 'stage-expanding-to-hero' : ''}`}
        >
          {/* Main Envelope Box */}
          <div className="living-envelope-box">
            {/* Darker Inner Lining visible when flap opens */}
            <div className="living-envelope-interior" aria-hidden="true">
              <div className="interior-maroon-accent" />
            </div>

            {/* Emerging Handcrafted Invitation Card */}
            <div
              className={`living-invitation-card ${
                isCardEmerging ? 'card-emerged' : ''
              } ${isExpanding ? 'card-fullscreen-expand' : ''}`}
              aria-hidden="true"
            >
              <div className="invitation-card-border">
                {/* Monogram Detail */}
                <div className="card-monogram-tag">
                  <img
                    src="/images/VA.png"
                    alt="Royal Monogram V & A"
                    className="card-mini-seal-img"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="card-names-content">
                  <span className="card-kicker-label">Wedding Invitation</span>
                  <h2 className="card-couple-names">
                    <span>{weddingConfig.groom}</span>
                    <span className="card-amp">&amp;</span>
                    <span>{weddingConfig.bride}</span>
                  </h2>
                </div>

                <div className="card-divider-wrap">
                  <GoldDivider width={100} />
                </div>
              </div>
            </div>

            {/* Front Pocket Folds (Left, Right, Bottom) concealing card initially */}
            <div className="living-envelope-pocket-front" aria-hidden="true">
              <div className="pocket-fold-left" />
              <div className="pocket-fold-right" />
              <div className="pocket-fold-bottom" />
            </div>

            {/* 3D Realistic Folded Triangular Flap */}
            <div
              className={`living-envelope-flap-3d ${isFlapOpen ? 'flap-rotated-open' : ''}`}
              aria-hidden="true"
            >
              {/* Outer Cream Flap Face */}
              <div className="flap-face flap-face-front">
                <div className="flap-gold-crease" />
              </div>
              {/* Inner Maroon Flap Lining revealed when opened */}
              <div className="flap-face flap-face-back">
                <div className="flap-maroon-lining" />
              </div>
            </div>

            {/* Signature Champagne Gold Wax Seal */}
            <div
              className={`living-wax-seal ${isSealReleasing ? 'seal-released' : ''}`}
              aria-hidden="true"
            >
              <RoyalWaxSeal size={78} />
            </div>
          </div>
        </div>

        {/* TAP TO OPEN Instruction with Gold Accent */}
        <div className={`living-open-prompt ${isInteracted ? 'prompt-hidden' : ''}`}>
          <div className="prompt-gold-accent" aria-hidden="true">
            <span className="accent-line" />
            <span className="accent-diamond" />
            <span className="accent-line" />
          </div>
          <span className="prompt-text">Tap to Open</span>
        </div>
      </button>
    </div>
  );
}

// Faint delicate botanical corner SVG
function BotanicalCornerSVG() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10 110 C 20 60, 60 20, 110 10"
        stroke="#D2AA55"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M 30 75 Q 45 50 65 60 Q 50 75 30 75"
        stroke="#D2AA55"
        strokeWidth="0.6"
        fill="#D2AA55"
        fillOpacity="0.1"
      />
      <path
        d="M 65 40 Q 80 15 100 25 Q 85 40 65 40"
        stroke="#D2AA55"
        strokeWidth="0.6"
        fill="#D2AA55"
        fillOpacity="0.1"
      />
      <circle cx="110" cy="10" r="1.5" fill="#D2AA55" opacity="0.6" />
      <circle cx="65" cy="60" r="1.2" fill="#D2AA55" opacity="0.6" />
    </svg>
  );
}

export default InvitationOpening;
