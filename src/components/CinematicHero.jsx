import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider, FloatingPetals } from './FloralElements';

/**
 * SCENE ONE — FULL-SCREEN COUPLE OPENING
 * 
 * Cinematic visual opening:
 * - Edge-to-edge full-screen photograph (Image 1: couple-home.jpg)
 * - Deep, soft dark-maroon-to-transparent gradient rising from bottom
 * - Keeps faces completely unobstructed in upper area
 * - Names placed in the darker lower portion:
 *     VIRAT KOHLI
 *     &
 *     ANUSHKA SHARMA
 * - Small champagne-gold divider below names
 * - Discreet SCROLL TO EXPLORE indicator
 * - Soft fade entrance animation with subtle cinematic drift and floating petals
 */
export function CinematicHero() {
  const { groom, bride, images } = weddingConfig;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Soft timed entrance sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className={`cinematic-hero-section ${isLoaded ? 'hero-revealed' : ''}`}
      aria-label="Wedding Invitation Opening"
    >
      {/* Background Photograph Container with Subtle Cinematic Drift */}
      <div className="hero-photo-wrap">
        <img
          src={images.heroCouple}
          alt={images.heroCoupleAlt}
          className="hero-cinematic-img"
          style={{ objectPosition: images.heroPosition }}
          loading="eager"
        />
        {/* Soft Warm Color Grade Overlay */}
        <div className="hero-warm-grade" aria-hidden="true" />
        {/* Deep Maroon Natural Gradient Rising from Bottom */}
        <div className="hero-maroon-gradient" aria-hidden="true" />
      </div>

      {/* Floating Delicate Flower Petals Near Outer Screen Edges */}
      <FloatingPetals count={8} />

      {/* Lower Portion: Names & Elegant Signet */}
      <div className="hero-caption-overlay">
        <div className="hero-names-block">
          <h1 className="hero-title-groom">{groom}</h1>
          <span className="hero-ampersand" aria-hidden="true">&amp;</span>
          <h1 className="hero-title-bride">{bride}</h1>
        </div>

        {/* Small Champagne-Gold Divider */}
        <div className="hero-divider-block">
          <GoldDivider width={120} />
        </div>

        {/* Discreet Scroll Indicator */}
        <div className="hero-scroll-prompt" aria-hidden="true">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow-line">
            <span className="scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CinematicHero;
