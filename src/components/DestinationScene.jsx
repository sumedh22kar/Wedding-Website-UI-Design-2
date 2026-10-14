import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE SIX — THE JAIPUR DESTINATION
 * 
 * Features:
 * - Heritage architecture photograph: Jal Mahal at sunset (jal-mahal-venue.jpg)
 * - Dark royal twilight card with glowing 24K gold border & compass
 * - Aggressive GSAP ScrollTrigger:
 *   - Scrubbed photo zoom and aperture reveal
 *   - Compass emblem rotation
 *   - Card 3D elevation
 * - Verified coordinates and live Google Maps navigation
 */
export function DestinationScene() {
  const { venue, images } = weddingConfig;
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const cardRef = useRef(null);
  const compassRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Jal Mahal photo zoom & parallax
      gsap.fromTo(
        photoRef.current,
        { scale: 1.18, y: '-5%' },
        {
          scale: 1.0,
          y: '5%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // Rotating compass emblem on scroll
      if (compassRef.current) {
        gsap.to(compassRef.current, {
          rotation: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        });
      }

      // Card elevation
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0.8 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="destination" ref={sectionRef} className="destination-jaipur-scene" aria-label="Destination Venue">
      {/* Cinematic Venue Photograph Frame */}
      <div className="destination-photo-portal">
        <div className="portal-image-clip">
          <img
            ref={photoRef}
            src={images.venueSunset}
            alt={images.venueSunsetAlt}
            className="destination-venue-img"
            style={{ objectPosition: images.venuePosition }}
            loading="lazy"
          />
          <div className="portal-twilight-gradient" aria-hidden="true" />
        </div>

        {/* Floating Geographical Coordinates Tag */}
        <div className="destination-coords-tag" aria-hidden="true">
          <span className="coords-compass-icon">🧭</span>
          <span className="coords-text">{venue.coordinates}</span>
        </div>
      </div>

      {/* Foreground Editorial Destination Card in Rich Dark Velvet */}
      <div className="destination-content-wrap">
        <div ref={cardRef} className="destination-editorial-card dark-destination-theme">
          {/* Rotating Brass Sun/Compass Emblem */}
          <div ref={compassRef} className="destination-compass-emblem" aria-hidden="true">
            <svg viewBox="0 0 60 60" width="52" height="52" fill="none" className="compass-svg">
              <circle cx="30" cy="30" r="28" stroke="#F5D77F" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="30" cy="30" r="22" stroke="#D2AA55" strokeWidth="1" opacity="0.8" />
              <polygon points="30,8 34,30 30,27 26,30" fill="#F5D77F" />
              <polygon points="30,52 34,30 30,33 26,30" fill="#8E2036" />
              <polygon points="52,30 30,34 33,30 30,26" fill="#D2AA55" />
              <polygon points="8,30 30,34 27,30 30,26" fill="#D2AA55" />
              <circle cx="30" cy="30" r="4" fill="#F5D77F" />
            </svg>
          </div>

          <span className="destination-eyebrow">{venue.city}</span>
          <h2 className="destination-name">{venue.name}</h2>
          
          <div className="destination-gold-divider" aria-hidden="true" />

          <p className="destination-note">{venue.note}</p>
          <p className="destination-address">{venue.address}</p>

          <div className="destination-action-wrap">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-jaipur-gold"
              aria-label={`Open directions to ${venue.name} in Google Maps`}
            >
              <span>OPEN IN MAPS</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationScene;
