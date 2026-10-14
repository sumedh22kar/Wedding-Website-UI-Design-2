import React, { useRef, useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import RoyalWaxSeal from './RoyalWaxSeal';
import { gsap } from 'gsap';

/**
 * SCENE ONE — ROYAL VELVET FOLIO INVITATION UNSEALING
 * 
 * Smooth, lightweight, buttery GSAP Timeline:
 * - Rich royal velvet maroon folio with gold filigree
 * - Central 3D gold & crimson S & K wax seal
 * - Fast, jitter-free 3D flap rotation & rising card
 * - Seamless handoff to Hero World in ~1.4 seconds
 */
export function RoyalInvitationEnvelope({ isOpen, onOpenStart, onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const overlayRef = useRef(null);
  const envelopeBoxRef = useRef(null);
  const flapRef = useRef(null);
  const cardRef = useRef(null);
  const sealRef = useRef(null);
  const promptRef = useRef(null);
  const timelineRef = useRef(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleUnseal = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger ambient audio immediately
    onOpenStart?.();

    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    // Fast, lightweight, buttery smooth timeline (GPU accelerated)
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        onComplete?.();
      },
    });

    timelineRef.current = tl;

    // 1. Hide prompt & seal lifts
    tl.to(promptRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
    })
      .to(
        sealRef.current,
        {
          scale: 1.15,
          opacity: 0,
          y: -25,
          duration: 0.35,
          ease: 'power2.in',
        },
        '-=0.05'
      )
      // 2. 3D flap opens
      .to(
        flapRef.current,
        {
          rotateX: -180,
          transformOrigin: 'top center',
          duration: 0.55,
          ease: 'power2.inOut',
        },
        '-=0.15'
      )
      // 3. Emerging card rises smoothly
      .to(
        cardRef.current,
        {
          y: -140,
          scale: 1.05,
          duration: 0.55,
          ease: 'power2.out',
        },
        '-=0.2'
      )
      // 4. Card expands and overlay dissolves seamlessly into Hero World
      .to(cardRef.current, {
        scale: 1.8,
        y: -220,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.in',
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power1.out',
        },
        '-=0.3'
      );
  };

  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <aside
      ref={overlayRef}
      className="royal-invitation-reveal-overlay rich-royal-envelope-theme"
      aria-label="Wedding Invitation Envelope"
      role="dialog"
      aria-modal="true"
    >
      {/* Warm Ambient Sandstone & Rose Glow */}
      <div className="reveal-ambient-glow" aria-hidden="true" />

      {/* Ornate Gold Royal Filigree Corners */}
      <div className="reveal-corner corner-top-left" aria-hidden="true">
        <RoyalGoldCorner />
      </div>
      <div className="reveal-corner corner-top-right" aria-hidden="true">
        <RoyalGoldCorner />
      </div>
      <div className="reveal-corner corner-bottom-left" aria-hidden="true">
        <RoyalGoldCorner />
      </div>
      <div className="reveal-corner corner-bottom-right" aria-hidden="true">
        <RoyalGoldCorner />
      </div>

      {/* Main Interactive Stage */}
      <div className="envelope-center-stage">
        <div
          ref={envelopeBoxRef}
          className="royal-folio-envelope-box"
          onClick={handleUnseal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleUnseal();
            }
          }}
          aria-label="Tap to unseal the royal wedding invitation of Sidharth Malhotra and Kiara Advani"
        >
          {/* Deep Velvet Pocket Interior */}
          <div className="envelope-pocket-lining" aria-hidden="true">
            <div className="lining-gold-jaali" />
          </div>

          {/* The Royal Gold-Embossed Invitation Card */}
          <div ref={cardRef} className="royal-rising-card" aria-hidden="true">
            <div className="card-outer-gold-rim">
              <div className="card-inner-velvet-body">
                <div className="card-monogram-emblem">
                  <span className="card-emblem-text">S &amp; K</span>
                </div>
                <div className="card-kicker-royal">THE WEDDING CELEBRATION OF</div>
                <h2 className="card-couple-headline">
                  <span>{weddingConfig.couple.groom}</span>
                  <span className="card-headline-amp">&amp;</span>
                  <span>{weddingConfig.couple.bride}</span>
                </h2>
                <div className="card-jaipur-seal">
                  <span>JAIPUR, RAJASTHAN</span>
                  <span className="seal-dot">✦</span>
                  <span>DECEMBER 2026</span>
                </div>
                <div className="card-gold-accent-line" />
              </div>
            </div>
          </div>

          {/* Envelope Pocket Front Face */}
          <div className="envelope-pocket-front-panel" aria-hidden="true">
            <div className="pocket-gold-thread-border" />
            <div className="pocket-crest-watermark">
              <span>S &amp; K</span>
            </div>
            <div className="pocket-embossed-city">JAIPUR · ROYAL WEDDING</div>
          </div>

          {/* 3D Rotating Top Flap */}
          <div ref={flapRef} className="envelope-3d-top-flap" aria-hidden="true">
            {/* Outer Velvet Maroon Flap */}
            <div className="flap-outer-velvet">
              <div className="flap-gold-stitch" />
            </div>
            {/* Inner Golden Foil Flap Lining */}
            <div className="flap-inner-gold-leaf">
              <div className="inner-jaali-pattern" />
            </div>
          </div>

          {/* Central 3D Wax Seal with S & K Monogram */}
          <div ref={sealRef} className="envelope-central-seal" aria-hidden="true">
            <RoyalWaxSeal size={84} />
          </div>
        </div>

        {/* Action Prompt */}
        <div ref={promptRef} className="envelope-interactive-prompt" onClick={handleUnseal}>
          <div className="prompt-shimmer-box">
            <span className="prompt-sparkle-icon">✦</span>
            <span className="prompt-button-text">TAP TO UNSEAL INVITATION</span>
            <span className="prompt-sparkle-icon">✦</span>
          </div>
          <p className="prompt-subtitle">Sidharth Malhotra &amp; Kiara Advani · Jaipur</p>
        </div>
      </div>
    </aside>
  );
}

function RoyalGoldCorner() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10 90 C 20 50, 50 20, 90 10"
        stroke="#D2AA55"
        strokeWidth="1.2"
        opacity="0.75"
      />
      <circle cx="90" cy="10" r="2.5" fill="#F5D77F" />
      <circle cx="10" cy="90" r="2.5" fill="#F5D77F" />
      <path
        d="M 22 78 Q 48 48 78 22"
        stroke="#D2AA55"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        opacity="0.5"
      />
    </svg>
  );
}

export default RoyalInvitationEnvelope;
