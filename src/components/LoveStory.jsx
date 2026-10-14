import React from 'react';
import { motion } from 'framer-motion';
import weddingConfig from '../weddingConfig';

const timelineVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function LoveStory() {
  const { story, assets } = weddingConfig;

  return (
    <section id="story" className="story-section section-padding" aria-label="Our love story timeline">
      <div className="container">
        <div className="story-grid">
          {/* Visual Column: Second Couple Photograph in Ivory & Black */}
          <motion.div
            className="story-photo-col"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="story-frame">
              <img
                src={assets.storyCouple}
                alt={assets.storyCoupleAlt}
                style={{ objectPosition: assets.storyCouplePosition }}
                loading="lazy"
              />
              <span className="story-frame-caption">Together in Ivory & Twilight</span>
            </div>
          </motion.div>

          {/* Editorial Content & Timeline Column */}
          <div className="story-content-col">
            <span className="eyebrow eyebrow-no-lines">{story.eyebrow}</span>
            <h2>
              Some stories feel <em>like home.</em>
            </h2>
            <p className="story-lead">{story.intro}</p>

            {/* Three Elegant Milestones Timeline */}
            <div className="story-timeline">
              {story.milestones.map((item, idx) => (
                <motion.div
                  key={item.number}
                  className="timeline-item"
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={timelineVariant}
                >
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-meta">
                    <span className="timeline-num">{item.number}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                  </div>
                  <p className="timeline-quote">“{item.quote}”</p>
                  <p className="timeline-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveStory;
