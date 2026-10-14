import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE TWO — THE HERO WORLD
 * 
 * Features:
 * - Centerpiece couple photograph (Image 1: sidharth-kiara-hero.jpg)
 * - Deep velvet maroon gradient & glowing twilight vignette
 * - Aggressive GSAP ScrollTrigger:
 *   - Camera zoom and vertical parallax scrub
 *   - Staggered name reveal for Sidharth and Kiara
 *   - Scroll indicator bounce
 */
export function HeroScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const typographyRef = useRef(null);
  const groomNameRef = useRef(null);
  const brideNameRef = useRef(null);
  const ampRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Cinematic camera parallax on photo
      gsap.fromTo(
        photoRef.current,
        { scale: 1.18, y: '-3%' },
        {
          scale: 1.02,
          y: '6%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Staggered couple name entrance on scroll
      gsap.fromTo(
        groomNameRef.current,
        { x: -60, opacity: 0.6 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '50% top',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        brideNameRef.current,
        { x: 60, opacity: 0.6 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '50% top',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ampRef.current,
        { scale: 0.5, opacity: 0.5 },
        {
          scale: 1.2,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '50% top',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero-world" ref={sectionRef} className="hero-world-scene dark-hero-world" aria-label="Hero Scene">
      <div className="hero-arch-container">
        <div className="hero-photo-viewport">
          <img
            ref={photoRef}
            src={images.heroCouple}
            alt={images.heroCoupleAlt}
            className="hero-photo-img"
            style={{ objectPosition: images.heroPosition }}
            loading="eager"
          />
          <div className="hero-warm-tint-overlay" aria-hidden="true" />
          <div className="hero-deep-maroon-gradient" aria-hidden="true" />
          <div className="hero-vibrant-glow-rim" aria-hidden="true" />
        </div>
      </div>

      {/* Typography Overlay in Radiant Champagne Gold & Velvet Maroon */}
      <div ref={typographyRef} className="hero-typography-stage">
        <div className="hero-kicker-badge">
          <span className="kicker-line" aria-hidden="true" />
          <span className="kicker-text">A ROYAL DESTINATION WEDDING IN JAIPUR</span>
          <span className="kicker-line" aria-hidden="true" />
        </div>

        <div className="hero-names-lockup">
          <h1 ref={groomNameRef} className="hero-name-primary">{couple.groom}</h1>
          <span ref={ampRef} className="hero-name-ampersand" aria-hidden="true">&amp;</span>
          <h1 ref={brideNameRef} className="hero-name-secondary">{couple.bride}</h1>
        </div>

        <div className="hero-ornamental-divider" aria-hidden="true">
          <span className="divider-arm" />
          <span className="divider-rosette">❀</span>
          <span className="divider-arm" />
        </div>

        <p className="hero-date-location">
          <span>16th – 18th December 2026</span>
          <span className="dot-sep">•</span>
          <span>Jaipur, Rajasthan, India</span>
        </p>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-chevron" />
          <span className="scroll-text">SCROLL TO DISCOVER</span>
        </div>
      </div>
    </section>
  );
}

export default HeroScene;
