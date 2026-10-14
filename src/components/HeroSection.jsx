import React, { useState, useEffect } from 'react';
import { weddingConfig, isPlaceholder } from '../weddingConfig';
import { MandalaOrnament } from './OrnamentalIcons';

/**
 * SECTION ONE: THE HERO
 * 
 * Elegant composition featuring:
 * - Architectural gold arch framing the couple's names
 * - Groom's name, gold ampersand, Bride's name
 * - Wedding date, time, and venue location
 * - Live countdown (or graceful placeholder if date is not configured)
 * - Faint rotating non-religious geometric mandala behind the composition
 */
export function HeroSection() {
  const { groom, bride, weddingDateTime, venueName, venueCity } = weddingConfig;

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: '—',
    hours: '—',
    minutes: '—',
    seconds: '—',
    isConfigured: false,
    hasPassed: false,
  });

  useEffect(() => {
    // If the date is still a placeholder or empty, do not fabricate countdown
    if (isPlaceholder(weddingDateTime)) {
      setTimeLeft({
        days: '—',
        hours: '—',
        minutes: '—',
        seconds: '—',
        isConfigured: false,
        hasPassed: false,
      });
      return;
    }

    const targetDate = new Date(weddingDateTime).getTime();
    if (isNaN(targetDate)) {
      setTimeLeft({
        days: '—',
        hours: '—',
        minutes: '—',
        seconds: '—',
        isConfigured: false,
        hasPassed: false,
      });
      return;
    }

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isConfigured: true,
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
        isConfigured: true,
        hasPassed: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [weddingDateTime]);

  // Venue location display line
  const locationDisplay = !isPlaceholder(venueCity)
    ? venueCity
    : !isPlaceholder(venueName)
    ? venueName
    : null;

  return (
    <section id="hero" className="hero-section" aria-label="Wedding Invitation Hero">
      {/* Faint rotating non-religious geometric mandala */}
      <div className="hero-mandala-wrap">
        <MandalaOrnament size={560} />
      </div>

      <div className="hero-content">
        {/* Architectural Gold Arch Frame */}
        <div className="hero-arch-frame">
          <span className="hero-kicker">Wedding Invitation</span>

          <div className="hero-names-wrap">
            <h1 className="hero-groom-name">{groom}</h1>
            <span className="hero-ampersand" aria-hidden="true">&amp;</span>
            <span className="hero-bride-name">{bride}</span>
          </div>

          <div className="hero-event-details">
            <p className="hero-date-time">{weddingDateTime}</p>
            {locationDisplay && <p className="hero-location">{locationDisplay}</p>}
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

            {!timeLeft.isConfigured && (
              <p className="countdown-placeholder-notice">
                Wedding date to be announced · Set weddingDateTime in weddingConfig.js
              </p>
            )}
            {timeLeft.isConfigured && timeLeft.hasPassed && (
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
