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
 * - Rich royal maroon & warm sunset lighting
 * - Butter-smooth, jitter-free GPU scroll trigger
 */
export function HeroScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const typographyRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Gentle, smooth camera zoom without lag
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { scale: 1.08 },
          {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );
      }

      // Typography smooth fade-in
      if (typographyRef.current) {
        gsap.fromTo(
          typographyRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.2,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero-world" ref={sectionRef} className="hero-world-scene rich-hero-world" aria-label="Hero Scene">
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
          <div className="hero-rich-maroon-gradient" aria-hidden="true" />
        </div>
      </div>

      {/* Typography Overlay in Radiant Champagne Gold & Rich Maroon */}
      <div ref={typographyRef} className="hero-typography-stage">
        <div className="hero-kicker-badge">
          <span className="kicker-line" aria-hidden="true" />
          <span className="kicker-text">A ROYAL DESTINATION WEDDING IN JAIPUR</span>
          <span className="kicker-line" aria-hidden="true" />
        </div>

        <div className="hero-names-lockup">
          <h1 className="hero-name-primary">{couple.groom}</h1>
          <span className="hero-name-ampersand" aria-hidden="true">&amp;</span>
          <h1 className="hero-name-secondary">{couple.bride}</h1>
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
