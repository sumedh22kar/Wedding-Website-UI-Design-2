import React from 'react';
import { motion } from 'framer-motion';
import { MandapArch, DiyaFlame, CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function WeddingCeremonySection() {
  const event = weddingConfig.celebrations.ceremony;

  return (
    <motion.article
      id="ceremony"
      className="event-ceremony-section ceremony-theme"
      initial={{ opacity: 0, scale: 0.97, y: 45 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Sacred Wedding Ceremony & Pheras"
    >
      <CornerFlourish position="top-left" size={48} />
      <CornerFlourish position="top-right" size={48} />
      <CornerFlourish position="bottom-left" size={48} />
      <CornerFlourish position="bottom-right" size={48} />

      <div className="ceremony-card-inner">
        {/* Royal Mandap Architectural Arch Graphic */}
        <MandapArch />

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          {/* Sacred Sanskrit Shloka */}
          <p className="ceremony-sanskrit-shloka" aria-hidden="true">
            ॥ यदेतद् हृदयं तव तदस्तु हृदयं मम ॥
            <span>(May your heart become my heart, and our souls walk as one)</span>
          </p>

          <span className="ceremony-tagline">{event.tagline}</span>

          <h3 className="ceremony-name ceremony-name-royal">
            शुभ विवाह <b>·</b> {event.name}
          </h3>

          <div className="ceremony-diya-row">
            <DiyaFlame size={26} />
            <span className="ceremony-pheras-subtitle">The Sacred Varmala & Sunset Pheras</span>
            <DiyaFlame size={26} />
          </div>

          <div className="traditional-motif" style={{ color: 'var(--gold-antique)', margin: '18px auto' }} aria-hidden="true">
            <LotusIcon size={24} color="#C59B51" />
          </div>
        </div>

        <p className="ceremony-message" style={{ fontWeight: 400, color: 'var(--maroon-royal)' }}>
          “{event.message}”
        </p>

        {/* Configurable Details Grid */}
        <div className="ceremony-details-grid ceremony-details-royal">
          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Auspicious Date</span>
            <span className="ceremony-detail-val" style={{ color: 'var(--maroon-royal)', fontWeight: 700 }}>
              {event.date}
            </span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">Sunset Muhurat</span>
            <span className="ceremony-detail-val" style={{ fontWeight: 600 }}>
              {event.time}
            </span>
          </div>

          <div className="ceremony-detail-item">
            <span className="ceremony-detail-label">The Sacred Mandap</span>
            <span className="ceremony-detail-val">{event.venue}</span>
          </div>

          {event.dressCode && (
            <div className="ceremony-detail-item">
              <span className="ceremony-detail-label">Dress Code</span>
              <span className="ceremony-detail-val">{event.dressCode}</span>
            </div>
          )}
        </div>

        {event.note && (
          <p className="ceremony-family-note" style={{ color: 'var(--maroon-royal)', fontWeight: 500, fontSize: '0.92rem' }}>
            {event.note}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default WeddingCeremonySection;
