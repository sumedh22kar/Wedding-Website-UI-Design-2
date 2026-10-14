import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import weddingConfig from '../weddingConfig';

export function VenueMap() {
  const { venue } = weddingConfig;

  return (
    <section id="venue-map" className="map-section section-padding" aria-label="Interactive venue location and navigation">
      <div className="container">
        <motion.div
          className="map-card-wrapper"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header with Address and Navigation Action */}
          <div className="map-card-header">
            <div className="map-header-left">
              <span className="eyebrow eyebrow-no-lines">VENUE NAVIGATION</span>
              <h3>{venue.name}</h3>
              <p className="map-address-text">
                <MapPin size={16} style={{ color: 'var(--terracotta)' }} />
                <span>{venue.address}</span>
              </p>
            </div>

            <div className="map-header-right">
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Open driving directions in Google Maps"
              >
                <span>GET DIRECTIONS</span>
                <Navigation size={15} />
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Container (No API Key Required) */}
          <div className="map-embed-container">
            <iframe
              title="Google Map of Positano Amalfi Coast Venue"
              className="map-iframe"
              src={venue.embedUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Card Footer with Details and Demo Disclaimer */}
          <div className="map-card-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={16} style={{ color: 'var(--terracotta)' }} />
              <span className="map-disclaimer">
                Coordinates Reference: Positano, Province of Salerno, Campania, Italy
              </span>
            </div>

            <span className="venue-demo-badge">
              {venue.demoNotice}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VenueMap;
