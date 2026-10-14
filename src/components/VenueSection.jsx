import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './OrnamentalIcons';

/**
 * SECTION FOUR: VENUE (ITALY)
 * 
 * Features:
 * - IMAGE 5: Large, cinematic photograph of the Italian coastal venue (amalfi-coast.jpg)
 * - Preserves sunset, coastal architecture, sea, and romantic atmosphere
 * - Venue name, address, and city in Italy
 * - OPEN IN MAPS button opening genuine Google Maps directions
 */
export function VenueSection() {
  const { venueName, venueAddress, venueCity, images } = weddingConfig;

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    venueAddress
  )}`;

  return (
    <section id="venue" className="venue-section" aria-label="Destination Venue">
      <div className="invitation-container">
        <span className="eyebrow-label">Destination Venue</span>

        {/* IMAGE 5 — ITALIAN COASTAL VENUE PHOTOGRAPH (Large Cinematic Frame) */}
        <div className="venue-cinematic-banner">
          <div className="venue-cinematic-inner">
            <img
              src={images.venueLandscape}
              alt={images.venueLandscapeAlt}
              className="venue-landscape-img"
              style={{ objectPosition: images.venuePosition }}
              loading="lazy"
            />
            <div className="venue-cinematic-overlay" aria-hidden="true" />
          </div>
        </div>

        {/* Venue Information Card */}
        <div className="venue-card">
          <h2 className="venue-title">{venueName}</h2>
          <p className="venue-city-sub">{venueCity}</p>
          <GoldDivider width={140} className="venue-divider" />
          <p className="venue-address">{venueAddress}</p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
            aria-label={`Open directions to ${venueName} in Google Maps`}
          >
            Open in Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default VenueSection;
