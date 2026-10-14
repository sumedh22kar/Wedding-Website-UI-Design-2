import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './OrnamentalIcons';

/**
 * SECTION TWO: THE COUPLE
 * 
 * Features:
 * - Kicker: "TOGETHER, A NEW BEGINNING"
 * - IMAGE 1: Virat Kohli solo portrait in tall architectural arch with GROOM label
 * - IMAGE 2: Anushka Sharma solo portrait in matching arch with BRIDE label
 * - IMAGE 4: Second couple photograph (couple-garden.jpg) in a distinct editorial composition
 */
export function CoupleSection() {
  const { groom, bride, images } = weddingConfig;

  return (
    <section className="couple-section" aria-label="The Couple">
      <div className="invitation-container">
        <p className="couple-opening-line">Together, A New Beginning</p>

        {/* Solo Portraits Grid: Virat Kohli & Anushka Sharma */}
        <div className="couple-portraits-grid">
          {/* GROOM PORTRAIT ARCH (IMAGE 1 — VIRAT KOHLI SOLO PORTRAIT) */}
          <div className="portrait-column">
            <div className="portrait-arch-frame">
              <div className="portrait-arch-inner">
                <img
                  src={images.groomPortrait}
                  alt={images.groomPortraitAlt}
                  className="portrait-img"
                  style={{ objectPosition: images.groomPosition }}
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="portrait-name">{groom}</h3>
            <span className="portrait-role-label">Groom</span>
          </div>

          {/* BRIDE PORTRAIT ARCH (IMAGE 2 — ANUSHKA SHARMA SOLO PORTRAIT) */}
          <div className="portrait-column">
            <div className="portrait-arch-frame">
              <div className="portrait-arch-inner">
                <img
                  src={images.bridePortrait}
                  alt={images.bridePortraitAlt}
                  className="portrait-img"
                  style={{ objectPosition: images.bridePosition }}
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="portrait-name">{bride}</h3>
            <span className="portrait-role-label">Bride</span>
          </div>
        </div>

        {/* IMAGE 4 — SECOND COUPLE PHOTOGRAPH (Editorial Shared Showcase) */}
        <div className="shared-journey-editorial-wrap">
          <div className="editorial-frame">
            <div className="editorial-inner">
              <img
                src={images.sharedCouple}
                alt={images.sharedCoupleAlt}
                className="editorial-couple-img"
                style={{ objectPosition: images.sharedCouplePosition }}
                loading="lazy"
              />
            </div>
            <div className="editorial-caption-box">
              <GoldDivider width={140} />
              <p className="editorial-kicker">A Shared Chapter</p>
              <h4 className="editorial-names">Virat &amp; Anushka</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;
