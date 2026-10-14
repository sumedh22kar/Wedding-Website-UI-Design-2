import React from 'react';
import { motion } from 'framer-motion';
import weddingConfig from '../weddingConfig';

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CoupleIntroduction() {
  const { bride, groom } = weddingConfig.couple;

  return (
    <section id="couple" className="couple-intro-section section-padding" aria-label="Introducing the couple">
      <div className="container">
        {/* Section Header */}
        <div className="intro-header">
          <span className="eyebrow">TWO HEARTS · ONE JOURNEY</span>
          <h2>
            Meet the <em>Bride & Groom</em>
          </h2>
          <p>
            Two individual journeys, bound by shared joy, tender laughter, and an unspoken understanding that made every ordinary day extraordinary.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="intro-grid">
          {/* Bride Introduction */}
          <motion.article
            className="editorial-card editorial-card-bride"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
          >
            <div className="editorial-frame">
              <img
                src={bride.portrait}
                alt={bride.portraitAlt}
                style={{ objectPosition: bride.objectPosition }}
                loading="lazy"
              />
              <span className="editorial-badge">01 / The Bride</span>
            </div>

            <div className="editorial-body">
              <span className="editorial-role">{bride.role}</span>
              <h3 className="editorial-name">Meet {bride.name}</h3>
              <p className="editorial-tagline">“{bride.tagline}”</p>

              <div className="editorial-card-separator" />

              <p className="editorial-desc">{bride.description}</p>
            </div>
          </motion.article>

          {/* Groom Introduction */}
          <motion.article
            className="editorial-card editorial-card-groom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
          >
            <div className="editorial-frame">
              <img
                src={groom.portrait}
                alt={groom.portraitAlt}
                style={{ objectPosition: groom.objectPosition }}
                loading="lazy"
              />
              <span className="editorial-badge">02 / The Groom</span>
            </div>

            <div className="editorial-body">
              <span className="editorial-role">{groom.role}</span>
              <h3 className="editorial-name">Meet {groom.name}</h3>
              <p className="editorial-tagline">“{groom.tagline}”</p>

              <div className="editorial-card-separator" />

              <p className="editorial-desc">{groom.description}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default CoupleIntroduction;
