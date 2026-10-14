import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider, FloatingPetals } from './FloralElements';

/**
 * SCENE ONE — FULL-SCREEN COUPLE OPENING (3D IMMERSIVE CINEMATIC HERO)
 * 
 * Cinematic visual opening:
 * - Edge-to-edge full-screen photograph (Image 1: sidharth-kiara-hero.jpg)
 * - Interactive 3D spatial parallax responding smoothly to cursor/touch movement
 * - Deep, soft dark-maroon-to-transparent gradient rising from bottom
 * - Names placed in the darker lower portion with forward 3D layer depth:
 *     SIDHARTH MALHOTRA
 *     &
 *     KIARA ADVANI
 * - Small champagne-gold divider below names
 * - Soft fade entrance animation with cinematic drift and floating golden petals
 * - ("Scroll to explore" removed as requested)
 */
export function CinematicHero() {
  const { groom, bride, images } = weddingConfig;
  const [isLoaded, setIsLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    // Soft timed entrance sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  // Smooth interactive 3D spatial parallax on mouse move
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: x * 18,
      y: y * -18,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`cinematic-hero-section ${isLoaded ? 'hero-revealed' : ''}`}
      aria-label="Wedding Invitation Opening"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Background Photograph Container with 3D Parallax Depth */}
      <div
        className="hero-photo-wrap"
        style={{
          transform: `scale(1.08) translate3d(${tilt.x * 0.4}px, ${tilt.y * -0.4}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
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
        {/* Interactive Subtle Light Sheen that moves with mouse */}
        <div
          className="hero-interactive-sheen"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.x * 1.5}% ${40 + tilt.y * -1.5}%, rgba(210, 170, 85, 0.22) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Floating Delicate Flower Petals Near Outer Screen Edges */}
      <FloatingPetals count={8} />

      {/* Lower Portion: Names & Elegant Signet with Forward 3D Plane Float */}
      <div
        className="hero-caption-overlay"
        style={{
          transform: `perspective(1000px) translate3d(${tilt.x * -0.6}px, ${tilt.y * 0.6}px, 30px) rotateX(${tilt.y * 0.15}deg) rotateY(${tilt.x * -0.15}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="hero-names-block">
          <h1 className="hero-title-groom">{groom}</h1>
          <span className="hero-ampersand" aria-hidden="true">&amp;</span>
          <h1 className="hero-title-bride">{bride}</h1>
        </div>

        {/* Small Champagne-Gold Divider */}
        <div className="hero-divider-block">
          <GoldDivider width={120} />
        </div>
      </div>
    </section>
  );
}

export default CinematicHero;

