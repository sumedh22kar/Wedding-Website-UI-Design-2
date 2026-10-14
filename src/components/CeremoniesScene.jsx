import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE FIVE — THE INDIAN WEDDING CELEBRATIONS
 * 
 * Four distinct, choreographed chapters with dark, vibrant royal jewel tones:
 * 1. MEHENDI (Botanical World: Deep Royal Emerald, Rotating Henna Mandala, Foliage scrub)
 * 2. HALDI (Marigold World: Deep Saffron Terracotta, Cascading Marigold Garlands, Floating Genda Phool)
 * 3. SANGEET (Rhythm & Movement: Midnight Plum & Electric Gold, Concentric Soundwave Rings, Ghungroo Motifs)
 * 4. THE WEDDING (Royal Architecture: Imperial Crimson & Velvet Maroon, Grand Mandap Arch Pillars, Flickering Diyas)
 * 
 * Aggressively animated with GSAP + ScrollTrigger, tuned for high visual impact on both desktop and mobile.
 */
export function CeremoniesScene() {
  const { ceremonies } = weddingConfig;
  const containerRef = useRef(null);

  // Card Refs
  const mehendiCardRef = useRef(null);
  const mehendiMandalaRef = useRef(null);
  const mehendiLeavesRef = useRef(null);

  const haldiCardRef = useRef(null);
  const haldiGarlandsRef = useRef(null);
  const haldiSunburstRef = useRef(null);

  const sangeetCardRef = useRef(null);
  const sangeetRingsRef = useRef(null);
  const sangeetBeatsRef = useRef(null);

  const weddingCardRef = useRef(null);
  const weddingArchRef = useRef(null);
  const weddingDiyasRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. MEHENDI GSAP SCROLLTRIGGER (Botanical World)
      // -------------------------------------------------------------
      if (mehendiCardRef.current) {
        // Scrubbed card elevation and 3D entrance
        gsap.fromTo(
          mehendiCardRef.current,
          { y: 80, opacity: 0.85, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: mehendiCardRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );

        // 360-degree rotating henna mandala on scroll
        if (mehendiMandalaRef.current) {
          gsap.to(mehendiMandalaRef.current, {
            rotation: 360,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: mehendiCardRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }

        // Botanical foliage sliding in from sides
        if (mehendiLeavesRef.current) {
          gsap.fromTo(
            mehendiLeavesRef.current.children,
            { x: (i) => (i % 2 === 0 ? -60 : 60), opacity: 0 },
            {
              x: 0,
              opacity: 0.9,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: mehendiCardRef.current,
                start: 'top 80%',
                end: 'top 40%',
                scrub: 1,
              },
            }
          );
        }
      }

      // -------------------------------------------------------------
      // 2. HALDI GSAP SCROLLTRIGGER (Marigold World)
      // -------------------------------------------------------------
      if (haldiCardRef.current) {
        gsap.fromTo(
          haldiCardRef.current,
          { y: 80, opacity: 0.85, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: haldiCardRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );

        // Cascading Marigold garlands falling smoothly on scroll
        if (haldiGarlandsRef.current) {
          gsap.fromTo(
            haldiGarlandsRef.current.children,
            { y: -120, rotation: (i) => (i % 2 === 0 ? -12 : 12) },
            {
              y: 0,
              rotation: 0,
              ease: 'power2.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: haldiCardRef.current,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 1.2,
              },
            }
          );
        }

        // Sunburst rays rotation behind the card
        if (haldiSunburstRef.current) {
          gsap.to(haldiSunburstRef.current, {
            rotation: 180,
            scale: 1.25,
            ease: 'none',
            scrollTrigger: {
              trigger: haldiCardRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
          });
        }
      }

      // -------------------------------------------------------------
      // 3. SANGEET GSAP SCROLLTRIGGER (Rhythm & Movement)
      // -------------------------------------------------------------
      if (sangeetCardRef.current) {
        gsap.fromTo(
          sangeetCardRef.current,
          { y: 80, opacity: 0.85, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sangeetCardRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );

        // Expanding concentric soundwave rings on scroll
        if (sangeetRingsRef.current) {
          gsap.fromTo(
            sangeetRingsRef.current.children,
            { scale: 0.4, opacity: 0.9 },
            {
              scale: 1.6,
              opacity: 0.15,
              stagger: 0.15,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: sangeetCardRef.current,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: 1.5,
              },
            }
          );
        }

        // Pulsing rhythmic dance energy bars
        if (sangeetBeatsRef.current) {
          gsap.to(sangeetBeatsRef.current.children, {
            scaleY: 1.8,
            stagger: {
              each: 0.1,
              repeat: -1,
              yoyo: true,
            },
            duration: 0.6,
            ease: 'sine.inOut',
          });
        }
      }

      // -------------------------------------------------------------
      // 4. THE WEDDING GSAP SCROLLTRIGGER (Royal Architecture)
      // -------------------------------------------------------------
      if (weddingCardRef.current) {
        gsap.fromTo(
          weddingCardRef.current,
          { y: 80, opacity: 0.85, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: weddingCardRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );

        // Royal mandap arch reveals from top and bottom
        if (weddingArchRef.current) {
          gsap.fromTo(
            weddingArchRef.current,
            { scaleY: 0.7, opacity: 0.4 },
            {
              scaleY: 1,
              opacity: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: weddingCardRef.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1.2,
              },
            }
          );
        }

        // Flickering golden diya flames
        if (weddingDiyasRef.current) {
          gsap.to(weddingDiyasRef.current.children, {
            scale: 1.25,
            opacity: 0.9,
            duration: 0.7,
            stagger: 0.15,
            repeat: -1,
            yoyo: true,
            ease: 'rough({template: power1.none, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})',
          });
        }
      }
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
            1. MEHENDI — BOTANICAL WORLD (Deep Royal Emerald & Gold)
            ============================================================== */}
        <div
          ref={mehendiCardRef}
          className="ceremony-chapter chapter-mehendi dark-jewel-card"
          id="chapter-mehendi"
          style={{
            background: ceremonies.mehendi.gradient,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.7), 0 0 50px ${ceremonies.mehendi.glow}`,
          }}
        >
          {/* Animated 360 Henna Mandala SVG in background */}
          <div ref={mehendiMandalaRef} className="mehendi-mandala-backdrop" aria-hidden="true">
            <svg viewBox="0 0 300 300" className="mandala-svg">
              <circle cx="150" cy="150" r="140" stroke="#10B981" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" fill="none" />
              <circle cx="150" cy="150" r="100" stroke="#F5D77F" strokeWidth="1.5" opacity="0.4" fill="none" />
              <circle cx="150" cy="150" r="60" stroke="#10B981" strokeWidth="1" opacity="0.3" fill="none" />
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={i}
                  d="M 150 150 Q 150 50 170 30 Q 150 50 130 30 Z"
                  fill="#10B981"
                  opacity="0.25"
                  transform={`rotate(${i * 30} 150 150)`}
                />
              ))}
              <circle cx="150" cy="150" r="12" fill="#F5D77F" opacity="0.6" />
            </svg>
          </div>

          {/* Botanical leaves framing */}
          <div ref={mehendiLeavesRef} className="mehendi-foliage-frame" aria-hidden="true">
            <span className="foliage-branch branch-left">🌿</span>
            <span className="foliage-branch branch-right">🌿</span>
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number emerald-badge">01</span>
                <span className="ceremony-theme-tag emerald-tag">Botanical World</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari emerald-devanagari">{ceremonies.mehendi.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.mehendi.title}</h3>
              </div>

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

              <p className="ceremony-description">{ceremonies.mehendi.description}</p>

              <div className="ceremony-motif-accent mehendi-motif" aria-hidden="true">
                <span className="motif-gold-gem">✦</span>
                <span className="motif-text">Mogra &amp; Henna Blossoms</span>
                <span className="motif-gold-gem">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            2. HALDI — MARIGOLD WORLD (Deep Saffron & Golden Amber)
            ============================================================== */}
        <div
          ref={haldiCardRef}
          className="ceremony-chapter chapter-haldi dark-jewel-card"
          id="chapter-haldi"
          style={{
            background: ceremonies.haldi.gradient,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.7), 0 0 50px ${ceremonies.haldi.glow}`,
          }}
        >
          {/* Animated Sunburst Backdrop */}
          <div ref={haldiSunburstRef} className="haldi-sunburst-backdrop" aria-hidden="true">
            <svg viewBox="0 0 300 300" className="sunburst-svg">
              {Array.from({ length: 16 }).map((_, i) => (
                <line
                  key={i}
                  x1="150"
                  y1="150"
                  x2={150 + 140 * Math.cos((i * Math.PI) / 8)}
                  y2={150 + 140 * Math.sin((i * Math.PI) / 8)}
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  opacity="0.3"
                />
              ))}
              <circle cx="150" cy="150" r="50" fill="#F59E0B" opacity="0.15" />
            </svg>
          </div>

          {/* Cascading Marigold Garlands descending on scroll */}
          <div ref={haldiGarlandsRef} className="haldi-marigold-curtain" aria-hidden="true">
            <div className="garland-cascade garland-left">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="marigold-flower-node flower-gold">🌼</span>
              ))}
            </div>
            <div className="garland-cascade garland-right">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="marigold-flower-node flower-orange">🏵️</span>
              ))}
            </div>
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number amber-badge">02</span>
                <span className="ceremony-theme-tag amber-tag">Marigold World</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari amber-devanagari">{ceremonies.haldi.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.haldi.title}</h3>
              </div>

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

              <p className="ceremony-description">{ceremonies.haldi.description}</p>

              <div className="ceremony-motif-accent haldi-motif" aria-hidden="true">
                <span className="motif-gold-gem">✦</span>
                <span className="motif-text">Genda Phool &amp; Turmeric Blessings</span>
                <span className="motif-gold-gem">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            3. SANGEET — RHYTHM AND MOVEMENT (Midnight Plum & Violet Gold)
            ============================================================== */}
        <div
          ref={sangeetCardRef}
          className="ceremony-chapter chapter-sangeet dark-jewel-card"
          id="chapter-sangeet"
          style={{
            background: ceremonies.sangeet.gradient,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.7), 0 0 50px ${ceremonies.sangeet.glow}`,
          }}
        >
          {/* Animated Concentric Soundwave Rings */}
          <div ref={sangeetRingsRef} className="sangeet-rhythm-backdrop" aria-hidden="true">
            <div className="rhythm-ring ring-1" />
            <div className="rhythm-ring ring-2" />
            <div className="rhythm-ring ring-3" />
          </div>

          {/* Bouncing Ghungroo Soundwave Bars */}
          <div ref={sangeetBeatsRef} className="sangeet-beats-wave" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="soundwave-bar" />
            ))}
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number plum-badge">03</span>
                <span className="ceremony-theme-tag plum-tag">Rhythm &amp; Movement</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari plum-devanagari">{ceremonies.sangeet.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.sangeet.title}</h3>
              </div>

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

              <p className="ceremony-description">{ceremonies.sangeet.description}</p>

              <div className="ceremony-motif-accent sangeet-motif" aria-hidden="true">
                <span className="motif-gold-gem">✦</span>
                <span className="motif-text">Musical Performances &amp; Starlit Dances</span>
                <span className="motif-gold-gem">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            4. THE WEDDING — ROYAL ARCHITECTURE (Imperial Crimson & 24K Gold)
            ============================================================== */}
        <div
          ref={weddingCardRef}
          className="ceremony-chapter chapter-wedding dark-jewel-card"
          id="chapter-wedding"
          style={{
            background: ceremonies.wedding.gradient,
            boxShadow: `0 25px 70px rgba(0, 0, 0, 0.8), 0 0 60px ${ceremonies.wedding.glow}`,
          }}
        >
          {/* Animated Royal Mandap Arch SVG */}
          <div ref={weddingArchRef} className="wedding-royal-mandap-arch" aria-hidden="true">
            <svg viewBox="0 0 500 240" preserveAspectRatio="none" className="mandap-arch-svg">
              <defs>
                <linearGradient id="mandapGoldGleam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D2AA55" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FFF4D0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D2AA55" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M 20 240 L 20 120 C 20 50, 140 20, 250 15 C 360 20, 480 50, 480 120 L 480 240"
                stroke="url(#mandapGoldGleam)"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="250" cy="15" r="5" fill="#F5D77F" />
              <path
                d="M 40 130 Q 145 160 250 135 Q 355 160 460 130"
                stroke="#F43F5E"
                strokeWidth="2"
                strokeDasharray="4 6"
                fill="none"
              />
            </svg>
          </div>

          {/* Flickering Sacred Diyas */}
          <div ref={weddingDiyasRef} className="wedding-diyas-row" aria-hidden="true">
            <span className="flicker-diya diya-left">🪔</span>
            <span className="flicker-diya diya-right">🪔</span>
          </div>

          <div className="ceremony-inner-world">
            <div className="ceremony-content-card wedding-royal-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number crimson-badge">04</span>
                <span className="ceremony-theme-tag crimson-tag">Royal Architecture</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari crimson-devanagari">{ceremonies.wedding.hindiTitle}</span>
                <h3 className="ceremony-primary-title">{ceremonies.wedding.title}</h3>
              </div>

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

              <p className="ceremony-description">{ceremonies.wedding.description}</p>

              <div className="ceremony-motif-accent wedding-motif" aria-hidden="true">
                <span className="motif-gold-gem">✦</span>
                <span className="motif-text">Sacred Saat Phere &amp; Royal Mandap</span>
                <span className="motif-gold-gem">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CeremoniesScene;
