import React from 'react';
import { weddingConfig, isPlaceholder } from '../weddingConfig';
import { GoldDivider } from './OrnamentalIcons';

/**
 * SECTION FOUR: VENUE
 * 
 * Minimal, visually striking presentation of:
 * - Venue name
 * - Full venue address
 * - OPEN IN MAPS button with genuine Google Maps directions URL
 * - Disabled state with clear notification when address is unconfigured
 */
export function VenueSection() {
  const { venueName, venueAddress } = weddingConfig;
  const isAddressPlaceholder = isPlaceholder(venueAddress);

  // Generate directions URL only if a valid address is configured
  const mapsUrl = !isAddressPlaceholder
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueAddress)}`
    : null;

  return (
    <section id="venue" className="venue-section" aria-label="Wedding Venue">
      <div className="invitation-container-narrow">
        <span className="eyebrow-label">Location</span>

        <div className="venue-card">
          <h2 className="venue-title">{venueName}</h2>
          <GoldDivider width={120} className="mb-4" />
          <p className="venue-address">{venueAddress}</p>

          {isAddressPlaceholder ? (
            <div>
              <button
                type="button"
                className="btn-luxury"
                disabled
                aria-disabled="true"
                title="Address not configured in weddingConfig.js"
              >
                Open in Maps
              </button>
              <p className="venue-placeholder-notice">
                Directions link will be enabled once <code>venueAddress</code> is configured in <code>src/weddingConfig.js</code>
              </p>
            </div>
          ) : (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury"
              aria-label={`Open directions to ${venueName} in Google Maps`}
            >
              Open in Maps
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default VenueSection;
