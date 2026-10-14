import React, { useRef, useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import RoyalWaxSeal from './RoyalWaxSeal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE ONE — BRAND NEW ROYAL VELVET FOLIO INVITATION UNSEALING
 * 
 * Completely rebuilt with GSAP Timeline and ScrollTrigger:
 * - Handcrafted royal velvet envelope in deep imperial maroon and gold foil
 * - Central 3D gold & crimson S & K wax seal
 * - Golden spark burst animation on seal uncoupling
 * - 3D physics flap rotation (-180deg on X axis) with inner gold jaali lining
 * - Royal invitation card with gold filigree rising from the velvet pocket
 * - Seamless cinematic expansion transition into Hero World
 */
export function RoyalInvitationEnvelope({ isOpen, onOpenStart, onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const overlayRef = useRef(null);
  const envelopeBoxRef = useRef(null);
  const flapRef = useRef(null);
  const cardRef = useRef(null);
  const sealRef = useRef(null);
  const sparksContainerRef = useRef(null);
  const promptRef = useRef(null);
  const timelineRef = useRef(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleUnseal = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger ambient audio
    onOpenStart?.();

    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        onComplete?.();
      },
    });

    timelineRef.current = tl;

    // 1. Hide prompt & pulse seal
    tl.to(promptRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.3,
      ease: 'power2.out',
    })
      .to(
        sealRef.current,
        {
          scale: 1.25,
          rotation: -10,
          boxShadow: '0 0 50px rgba(245, 215, 127, 0.9), 0 0 100px rgba(199, 91, 120, 0.8)',
          duration: 0.45,
          ease: 'back.out(2)',
        },
        '-=0.1'
      );

    // 2. Explode gold spark particles from seal
    const sparks = sparksContainerRef.current?.children;
    if (sparks && sparks.length > 0) {
      tl.to(
        sparks,
        {
          opacity: 1,
          scale: () => gsap.utils.random(1.2, 2.2),
          x: () => gsap.utils.random(-140, 140),
          y: () => gsap.utils.random(-130, 130),
          rotation: () => gsap.utils.random(-180, 180),
          duration: 0.65,
          ease: 'power2.out',
          stagger: { amount: 0.15 },
        },
        '-=0.2'
      ).to(
        sparks,
        {
          opacity: 0,
          scale: 0,
          duration: 0.4,
          ease: 'power2.in',
        },
        '-=0.25'
      );
    }

    // 3. Seal releases and flap rotates open in 3D (-180deg)
    tl.to(
      sealRef.current,
      {
        y: -40,
        opacity: 0,
        scale: 0.7,
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.6'
    )
      .to(
        flapRef.current,
        {
          rotateX: -180,
          transformOrigin: 'top center',
          duration: 0.95,
          ease: 'power2.inOut',
        },
        '-=0.35'
      )
      // 4. Emerging Royal Card ascends out of envelope pocket
      .to(
        cardRef.current,
        {
          y: -190,
          scale: 1.06,
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 40px rgba(210, 170, 85, 0.4)',
          duration: 1.15,
          ease: 'power3.out',
        },
        '-=0.45'
      )
      // 5. Card pauses briefly then expands into full viewport
      .to(cardRef.current, {
        scale: 2.1,
        y: -300,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.in',
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.6'
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
      className="royal-invitation-reveal-overlay dark-royal-envelope-theme"
      aria-label="Wedding Invitation Envelope"
      role="dialog"
      aria-modal="true"
    >
      {/* Deep Royal Midnight Velvet Atmosphere */}
      <div className="reveal-ambient-glow" aria-hidden="true" />
      <div className="reveal-vibrant-aurora" aria-hidden="true" />

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

      {/* Golden Stardust Particles Container for GSAP Seal Burst */}
      <div ref={sparksContainerRef} className="seal-sparks-emitter" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="seal-spark-dot" />
        ))}
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
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10 110 C 20 60, 60 20, 110 10"
        stroke="url(#goldCornerGrad)"
        strokeWidth="1.5"
      />
      <circle cx="110" cy="10" r="3" fill="#F5D77F" />
      <circle cx="10" cy="110" r="3" fill="#F5D77F" />
      <path
        d="M 24 96 Q 58 58 96 24"
        stroke="#D2AA55"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="goldCornerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D2AA55" />
          <stop offset="50%" stopColor="#FFF4D0" />
          <stop offset="100%" stopColor="#D2AA55" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default RoyalInvitationEnvelope;
