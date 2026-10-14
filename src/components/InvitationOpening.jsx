import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CornerFlourish, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function InvitationOpening({ isOpen, onOpen }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Royal Indian Wedding Invitation Card"
        >
          {/* Royal Envelope Card */}
          <motion.div
            className="opening-envelope-box"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: -40,
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 4 Gold Foil Corner Flourishes */}
            <CornerFlourish position="top-left" size={44} />
            <CornerFlourish position="top-right" size={44} />
            <CornerFlourish position="bottom-left" size={44} />
            <CornerFlourish position="bottom-right" size={44} />

            {/* Sacred Vedic Auspicious Blessing */}
            <div className="vedic-blessing" aria-hidden="true">
              ॥ श्री गणेशाय नमः ॥
            </div>

            {/* Royal Gold Wax Seal with Monogram */}
            <motion.div
              className="royal-wax-seal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpen}
              title="Tap to unseal invitation"
            >
              <div className="seal-outer-ring" />
              <div className="seal-inner-crest">
                <LotusIcon size={20} color="#C59B51" />
                <span className="seal-monogram">V <span>&</span> A</span>
              </div>
            </motion.div>

            {/* Headings */}
            <p className="opening-eyebrow">
              {weddingConfig.couple.openingEyebrow}
            </p>

            <h1 className="opening-heading">
              An invitation to celebrate<br />
              <em>a beautiful beginning</em>
            </h1>

            <div className="traditional-motif" aria-hidden="true">
              <i>𑁍</i>
            </div>

            {/* Shimmering Metallic Gold Couple Name */}
            <div className="opening-names-wrapper">
              <span className="opening-couple-gold">
                Virat <em>&</em> Anushka
              </span>
            </div>

            <p className="opening-family-invitation">
              Together with our parents, we warmly invite you to be part of our most cherished celebration.
            </p>

            {/* Unseal & Open Button */}
            <div className="opening-actions">
              <button
                type="button"
                className="btn-gold-royal"
                onClick={onOpen}
                aria-label="Open the wedding invitation"
              >
                <Sparkles size={16} className="btn-sparkle-icon" />
                <span>OPEN OUR INVITATION</span>
                <Sparkles size={16} className="btn-sparkle-icon" />
              </button>

              <button
                type="button"
                className="opening-skip-btn"
                onClick={onOpen}
                aria-label="Skip animation and enter invitation directly"
              >
                Scroll to celebration details ↓
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InvitationOpening;
