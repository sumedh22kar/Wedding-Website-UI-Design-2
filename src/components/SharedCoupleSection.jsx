import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';

/**
 * SCENE THREE — THE COUPLE TOGETHER
 * 
 * Features:
 * - Second emotional couple moment with Image 4 (couple-garden.jpg)
 * - Intimate, editorial composition distinct from the hero
 * - Warm paper-cream background with fine champagne-gold framing
 * - Authentic, personal invitation message from the couple:
 *     "With the love and blessings of our families, we would be delighted
 *      to have you with us as we celebrate the beginning of a beautiful new chapter."
 * - Signoff:
 *     WITH LOVE,
 *     VIRAT & ANUSHKA
 */
export function SharedCoupleSection() {
  const { coupleMessage, coupleSignoff, coupleSignoffNames, images } = weddingConfig;

  return (
    <section className="shared-couple-section" aria-label="A Personal Note from the Couple">
      <div className="invitation-container-narrow">
        <div className="editorial-showcase-box">
          {/* Image 4 — Couple in Garden (Intimate Editorial Frame) */}
          <div className="editorial-photo-frame">
            <div className="editorial-photo-inner">
              <img
                src={images.sharedCouple}
                alt={images.sharedCoupleAlt}
                className="editorial-photo-img"
                style={{ objectPosition: images.sharedPosition }}
                loading="lazy"
              />
              <div className="editorial-photo-vignette" aria-hidden="true" />
            </div>
          </div>

          {/* Warm Couple Invitation Note */}
          <div className="editorial-note-block">
            <GoldDivider width={120} className="editorial-divider" />
            <blockquote className="couple-personal-quote">
              &ldquo;{coupleMessage}&rdquo;
            </blockquote>
            <div className="couple-signoff-wrap">
              <span className="couple-signoff-prefix">{coupleSignoff}</span>
              <p className="couple-signoff-names">{coupleSignoffNames}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SharedCoupleSection;
