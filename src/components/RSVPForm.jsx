import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Heart, Send, Sparkles } from 'lucide-react';
import weddingConfig from '../weddingConfig';

export function RSVPForm() {
  const { rsvp } = weddingConfig;

  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: '', // 'attending' | 'declining'
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.attendance) {
      newErrors.attendance = 'Please select whether you will be joining us.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success response for showcase demo
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      guests: '1',
      attendance: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="rsvp" className="rsvp-section section-padding" aria-label="RSVP to the celebration">
      <div className="container">
        <motion.div
          className="rsvp-card-container"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="rsvp-header">
            <span className="rsvp-flower-icon">✳</span>
            <span className="eyebrow">YOUR PRESENCE IS OUR GIFT</span>
            <h2>
              It would mean the world to <em>have you with us.</em>
            </h2>
            <p className="rsvp-subtext">{rsvp.subheading}</p>
          </div>

          {submitted ? (
            /* Elegant Success State */
            <motion.div
              className="rsvp-success-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rsvp-success-icon">
                <Heart size={28} />
              </div>

              <h3 className="rsvp-success-title">
                Thank you, {formData.name}.
              </h3>

              <p className="rsvp-success-desc">
                {formData.attendance === 'attending'
                  ? `We are overjoyed to know you and your party of ${formData.guests} will be celebrating with us in Italy.`
                  : 'We will truly miss having you with us, but your warm wishes and love will be felt across every mile.'}
              </p>

              <div className="editorial-divider">
                <span />
                <i>✦</i>
                <span />
              </div>

              <button
                type="button"
                className="btn-outline"
                onClick={resetForm}
              >
                Modify Response
              </button>

              <p className="rsvp-footer-note" style={{ marginTop: '20px' }}>
                {rsvp.demoNotice}
              </p>
            </motion.div>
          ) : (
            /* Interactive RSVP Form */
            <form onSubmit={handleSubmit} className="rsvp-form" noValidate>
              {/* Guest Name */}
              <div className="form-group">
                <label htmlFor="rsvp-name" className="form-label">
                  Your Full Name *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              {/* Number of Guests */}
              <div className="form-group">
                <label htmlFor="rsvp-guests" className="form-label">
                  Number of Guests Attending
                </label>
                <select
                  id="rsvp-guests"
                  className="form-select"
                  value={formData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              {/* Attendance Choice Buttons */}
              <div className="form-group">
                <label className="form-label">
                  Will You Attend? *
                </label>
                <div className="rsvp-choice-grid">
                  <button
                    type="button"
                    className={`rsvp-choice-btn ${formData.attendance === 'attending' ? 'active' : ''}`}
                    onClick={() => handleInputChange('attendance', 'attending')}
                  >
                    <Check size={16} />
                    <span>Joyfully Accepts</span>
                  </button>

                  <button
                    type="button"
                    className={`rsvp-choice-btn ${formData.attendance === 'declining' ? 'active' : ''}`}
                    onClick={() => handleInputChange('attendance', 'declining')}
                  >
                    <X size={16} />
                    <span>Regretfully Declines</span>
                  </button>
                </div>
                {errors.attendance && <span className="form-error">{errors.attendance}</span>}
              </div>

              {/* Optional Message */}
              <div className="form-group">
                <label htmlFor="rsvp-message" className="form-label">
                  A Personal Note or Dietary Preferences (Optional)
                </label>
                <textarea
                  id="rsvp-message"
                  className="form-textarea"
                  placeholder="Share a wish for the couple or let us know about any culinary preferences..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
                <span>Send Response</span>
                <Send size={15} />
              </button>

              <p className="rsvp-footer-note">
                {rsvp.demoNotice}
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default RSVPForm;
