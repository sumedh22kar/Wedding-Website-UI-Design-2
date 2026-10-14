import React from 'react';
import { motion } from 'framer-motion';
import MarigoldPetals from './MarigoldPetals';
import { CornerFlourish } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function HaldiSection() {
  const event = weddingConfig.celebrations.haldi;

  return (
    <motion.article
      id="haldi"
      className="event-ceremony-section haldi-theme"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Haldi ceremony details"
    >
      {/* Drifting Golden Marigold Petals */}
      <MarigoldPetals />

      <CornerFlourish position="top-left" size={32} />
      <CornerFlourish position="top-right" size={32} />
      <CornerFlourish position="bottom-left" size={32} />
      <CornerFlourish position="bottom-right" size={32} />

      <div className="ceremony-card-inner">
        {/* Auspicious Marigold Toran Garland Graphic */}
        <div className="ceremony-top-garland" aria-hidden="true">
          <span>✿</span> <span>✿</span> <span>✿</span> <span>✿</span> <span>✿</span>
        </div>

        <div className="ceremony-title-row">
          <span className="ceremony-tagline">{event.tagline}</span>
          <h3 className="ceremony-name">
            हल्दी <b>·</b> {event.name}
          </h3>
          <div className="traditional-motif" style={{ color: 'var(--haldi-saffron)' }} aria-hidden="true">
            <i>✿</i>
          </div>
        </div>

        <p className="ceremony-message">“{event.message}”</p>

        {/* Configurable Details Grid */}
        <div className="ceremony-details-grid">
          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Shubh Date</span>
            <span className="ceremony-detail-val">{event.date}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Auspicious Time</span>
            <span className="ceremony-detail-val">{event.time}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Courtyard Venue</span>
            <span className="ceremony-detail-val">{event.venue}</span>
          </div>

          {event.dressCode && (
            <div className="ceremony-detail-item">
              <span className="ceremony-detail-label">Attire</span>
              <span className="ceremony-detail-val">{event.dressCode}</span>
            </div>
          )}
        </div>

        {event.note && (
          <p className="ceremony-family-note">
            {event.note}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default HaldiSection;
