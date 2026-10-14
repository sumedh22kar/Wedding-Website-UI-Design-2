import React from 'react';
import { motion } from 'framer-motion';
import weddingConfig from '../weddingConfig';

export function LoveQuote() {
  const { quote } = weddingConfig;

  return (
    <section className="love-quote-section" aria-label="A moment of reflection">
      <div className="container">
        <motion.div
          className="quote-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Delicate Ornamental Crest Detail */}
          <div className="quote-ornament" aria-hidden="true">
            ✦
          </div>

          {/* Minimalist Quote */}
          <blockquote className="quote-body">
            “{quote.text}”
          </blockquote>

          <cite className="quote-author">
            — {quote.signature} —
          </cite>
        </motion.div>
      </div>
    </section>
  );
}

export default LoveQuote;
