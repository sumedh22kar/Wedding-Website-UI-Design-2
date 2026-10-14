import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE THREE — INDIVIDUAL INTRODUCTIONS (GROOM & BRIDE)
 * 
 * Features:
 * - Rich dark royal velvet jewel-toned cards with 24K gold foil borders:
 *   - Groom (Sidharth Malhotra): Midnight Royal Indigo/Navy velvet with scalloped Jharokha arch
 *   - Bride (Kiara Advani): Imperial Jaipur Ruby/Rose velvet with fluted scalloped Jharokha arch
 * - Aggressive GSAP ScrollTrigger:
 *   - Scrubbed 3D angled entry from left and right
 *   - Golden arch gleam and glowing aura
 *   - High contrast, mobile-first responsive presentation
 */
export function PortraitsScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const groomCardRef = useRef(null);
  const brideCardRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1,
          },
        }
      );

      // Groom card: 3D scrubbed entrance from left
      gsap.fromTo(
        groomCardRef.current,
        {
          x: -90,
          opacity: 0.7,
          rotationY: 18,
          scale: 0.92,
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.2,
          },
        }
      );

      // Bride card: 3D scrubbed entrance from right
      gsap.fromTo(
        brideCardRef.current,
        {
          x: 90,
          opacity: 0.7,
          rotationY: -18,
          scale: 0.92,
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portraits" ref={sectionRef} className="portraits-scene" aria-label="Groom and Bride Introductions">
      {/* Editorial Chapter Heading */}
      <div ref={headerRef} className="portraits-chapter-header">
        <span className="chapter-eyebrow">THE ROYAL COUPLE</span>
        <h2 className="chapter-title">A Union of Two Souls</h2>
        <p className="chapter-subtext">Two lives united in friendship, love, and sacred bond</p>
        <div className="chapter-gold-line" aria-hidden="true" />
      </div>

      <div className="portraits-duo-grid">
        {/* GROOM INTRODUCTION (Image 2: Sidharth Malhotra) */}
        <div ref={groomCardRef} className="portrait-side groom-side dark-groom-card">
          <div className="jharokha-arch-frame groom-arch">
            {/* Scalloped Arch Crest */}
            <div className="arch-fluted-crown" aria-hidden="true">
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="arch-svg-crown">
                <path
                  d="M 10 60 C 10 25, 45 10, 100 8 C 155 10, 190 25, 190 60 Z"
                  fill="none"
                  stroke="#F5D77F"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="8" r="4" fill="#F5D77F" />
              </svg>
            </div>

            <div className="arch-photo-window">
              <img
                src={images.groomPortrait}
                alt={images.groomPortraitAlt}
                className="arch-portrait-image"
                style={{ objectPosition: images.groomPosition }}
                loading="lazy"
              />
              <div className="arch-gold-sheen-glare" aria-hidden="true" />
              <div className="arch-shadow-vignette" aria-hidden="true" />
            </div>

            <div className="arch-brass-inlay" aria-hidden="true" />
          </div>

          <div className="portrait-details-caption">
            <span className="hindi-role-tag groom-hindi-badge">{couple.groomHindiRole} · THE GROOM</span>
            <h3 className="portrait-full-name">{couple.groom}</h3>
            <span className="portrait-english-role">Sidharth Malhotra</span>
          </div>
        </div>

        {/* BRIDE INTRODUCTION (Image 3: Kiara Advani) */}
        <div ref={brideCardRef} className="portrait-side bride-side dark-bride-card">
          <div className="jharokha-arch-frame bride-arch">
            {/* Ornate Scalloped Arch Crest */}
            <div className="arch-fluted-crown" aria-hidden="true">
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="arch-svg-crown">
                <path
                  d="M 10 60 C 10 20, 50 8, 100 6 C 150 8, 190 20, 190 60 Z"
                  fill="none"
                  stroke="#F5D77F"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="6" r="4" fill="#F5D77F" />
                <path d="M 94 6 Q 100 0 106 6 Z" fill="#F5D77F" />
              </svg>
            </div>

            <div className="arch-photo-window">
              <img
                src={images.bridePortrait}
                alt={images.bridePortraitAlt}
                className="arch-portrait-image"
                style={{ objectPosition: images.bridePosition }}
                loading="lazy"
              />
              <div className="arch-gold-sheen-glare" aria-hidden="true" />
              <div className="arch-shadow-vignette" aria-hidden="true" />
            </div>

            <div className="arch-brass-inlay" aria-hidden="true" />
          </div>

          <div className="portrait-details-caption">
            <span className="hindi-role-tag bride-hindi-badge">{couple.brideHindiRole} · THE BRIDE</span>
            <h3 className="portrait-full-name">{couple.bride}</h3>
            <span className="portrait-english-role">Kiara Advani</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortraitsScene;
