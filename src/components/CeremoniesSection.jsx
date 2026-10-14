import React, { useState } from 'react';
import { weddingConfig } from '../weddingConfig';
import {
  MarigoldFallingPetals,
  MarigoldGarlandCluster,
  GoldDivider,
} from './FloralElements';
import {
  MehendiDrawingAnimation,
  SangeetDancingCouple,
  WeddingRoyalCouple,
} from './CeremonyAnimations';

/**
 * SCENE FOUR — THE INDIAN WEDDING CELEBRATIONS (3D INTERACTIVE CEREMONIES)
 * 
 * Four immersive ceremony scenes with interactive 3D touch points:
 * 1. Mehendi  (Live henna drawing animation + interactive henna bloom)
 * 2. Haldi    (Drifting marigold petals + garland clusters)
 * 3. Sangeet  (Animated Garba/Dandiya dancers + interactive Dandiya beat)
 * 4. Wedding  (Royal bride & groom under mandap + interactive rose petal blessings)
 */
export function CeremoniesSection() {
  const { mehendi, haldi, sangeet, wedding } = weddingConfig.ceremonies;
  const [hennaBloomed, setHennaBloomed] = useState(false);
  const [dandiyaCount, setDandiyaCount] = useState(0);
  const [weddingBlessing, setWeddingBlessing] = useState(false);

  const triggerHennaBloom = () => {
    setHennaBloomed(true);
    setTimeout(() => setHennaBloomed(false), 3500);
  };

  const triggerDandiyaBeat = () => {
    setDandiyaCount((prev) => prev + 1);
  };

  const triggerWeddingBlessing = () => {
    setWeddingBlessing(true);
    setTimeout(() => setWeddingBlessing(false), 4000);
  };

  return (
    <div className="ceremonies-film-sequence" aria-label="Wedding Celebrations">
      {/* ============================================================
          1. MEHENDI — LIVE HENNA DRAWING ANIMATION
          ============================================================ */}
      <section
        id="mehendi"
        className="ceremony-film-scene scene-mehendi"
        aria-label="Mehendi Celebration"
      >
        {/* Live Henna Drawing Canvas with Moving Artist Cone */}
        <div
          className={`ceremony-animation-showcase mehendi-showcase ${
            hennaBloomed ? 'henna-bloomed-glow' : ''
          }`}
          onClick={triggerHennaBloom}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && triggerHennaBloom()}
          title="Click to bloom henna gold sparkles"
        >
          <MehendiDrawingAnimation />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline">Botanical &amp; Henna Traditions</span>
          <span className="ceremony-hindi-title" lang="hi">
            {mehendi.hindiTitle}
          </span>
          <h2 className="ceremony-english-title">{mehendi.title}</h2>
          <GoldDivider width={130} />
          
          <button
            type="button"
            className="ceremony-interactive-btn mehendi-btn"
            onClick={triggerHennaBloom}
            aria-label="Bloom golden henna ornaments"
          >
            <span>{hennaBloomed ? '✦ Henna Blooming ✦' : 'Bloom Henna Motifs ✦'}</span>
          </button>

          <div className="ceremony-time-meta">
            <p className="ceremony-date">{mehendi.date}</p>
            <p className="ceremony-time">{mehendi.time}</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. HALDI — MARIGOLD FLOWER ANIMATION
          ============================================================ */}
      <section
        id="haldi"
        className="ceremony-film-scene scene-haldi"
        aria-label="Haldi Celebration"
      >
        {/* Layered Falling Marigold Petals */}
        <MarigoldFallingPetals count={18} />

        {/* Outer Corner Marigold Garland Clusters */}
        <div className="haldi-garland-top-left" aria-hidden="true">
          <MarigoldGarlandCluster />
        </div>
        <div className="haldi-garland-top-right" aria-hidden="true">
          <MarigoldGarlandCluster />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline haldi-contrast-tag">Sunshine &amp; Turmeric Blessings</span>
          <span className="ceremony-hindi-title haldi-contrast-hindi" lang="hi">
            {haldi.hindiTitle}
          </span>
          <h2 className="ceremony-english-title haldi-contrast-title">{haldi.title}</h2>
          <GoldDivider width={130} className="haldi-divider" />
          <div className="ceremony-time-meta">
            <p className="ceremony-date haldi-contrast-date">{haldi.date}</p>
            <p className="ceremony-time haldi-contrast-time">{haldi.time}</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. SANGEET — ANIMATED INDIAN DANCERS
          ============================================================ */}
      <section
        id="sangeet"
        className="ceremony-film-scene scene-sangeet"
        aria-label="Sangeet Celebration"
      >
        {/* Animated Dandiya / Garba Dancing Couple */}
        <div
          className="ceremony-animation-showcase sangeet-showcase"
          onClick={triggerDandiyaBeat}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && triggerDandiyaBeat()}
          title="Click to strike the Dandiya beat"
        >
          <SangeetDancingCouple />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline">Music, Rhythm &amp; Festive Spirits</span>
          <span className="ceremony-hindi-title" lang="hi">
            {sangeet.hindiTitle}
          </span>
          <h2 className="ceremony-english-title">{sangeet.title}</h2>
          <GoldDivider width={130} />

          <button
            type="button"
            className="ceremony-interactive-btn sangeet-btn"
            onClick={triggerDandiyaBeat}
            aria-label="Strike festive Dandiya rhythm"
          >
            <span>Strike Dandiya Rhythm ♫ {dandiyaCount > 0 ? `(${dandiyaCount})` : ''}</span>
          </button>

          <div className="ceremony-time-meta">
            <p className="ceremony-date">{sangeet.date}</p>
            <p className="ceremony-time">{sangeet.time}</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WEDDING — ANIMATED ROYAL BRIDE & GROOM
          ============================================================ */}
      <section
        id="wedding"
        className="ceremony-film-scene scene-wedding"
        aria-label="The Wedding Ceremony"
      >
        {/* Extra rose blessing petals when triggered */}
        {weddingBlessing && (
          <div className="wedding-extra-blessings" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="blessing-extra-rose"
                style={{
                  left: `${(i * 6.2 + 3) % 94}%`,
                  animationDelay: `${(i * 0.12) % 1.2}s`,
                  animationDuration: `${3 + (i % 3) * 0.6}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Animated Royal Indian Bride & Groom under Mandap */}
        <div
          className="ceremony-animation-showcase wedding-showcase"
          onClick={triggerWeddingBlessing}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && triggerWeddingBlessing()}
          title="Click to shower rose blessings"
        >
          <WeddingRoyalCouple />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline">The Sacred Union</span>
          <span className="ceremony-hindi-title wedding-accent-hindi" lang="hi">
            {wedding.hindiTitle}
          </span>
          <h2 className="ceremony-english-title wedding-accent-title">{wedding.title}</h2>
          <GoldDivider width={150} />

          <button
            type="button"
            className="ceremony-interactive-btn wedding-btn"
            onClick={triggerWeddingBlessing}
            aria-label="Shower royal rose blessings"
          >
            <span>{weddingBlessing ? '❀ Showering Blessings ❀' : 'Shower Rose Blessings ❀'}</span>
          </button>

          <div className="ceremony-time-meta">
            <p className="ceremony-date">{wedding.date}</p>
            <p className="ceremony-time">{wedding.time}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CeremoniesSection;

