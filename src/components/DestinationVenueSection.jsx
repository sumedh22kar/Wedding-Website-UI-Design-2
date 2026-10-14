import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './FloralElements';

/**
 * SCENE FIVE — THE DESTINATION VENUE
 * 
 * Features:
 * - Image 5: Italian coastal sunset photograph (amalfi-coast.jpg)
 * - Large, cinematic photograph preserving warm sky, cliffside buildings, flowers, and sea
 * - Soft dark gradient overlay for effortless typography readability
 * - Heading: THE CELEBRATION
 * - Venue Name & Address: Villa Bellissima Estate, Positano, Amalfi Coast, Italy
 * - Discreet conceptual showcase notice
 * - OPEN IN MAPS button opening Google Maps directions
 */
export function DestinationVenueSection() {
  const { venue, images } = weddingConfig;

  return (
    <section id="venue" className="destination-venue-scene" aria-label="Destination Venue">
      {/* Large Cinematic Background Photograph */}
      <div className="venue-cinematic-backdrop">
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

      {/* Foreground Content Card / Editorial Layer */}
      <div className="invitation-container-narrow">
        <div className="venue-editorial-content">
          <span className="venue-scene-kicker">{venue.sectionHeading}</span>
          <h2 className="venue-scene-title">{venue.name}</h2>
          <p className="venue-scene-location">{venue.locationNote}</p>
          <GoldDivider width={130} className="venue-scene-divider" />
          <p className="venue-scene-address">{venue.address}</p>

          <div className="venue-action-wrap">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cinematic-gold"
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
