import React, { useRef } from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * SCENE FIVE — THE INDIAN WEDDING CELEBRATIONS
 * 
 * Four distinct, choreographed chapters:
 * 1. MEHENDI (Botanical World: Botanical Green, Sage, Henna Linework, Delicate Leaves)
 * 2. HALDI (Marigold World: Saffron, Genda Phool Garlands, Golden Petals, Terracotta)
 * 3. SANGEET (Rhythm & Movement: Deep Plum, Concentric Gold Circles, Ghungroo Motifs)
 * 4. THE WEDDING (Royal Architecture: Deep Maroon, Grand Palace Mandap Arch, Torans)
 */
export function CeremoniesScene() {
  const { ceremonies } = weddingConfig;
  const containerRef = useRef(null);

  return (
    <section id="ceremonies" ref={containerRef} className="ceremonies-continuous-scene" aria-label="Wedding Ceremonies">
      {/* Chapter Overview Header */}
      <div className="ceremonies-overview-header">
        <span className="overview-kicker">Rituals &amp; Festivities</span>
        <h2 className="overview-title">The Four Ceremonies</h2>
        <div className="overview-gold-accent" aria-hidden="true" />
      </div>

      <div className="ceremonies-chapters-list">
        {/* ==============================================================
            1. MEHENDI — BOTANICAL WORLD
            ============================================================== */}
        <div className="ceremony-chapter chapter-mehendi" id="chapter-mehendi">
          <div className="ceremony-inner-world">
            <div className="mehendi-botanical-canopy" aria-hidden="true">
              <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="botanical-canopy-svg">
                <path
                  d="M 10 10 Q 80 80 180 30 T 360 40"
                  stroke="#355C45"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
                <path d="M 60 40 C 45 25, 75 15, 60 40 Z" fill="#355C45" opacity="0.6" />
                <path d="M 140 45 C 130 20, 160 25, 140 45 Z" fill="#355C45" opacity="0.6" />
                <path d="M 240 35 C 225 15, 255 10, 240 35 Z" fill="#355C45" opacity="0.6" />
                <path d="M 320 40 C 310 20, 340 18, 320 40 Z" fill="#355C45" opacity="0.6" />
              </svg>
            </div>

            <div className="ceremony-content-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number">01</span>
                <span className="ceremony-theme-tag">Botanical World</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari">{ceremonies.mehendi.hindiTitle}</span>
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
                <span className="botanical-leaf-glyph">🌿</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            2. HALDI — MARIGOLD WORLD
            ============================================================== */}
        <div className="ceremony-chapter chapter-haldi" id="chapter-haldi">
          <div className="ceremony-inner-world">
            <div className="haldi-marigold-curtain" aria-hidden="true">
              <div className="garland-cascade garland-left">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="marigold-flower-node flower-gold" />
                ))}
              </div>
              <div className="garland-cascade garland-right">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="marigold-flower-node flower-orange" />
                ))}
              </div>
            </div>

            <div className="ceremony-content-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number">02</span>
                <span className="ceremony-theme-tag">Marigold World</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari">{ceremonies.haldi.hindiTitle}</span>
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
                <span className="marigold-glyph">🌼</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            3. SANGEET — RHYTHM AND MOVEMENT
            ============================================================== */}
        <div className="ceremony-chapter chapter-sangeet" id="chapter-sangeet">
          <div className="ceremony-inner-world">
            <div className="sangeet-rhythm-backdrop" aria-hidden="true">
              <div className="rhythm-ring ring-outer" />
              <div className="rhythm-ring ring-middle" />
              <div className="rhythm-ring ring-inner" />
            </div>

            <div className="ceremony-content-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number">03</span>
                <span className="ceremony-theme-tag">Rhythm &amp; Movement</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari">{ceremonies.sangeet.hindiTitle}</span>
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
                <span className="ghungroo-glyph">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            4. THE WEDDING — ROYAL ARCHITECTURE
            ============================================================== */}
        <div className="ceremony-chapter chapter-wedding" id="chapter-wedding">
          <div className="ceremony-inner-world">
            <div className="wedding-royal-mandap-arch" aria-hidden="true">
              <svg viewBox="0 0 500 240" preserveAspectRatio="none" className="mandap-arch-svg">
                <defs>
                  <linearGradient id="mandapGold" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D2AA55" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#FFF4D0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#D2AA55" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 240 L 20 120 C 20 50, 140 20, 250 15 C 360 20, 480 50, 480 120 L 480 240"
                  stroke="url(#mandapGold)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle cx="250" cy="15" r="5" fill="#D2AA55" />
                <path
                  d="M 40 130 Q 145 160 250 135 Q 355 160 460 130"
                  stroke="#8E2036"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
              </svg>
            </div>

            <div className="ceremony-content-card wedding-royal-card">
              <div className="ceremony-badge-line">
                <span className="ceremony-number">04</span>
                <span className="ceremony-theme-tag">Royal Architecture</span>
              </div>

              <div className="ceremony-title-group">
                <span className="ceremony-devanagari">{ceremonies.wedding.hindiTitle}</span>
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
                <span className="mandap-gem">🏛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CeremoniesScene;
