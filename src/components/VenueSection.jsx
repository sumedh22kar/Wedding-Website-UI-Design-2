import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function VenueSection() {
  const { venue, assets } = weddingConfig;

  // Generate Google Calendar Link for the Wedding Celebration Days
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Virat & Anushka Wedding Celebration'
  )}&dates=20271016T100000Z/20271019T230000Z&details=${encodeURIComponent(
    'Celebration of love across Haldi, Mehendi, Sangeet, Wedding Ceremony, and Reception at Villa Bellissima, Positano, Italy.'
  )}&location=${encodeURIComponent(venue.address)}`;

  return (
    <section id="venue" className="venue-cinematic-section invitation-section" aria-label="Destination wedding venue">
      <div className="invitation-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-eyebrow">THE DESTINATION</span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: 'var(--maroon-royal)' }}>
            {venue.heading}
          </h2>
          <div className="traditional-motif" aria-hidden="true">
            <LotusIcon size={20} color="#C59B51" />
          </div>
        </div>

        <motion.div
          className="venue-cinematic-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <CornerFlourish position="top-left" size={38} />
          <CornerFlourish position="top-right" size={38} />

          {/* Panoramic Coastal Photograph with Arch Overlay */}
          <div className="venue-photo-wrap">
            <img
              src={assets.coastalVenue}
              alt={assets.coastalVenueAlt}
              className="venue-panoramic-photo"
              style={{ objectPosition: assets.coastalVenuePosition }}
              loading="lazy"
            />
            <div className="venue-photo-overlay">
              <span className="section-eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: '8px' }}>
                POSITANO · AMALFI COAST · ITALY
              </span>
              <h2>{venue.name}</h2>
              <p>“{venue.supportingText}”</p>
            </div>
          </div>

          {/* Venue Information and Practical Actions */}
          <div className="venue-info-box">
            <h3 className="venue-estate-name">{venue.name}</h3>
            
            <p className="venue-estate-location">
              <MapPin size={16} style={{ verticalAlign: 'middle', marginRight: '6px', color: 'var(--gold-antique)' }} />
              {venue.location}
            </p>

            <p className="venue-estate-address">
              {venue.address}
            </p>

            <div>
              <span className="venue-demo-notice">
                {venue.demoNotice}
              </span>
            </div>

            {/* Practical Action Buttons */}
            <div className="venue-action-buttons">
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-royal"
                aria-label="Get driving directions in Google Maps"
              >
                <span>GET DIRECTIONS</span>
                <Navigation size={15} />
              </a>

              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                aria-label="Add celebration to Google Calendar"
              >
                <span>ADD TO CALENDAR</span>
                <Calendar size={15} />
              </a>
            </div>

            {/* Responsive Embedded Map */}
            <iframe
              title="Google Map of Positano Amalfi Coast Venue"
              src={venue.embedUrl}
              className="venue-map-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VenueSection;
