import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE FOUR — THEIR SHARED STORY
 * 
 * Features:
 * - Grand palace gateway architecture
 * - Centerpiece Photo 4: sidharth-kiara-royal.jpg (traditional wedding ceremony)
 * - Complementary Photo 5: sidharth-kiara-celebration.jpg (festive joy)
 * - 100% full opacity, vibrant contrast, solid paper background
 * - Heading: TWO LIVES. ONE BEAUTIFUL CELEBRATION.
 */
export function SharedStoryScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const photoMainRef = useRef(null);
  const photoSideRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Gentle parallax on royal ceremony photograph
      gsap.fromTo(
        photoMainRef.current,
        { y: '4%' },
        {
          y: '-4%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Subtle float on celebration photograph
      gsap.fromTo(
        photoSideRef.current,
        { y: 20 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="shared-story" ref={sectionRef} className="shared-story-scene" aria-label="Their Shared Story">
      <div className="shared-story-container">
        {/* Grand Palace Architectural Gateway */}
        <div className="palace-gateway-portal">
          <div className="gateway-dual-visual-grid">
            {/* Primary Centerpiece: Traditional Royal Ceremony (sidharth-kiara-royal.jpg) */}
            <div className="gateway-primary-arch">
              <div className="arch-inner-aperture">
                <img
                  ref={photoMainRef}
                  src={images.royalCeremonyCouple}
                  alt={images.royalCeremonyCoupleAlt}
                  className="gateway-hero-photo"
                  style={{ objectPosition: images.royalCeremonyPosition }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Complementary Celebratory Moment: Warm Festivities (sidharth-kiara-celebration.jpg) */}
            <div ref={photoSideRef} className="gateway-celebration-card">
              <div className="celebration-photo-frame">
                <img
                  src={images.celebrationCouple}
                  alt={images.celebrationCoupleAlt}
                  className="celebration-photo-img"
                  style={{ objectPosition: images.celebrationPosition }}
                  loading="lazy"
                />
              </div>
              <div className="celebration-card-label">
                <span className="label-gem">✦</span>
                <span className="label-text">Moments of Pure Celebration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Typography Block */}
        <div className="shared-story-typography">
          <div className="story-gold-crest" aria-hidden="true">
            <span className="crest-branch left-branch">❧</span>
            <span className="crest-monogram">{couple.monogram}</span>
            <span className="crest-branch right-branch">☙</span>
          </div>

          <h2 className="shared-story-headline">{couple.sharedHeadline}</h2>

          <p className="shared-story-passage">
            With the love and blessings of our families, we invite you to partake in the joyful celebration of our wedding festivities in the historic Pink City of Jaipur.
          </p>

          <div className="shared-story-signoff">
            <span className="signoff-prefix">WITH LOVE,</span>
            <p className="signoff-names">{couple.groomShort} &amp; {couple.brideShort}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SharedStoryScene;
