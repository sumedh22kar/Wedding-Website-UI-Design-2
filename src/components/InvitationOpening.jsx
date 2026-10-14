import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig, getCoupleInitials } from '../weddingConfig';

/**
 * SECTION: OPENING ENVELOPE ANIMATION
 * 
 * Signature interaction:
 * Physical wedding stationery recreated digitally using CSS 3D transforms.
 * Features:
 * - Refined paper texture
 * - Folded triangular flap with realistic 3D perspective
 * - Champagne-gold wax seal with couple's initials (V & A)
 * - Inside invitation card sliding upward
 * - Discreet TAP TO OPEN prompt
 */
export function InvitationOpening({ isOpen, onOpen }) {
  const [animStage, setAnimStage] = useState('closed'); // 'closed' | 'opening' | 'scaling' | 'done'
  const isOpeningRef = useRef(false);
  const initials = getCoupleInitials(weddingConfig.groom, weddingConfig.bride);

  // Lock scrolling when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle opening sequence
  const handleActivate = () => {
    if (isOpeningRef.current || !isOpen) return;
    isOpeningRef.current = true;

    // Check for prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setAnimStage('done');
      onOpen();
      return;
    }

    // Step 1: Seal fades and flap begins rotating
    setAnimStage('opening');

    // Step 2: Card settles, then begins scaling into view (~2.1s)
    const scaleTimer = setTimeout(() => {
      setAnimStage('scaling');
    }, 2100);

    // Step 3: Complete transition to main invitation (~3.1s)
    const completeTimer = setTimeout(() => {
      setAnimStage('done');
      onOpen();
    }, 3100);

    // Failsafe timer: ensure user is never trapped behind overlay
    const failSafeTimer = setTimeout(() => {
      if (isOpeningRef.current) {
        setAnimStage('done');
        onOpen();
      }
    }, 4500);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(completeTimer);
      clearTimeout(failSafeTimer);
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      handleActivate();
    }
  };

  if (!isOpen && animStage === 'done') {
    return null;
  }

  return (
    <div
      className={`envelope-overlay ${!isOpen || animStage === 'done' ? 'overlay-hidden' : ''}`}
      aria-modal="true"
      role="dialog"
      aria-label="Wedding Invitation Envelope"
      onClick={handleActivate}
    >
      <button
        type="button"
        className="envelope-button-wrap"
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        aria-label="Tap or press Enter to open wedding invitation"
        disabled={animStage !== 'closed'}
        tabIndex={0}
      >
        <div
          className={`envelope-3d-stage ${
            animStage === 'opening' || animStage === 'scaling' ? 'is-animating' : ''
          } ${animStage === 'scaling' ? 'is-scaling-to-view' : ''}`}
        >
          {/* Main Envelope Body */}
          <div className="envelope-box">
            {/* Top Flap with 3D rotateX */}
            <div className="envelope-flap" aria-hidden="true" />

            {/* Wax Seal placed over flap fold */}
            <div className="wax-seal" aria-hidden="true">
              <div className="wax-seal-inner">
                <span className="wax-seal-initials">{initials}</span>
              </div>
            </div>

            {/* Inside Invitation Card */}
            <div className="envelope-letter-card" aria-hidden="true">
              <div className="letter-arch-frame">
                <span className="letter-kicker">Wedding Invitation</span>
                <div className="letter-names">
                  <span>{weddingConfig.groomShort || weddingConfig.groom}</span>
                  <span className="letter-amp">&amp;</span>
                  <span>{weddingConfig.brideShort || weddingConfig.bride}</span>
                </div>
              </div>
            </div>

            {/* Front Pocket Folds (Left, Right, Bottom) */}
            <div className="envelope-pocket-front" aria-hidden="true">
              <div className="pocket-fold-left" />
              <div className="pocket-fold-right" />
              <div className="pocket-fold-bottom" />
            </div>
          </div>
        </div>

        {/* Discreet Tap to Open instruction */}
        <span className="tap-to-open-label" aria-hidden="true">
          Tap to Open
        </span>
      </button>
    </div>
  );
}

export default InvitationOpening;
