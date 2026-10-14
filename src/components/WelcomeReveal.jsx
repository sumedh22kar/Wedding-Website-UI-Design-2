import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import weddingConfig from '../weddingConfig';

export function WelcomeReveal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.div
            className="welcome-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: -24,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Refined Monogram Seal */}
            <div className="monogram-seal">
              <div className="monogram-initials">
                V <span>&</span> A
              </div>
              <span className="monogram-star">✳</span>
            </div>

            {/* Typography */}
            <p className="welcome-title">{weddingConfig.couple.subtitle}</p>
            <h1 className="welcome-subtitle">An invitation to celebrate love.</h1>

            <div className="editorial-divider">
              <span />
              <i>✳</i>
              <span />
            </div>

            <p className="welcome-text">
              Together with our families, we invite you to step into our story and celebrate the beginning of our forever by the Mediterranean sea.
            </p>

            {/* Actions */}
            <div className="welcome-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={onClose}
                aria-label="Open wedding invitation"
              >
                <span>OPEN OUR INVITATION</span>
                <Sparkles size={16} />
              </button>

              <button
                type="button"
                className="welcome-skip"
                onClick={onClose}
                aria-label="Skip introduction and proceed to celebration details"
              >
                Skip to celebration ↓
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeReveal;
