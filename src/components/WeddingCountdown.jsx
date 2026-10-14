import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import weddingConfig from '../weddingConfig';

export function WeddingCountdown() {
  const { countdown } = weddingConfig;
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [isConfigured, setIsConfigured] = useState(true);

  function calculateTimeLeft() {
    if (!countdown.targetDate) {
      return null;
    }

    const target = new Date(countdown.targetDate).getTime();
    if (isNaN(target)) {
      return null;
    }

    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  }

  useEffect(() => {
    if (!countdown.targetDate || isNaN(new Date(countdown.targetDate).getTime())) {
      setIsConfigured(false);
      return;
    }

    setIsConfigured(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown.targetDate]);

  const padZero = (n) => String(n).padStart(2, '0');

  return (
    <section className="countdown-section" aria-label="Countdown to our celebration">
      <div className="container">
        <motion.div
          className="countdown-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">COUNTING EVERY SUNSET</span>
          <h2>Until We Celebrate</h2>

          {!isConfigured || !timeLeft ? (
            <div className="countdown-fallback">
              <Clock size={20} style={{ margin: '0 auto 10px', color: 'var(--terracotta)' }} />
              <p>{countdown.emptyPlaceholder}</p>
            </div>
          ) : timeLeft.isPast ? (
            <div className="countdown-fallback">
              <p>{countdown.completedMessage}</p>
            </div>
          ) : (
            <div className="countdown-grid">
              <div className="countdown-box">
                <span className="countdown-number">{padZero(timeLeft.days)}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-number">{padZero(timeLeft.hours)}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-number">{padZero(timeLeft.minutes)}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-number">{padZero(timeLeft.seconds)}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default WeddingCountdown;
