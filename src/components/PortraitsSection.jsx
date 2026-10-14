import React from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * SCENE TWO — INTRODUCING THE GROOM AND BRIDE
 * 
 * Features:
 * - Warm ivory background with subtle paper grain and generous whitespace
 * - Two tall, refined architectural arch frames of equal visual importance
 * - Image 2: Virat Kohli solo portrait + VIRAT KOHLI + THE GROOM
 * - Image 3: Anushka Sharma solo portrait + ANUSHKA SHARMA + THE BRIDE
 * - Editorial two-column desktop layout; comfortable vertical stack on mobile
 */
export function PortraitsSection() {
  const { groom, groomRole, bride, brideRole, images } = weddingConfig;

  return (
    <section className="portraits-section" aria-label="Meet the Groom and Bride">
      <div className="invitation-container">
        <div className="portraits-editorial-grid">
          {/* VIRAT KOHLI — THE GROOM (Image 2) */}
          <div className="portrait-scene-item">
            <div className="scene-arch-frame">
              <div className="scene-arch-inner">
                <img
                  src={images.groomPortrait}
                  alt={images.groomPortraitAlt}
                  className="scene-portrait-img"
                  style={{ objectPosition: images.groomPosition }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="scene-portrait-info">
              <h2 className="scene-portrait-name">{groom}</h2>
              <span className="scene-portrait-role">{groomRole}</span>
            </div>
          </div>

          {/* ANUSHKA SHARMA — THE BRIDE (Image 3) */}
          <div className="portrait-scene-item">
            <div className="scene-arch-frame">
              <div className="scene-arch-inner">
                <img
                  src={images.bridePortrait}
                  alt={images.bridePortraitAlt}
                  className="scene-portrait-img"
                  style={{ objectPosition: images.bridePosition }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="scene-portrait-info">
              <h2 className="scene-portrait-name">{bride}</h2>
              <span className="scene-portrait-role">{brideRole}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortraitsSection;
