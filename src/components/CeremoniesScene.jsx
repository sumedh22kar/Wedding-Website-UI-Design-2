import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE FIVE — THE INDIAN WEDDING CELEBRATIONS
 * 
 * Clean, perfectly aligned layout with ZERO element overlaps:
 * 1. MEHENDI (Botanical World: Rich Emerald Green & Warm Gold)
 * 2. HALDI (Marigold World: Rich Festive Saffron & Marigold Gold)
 * 3. SANGEET (Rhythm & Movement: Rich Royal Plum & Champagne Gold)
 * 4. THE WEDDING (Royal Architecture: Rich Imperial Maroon & 24K Gold)
 * 
 * Butter-smooth, GPU-accelerated GSAP animations without scroll jitter.
 */
export function CeremoniesScene() {
  const { ceremonies } = weddingConfig;
  const containerRef = useRef(null);

  // Card Refs
  const mehendiCardRef = useRef(null);
  const haldiCardRef = useRef(null);
  const sangeetCardRef = useRef(null);
  const weddingCardRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = [
        mehendiCardRef.current,
        haldiCardRef.current,
        sangeetCardRef.current,
        weddingCardRef.current,
      ];

      cards.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ceremonies" ref={containerRef} className="ceremonies-continuous-scene" aria-label="Wedding Ceremonies">
      {/* Chapter Overview Header */}
      <div className="ceremonies-overview-header">
        <span className="overview-kicker">RITUALS &amp; FESTIVITIES</span>
        <h2 className="overview-title">The Four Ceremonies</h2>
        <p className="overview-subtitle">Choreographed celebrations of love across the royal palaces of Jaipur</p>
        <div className="overview-gold-accent" aria-hidden="true" />
      </div>

      <div className="ceremonies-chapters-list">
        {/* ==============================================================
            1. MEHENDI — BOTANICAL WORLD (Rich Royal Emerald & Gold)
            ============================================================== */}
        <div
          ref={mehendiCardRef}
          className="ceremony-chapter chapter-mehendi rich-jewel-card"
          id="chapter-mehendi"
        >
          {/* Subtle Watermark Henna Mandala (Positioned in corner at low opacity so it never covers text) */}
          <div className="card-background-watermark mandala-watermark" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="watermark-svg rotating-watermark">
              <circle cx="100" cy="100" r="90" stroke="#F5D77F" strokeWidth="1" strokeDasharray="3 5" fill="none" />
              <circle cx="100" cy="100" r="60" stroke="#10B981" strokeWidth="1" fill="none" />
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={i}
                  d="M 100 100 Q 100 40 115 25 Q 100 40 85 25 Z"
                  fill="#10B981"
                  opacity="0.4"
                  transform={`rotate(${i * 45} 100 100)`}
                />
              ))}
              <circle cx="100" cy="100" r="8" fill="#F5D77F" opacity="0.6" />
            </svg>
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              {/* Badge row - clean, inline without overlapping decorative elements */}
              <div className="ceremony-badge-line">
                <span className="ceremony-number emerald-badge">01</span>
                <span className="ceremony-theme-tag emerald-tag">Botanical World</span>
              </div>

              {/* Title group */}
              <div className="ceremony-title-group">
                <span className="ceremony-devanagari emerald-devanagari">{ceremonies.mehendi.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.mehendi.title}</h3>
              </div>

              {/* Schedule */}
              <div className="ceremony-schedule-block">
                <div className="schedule-entry">
                  <span className="schedule-icon">📅</span>
                  <span className="schedule-text">{ceremonies.mehendi.date}</span>
                </div>
                <div className="schedule-entry">
                  <span className="schedule-icon">⏳</span>
                  <span className="schedule-text">{ceremonies.mehendi.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="ceremony-description">{ceremonies.mehendi.description}</p>

              {/* Clean bottom motif accent with inline elements */}
              <div className="ceremony-motif-accent mehendi-motif" aria-hidden="true">
                <span className="motif-leaf">🌿</span>
                <span className="motif-text">Mogra &amp; Henna Blossoms</span>
                <span className="motif-leaf">🌿</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            2. HALDI — MARIGOLD WORLD (Rich Saffron & Marigold Amber)
            ============================================================== */}
        <div
          ref={haldiCardRef}
          className="ceremony-chapter chapter-haldi rich-jewel-card"
          id="chapter-haldi"
        >
          {/* Subtle Watermark Sunburst in background (safe, low opacity) */}
          <div className="card-background-watermark sunburst-watermark" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="watermark-svg rotating-watermark-slow">
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 90 * Math.cos((i * Math.PI) / 6)}
                  y2={100 + 90 * Math.sin((i * Math.PI) / 6)}
                  stroke="#F59E0B"
                  strokeWidth="1.2"
                  strokeDasharray="3 5"
                />
              ))}
              <circle cx="100" cy="100" r="35" fill="#F59E0B" opacity="0.15" />
            </svg>
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              {/* Badge row - clean, inline without overlapping vertical garlands */}
              <div className="ceremony-badge-line">
                <span className="ceremony-number amber-badge">02</span>
                <span className="ceremony-theme-tag amber-tag">Marigold World</span>
              </div>

              {/* Title group */}
              <div className="ceremony-title-group">
                <span className="ceremony-devanagari amber-devanagari">{ceremonies.haldi.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.haldi.title}</h3>
              </div>

              {/* Schedule */}
              <div className="ceremony-schedule-block">
                <div className="schedule-entry">
                  <span className="schedule-icon">📅</span>
                  <span className="schedule-text">{ceremonies.haldi.date}</span>
                </div>
                <div className="schedule-entry">
                  <span className="schedule-icon">⏳</span>
                  <span className="schedule-text">{ceremonies.haldi.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="ceremony-description">{ceremonies.haldi.description}</p>

              {/* Elegant inline marigold garland border along bottom */}
              <div className="ceremony-motif-accent haldi-motif" aria-hidden="true">
                <span className="motif-flower">🌼</span>
                <span className="motif-text">Genda Phool &amp; Turmeric Blessings</span>
                <span className="motif-flower">🏵️</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            3. SANGEET — RHYTHM AND MOVEMENT (Rich Royal Plum & Gold)
            ============================================================== */}
        <div
          ref={sangeetCardRef}
          className="ceremony-chapter chapter-sangeet rich-jewel-card"
          id="chapter-sangeet"
        >
          {/* Subtle concentric rings watermark in background */}
          <div className="card-background-watermark rhythm-watermark" aria-hidden="true">
            <div className="subtle-ring ring-1" />
            <div className="subtle-ring ring-2" />
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              {/* Badge row */}
              <div className="ceremony-badge-line">
                <span className="ceremony-number plum-badge">03</span>
                <span className="ceremony-theme-tag plum-tag">Rhythm &amp; Movement</span>
              </div>

              {/* Title group */}
              <div className="ceremony-title-group">
                <span className="ceremony-devanagari plum-devanagari">{ceremonies.sangeet.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.sangeet.title}</h3>
              </div>

              {/* Schedule */}
              <div className="ceremony-schedule-block">
                <div className="schedule-entry">
                  <span className="schedule-icon">📅</span>
                  <span className="schedule-text">{ceremonies.sangeet.date}</span>
                </div>
                <div className="schedule-entry">
                  <span className="schedule-icon">⏳</span>
                  <span className="schedule-text">{ceremonies.sangeet.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="ceremony-description">{ceremonies.sangeet.description}</p>

              {/* Motif accent */}
              <div className="ceremony-motif-accent sangeet-motif" aria-hidden="true">
                <span className="motif-sparkle">✨</span>
                <span className="motif-text">Musical Performances &amp; Starlit Dances</span>
                <span className="motif-sparkle">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            4. THE WEDDING — ROYAL ARCHITECTURE (Rich Imperial Maroon & Gold)
            ============================================================== */}
        <div
          ref={weddingCardRef}
          className="ceremony-chapter chapter-wedding rich-jewel-card"
          id="chapter-wedding"
        >
          {/* Subtle Arch Watermark in background: safely scaled so it never collides with text */}
          <div className="card-background-watermark arch-watermark" aria-hidden="true">
            <svg viewBox="0 0 300 160" preserveAspectRatio="none" className="arch-subtle-svg">
              <path
                d="M 15 160 L 15 80 C 15 30, 90 10, 150 10 C 210 10, 285 30, 285 80 L 285 160"
                stroke="#F5D77F"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              {/* Badge row - clean, inline without arch cutting across it */}
              <div className="ceremony-badge-line">
                <span className="ceremony-number crimson-badge">04</span>
                <span className="ceremony-theme-tag crimson-tag">Royal Architecture</span>
              </div>

              {/* Title group */}
              <div className="ceremony-title-group">
                <span className="ceremony-devanagari crimson-devanagari">{ceremonies.wedding.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.wedding.title}</h3>
              </div>

              {/* Schedule */}
              <div className="ceremony-schedule-block">
                <div className="schedule-entry">
                  <span className="schedule-icon">📅</span>
                  <span className="schedule-text">{ceremonies.wedding.date}</span>
                </div>
                <div className="schedule-entry">
                  <span className="schedule-icon">⏳</span>
                  <span className="schedule-text">{ceremonies.wedding.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="ceremony-description">{ceremonies.wedding.description}</p>

              {/* Diya icons inline with text - ZERO overlap! */}
              <div className="ceremony-motif-accent wedding-motif" aria-hidden="true">
                <span className="inline-diya">🪔</span>
                <span className="motif-text">Sacred Saat Phere &amp; Royal Mandap</span>
                <span className="inline-diya">🪔</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CeremoniesScene;
