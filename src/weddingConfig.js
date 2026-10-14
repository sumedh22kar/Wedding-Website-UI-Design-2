/**
 * ==============================================================================
 * CENTRAL WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * All names, dates, times, ceremony details, venue information, WhatsApp number,
 * and image paths are configured in this single central object.
 *
 * Placeholders are preserved until configured by the hosts.
 */

export const weddingConfig = {
  // Groom and Bride Names
  groom: '[Groom Name]',
  bride: '[Bride Name]',

  // Wedding Date and Time (e.g. '2026-12-18 16:30' or 'December 18, 2026 16:30')
  weddingDateTime: '[Date, time]',

  // Venue Information
  venueName: '[Venue name]',
  venueAddress: '[Venue address]',
  venueCity: '[City / Location]',

  // The Four Indian Wedding Ceremonies (in exact sequence: Mehendi, Haldi, Sangeet, Wedding)
  mehendi: {
    name: 'Mehendi',
    hindiName: 'मेहंदी',
    dateTime: '[date, time]',
  },
  haldi: {
    name: 'Haldi',
    hindiName: 'हल्दी',
    dateTime: '[date, time]',
  },
  sangeet: {
    name: 'Sangeet',
    hindiName: 'संगीत',
    dateTime: '[date, time]',
  },
  wedding: {
    name: 'Wedding',
    hindiName: 'विवाह',
    dateTime: '[date, time]',
  },

  // Photos: replace placeholders with local asset paths (e.g., '/images/virat-portrait.jpg')
  groomPhoto: '[groom photo]',
  bridePhoto: '[bride photo]',
  couplePhoto: '[couple photo]',

  // Optional local venue photograph
  venuePhoto: '/images/amalfi-coast.jpg',

  // Object position adjustments to prevent cutting off heads/faces
  groomPhotoPosition: 'center 20%',
  bridePhotoPosition: 'center 18%',
  couplePhotoPosition: 'center 22%',

  // WhatsApp RSVP Contact Number (international format without '+' or spaces, e.g. '919876543210')
  whatsAppNumber: '[WhatsApp number with country code]',
};

/**
 * Checks whether a field value is currently a placeholder or empty.
 * Returns true if the value is unconfigured.
 */
export function isPlaceholder(val) {
  if (!val || typeof val !== 'string') return true;
  const trimmed = val.trim();
  if (trimmed === '') return true;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) return true;
  if (trimmed.toLowerCase().includes('placeholder')) return true;
  return false;
}

/**
 * Computes initials for monogram / wax seal.
 * Defaults to 'G & B' when placeholders are present.
 */
export function getCoupleInitials(groom, bride) {
  const gInitial = (!isPlaceholder(groom) && groom[0]) ? groom[0].toUpperCase() : 'G';
  const bInitial = (!isPlaceholder(bride) && bride[0]) ? bride[0].toUpperCase() : 'B';
  return `${gInitial} & ${bInitial}`;
}

export default weddingConfig;
