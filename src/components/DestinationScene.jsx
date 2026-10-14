import React from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * SCENE SIX — THE JAIPUR DESTINATION
 * 
 * Features:
 * - Heritage architecture photograph: Jal Mahal at sunset (jal-mahal-venue.jpg)
 * - Regal architectural frame
 * - Coordinates: 26.9656° N, 75.8457° E • Jaipur, Rajasthan
 * - Solid opaque card with Open in Maps action
 */
export function DestinationScene() {
  const { venue, images } = weddingConfig;

  return (
    <section id="destination" className="destination-jaipur-scene" aria-label="Destination Venue">
      {/* Cinematic Venue Photograph Frame */}
      <div className="destination-photo-portal">
        <div className="portal-image-clip">
          <img
            src={images.venueSunset}
            alt={images.venueSunsetAlt}
            className="destination-venue-img"
            style={{ objectPosition: images.venuePosition }}
            loading="lazy"
          />
        </div>

        {/* Floating Geographical Coordinates Tag */}
        <div className="destination-coords-tag" aria-hidden="true">
          <span className="coords-compass-icon">🧭</span>
          <span className="coords-text">{venue.coordinates}</span>
        </div>
      </div>

      {/* Foreground Editorial Destination Card */}
      <div className="destination-content-wrap">
        <div className="destination-editorial-card">
          {/* Rotating Brass Sun/Compass Emblem */}
          <div className="destination-compass-emblem" aria-hidden="true">
            <svg viewBox="0 0 60 60" width="48" height="48" fill="none" className="compass-svg">
              <circle cx="30" cy="30" r="28" stroke="#D2AA55" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="30" cy="30" r="22" stroke="#D2AA55" strokeWidth="0.8" opacity="0.8" />
              <polygon points="30,8 34,30 30,27 26,30" fill="#E7C97D" />
              <polygon points="30,52 34,30 30,33 26,30" fill="#8E2036" />
              <polygon points="52,30 30,34 33,30 30,26" fill="#D2AA55" />
              <polygon points="8,30 30,34 27,30 30,26" fill="#D2AA55" />
              <circle cx="30" cy="30" r="3.5" fill="#D2AA55" />
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
              <span>Open in Maps</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationScene;
