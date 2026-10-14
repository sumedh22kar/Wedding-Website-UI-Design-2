import React, { useState, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';

/**
 * SCENE FIVE — THE DESTINATION VENUE (3D CINEMATIC WINDOW)
 * 
 * Features:
 * - Image 5: Jaipur palace sunset photograph (jal-mahal-venue.jpg)
 * - Interactive 3D spatial tilt tracking cursor/touch position
 * - Rotating 3D gold compass emblem
 * - Floating golden coordinates tag
 * - Large, cinematic photograph preserving warm sunset sky, royal palace, and waters
 * - OPEN IN MAPS button opening Google Maps directions
 */
export function DestinationVenueSection() {
  const { venue, images } = weddingConfig;
  const venueRef = useRef(null);
  const [state, setState] = useState({ rx: 0, ry: 0, isHovered: false });

  const handleMouseMove = (e) => {
    if (!venueRef.current) return;
    const rect = venueRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setState({
      rx: y * -12,
      ry: x * 12,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setState({ rx: 0, ry: 0, isHovered: false });
  };

  return (
    <section
      id="venue"
      ref={venueRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="destination-venue-scene"
      aria-label="Destination Venue"
      style={{ perspective: '1200px' }}
    >
      {/* Large Cinematic Background Photograph with 3D Parallax */}
      <div
        className="venue-cinematic-backdrop"
        style={{
          transform: `scale(1.08) translate3d(${state.ry * -0.5}px, ${state.rx * 0.5}px, 0)`,
          transition: state.isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s ease',
        }}
      >
        <img
          src={images.venueSunset}
          alt={images.venueSunsetAlt}
          className="venue-cinematic-img"
          style={{ objectPosition: images.venuePosition }}
          loading="lazy"
        />
        {/* Soft Dark Vignette and Gradient Overlay */}
        <div className="venue-gradient-overlay" aria-hidden="true" />
      </div>

      {/* Foreground Content Card / 3D Floating Layer */}
      <div className="invitation-container-narrow">
        <div
          className="venue-editorial-content venue-3d-card"
          style={{
            transform: `perspective(1000px) rotateX(${state.rx}deg) rotateY(${state.ry}deg) translate3d(0, 0, ${
              state.isHovered ? '28px' : '0px'
            })`,
            transition: state.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Interactive 3D Gold Compass Emblem */}
          <div className="venue-compass-wrap" aria-hidden="true">
            <svg
              className="venue-3d-compass"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: `rotate(${state.ry * 3}deg)`,
                transition: 'transform 0.2s ease',
              }}
            >
              <circle cx="25" cy="25" r="23" stroke="#D2AA55" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
              <circle cx="25" cy="25" r="18" stroke="#D2AA55" strokeWidth="0.8" opacity="0.9" />
              <polygon points="25,6 28,25 25,23 22,25" fill="#E7C97D" />
              <polygon points="25,44 28,25 25,27 22,25" fill="#8E2036" />
              <polygon points="44,25 25,28 27,25 25,22" fill="#D2AA55" />
              <polygon points="6,25 25,28 23,25 25,22" fill="#D2AA55" />
              <circle cx="25" cy="25" r="3" fill="#D2AA55" />
            </svg>
          </div>

          <span className="venue-scene-kicker">{venue.sectionHeading}</span>
          <h2 className="venue-scene-title">{venue.name}</h2>
          
          {/* Floating Geographical Coordinates Tag */}
          <div className="venue-coordinates-badge" aria-hidden="true">
            <span>{venue.coordinates || '26.9656° N, 75.8457° E • Jaipur, Rajasthan'}</span>
          </div>

          <p className="venue-scene-location">{venue.locationNote}</p>
          <GoldDivider width={130} className="venue-scene-divider" />
          <p className="venue-scene-address">{venue.address}</p>

          <div className="venue-action-wrap">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cinematic-gold btn-3d-elevated"
              aria-label={`Open directions to ${venue.name} in Google Maps`}
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationVenueSection;

