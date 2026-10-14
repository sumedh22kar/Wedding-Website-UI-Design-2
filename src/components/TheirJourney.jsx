import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

const itemVariant = {
  hidden: { opacity: 0, x: 25 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function TheirJourney() {
  const { journey, assets } = weddingConfig;

  return (
    <section className="journey-section invitation-section" aria-label="Our journey and milestones">
      <div className="invitation-container">
        {/* Header */}
        <div className="journey-header">
          <span className="section-eyebrow">A SACRED THREAD OF DESTINY</span>
          <h2>{journey.heading}</h2>
          <div className="traditional-motif" aria-hidden="true">
            <LotusIcon size={20} color="#C59B51" />
          </div>
          <p className="journey-lead-passage">{journey.intro}</p>
        </div>

        {/* Layout */}
        <div className="journey-layout">
          {/* Second Couple Photograph (Garden Setting) */}
          <motion.div
            className="journey-photo-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <CornerFlourish position="top-left" size={32} />
            <CornerFlourish position="bottom-right" size={32} />

            <div className="journey-image-wrapper">
              <img
                src={assets.storyCouple}
                alt={assets.storyCoupleAlt}
                style={{ objectPosition: assets.storyCouplePosition }}
                loading="lazy"
              />
            </div>
            <div className="journey-photo-caption">
              “Two Souls, Bound by Love and Grace”
            </div>
          </motion.div>

          {/* Three Visual Milestones Timeline with Illuminated Golden Thread */}
          <div className="journey-timeline">
            {journey.milestones.map((item, idx) => (
              <motion.div
                key={item.number}
                className="journey-timeline-item"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={itemVariant}
              >
                <div className="journey-gold-dot" aria-hidden="true">
                  <LotusIcon size={14} color="#C59B51" />
                </div>
                
                <span className="journey-step-tag">
                  अध्याय {item.number} <b>·</b> MILESTONE {item.number}
                </span>
                
                <h3 className="journey-timeline-title">{item.title}</h3>
                <p className="journey-timeline-sub">“{item.subtitle}”</p>
                <p className="journey-timeline-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheirJourney;
