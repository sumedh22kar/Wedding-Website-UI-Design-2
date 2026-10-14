import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE FOUR — THEIR SHARED STORY
 * 
 * Features:
 * - Grand palace gateway architecture in rich royal wine & gold
 * - Centerpiece Photo 4: sidharth-kiara-royal.jpg (traditional wedding ceremony)
 * - Complementary Photo 5: sidharth-kiara-celebration.jpg (festive joy)
 * - Buttery smooth GPU fade-up animations (zero jitter)
 * - Heading: TWO LIVES. ONE BEAUTIFUL CELEBRATION.
 */
export function SharedStoryScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const portalRef = useRef(null);
  const typographyRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (portalRef.current) {
        gsap.fromTo(
          portalRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: portalRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (typographyRef.current) {
        gsap.fromTo(
          typographyRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: typographyRef.current,
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
    <section id="shared-story" ref={sectionRef} className="shared-story-scene" aria-label="Their Shared Story">
      <div className="shared-story-container">
        {/* Grand Palace Architectural Gateway in Rich Royal Velvet Maroon */}
        <div ref={portalRef} className="palace-gateway-portal rich-gateway-theme">
          <div className="gateway-dual-visual-grid">
            {/* Primary Centerpiece: Traditional Royal Ceremony (sidharth-kiara-royal.jpg) */}
            <div className="gateway-primary-arch">
              <div className="arch-inner-aperture">
                <img
                  src={images.royalCeremonyCouple}
                  alt={images.royalCeremonyCoupleAlt}
                  className="gateway-hero-photo"
                  style={{ objectPosition: images.royalCeremonyPosition }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Complementary Celebratory Moment: Warm Festivities (sidharth-kiara-celebration.jpg) */}
            <div className="gateway-celebration-card rich-celebration-theme">
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
        <div ref={typographyRef} className="shared-story-typography rich-typography-theme">
          <div className="story-gold-crest" aria-hidden="true">
            <span className="crest-branch">❧</span>
            <span className="crest-monogram">{couple.monogram}</span>
            <span className="crest-branch">☙</span>
          </div>

          <h2 className="shared-story-headline">{couple.sharedHeadline}</h2>

          <p className="shared-story-passage">
            With the love and blessings of our families, we invite you to partake in the joyful celebration of our wedding festivities in the historic Pink City of Jaipur.
          </p>

          <div className="shared-story-signoff">
            <span className="signoff-prefix">WITH LOVE &amp; GRATITUDE,</span>
            <p className="signoff-names">{couple.groomShort} &amp; {couple.brideShort}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SharedStoryScene;
