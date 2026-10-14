/**
 * Central Indian Wedding Invitation Configuration
 * Virat Kohli & Anushka Sharma Conceptual Showcase
 * 
 * Separates cultural and event content from presentation.
 * Easily customizable for any Indian destination wedding.
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    title: 'Virat & Anushka',
    openingEyebrow: 'WITH LOVE AND BLESSINGS',
    openingSubtitle: 'An invitation to celebrate\na beautiful beginning',
    heroKicker: 'TOGETHER IS A BEAUTIFUL PLACE TO BE',
    heroTagline: 'Two lives, two families, one beautiful celebration.',
    
    // Bride Profile
    bride: {
      name: 'Anushka',
      fullName: 'Anushka Sharma',
      title: 'Meet Anushka',
      description:
        'Grace in her smile, warmth in her heart, and a beautiful way of making ordinary moments feel special. Today, she begins a wonderful new chapter surrounded by love, laughter, and family.',
      portrait: '/images/anushka-portrait.jpg',
      portraitAlt: 'Portrait of Anushka Sharma in elegant black blazer with golden sunlight',
      objectPosition: 'center 18%',
    },

    // Groom Profile
    groom: {
      name: 'Virat',
      fullName: 'Virat Kohli',
      title: 'Meet Virat',
      description:
        'Full of determination, warmth, and a spirit that embraces every moment wholeheartedly. Today, he steps into a new chapter filled with love, family, and beautiful memories waiting to be made.',
      portrait: '/images/virat-portrait.jpg',
      portraitAlt: 'Portrait of Virat Kohli in tailored evening attire',
      objectPosition: 'center 20%',
    },
  },

  // Existing Project Images Mapping
  assets: {
    heroCouple: '/images/couple-home.jpg',
    heroCoupleAlt: 'Virat Kohli and Anushka Sharma in an affectionate, intimate embrace',
    heroCouplePosition: 'center 22%',

    storyCouple: '/images/couple-garden.jpg',
    storyCoupleAlt: 'Virat and Anushka together, Anushka in ivory silk and Virat in black',
    storyCouplePosition: 'center 18%',

    bridePortrait: '/images/anushka-portrait.jpg',
    groomPortrait: '/images/virat-portrait.jpg',

    coastalVenue: '/images/amalfi-coast.jpg',
    coastalVenueAlt: 'Golden hour sunset over dramatic Italian coastal village and Mediterranean waters',
    coastalVenuePosition: 'center 38%',
  },

  // Section 4: Their Journey
  journey: {
    heading: 'EVERY BEAUTIFUL STORY HAS ITS MOMENTS',
    intro:
      'Through little moments and lasting memories, a beautiful journey continues. And now, surrounded by the love of family and friends, a new chapter begins.',
    milestones: [
      {
        number: '01',
        title: 'THE BEGINNING',
        subtitle: 'Where a new chapter started.',
        description: 'A serendipitous meeting that turned quiet moments into boundless laughter and conversations that felt like coming home.',
      },
      {
        number: '02',
        title: 'THE JOURNEY',
        subtitle: 'Where memories became part of the story.',
        description: 'Walking hand in hand through every triumph and quiet evening, building a friendship rooted in shared devotion and joy.',
      },
      {
        number: '03',
        title: 'THE NEXT CHAPTER',
        subtitle: 'Where two families come together to celebrate love.',
        description: 'Surrounded by the warm blessings of our parents and elders, stepping forward into an eternal promise of companionship.',
      },
    ],
  },

  // Section 5: Five Distinct Indian Wedding Celebrations
  celebrations: {
    // 1. Haldi
    haldi: {
      id: 'haldi',
      name: 'Haldi',
      tagline: 'SUNSHINE & BLESSINGS',
      message:
        'Let the celebrations begin with sunshine, laughter, and blessings for a beautiful journey ahead.',
      date: 'Thursday, 16th October',
      time: '10:30 AM onwards',
      venue: 'The Sunlit Courtyard · Villa Bellissima',
      address: 'Via Panoramica 12, Positano, Amalfi Coast, Italy',
      dressCode: 'Shades of Haldi, Marigold & Saffron',
      note: 'Followed by traditional festive lunch and dhol beats.',
    },

    // 2. Mehendi
    mehendi: {
      id: 'mehendi',
      name: 'Mehendi',
      tagline: 'COLOUR & TRADITION',
      message:
        'An afternoon of beautiful traditions, intricate designs, laughter, and memories to treasure.',
      date: 'Thursday, 16th October',
      time: '4:00 PM onwards',
      venue: 'The Lemon Grove Terrace · Villa Bellissima',
      address: 'Via Panoramica 12, Positano, Amalfi Coast, Italy',
      dressCode: 'Sage, Mint, Flora & Dusty Rose Pastels',
      note: 'Hand-applied henna artists, folk music, and coastal high tea.',
    },

    // 3. Sangeet
    sangeet: {
      id: 'sangeet',
      name: 'Sangeet',
      tagline: 'MUSIC & MAGIC',
      message:
        'An evening of music, dancing, laughter, and unforgettable moments with the people we love.',
      date: 'Friday, 17th October',
      time: '7:30 PM onwards',
      venue: 'The Grand Pavilion · Villa Bellissima',
      address: 'Via Panoramica 12, Positano, Amalfi Coast, Italy',
      dressCode: 'Festive Glamour, Deep Jewel Tones & Mirrors',
      note: 'Performances by family & friends, followed by celebrations till late.',
    },

    // 4. Wedding Ceremony (Centerpiece)
    ceremony: {
      id: 'ceremony',
      name: 'Wedding Ceremony',
      tagline: 'A PROMISE FOREVER',
      message:
        'With the blessings of our families and the love of our dear ones, we invite you to witness the beginning of forever.',
      date: 'Saturday, 18th October',
      time: '4:00 PM — Sunset Pheras',
      venue: 'The Cliffside Mandap · Villa Bellissima',
      address: 'Via Panoramica 12, Positano, Amalfi Coast, Italy',
      dressCode: 'Traditional Indian Festive / Ivory, Gold & Pastel Florals',
      note: 'Sunset Varmala & Pheras overlooking the Tyrrhenian Sea.',
    },

    // 5. Reception
    reception: {
      id: 'reception',
      name: 'Reception',
      tagline: 'AN EVENING TO REMEMBER',
      message:
        'Join us for an evening of joy, togetherness, and beautiful memories as we celebrate a new beginning.',
      date: 'Sunday, 19th October',
      time: '8:00 PM onwards',
      venue: 'The Sea View Lawn & Lantern Pergola',
      address: 'Via Panoramica 12, Positano, Amalfi Coast, Italy',
      dressCode: 'Formal Black Tie or Royal Evening Attire',
      note: 'Dinner, heartfelt toasts, and celebratory dancing under the stars.',
    },
  },

  // Section 6: Destination Venue & Location
  venue: {
    heading: 'A BEAUTIFUL PLACE FOR OUR CELEBRATION',
    supportingText:
      'Imagine a golden sunset, the gentle sound of the sea, and the people who make every moment special.',
    name: 'Villa Bellissima Estate',
    location: 'Positano, Amalfi Coast · Italy',
    address: 'Via Panoramica, 84017 Positano SA, Amalfi Coast, Italy',
    dateTime: '16th — 19th October · Positano, Italy',
    isDemoVenue: true,
    demoNotice: 'Demo destination venue — replace with your verified location',
    mapQuery: 'Positano, Amalfi Coast, Salerno, Italy',
    get directionsUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        this.address
      )}`;
    },
    get embedUrl() {
      return `https://maps.google.com/maps?q=${encodeURIComponent(
        this.mapQuery
      )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    },
  },

  // Section 7: Final Note / Closing
  closing: {
    heading: 'YOUR PRESENCE WOULD MAKE OUR CELEBRATION EVEN MORE SPECIAL',
    signoff: 'With love and blessings,\nVirat & Anushka',
    dateAndLocation: 'October 16th – 19th · Positano, Amalfi Coast, Italy',
    note: 'Demo Wedding Invitation Concept · Created with love',
  },
};

export default weddingConfig;
