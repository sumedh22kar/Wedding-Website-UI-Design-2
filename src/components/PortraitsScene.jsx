import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE THREE — INDIVIDUAL INTRODUCTIONS (GROOM & BRIDE)
 * 
 * Features:
 * - Groom: Sidharth Malhotra (sidharth-portrait.jpg) + 'SIDHARTH MALHOTRA' + 'THE GROOM' + 'वर'
 * - Bride: Kiara Advani (kiara-portrait.jpg) + 'KIARA ADVANI' + 'THE BRIDE' + 'वधू'
 * - Two Jaipur architectural jharokha arches with brass filigree
 * - 100% crisp opacity and balanced composition
 */
export function PortraitsScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const groomCardRef = useRef(null);
  const brideCardRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Gentle parallax depth floating without displacement
      gsap.fromTo(
        groomCardRef.current,
        { y: 30 },
        {
          y: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        brideCardRef.current,
        { y: 45 },
        {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portraits" ref={sectionRef} className="portraits-scene" aria-label="Groom and Bride Introductions">
      {/* Editorial Chapter Heading */}
      <div className="portraits-chapter-header">
        <span className="chapter-eyebrow">The Royal Couple</span>
        <h2 className="chapter-title">A Union of Two Souls</h2>
        <div className="chapter-gold-line" aria-hidden="true" />
      </div>

      <div className="portraits-duo-grid">
        {/* GROOM INTRODUCTION (Image 2: Sidharth Malhotra) */}
        <div ref={groomCardRef} className="portrait-side groom-side">
          <div className="jharokha-arch-frame groom-arch">
            {/* Scalloped Arch Crest */}
            <div className="arch-fluted-crown" aria-hidden="true">
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="arch-svg-crown">
                <path
                  d="M 10 60 C 10 25, 45 10, 100 8 C 155 10, 190 25, 190 60 Z"
                  fill="none"
                  stroke="#D2AA55"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="8" r="4" fill="#D2AA55" />
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
            <span className="hindi-role-tag">{couple.groomHindiRole} (Groom)</span>
            <h3 className="portrait-full-name">{couple.groom}</h3>
            <span className="portrait-english-role">{couple.groomRole}</span>
          </div>
        </div>

        {/* BRIDE INTRODUCTION (Image 3: Kiara Advani) */}
        <div ref={brideCardRef} className="portrait-side bride-side">
          <div className="jharokha-arch-frame bride-arch">
            {/* Ornate Scalloped Arch Crest */}
            <div className="arch-fluted-crown" aria-hidden="true">
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="arch-svg-crown">
                <path
                  d="M 10 60 C 10 20, 50 8, 100 6 C 150 8, 190 20, 190 60 Z"
                  fill="none"
                  stroke="#D2AA55"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="6" r="4" fill="#D2AA55" />
                <path d="M 94 6 Q 100 0 106 6 Z" fill="#D2AA55" />
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
            <span className="hindi-role-tag">{couple.brideHindiRole} (Bride)</span>
            <h3 className="portrait-full-name">{couple.bride}</h3>
            <span className="portrait-english-role">{couple.brideRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortraitsScene;
