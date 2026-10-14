import React from 'react';
import { motion } from 'framer-motion';
import { DiyaFlame, LotusIcon } from './OrnamentalIcons';
import weddingConfig from '../weddingConfig';

export function CoupleHero() {
  const { assets, couple } = weddingConfig;

  return (
    <section id="hero" className="hero-wrapper" aria-label="Couple hero introduction">
      {/* Cinematic Ken Burns Couple Photograph */}
      <div className="hero-photo-layer">
        <motion.img
          src={assets.heroCouple}
          alt={assets.heroCoupleAlt}
          className="hero-photo"
          style={{ objectPosition: assets.heroCouplePosition }}
          initial={{ scale: 1.06, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          loading="eager"
        />
        <div className="hero-gradient-overlay" />
        
        {/* Subtle Ambient Golden Shimmer Particles */}
        <div className="hero-gold-dust" aria-hidden="true" />
      </div>

      {/* Royal Editorial Typography */}
      <div className="hero-text-block">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Sacred Floral Crest */}
          <div className="hero-sacred-crest" aria-hidden="true">
            <LotusIcon size={24} color="#D6B37C" />
          </div>

          <p className="hero-sub-kicker">
            {couple.heroKicker}
          </p>

          <h1 className="hero-couple-title">
            <span className="hero-name-gold">Virat</span>
            <em className="hero-ampersand-script">&</em>
            <span className="hero-name-gold">Anushka</span>
          </h1>

          <p className="hero-family-passage">
            “{couple.heroTagline}”
          </p>

          {/* Traditional Flickering Diya & Scroll Prompt */}
          <div className="hero-diya-scroll">
            <DiyaFlame size={28} />
            <span className="hero-scroll-caption">SCROLL TO WITNESS OUR STORY</span>
            <div className="hero-scroll-line" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CoupleHero;
