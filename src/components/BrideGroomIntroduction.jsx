import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function BrideGroomIntroduction() {
  const { bride, groom } = weddingConfig.couple;

  return (
    <section className="profiles-section invitation-section" aria-label="Meet the bride and groom">
      <div className="invitation-container">
        {/* Section Header */}
        <div className="profiles-header">
          <div className="traditional-motif" aria-hidden="true">
            <LotusIcon size={22} color="#C59B51" />
          </div>
          <span className="section-eyebrow">TWO HEARTS · ONE DESTINY</span>
          <h2>A Little About the Two Hearts We Celebrate</h2>
          <p style={{ maxWidth: '580px', margin: '14px auto 0', fontSize: '0.98rem' }}>
            Two individual paths, bound together by kindness, gentle laughter, and an unspoken harmony.
          </p>
        </div>

        {/* Profiles Sequence */}
        <div className="profiles-flow">
          {/* Meet the Bride */}
          <motion.article
            className="profile-royal-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariant}
          >
            <CornerFlourish position="top-left" size={36} />
            <CornerFlourish position="bottom-right" size={36} />

            {/* Jharokha (Palace Arch) Architectural Frame */}
            <div className="profile-jharokha-frame">
              <div className="jharokha-arch-silhouette" />
              <img
                src={bride.portrait}
                alt={bride.portraitAlt}
                style={{ objectPosition: bride.objectPosition }}
                loading="lazy"
              />
              <span className="profile-cultural-badge">
                वधू <b>·</b> The Bride
              </span>
            </div>

            <div className="profile-content">
              <span className="profile-kicker-tag">HER GRACE & LIGHT</span>
              <h3 className="profile-royal-title">{bride.title}</h3>
              <p className="profile-desc">{bride.description}</p>
            </div>
          </motion.article>

          {/* Central Sacred Lotus Connector */}
          <div className="profiles-ornate-separator" aria-hidden="true">
            <span className="sep-line" />
            <LotusIcon size={26} color="#C59B51" />
            <span className="sep-line" />
          </div>

          {/* Meet the Groom */}
          <motion.article
            className="profile-royal-card profile-royal-card-reversed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariant}
          >
            <CornerFlourish position="top-right" size={36} />
            <CornerFlourish position="bottom-left" size={36} />

            <div className="profile-content">
              <span className="profile-kicker-tag">HIS STRENGTH & SPIRIT</span>
              <h3 className="profile-royal-title">{groom.title}</h3>
              <p className="profile-desc">{groom.description}</p>
            </div>

            {/* Jharokha (Palace Arch) Architectural Frame */}
            <div className="profile-jharokha-frame">
              <div className="jharokha-arch-silhouette" />
              <img
                src={groom.portrait}
                alt={groom.portraitAlt}
                style={{ objectPosition: groom.objectPosition }}
                loading="lazy"
              />
              <span className="profile-cultural-badge">
                वर <b>·</b> The Groom
              </span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default BrideGroomIntroduction;
