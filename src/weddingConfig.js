/**
 * ==============================================================================
 * CENTRAL WEDDING INVITATION CONFIGURATION — ROYAL JAIPUR CINEMATIC EXPERIENCE
 * ==============================================================================
 * Couple: Sidharth Malhotra & Kiara Advani
 * Destination: Jaipur, Rajasthan, India
 * Motion Reference: Scroll-driven layered cinematic storytelling
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    groom: 'SIDHARTH MALHOTRA',
    groomShort: 'SIDHARTH',
    groomRole: 'THE GROOM',
    groomHindiRole: 'वर',
    bride: 'KIARA ADVANI',
    brideShort: 'KIARA',
    brideRole: 'THE BRIDE',
    brideHindiRole: 'वधू',
    sharedHeadline: 'TWO LIVES. ONE BEAUTIFUL CELEBRATION.',
    monogram: 'S & K',
    monogramLabel: 'Royal Monogram S & K — Sidharth & Kiara',
    invitationSubtitle: 'A Celebration of Love in the Pink City',
  },

  // Color Tokens matching creative direction
  colors: {
    royalPink: '#C75B78',
    jaipurRose: '#D98B91',
    deepMaroon: '#4A0F22',
    champagneGold: '#D2AA55',
    warmIvory: '#F8EEE9',
    saffron: '#E6A83C',
    deepPlum: '#48263F',
    botanicalGreen: '#355C45',
    terracotta: '#B9634A',
    goldGlint: '#FFE8A3',
  },

  // Exactly Six High-Resolution Photographs
  images: {
    // 1. Hero Opening Couple Photograph (Intimate embrace)
    heroCouple: '/images/sidharth-kiara-hero.jpg',
    heroCoupleAlt: 'Sidharth Malhotra and Kiara Advani in an affectionate, intimate embrace',
    heroPosition: 'center 32%',

    // 2. Solo Groom Portrait
    groomPortrait: '/images/sidharth-portrait.jpg',
    groomPortraitAlt: 'Sidharth Malhotra solo portrait in architectural arch',
    groomPosition: 'center 18%',

    // 3. Solo Bride Portrait
    bridePortrait: '/images/kiara-portrait.jpg',
    bridePortraitAlt: 'Kiara Advani solo portrait in golden sunlight',
    bridePosition: 'center 18%',

    // 4. Royal Traditional Wedding Ceremony Portrait (Traditional attire in palace arch)
    royalCeremonyCouple: '/images/sidharth-kiara-royal.jpg',
    royalCeremonyCoupleAlt: 'Sidharth Malhotra and Kiara Advani in royal traditional wedding attire at palace arch',
    royalCeremonyPosition: 'center 20%',

    // 5. Celebration Festive Couple Photograph (Joyful celebration under lights)
    celebrationCouple: '/images/sidharth-kiara-celebration.jpg',
    celebrationCoupleAlt: 'Sidharth Malhotra and Kiara Advani celebrating joyfully with warm festivity lights',
    celebrationPosition: 'center 22%',

    // 6. Destination Venue Photograph (Jal Mahal at sunset)
    venueSunset: '/images/jal-mahal-venue.jpg',
    venueSunsetAlt: 'Sunset over the majestic Jal Mahal palace on Man Sagar Lake in Jaipur, Rajasthan',
    venuePosition: 'center 38%',

    // 3D Royal Wax Seal Monogram SVG
    sealMonogram: '/images/SK-seal.svg',
    sealMonogramAlt: 'Royal Wax Seal Monogram S & K — Sidharth Malhotra & Kiara Advani',
  },

  // The Four Indian Wedding Ceremonies
  ceremonies: {
    mehendi: {
      id: 'mehendi',
      title: 'MEHENDI',
      hindiTitle: 'मेहंदी',
      date: 'Thursday, 16th December 2026',
      time: '4:00 PM onwards',
      theme: 'Botanical World',
      themeColor: '#355C45',
      accentColor: '#D2AA55',
      description: 'An afternoon steeped in delicate henna patterns, fragrant mogra blossoms, and gentle sitar melodies.',
    },
    haldi: {
      id: 'haldi',
      title: 'HALDI',
      hindiTitle: 'हल्दी',
      date: 'Friday, 17th December 2026',
      time: '10:30 AM onwards',
      theme: 'Marigold World',
      themeColor: '#E6A83C',
      accentColor: '#B9634A',
      description: 'A morning filled with fragrant turmeric paste, golden genda phool showers, and celebratory blessings.',
    },
    sangeet: {
      id: 'sangeet',
      title: 'SANGEET',
      hindiTitle: 'संगीत',
      date: 'Friday, 17th December 2026',
      time: '7:30 PM onwards',
      theme: 'Rhythm and Movement',
      themeColor: '#48263F',
      accentColor: '#D2AA55',
      description: 'An evening of rhythmic folk beats, celebratory musical performances, and dancing under the stars.',
    },
    wedding: {
      id: 'wedding',
      title: 'THE WEDDING',
      hindiTitle: 'विवाह',
      date: 'Saturday, 18th December 2026',
      time: '4:30 PM onwards',
      theme: 'Royal Architecture',
      themeColor: '#4A0F22',
      accentColor: '#D2AA55',
      description: 'The sacred Saat Phere solemnised against a royal palace mandap bathed in twilight pink hues.',
    },
  },

  // Destination Venue in Jaipur
  venue: {
    city: 'JAIPUR, RAJASTHAN',
    state: 'Rajasthan, India',
    name: 'Jal Mahal Palace & Water Estate',
    address: 'Amer Road, Jal Mahal, Amber, Jaipur, Rajasthan 302002, India',
    note: 'Jaipur, Rajasthan · India (Palace Heritage Showcase)',
    coordinates: '26.9656° N, 75.8457° E • Jaipur, Rajasthan',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jal+Mahal+Amber+Jaipur+Rajasthan+India',
  },

  // Background Audio
  audio: {
    trackTitle: 'Kudmayi',
    src: '/music/Pritam_Sachet_Tandon_Amitabh_Bhattacharya_-_Kudmayi_From_Rocky_Aur_Rani_Kii_Prem_Kahaani_(mp3.pm).mp3',
  },
};

export default weddingConfig;
