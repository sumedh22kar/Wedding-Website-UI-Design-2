import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE THREE — INDIVIDUAL INTRODUCTIONS (GROOM & BRIDE)
 * 
 * Features:
 * - Rich royal jewel-toned cards with 24K gold foil borders:
 *   - Groom (Sidharth Malhotra): Rich Royal Indigo/Navy velvet with scalloped Jharokha arch
 *   - Bride (Kiara Advani): Rich Royal Jaipur Rose/Crimson velvet with fluted scalloped Jharokha arch
 * - Silky smooth, jitter-free GPU scroll trigger animations
 * - Clear, high-contrast typography
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
      // Header smooth reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Groom card: silky smooth fade-up
      if (groomCardRef.current) {
        gsap.fromTo(
          groomCardRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: groomCardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Bride card: silky smooth fade-up with slight stagger
      if (brideCardRef.current) {
        gsap.fromTo(
          brideCardRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: brideCardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
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
        <div ref={groomCardRef} className="portrait-side groom-side rich-groom-card">
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
        <div ref={brideCardRef} className="portrait-side bride-side rich-bride-card">
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
