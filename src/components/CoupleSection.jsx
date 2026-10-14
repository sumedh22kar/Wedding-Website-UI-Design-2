import React, { useState } from 'react';
import { weddingConfig, isPlaceholder } from '../weddingConfig';

/**
 * SECTION TWO: THE COUPLE
 * 
 * Displays:
 * - Opening line: "TOGETHER, A NEW BEGINNING"
 * - Two balanced architectural arch portrait frames for Groom and Bride
 * - Groom and Bride names with GROOM and BRIDE labels
 * - Graceful fallback identifying the missing asset in code if placeholder or error
 */
export function CoupleSection() {
  const {
    groom,
    bride,
    groomPhoto,
    bridePhoto,
    groomPhotoPosition,
    bridePhotoPosition,
  } = weddingConfig;

  const [groomImgError, setGroomImgError] = useState(false);
  const [brideImgError, setBrideImgError] = useState(false);

  const isGroomPlaceholder = isPlaceholder(groomPhoto) || groomImgError;
  const isBridePlaceholder = isPlaceholder(bridePhoto) || brideImgError;

  return (
    <section className="couple-section" aria-label="The Couple">
      <div className="invitation-container">
        <p className="couple-opening-line">Together, A New Beginning</p>

        <div className="couple-portraits-grid">
          {/* GROOM PORTRAIT ARCH */}
          <div className="portrait-column">
            <div className="portrait-arch-frame">
              <div className="portrait-arch-inner">
                {isGroomPlaceholder ? (
                  <div className="portrait-placeholder-fallback">
                    <span className="placeholder-initial">
                      {!isPlaceholder(groom) && groom[0] ? groom[0].toUpperCase() : 'G'}
                    </span>
                    <p className="placeholder-asset-name">Asset: [groom photo]</p>
                    <p className="placeholder-hint">
                      Set <code>groomPhoto</code> in <code>src/weddingConfig.js</code>
                    </p>
                  </div>
                ) : (
                  <img
                    src={groomPhoto}
                    alt={`Portrait of ${groom}`}
                    className="portrait-img"
                    style={{ objectPosition: groomPhotoPosition || 'center 20%' }}
                    loading="lazy"
                    onError={() => setGroomImgError(true)}
                  />
                )}
              </div>
            </div>
            <h3 className="portrait-name">{groom}</h3>
            <span className="portrait-role-label">Groom</span>
          </div>

          {/* BRIDE PORTRAIT ARCH */}
          <div className="portrait-column">
            <div className="portrait-arch-frame">
              <div className="portrait-arch-inner">
                {isBridePlaceholder ? (
                  <div className="portrait-placeholder-fallback">
                    <span className="placeholder-initial">
                      {!isPlaceholder(bride) && bride[0] ? bride[0].toUpperCase() : 'B'}
                    </span>
                    <p className="placeholder-asset-name">Asset: [bride photo]</p>
                    <p className="placeholder-hint">
                      Set <code>bridePhoto</code> in <code>src/weddingConfig.js</code>
                    </p>
                  </div>
                ) : (
                  <img
                    src={bridePhoto}
                    alt={`Portrait of ${bride}`}
                    className="portrait-img"
                    style={{ objectPosition: bridePhotoPosition || 'center 18%' }}
                    loading="lazy"
                    onError={() => setBrideImgError(true)}
                  />
                )}
              </div>
            </div>
            <h3 className="portrait-name">{bride}</h3>
            <span className="portrait-role-label">Bride</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;
