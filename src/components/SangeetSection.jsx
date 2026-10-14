import React from 'react';
import { motion } from 'framer-motion';
import StarryBokeh from './StarryBokeh';
import { CornerFlourish } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function SangeetSection() {
  const event = weddingConfig.celebrations.sangeet;

  return (
    <motion.article
      id="sangeet"
      className="event-ceremony-section sangeet-theme"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Sangeet celebration details"
    >
      {/* Ambient Illuminated Bokeh Glow */}
      <StarryBokeh />

      <CornerFlourish position="top-left" size={34} />
      <CornerFlourish position="top-right" size={34} />
      <CornerFlourish position="bottom-left" size={34} />
      <CornerFlourish position="bottom-right" size={34} />

      <div className="ceremony-card-inner">
        <div className="ceremony-title-row">
          <span className="ceremony-tagline">{event.tagline}</span>
          <h3 className="ceremony-name">
            संगीत <b>·</b> {event.name}
          </h3>
          <div className="traditional-motif" style={{ color: 'var(--champagne-gold)' }} aria-hidden="true">
            <i>✧</i>
          </div>
        </div>

        <p className="ceremony-message">“{event.message}”</p>

        {/* Configurable Details */}
        <div className="ceremony-details-grid">
          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Festive Evening</span>
            <span className="ceremony-detail-val">{event.date}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Celebration Time</span>
            <span className="ceremony-detail-val">{event.time}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Grand Pavilion</span>
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
          <p className="ceremony-family-note" style={{ color: 'var(--champagne-gold)' }}>
            {event.note}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default SangeetSection;
