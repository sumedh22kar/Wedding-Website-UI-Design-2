import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function ReceptionSection() {
  const event = weddingConfig.celebrations.reception;

  return (
    <motion.article
      id="reception"
      className="event-ceremony-section reception-theme"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Wedding Reception details"
    >
      <CornerFlourish position="top-left" size={32} />
      <CornerFlourish position="top-right" size={32} />
      <CornerFlourish position="bottom-left" size={32} />
      <CornerFlourish position="bottom-right" size={32} />

      <div className="ceremony-card-inner">
        <div className="ceremony-title-row">
          <span className="ceremony-tagline">{event.tagline}</span>
          <h3 className="ceremony-name">
            प्रतिभोज <b>·</b> {event.name}
          </h3>
          <div className="traditional-motif" style={{ color: 'var(--gold-antique)' }} aria-hidden="true">
            <LotusIcon size={20} color="#C59B51" />
          </div>
        </div>

        <p className="ceremony-message">“{event.message}”</p>

        {/* Configurable Details */}
        <div className="ceremony-details-grid">
          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Grand Finale</span>
            <span className="ceremony-detail-val">{event.date}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Evening Time</span>
            <span className="ceremony-detail-val">{event.time}</span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Sea View Lawn</span>
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

export default ReceptionSection;
