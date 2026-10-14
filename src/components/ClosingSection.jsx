import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function ClosingSection() {
  const { closing, assets } = weddingConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="closing-letter-section" aria-label="A final note from the couple">
      <div className="invitation-container">
        <motion.div
          className="closing-letter-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <CornerFlourish position="top-left" size={38} />
          <CornerFlourish position="top-right" size={38} />
          <CornerFlourish position="bottom-left" size={38} />
          <CornerFlourish position="bottom-right" size={38} />

          {/* Circular Couple Vignette with Gilded Halo */}
          <div className="closing-vignette-circle">
            <img
              src={assets.heroCouple}
              alt="Virat and Anushka in affectionate embrace"
              style={{ objectPosition: 'center 22%' }}
              loading="lazy"
            />
          </div>

          <span className="section-eyebrow">A FINAL BLESSING</span>

          <h2 className="closing-main-title">
            {closing.heading}
          </h2>

          <div className="traditional-motif" aria-hidden="true">
            <LotusIcon size={24} color="#C59B51" />
          </div>

          <p className="closing-signoff">
            With love and blessings of our families,
          </p>

          <p className="closing-couple-signature">
            Virat <span>&</span> Anushka
          </p>

          {closing.dateAndLocation && (
            <p className="closing-date-location">
              {closing.dateAndLocation}
            </p>
          )}

          {/* Smooth Return to Top Interaction */}
          <div style={{ marginTop: '28px' }}>
            <button
              type="button"
              className="back-to-top-gold"
              onClick={scrollToTop}
              aria-label="Scroll back to the top of the wedding invitation"
            >
              <LotusIcon size={16} color="#C59B51" />
              <span>Back to the beginning ↑</span>
            </button>
          </div>

          <p className="closing-disclaimer">
            {closing.note}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default ClosingSection;
