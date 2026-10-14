import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, PaisleyMotif } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function MehendiSection() {
  const event = weddingConfig.celebrations.mehendi;

  return (
    <motion.article
      id="mehendi"
      className="event-ceremony-section mehendi-theme"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Mehendi ceremony details"
    >
      <CornerFlourish position="top-left" size={32} />
      <CornerFlourish position="top-right" size={32} />
      <CornerFlourish position="bottom-left" size={32} />
      <CornerFlourish position="bottom-right" size={32} />

      <div className="ceremony-card-inner">
        {/* Animated Henna Vine Motif */}
        <div style={{ textAlign: 'center', marginBottom: '14px' }}>
          <PaisleyMotif size={36} color="var(--mehendi-sage)" />
        </div>

        <div className="ceremony-title-row">
          <span className="ceremony-tagline">{event.tagline}</span>
          <h3 className="ceremony-name">
            मेहंदी <b>·</b> {event.name}
          </h3>
          <div className="traditional-motif" style={{ color: 'var(--mehendi-green)' }} aria-hidden="true">
            <i>𑁍</i>
          </div>
        </div>

        <p className="ceremony-message">“{event.message}”</p>

        {/* Configurable Details */}
        <div className="ceremony-details-grid">
          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Shubh Date</span>
            <span className="ceremony-detail-val">{event.date}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Time</span>
            <span className="ceremony-detail-val">{event.time}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Terrace Venue</span>
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
          <p className="ceremony-family-note" style={{ color: '#2C4A2A' }}>
            {event.note}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default MehendiSection;
