import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { MandalaOrnament } from './OrnamentalIcons';

/**
 * SECTION ONE: THE HERO
 * 
 * Emotional focal point of the opening experience:
 * - IMAGE 3: First couple photograph (couple-home.jpg) in an architectural arch
 * - Names Virat & Anushka positioned around the image without covering their faces
 * - Destination venue location: Positano, Amalfi Coast, Italy
 * - Wedding date and live countdown updating every second
 * - Subtle rotating geometric mandala behind the composition
 */
export function HeroSection() {
  const {
    groomShort,
    brideShort,
    weddingDateTime,
    countdownTarget,
    venueCity,
    images,
  } = weddingConfig;

  // Live Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    hasPassed: false,
  });

  useEffect(() => {
    const targetDate = new Date(countdownTarget).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          hasPassed: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        hasPassed: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [countdownTarget]);

  return (
    <section id="hero" className="hero-section" aria-label="Wedding Invitation Hero">
      {/* Faint rotating non-religious geometric mandala */}
      <div className="hero-mandala-wrap" aria-hidden="true">
        <MandalaOrnament size={620} />
      </div>

      <div className="hero-content">
        <div className="hero-arch-frame">
          <span className="hero-kicker">Wedding Invitation</span>

          {/* IMAGE 3 — FIRST COUPLE PHOTOGRAPH (Emotional Focal Point) */}
          <div className="hero-image-arch-wrap">
            <div className="hero-image-arch-inner">
              <img
                src={images.heroCouple}
                alt={images.heroCoupleAlt}
                className="hero-couple-img"
                style={{ objectPosition: images.heroCouplePosition }}
                loading="eager"
              />
            </div>
          </div>

          {/* Couple Names Positioned Around the Image (Never covering faces) */}
          <div className="hero-names-wrap">
            <h1 className="hero-groom-name">{groomShort}</h1>
            <span className="hero-ampersand" aria-hidden="true">&amp;</span>
            <span className="hero-bride-name">{brideShort}</span>
          </div>

          <div className="hero-event-details">
            <p className="hero-date-time">{weddingDateTime}</p>
            <p className="hero-location">{venueCity}</p>
          </div>

          {/* Live Countdown */}
          <div className="hero-countdown-wrap" aria-label="Wedding Countdown">
            <div className="countdown-grid">
              <div className="countdown-card">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-card">
                <span className="countdown-value">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-card">
                <span className="countdown-value">{timeLeft.minutes}</span>
                <span className="countdown-label">Mins</span>
              </div>
              <div className="countdown-card">
                <span className="countdown-value">{timeLeft.seconds}</span>
                <span className="countdown-label">Secs</span>
              </div>
            </div>

            {timeLeft.hasPassed && (
              <p className="countdown-placeholder-notice">
                The celebration has commenced
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
