/**
 * ==============================================================================
 * CENTRAL WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * Conceptual Showcase: Virat Kohli & Anushka Sharma
 * Location: Amalfi Coast, Italy
 *
 * All five provided images are mapped locally and explicitly below.
 */

export const weddingConfig = {
  // Couple Information
  groom: 'Virat Kohli',
  groomShort: 'Virat',
  bride: 'Anushka Sharma',
  brideShort: 'Anushka',

  // Wedding Date, Time, and Live Countdown Target
  weddingDateTime: 'Saturday, 18th December 2026 · 4:30 PM',
  countdownTarget: '2026-12-18T16:30:00',

  // Italian Destination Venue
  venueName: 'Villa Bellissima Estate',
  venueCity: 'Positano, Amalfi Coast · Italy',
  venueAddress: 'Via Panoramica, 84017 Positano SA, Amalfi Coast, Italy',

  // The Four Indian Wedding Ceremonies in exact sequence
  mehendi: {
    name: 'Mehendi',
    hindiName: 'मेहंदी',
    dateTime: 'Thursday, 16th December 2026 · 4:00 PM',
  },
  haldi: {
    name: 'Haldi',
    hindiName: 'हल्दी',
    dateTime: 'Friday, 17th December 2026 · 10:30 AM',
  },
  sangeet: {
    name: 'Sangeet',
    hindiName: 'संगीत',
    dateTime: 'Friday, 17th December 2026 · 7:30 PM',
  },
  wedding: {
    name: 'Wedding',
    hindiName: 'विवाह',
    dateTime: 'Saturday, 18th December 2026 · 4:30 PM',
  },

  // THE 5 PROVIDED LOCAL IMAGES — MAPPED EXPLICITLY
  images: {
    // IMAGE 1 — VIRAT KOHLI SOLO PORTRAIT (Groom introduction)
    groomPortrait: '/images/virat-portrait.jpg',
    groomPortraitAlt: 'Virat Kohli solo portrait in tailored evening attire',
    groomPosition: 'center 20%',

    // IMAGE 2 — ANUSHKA SHARMA SOLO PORTRAIT (Bride introduction)
    bridePortrait: '/images/anushka-portrait.jpg',
    bridePortraitAlt: 'Anushka Sharma solo portrait in black blazer with golden sunlight',
    bridePosition: 'center 18%',

    // IMAGE 3 — FIRST COUPLE PHOTOGRAPH (Main hero focal point)
    heroCouple: '/images/couple-home.jpg',
    heroCoupleAlt: 'Virat Kohli and Anushka Sharma in an affectionate, intimate embrace',
    heroCouplePosition: 'center 22%',

    // IMAGE 4 — SECOND COUPLE PHOTOGRAPH (Shared moments editorial section)
    sharedCouple: '/images/couple-garden.jpg',
    sharedCoupleAlt: 'Virat Kohli and Anushka Sharma together in garden setting, Anushka in ivory silk',
    sharedCouplePosition: 'center 20%',

    // IMAGE 5 — ITALIAN COASTAL VENUE PHOTOGRAPH (Cinematic venue showcase)
    venueLandscape: '/images/amalfi-coast.jpg',
    venueLandscapeAlt: 'Sunset over dramatic Italian coastal cliffs and Mediterranean sea in Positano',
    venuePosition: 'center 38%',
  },

  // WhatsApp RSVP Contact Number (Country code + international number without '+')
  whatsAppNumber: '919876543210',
};

/**
 * Computes initials for monogram / wax seal.
 */
export function getCoupleInitials(groom, bride) {
  const gInitial = groom && groom[0] ? groom[0].toUpperCase() : 'V';
  const bInitial = bride && bride[0] ? bride[0].toUpperCase() : 'A';
  return `${gInitial} & ${bInitial}`;
}

/**
 * Checks whether a field value is currently a placeholder or empty.
 */
export function isPlaceholder(val) {
  if (!val || typeof val !== 'string') return true;
  const trimmed = val.trim();
  if (trimmed === '') return true;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) return true;
  if (trimmed.toLowerCase().includes('placeholder')) return true;
  return false;
}

export default weddingConfig;
