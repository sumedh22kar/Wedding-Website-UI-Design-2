import React from 'react';
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
 * SCENE FOUR — THE INDIAN WEDDING CELEBRATIONS
 * 
 * Four immersive ceremony scenes in exact order:
 * 1. Mehendi  (Deep green #173F35, live henna drawing animation with moving artist cone)
 * 2. Haldi    (Turmeric yellow #E5B92E, drifting marigold petals, garland clusters)
 * 3. Sangeet  (Deep plum #35203F, animated Indian Garba/Dandiya dancing couple & musical rhythm)
 * 4. Wedding  (Deep crimson #8E2036, animated royal bride & groom under mandap with sacred fire)
 */
export function CeremoniesSection() {
  const { mehendi, haldi, sangeet, wedding } = weddingConfig.ceremonies;

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
        <div className="ceremony-animation-showcase mehendi-showcase" aria-hidden="true">
          <MehendiDrawingAnimation />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline">Botanical &amp; Henna Traditions</span>
          <span className="ceremony-hindi-title" lang="hi">
            {mehendi.hindiTitle}
          </span>
          <h2 className="ceremony-english-title">{mehendi.title}</h2>
          <GoldDivider width={130} />
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
        <MarigoldFallingPetals count={16} />

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
        <div className="ceremony-animation-showcase sangeet-showcase" aria-hidden="true">
          <SangeetDancingCouple />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline">Music, Rhythm &amp; Festive Spirits</span>
          <span className="ceremony-hindi-title" lang="hi">
            {sangeet.hindiTitle}
          </span>
          <h2 className="ceremony-english-title">{sangeet.title}</h2>
          <GoldDivider width={130} />
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
        {/* Animated Royal Indian Bride & Groom under Mandap */}
        <div className="ceremony-animation-showcase wedding-showcase" aria-hidden="true">
          <WeddingRoyalCouple />
        </div>

        <div className="ceremony-scene-content">
          <span className="ceremony-tagline">The Sacred Union</span>
          <span className="ceremony-hindi-title wedding-accent-hindi" lang="hi">
            {wedding.hindiTitle}
          </span>
          <h2 className="ceremony-english-title wedding-accent-title">{wedding.title}</h2>
          <GoldDivider width={150} />
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
