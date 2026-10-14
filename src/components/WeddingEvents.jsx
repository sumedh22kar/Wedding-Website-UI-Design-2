import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Sparkles } from 'lucide-react';
import weddingConfig from '../weddingConfig';

const rowVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WeddingEvents() {
  const { events } = weddingConfig;

  return (
    <section id="celebration" className="celebration-section section-padding" aria-label="Wedding celebration itinerary">
      <div className="container">
        {/* Section Header */}
        <div className="celebration-header">
          <span className="eyebrow">THE CELEBRATION ITINERARY</span>
          <h2>
            Please join us in <em>celebrating love.</em>
          </h2>
          <p>
            An intimate gathering of family and lifelong friends across the golden hours of the Italian coast.
          </p>
        </div>

        {/* Refined Event Rows */}
        <div className="events-list">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              className="event-row"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rowVariant}
            >
              {/* Event Timing & Badge */}
              <div className="event-meta">
                <span className="event-badge">{event.badge}</span>
                <div className="event-date-row">
                  <CalendarDays size={16} className="event-meta-icon" />
                  <span>{event.date}</span>
                </div>
                <div className="event-time-row">
                  <Clock size={16} className="event-meta-icon" />
                  <span>{event.time}</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-venue">
                  <MapPin size={16} className="event-meta-icon" />
                  <span>{event.venue}</span>
                </div>
                <p className="event-desc">{event.description}</p>
                {event.dressCode && (
                  <div className="event-dresscode">
                    <Sparkles size={14} />
                    <span>Attire: {event.dressCode}</span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="celebration-note">
          DEMO CELEBRATION SCHEDULE · EVENT DATES & DETAILS ARE PLACEHOLDERS
        </p>
      </div>
    </section>
  );
}

export default WeddingEvents;
