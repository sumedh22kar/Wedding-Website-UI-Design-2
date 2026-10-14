import React, { useState } from 'react';
import { weddingConfig, isPlaceholder } from '../weddingConfig';
import { GoldDivider } from './OrnamentalIcons';

/**
 * SECTION FIVE: RSVP
 * 
 * Heading: KINDLY REPLY
 * Form fields:
 * - Guest name
 * - Attendance (YES, ATTENDING or NO, UNABLE TO ATTEND)
 * - Number of guests
 * Single Action: REPLY ON WHATSAPP
 * Validates inputs, formats WhatsApp message, and opens WhatsApp in new tab.
 */
export function RSVPSection() {
  const { whatsAppNumber } = weddingConfig;
  const isNumberConfigured = !isPlaceholder(whatsAppNumber);

  // Form State
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('YES, ATTENDING');
  const [guestCount, setGuestCount] = useState('1');
  const [errors, setErrors] = useState({});

  // Clean WhatsApp number (digits only, no + or spaces)
  const cleanPhone = whatsAppNumber ? whatsAppNumber.replace(/\D/g, '') : '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNumberConfigured || !cleanPhone) {
      setErrors({ form: 'WhatsApp number is not configured in weddingConfig.js' });
      return;
    }

    const newErrors = {};

    if (!guestName.trim()) {
      newErrors.guestName = 'Please enter your name';
    }

    if (!attendance) {
      newErrors.attendance = 'Please select your attendance';
    }

    const countNum = parseInt(guestCount, 10);
    if (attendance === 'YES, ATTENDING' && (isNaN(countNum) || countNum < 1)) {
      newErrors.guestCount = 'Please enter at least 1 guest';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct the formatted WhatsApp message
    const formattedAttendance = attendance === 'YES, ATTENDING' ? 'Yes, Attending' : 'Unable to Attend';
    const finalGuestCount = attendance === 'YES, ATTENDING' ? (guestCount || '1') : '0';

    const message = [
      'Wedding Invitation Reply',
      `Name: ${guestName.trim()}`,
      `Attendance: ${formattedAttendance}`,
      `Guests: ${finalGuestCount}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="rsvp" className="rsvp-section" aria-label="RSVP">
      <div className="invitation-container-narrow">
        <div className="rsvp-card">
          <span className="eyebrow-label">RSVP</span>
          <h2 className="section-heading">Kindly Reply</h2>
          <GoldDivider width={120} />

          <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
            {/* Warning if WhatsApp number is unconfigured */}
            {!isNumberConfigured && (
              <div className="rsvp-warning-banner" role="alert">
                <strong>Host Configuration Note:</strong> <code>whatsAppNumber</code> is currently set to placeholder in <code>src/weddingConfig.js</code>. Please supply a valid international number to enable RSVP transmission.
              </div>
            )}

            {/* Guest Name Field */}
            <div className="form-group">
              <label htmlFor="rsvp-guest-name" className="form-label">
                Your Name
              </label>
              <input
                id="rsvp-guest-name"
                type="text"
                className="form-input"
                placeholder="Full Name"
                value={guestName}
                onChange={(e) => {
                  setGuestName(e.target.value);
                  if (errors.guestName) {
                    setErrors((prev) => ({ ...prev, guestName: null }));
                  }
                }}
                required
              />
              {errors.guestName && (
                <span className="form-error-text" role="alert">
                  {errors.guestName}
                </span>
              )}
            </div>

            {/* Attendance Toggle */}
            <div className="form-group">
              <span className="form-label">Attendance</span>
              <div className="attendance-toggle-group" role="radiogroup" aria-label="Attendance options">
                <button
                  type="button"
                  role="radio"
                  aria-checked={attendance === 'YES, ATTENDING'}
                  className={`attendance-toggle-btn ${
                    attendance === 'YES, ATTENDING' ? 'is-active' : ''
                  }`}
                  onClick={() => setAttendance('YES, ATTENDING')}
                >
                  Yes, Attending
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={attendance === 'NO, UNABLE TO ATTEND'}
                  className={`attendance-toggle-btn ${
                    attendance === 'NO, UNABLE TO ATTEND' ? 'is-active' : ''
                  }`}
                  onClick={() => setAttendance('NO, UNABLE TO ATTEND')}
                >
                  No, Unable to Attend
                </button>
              </div>
              {errors.attendance && (
                <span className="form-error-text" role="alert">
                  {errors.attendance}
                </span>
              )}
            </div>

            {/* Number of Guests (Only needed if attending) */}
            {attendance === 'YES, ATTENDING' && (
              <div className="form-group">
                <label htmlFor="rsvp-guest-count" className="form-label">
                  Number of Guests
                </label>
                <input
                  id="rsvp-guest-count"
                  type="number"
                  min="1"
                  max="10"
                  className="form-input"
                  value={guestCount}
                  onChange={(e) => {
                    setGuestCount(e.target.value);
                    if (errors.guestCount) {
                      setErrors((prev) => ({ ...prev, guestCount: null }));
                    }
                  }}
                  required
                />
                {errors.guestCount && (
                  <span className="form-error-text" role="alert">
                    {errors.guestCount}
                  </span>
                )}
              </div>
            )}

            {/* General form error */}
            {errors.form && (
              <span className="form-error-text text-center" role="alert">
                {errors.form}
              </span>
            )}

            {/* Reply on WhatsApp Button */}
            <button
              type="submit"
              className="btn-luxury"
              disabled={!isNumberConfigured}
              aria-disabled={!isNumberConfigured}
            >
              Reply on WhatsApp
            </button>

            <p className="rsvp-note">
              This will launch WhatsApp with your pre-filled reply. You can review the message before pressing send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RSVPSection;
