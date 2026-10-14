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
 * - Both faces framed clearly above typography
 * - Names placed cleanly in bottom maroon gradient
 * - Gentle camera parallax on scroll
 */
export function HeroScene() {
  const { couple, images } = weddingConfig;
  const sectionRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        y: '8%',
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero-world" ref={sectionRef} className="hero-world-scene" aria-label="Hero Scene">
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
        </div>
      </div>

      {/* Typography Overlay */}
      <div className="hero-typography-stage">
        <div className="hero-kicker-badge">
          <span className="kicker-line" aria-hidden="true" />
          <span className="kicker-text">A Royal Wedding Celebration in Jaipur</span>
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
          <span>Jaipur, Rajasthan</span>
        </p>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-chevron" />
          <span className="scroll-text">Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
}

export default HeroScene;
