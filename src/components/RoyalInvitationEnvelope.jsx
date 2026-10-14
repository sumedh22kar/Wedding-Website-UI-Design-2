import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';
import RoyalWaxSeal from './RoyalWaxSeal';

/**
 * SCENE ONE — THE ROYAL INVITATION REVEAL
 * 
 * Features:
 * - Handcrafted royal stationery envelope in warm ivory paper texture
 * - Royal 3D wax seal monogram featuring 'S & K'
 * - 3D flap backward rotation (rotateX 180deg)
 * - Emerging gold-bordered invitation card
 * - Seamless expansion into the Jaipur hero world
 * - Audio playback initiation on interaction
 * - Accessible and respects prefers-reduced-motion
 */
export function RoyalInvitationEnvelope({ isOpen, onOpenStart, onComplete }) {
  // 'idle' | 'opening' | 'flap-open' | 'card-emerge' | 'expanding' | 'done'
  const [stage, setStage] = useState('idle');
  const isActivatingRef = useRef(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (stage === 'done') {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  const handleActivate = () => {
    if (stage !== 'idle' || isActivatingRef.current) return;
    isActivatingRef.current = true;

    // Trigger ambient audio immediately on user gesture
    onOpenStart?.();

    if (prefersReducedMotion) {
      setStage('done');
      onComplete?.();
      return;
    }

    // Phase 1: Seal release (0ms)
    setStage('opening');

    // Phase 2: Flap rotates open (280ms)
    setTimeout(() => {
      setStage('flap-open');
    }, 280);

    // Phase 3: Card emerges from inside envelope pocket (850ms)
    setTimeout(() => {
      setStage('card-emerge');
    }, 850);

    // Phase 4: Card expands into full-screen world (1750ms)
    setTimeout(() => {
      setStage('expanding');
    }, 1750);

    // Phase 5: Complete handoff (2850ms)
    setTimeout(() => {
      setStage('done');
    }, 2850);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate();
    }
  };

  if (!isOpen || stage === 'done') return null;

  const isSealReleasing = stage !== 'idle';
  const isFlapOpen = stage === 'flap-open' || stage === 'card-emerge' || stage === 'expanding';
  const isCardEmerging = stage === 'card-emerge' || stage === 'expanding';
  const isExpanding = stage === 'expanding';

  return (
    <aside
      className={`royal-invitation-reveal-overlay ${isExpanding ? 'reveal-expanding' : ''}`}
      aria-label="Wedding Invitation Envelope"
      role="dialog"
      aria-modal="true"
    >
      {/* Soft Ambient Radial Glow */}
      <div className="reveal-ambient-glow" aria-hidden="true" />

      {/* Decorative Botanical Corners */}
      <div className="reveal-corner corner-top-left" aria-hidden="true">
        <BotanicalCornerArt />
      </div>
      <div className="reveal-corner corner-top-right" aria-hidden="true">
        <BotanicalCornerArt />
      </div>
      <div className="reveal-corner corner-bottom-left" aria-hidden="true">
        <BotanicalCornerArt />
      </div>
      <div className="reveal-corner corner-bottom-right" aria-hidden="true">
        <BotanicalCornerArt />
      </div>

      {/* Drifting Petals around Envelope */}
      <div className="reveal-petals-drift" aria-hidden="true">
        <span className="drift-petal petal-1" />
        <span className="drift-petal petal-2" />
        <span className="drift-petal petal-3" />
        <span className="drift-petal petal-4" />
      </div>

      {/* Interactive Envelope Button Control */}
      <button
        type="button"
        className={`envelope-interactive-btn ${isSealReleasing ? 'btn-engaged' : ''}`}
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        aria-label="Tap to open royal wedding invitation from Sidharth Malhotra and Kiara Advani"
        disabled={stage !== 'idle'}
        tabIndex={0}
      >
        <div className={`envelope-3d-stage ${isExpanding ? 'stage-fullscreen' : ''}`}>
          {/* Main Envelope Body */}
          <div className="envelope-physical-box">
            {/* Deep Royal Maroon Inner Lining */}
            <div className="envelope-inner-lining" aria-hidden="true">
              <div className="inner-maroon-pattern" />
            </div>

            {/* Emerging Royal Card */}
            <div
              className={`envelope-emerging-card ${isCardEmerging ? 'card-emerged' : ''} ${
                isExpanding ? 'card-fullscreen-expand' : ''
              }`}
              aria-hidden="true"
            >
              <div className="emerging-card-border">
                {/* Mini Monogram */}
                <div className="emerging-monogram-tag">
                  <RoyalWaxSeal size={32} showSheen={false} />
                </div>

                <div className="emerging-card-content">
                  <span className="card-kicker">Wedding Invitation</span>
                  <h2 className="card-names">
                    <span>{weddingConfig.couple.groom}</span>
                    <span className="card-amp">&amp;</span>
                    <span>{weddingConfig.couple.bride}</span>
                  </h2>
                  <p className="card-city">Jaipur · Rajasthan</p>
                </div>

                {/* Fine Gold Filigree Divider */}
                <div className="emerging-divider" />
              </div>
            </div>

            {/* Front Pocket Folds (Left, Right, Bottom) */}
            <div className="envelope-pocket-front" aria-hidden="true">
              <div className="pocket-triangle pocket-left" />
              <div className="pocket-triangle pocket-right" />
              <div className="pocket-triangle pocket-bottom" />
            </div>

            {/* 3D Realistic Flap */}
            <div className={`envelope-top-flap ${isFlapOpen ? 'flap-rotated' : ''}`} aria-hidden="true">
              {/* Outer Cream Flap */}
              <div className="flap-face flap-front">
                <div className="flap-crease-shadow" />
              </div>
              {/* Inner Maroon Flap Lining */}
              <div className="flap-face flap-back">
                <div className="flap-maroon-inner" />
              </div>
            </div>

            {/* Signature 3D Gold & Crimson Wax Seal */}
            <div className={`envelope-wax-seal ${isSealReleasing ? 'seal-releasing' : ''}`} aria-hidden="true">
              <RoyalWaxSeal size={78} />
            </div>
          </div>
        </div>

        {/* TAP TO OPEN Prompt */}
        <div className={`envelope-open-prompt ${isSealReleasing ? 'prompt-hidden' : ''}`}>
          <div className="prompt-accent" aria-hidden="true">
            <span className="accent-dash" />
            <span className="accent-gem" />
            <span className="accent-dash" />
          </div>
          <span className="prompt-text">Tap to Open</span>
        </div>
      </button>
    </aside>
  );
}

function BotanicalCornerArt() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 8 92 C 16 52, 52 16, 92 8"
        stroke="#D2AA55"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        opacity="0.45"
      />
      <circle cx="92" cy="8" r="2.2" fill="#D2AA55" opacity="0.6" />
      <circle cx="8" cy="92" r="2.2" fill="#D2AA55" opacity="0.6" />
      <path
        d="M 18 82 Q 45 45 82 18"
        stroke="#C75B78"
        strokeWidth="0.6"
        opacity="0.35"
      />
      <circle cx="50" cy="50" r="1.5" fill="#D2AA55" opacity="0.5" />
    </svg>
  );
}

export default RoyalInvitationEnvelope;
