import React, { useState, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * SCENE TWO — INTRODUCING THE GROOM AND BRIDE (3D INTERACTIVE ARCHES)
 * 
 * Features:
 * - Interactive 3D spatial tilt tracking cursor/touch position
 * - Dynamic specular champagne-gold light sheen following pointer
 * - Two tall, refined architectural arch frames with forward depth layers
 * - Image 2: Virat Kohli solo portrait + VIRAT KOHLI + THE GROOM
 * - Image 3: Anushka Sharma solo portrait + ANUSHKA SHARMA + THE BRIDE
 */
function ArchPortrait3D({ src, alt, objectPosition, name, role, isGroom }) {
  const cardRef = useRef(null);
  const [state, setState] = useState({
    rx: 0,
    ry: 0,
    gx: 50,
    gy: 50,
    isHovered: false,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    setState({
      rx: py * -14,
      ry: px * 14,
      gx: (x / rect.width) * 100,
      gy: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setState({ rx: 0, ry: 0, gx: 50, gy: 50, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`portrait-scene-item interactive-3d-card ${state.isHovered ? 'card-3d-active' : ''}`}
      style={{
        perspective: '1200px',
      }}
    >
      <div
        className="scene-arch-frame arch-3d-container"
        style={{
          transform: `rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale3d(${
            state.isHovered ? 1.03 : 1
          }, ${state.isHovered ? 1.03 : 1}, 1)`,
          transition: state.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layered Architectural Gold Rim */}
        <div className="arch-3d-gold-rim" aria-hidden="true" />

        <div className="scene-arch-inner">
          <img
            src={src}
            alt={alt}
            className="scene-portrait-img"
            style={{
              objectPosition,
              transform: `scale(${state.isHovered ? 1.06 : 1}) translate3d(${state.ry * -0.3}px, ${
                state.rx * 0.3
              }px, 0)`,
              transition: state.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
            }}
            loading="lazy"
          />

          {/* Dynamic Specular Sheen Layer that follows cursor */}
          <div
            className="arch-specular-glare"
            style={{
              background: `radial-gradient(circle at ${state.gx}% ${state.gy}%, rgba(255, 255, 255, 0.38) 0%, rgba(210, 170, 85, 0.16) 40%, transparent 70%)`,
              opacity: state.isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
            aria-hidden="true"
          />

          {/* Arch Paper Frame Border Vignette */}
          <div className="arch-frame-vignette" aria-hidden="true" />
        </div>
      </div>

      <div
        className="scene-portrait-info"
        style={{
          transform: `translate3d(0, 0, ${state.isHovered ? '25px' : '0px'})`,
          transition: 'transform 0.3s ease',
        }}
      >
        <span className="portrait-cultural-badge" aria-hidden="true">
          {isGroom ? 'वर (Groom)' : 'वधू (Bride)'}
        </span>
        <h2 className="scene-portrait-name">{name}</h2>
        <span className="scene-portrait-role">{role}</span>
      </div>
    </div>
  );
}

export function PortraitsSection() {
  const { groom, groomRole, bride, brideRole, images } = weddingConfig;

  return (
    <section className="portraits-section" aria-label="Meet the Groom and Bride">
      <div className="invitation-container">
        <div className="portraits-editorial-grid">
          {/* VIRAT KOHLI — THE GROOM (Image 2) */}
          <ArchPortrait3D
            src={images.groomPortrait}
            alt={images.groomPortraitAlt}
            objectPosition={images.groomPosition}
            name={groom}
            role={groomRole}
            isGroom={true}
          />

          {/* ANUSHKA SHARMA — THE BRIDE (Image 3) */}
          <ArchPortrait3D
            src={images.bridePortrait}
            alt={images.bridePortraitAlt}
            objectPosition={images.bridePosition}
            name={bride}
            role={brideRole}
            isGroom={false}
          />
        </div>
      </div>
    </section>
  );
}

export default PortraitsSection;

