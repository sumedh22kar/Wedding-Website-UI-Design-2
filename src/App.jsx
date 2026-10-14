import React, { useState } from 'react';
import InvitationOpening from './components/InvitationOpening';
import CinematicHero from './components/CinematicHero';
import PortraitsSection from './components/PortraitsSection';
import SharedCoupleSection from './components/SharedCoupleSection';
import CeremoniesSection from './components/CeremoniesSection';
import DestinationVenueSection from './components/DestinationVenueSection';
import WarmClosingSection from './components/WarmClosingSection';

/**
 * CINEMATIC INDIAN WEDDING INVITATION EXPERIENCE
 * Featuring: Virat Kohli & Anushka Sharma
 * 
 * Flow Sequence:
 * - Living Opening Handcrafted Envelope Experience (Interactive 3D Opening)
 * 1. FULL-SCREEN COUPLE HERO (Image 1: couple-home.jpg)
 * 2. BRIDE AND GROOM PORTRAITS (Image 2: virat-portrait.jpg & Image 3: anushka-portrait.jpg)
 * 3. SHARED COUPLE MOMENT (Image 4: couple-garden.jpg + personal message)
 * 4. INDIAN WEDDING CELEBRATIONS (Mehendi, Haldi, Sangeet, Wedding)
 * 5. CINEMATIC DESTINATION VENUE (Image 5: amalfi-coast.jpg + Open in Maps)
 * 6. ELEGANT CLOSING (WITH LOVE AND BLESSINGS / VIRAT & ANUSHKA)
 */
export function App() {
  const [isOpeningOpen, setIsOpeningOpen] = useState(true);

  const handleOpeningComplete = () => {
    setIsOpeningOpen(false);
  };

  return (
    <div className="wedding-invitation-app cinematic-experience-root">
      {/* Living Handcrafted Wedding Invitation Opening Overlay */}
      {isOpeningOpen && (
        <InvitationOpening
          isOpen={isOpeningOpen}
          onComplete={handleOpeningComplete}
        />
      )}

      {/* SCENE ONE: FULL-SCREEN COUPLE HERO */}
      <CinematicHero />

      <main>
        {/* SCENE TWO: INTRODUCING THE GROOM AND BRIDE */}
        <PortraitsSection />

        {/* SCENE THREE: THE COUPLE TOGETHER */}
        <SharedCoupleSection />

        {/* SCENE FOUR: THE INDIAN WEDDING CELEBRATIONS */}
        <CeremoniesSection />

        {/* SCENE FIVE: THE DESTINATION VENUE */}
        <DestinationVenueSection />
      </main>

      {/* FINAL SCENE: A WARM CLOSING */}
      <WarmClosingSection />
    </div>
  );
}

export default App;
