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

  // Color Tokens matching creative direction with rich, vibrant dark royal jewel tones
  colors: {
    royalPink: '#C75B78',
    jaipurRose: '#E87A90',
    deepMaroon: '#3B0716',
    velvetMaroon: '#240208',
    champagneGold: '#D2AA55',
    brightGold: '#F5D77F',
    warmIvory: '#F8EEE9',
    saffron: '#F59E0B',
    deepPlum: '#26042E',
    botanicalGreen: '#0D3822',
    terracotta: '#D97706',
    goldGlint: '#FFE8A3',
    midnightNavy: '#0B1124',
    darkEmerald: '#071D12',
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

  // The Four Indian Wedding Ceremonies — Vibrant, High-Impact Jewel Worlds
  ceremonies: {
    mehendi: {
      id: 'mehendi',
      title: 'MEHENDI',
      hindiTitle: 'मेहंदी',
      date: 'Thursday, 16th December 2026',
      time: '4:00 PM onwards',
      theme: 'Botanical World',
      themeColor: '#071D12',
      accentColor: '#10B981',
      goldAccent: '#F5D77F',
      gradient: 'linear-gradient(150deg, #071D12 0%, #0F3A24 55%, #05140C 100%)',
      glow: 'rgba(16, 185, 129, 0.35)',
      description: 'An afternoon steeped in delicate henna patterns, fragrant mogra blossoms, and gentle sitar melodies.',
    },
    haldi: {
      id: 'haldi',
      title: 'HALDI',
      hindiTitle: 'हल्दी',
      date: 'Friday, 17th December 2026',
      time: '10:30 AM onwards',
      theme: 'Marigold World',
      themeColor: '#381502',
      accentColor: '#F59E0B',
      goldAccent: '#FDE047',
      gradient: 'linear-gradient(150deg, #381502 0%, #682905 55%, #240A01 100%)',
      glow: 'rgba(245, 158, 11, 0.4)',
      description: 'A morning filled with fragrant turmeric paste, golden genda phool showers, and celebratory blessings.',
    },
    sangeet: {
      id: 'sangeet',
      title: 'SANGEET',
      hindiTitle: 'संगीत',
      date: 'Friday, 17th December 2026',
      time: '7:30 PM onwards',
      theme: 'Rhythm and Movement',
      themeColor: '#1A0524',
      accentColor: '#C084FC',
      goldAccent: '#FBBF24',
      gradient: 'linear-gradient(150deg, #1A0524 0%, #3B0952 55%, #100216 100%)',
      glow: 'rgba(192, 132, 252, 0.4)',
      description: 'An evening of rhythmic folk beats, celebratory musical performances, and dancing under the stars.',
    },
    wedding: {
      id: 'wedding',
      title: 'THE WEDDING',
      hindiTitle: 'विवाह',
      date: 'Saturday, 18th December 2026',
      time: '4:30 PM onwards',
      theme: 'Royal Architecture',
      themeColor: '#2A040D',
      accentColor: '#F43F5E',
      goldAccent: '#F5D77F',
      gradient: 'linear-gradient(150deg, #2A040D 0%, #52091B 55%, #160107 100%)',
      glow: 'rgba(244, 63, 94, 0.45)',
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
