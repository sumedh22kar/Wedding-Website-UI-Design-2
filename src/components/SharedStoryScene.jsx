import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE FOUR — THEIR SHARED STORY
 * 
 * Features:
 * - Grand palace gateway architecture in deep velvet wine & royal gold
 * - Centerpiece Photo 4: sidharth-kiara-royal.jpg (traditional wedding ceremony)
 * - Complementary Photo 5: sidharth-kiara-celebration.jpg (festive joy under lights)
 * - Aggressive GSAP ScrollTrigger:
 *   - Scrubbed scale and aperture expansion on the royal ceremony photo
 *   - Parallax float on the celebration card
 *   - Rotating gold royal crest
 *   - Heading: TWO LIVES. ONE BEAUTIFUL CELEBRATION.
 */
export function SharedStoryScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const portalRef = useRef(null);
  const photoMainRef = useRef(null);
  const photoSideRef = useRef(null);
  const typographyRef = useRef(null);
  const crestRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Aperture / portal entrance scrub
      gsap.fromTo(
        portalRef.current,
        { scale: 0.92, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      // Deep parallax on royal ceremony photograph
      gsap.fromTo(
        photoMainRef.current,
        { scale: 1.15, y: '-6%' },
        {
          scale: 1.0,
          y: '6%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // Float on celebration photograph
      gsap.fromTo(
        photoSideRef.current,
        { y: 50, rotation: 3 },
        {
          y: -30,
          rotation: -2,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );

      // Rotating gold crest on scroll
      if (crestRef.current) {
        gsap.to(crestRef.current, {
          rotation: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // Typography reveal
      gsap.fromTo(
        typographyRef.current,
        { y: 40, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: typographyRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="shared-story" ref={sectionRef} className="shared-story-scene" aria-label="Their Shared Story">
      <div className="shared-story-container">
        {/* Grand Palace Architectural Gateway in Deep Velvet Maroon */}
        <div ref={portalRef} className="palace-gateway-portal dark-gateway-theme">
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
                <div className="arch-inner-gold-glow" aria-hidden="true" />
              </div>
            </div>

            {/* Complementary Celebratory Moment: Warm Festivities (sidharth-kiara-celebration.jpg) */}
            <div ref={photoSideRef} className="gateway-celebration-card dark-celebration-theme">
              <div className="celebration-photo-frame">
                <img
                  src={images.celebrationCouple}
                  alt={images.celebrationCoupleAlt}
                  className="celebration-photo-img"
                  style={{ objectPosition: images.celebrationPosition }}
                  loading="lazy"
                />
                <div className="celebration-sheen" aria-hidden="true" />
              </div>
              <div className="celebration-card-label">
                <span className="label-gem">✦</span>
                <span className="label-text">Moments of Pure Celebration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Typography Block */}
        <div ref={typographyRef} className="shared-story-typography dark-typography-theme">
          <div className="story-gold-crest" aria-hidden="true">
            <span ref={crestRef} className="crest-monogram-rotating">✦</span>
            <span className="crest-monogram">{couple.monogram}</span>
            <span className="crest-monogram-rotating">✦</span>
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
