import React, { useState, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';

/**
 * SCENE THREE — THE COUPLE TOGETHER (3D INTERACTIVE EDITORIAL SHOWCASE)
 * 
 * Features:
 * - Second emotional couple moment with Image 4 (couple-garden.jpg)
 * - Interactive 3D spatial tilt responding to cursor / touch movement
 * - Multi-layer forward depth with floating photo frame and gold filigrees
 * - Warm paper-cream background with fine champagne-gold framing
 * - Authentic, personal invitation message from the couple
 */
export function SharedCoupleSection() {
  const { coupleMessage, coupleSignoff, coupleSignoffNames, images } = weddingConfig;
  const boxRef = useRef(null);
  const [state, setState] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, isHovered: false });

  const handleMouseMove = (e) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    setState({
      rx: py * -10,
      ry: px * 10,
      gx: (x / rect.width) * 100,
      gy: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setState({ rx: 0, ry: 0, gx: 50, gy: 50, isHovered: false });
  };

  return (
    <section className="shared-couple-section" aria-label="A Personal Note from the Couple">
      <div className="invitation-container-narrow">
        <div
          ref={boxRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`editorial-showcase-box showcase-3d-box ${state.isHovered ? 'showcase-3d-active' : ''}`}
          style={{
            transform: `perspective(1200px) rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale3d(${
              state.isHovered ? 1.02 : 1
            }, ${state.isHovered ? 1.02 : 1}, 1)`,
            transition: state.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Dynamic Ambient Specular Reflection */}
          <div
            className="showcase-3d-glare"
            style={{
              background: `radial-gradient(circle at ${state.gx}% ${state.gy}%, rgba(255, 255, 255, 0.4) 0%, rgba(210, 170, 85, 0.14) 40%, transparent 70%)`,
              opacity: state.isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
            aria-hidden="true"
          />

          {/* Image 4 — Couple in Garden (Intimate Editorial Frame with Forward Lift) */}
          <div
            className="editorial-photo-frame"
            style={{
              transform: `translate3d(0, 0, ${state.isHovered ? '24px' : '0px'})`,
              transition: 'transform 0.3s ease',
            }}
          >
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

          {/* Warm Couple Invitation Note with 3D Depth */}
          <div
            className="editorial-note-block"
            style={{
              transform: `translate3d(0, 0, ${state.isHovered ? '32px' : '0px'})`,
              transition: 'transform 0.3s ease',
            }}
          >
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

