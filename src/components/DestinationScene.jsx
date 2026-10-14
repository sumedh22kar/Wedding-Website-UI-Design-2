import React, { useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SCENE SIX — THE JAIPUR DESTINATION
 * 
 * Clean, non-overlapping layout:
 * - Coordinates tag pinned cleanly in top corner of photo portal (ZERO overlap with card)
 * - Rich royal maroon & sandstone palette with warm champagne gold accents
 * - Butter-smooth, lightweight GPU scroll reveal
 */
export function DestinationScene() {
  const { venue, images } = weddingConfig;
  const sectionRef = useRef(null);
  const portalRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Smooth fade-up for portal
      if (portalRef.current) {
        gsap.fromTo(
          portalRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: portalRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Smooth fade-up for card
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="destination" ref={sectionRef} className="destination-jaipur-scene" aria-label="Destination Venue">
      {/* Cinematic Venue Photograph Frame */}
      <div ref={portalRef} className="destination-photo-portal">
        <div className="portal-image-clip">
          <img
            src={images.venueSunset}
            alt={images.venueSunsetAlt}
            className="destination-venue-img"
            style={{ objectPosition: images.venuePosition }}
            loading="lazy"
          />
          <div className="portal-warm-sunset-gradient" aria-hidden="true" />
        </div>

        {/* Floating Geographical Coordinates Tag - Placed at TOP LEFT to completely avoid card overlap */}
        <div className="destination-coords-tag" aria-hidden="true">
          <span className="coords-compass-icon">🧭</span>
          <span className="coords-text">{venue.coordinates}</span>
        </div>
      </div>

      {/* Foreground Editorial Destination Card in Rich Royal Velvet Maroon */}
      <div className="destination-content-wrap">
        <div ref={cardRef} className="destination-editorial-card rich-destination-card">
          {/* Rotating Brass Compass Emblem */}
          <div className="destination-compass-emblem" aria-hidden="true">
            <svg viewBox="0 0 60 60" width="48" height="48" fill="none" className="compass-svg">
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
