/**
 * ==============================================================================
 * CENTRAL WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * Cinematic Indian Wedding Invitation Experience
 * Featuring: Virat Kohli & Anushka Sharma
 * Location: Amalfi Coast, Italy (Conceptual Showcase)
 */

export const weddingConfig = {
  // Couple Details
  groom: 'VIRAT KOHLI',
  groomShort: 'VIRAT',
  groomRole: 'THE GROOM',
  bride: 'ANUSHKA SHARMA',
  brideShort: 'ANUSHKA',
  brideRole: 'THE BRIDE',

  // Scene Three: Shared Couple Message
  coupleMessage:
    'With the love and blessings of our families, we would be delighted to have you with us as we celebrate the beginning of a beautiful new chapter.',
  coupleSignoff: 'WITH LOVE,',
  coupleSignoffNames: 'VIRAT & ANUSHKA',

  // Final Scene: Warm Closing
  closingEyebrow: 'WITH LOVE AND BLESSINGS',
  closingNames: 'VIRAT & ANUSHKA',

  // Scene Four: The Four Indian Wedding Ceremonies
  ceremonies: {
    mehendi: {
      id: 'mehendi',
      title: 'MEHENDI',
      hindiTitle: 'मेहंदी',
      date: 'Thursday, 16th December 2026',
      time: '4:00 PM onwards',
    },
    haldi: {
      id: 'haldi',
      title: 'HALDI',
      hindiTitle: 'हल्दी',
      date: 'Friday, 17th December 2026',
      time: '10:30 AM onwards',
    },
    sangeet: {
      id: 'sangeet',
      title: 'SANGEET',
      hindiTitle: 'संगीत',
      date: 'Friday, 17th December 2026',
      time: '7:30 PM onwards',
    },
    wedding: {
      id: 'wedding',
      title: 'THE WEDDING',
      hindiTitle: 'विवाह',
      date: 'Saturday, 18th December 2026',
      time: '4:30 PM onwards',
    },
  },

  // Scene Five: Destination Venue
  venue: {
    sectionHeading: 'THE CELEBRATION',
    name: 'Villa Bellissima Estate',
    address: 'Via Panoramica, 84017 Positano SA, Amalfi Coast, Italy',
    locationNote: 'Positano, Amalfi Coast · Italy (Conceptual Venue Showcase)',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Via+Panoramica%2C+84017+Positano+SA%2C+Amalfi+Coast%2C+Italy',
  },

  // EXACT FIVE LOCAL PHOTOGRAPHS
  images: {
    // Image 1 — Virat and Anushka together, warm indoor photograph (Hero Opening)
    heroCouple: '/images/couple-home.jpg',
    heroCoupleAlt: 'Virat Kohli and Anushka Sharma in an affectionate, intimate embrace',
    heroPosition: 'center 22%',

    // Image 2 — Virat Kohli solo portrait (Groom Introduction)
    groomPortrait: '/images/virat-portrait.jpg',
    groomPortraitAlt: 'Virat Kohli solo portrait in tailored evening attire',
    groomPosition: 'center 20%',

    // Image 3 — Anushka Sharma solo portrait (Bride Introduction)
    bridePortrait: '/images/anushka-portrait.jpg',
    bridePortraitAlt: 'Anushka Sharma solo portrait in black evening blazer with golden sunlight',
    bridePosition: 'center 18%',

    // Image 4 — Second Virat and Anushka couple photograph (Shared Couple Section)
    sharedCouple: '/images/couple-garden.jpg',
    sharedCoupleAlt: 'Virat Kohli and Anushka Sharma together in garden setting, Anushka in ivory silk',
    sharedPosition: 'center 20%',

    // Image 5 — Italian coastal sunset photograph (Destination Venue)
    venueSunset: '/images/amalfi-coast.jpg',
    venueSunsetAlt: 'Sunset over dramatic Italian coastal cliffs and Mediterranean sea in Positano',
    venuePosition: 'center 38%',
  },
};

export default weddingConfig;
