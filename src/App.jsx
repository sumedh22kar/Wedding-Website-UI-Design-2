import React, { useState } from 'react';
import InvitationOpening from './components/InvitationOpening';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import CeremonyStack from './components/CeremonyStack';
import VenueSection from './components/VenueSection';
import RSVPSection from './components/RSVPSection';
import ClosingSection from './components/ClosingSection';

/**
 * THE MODERN INDIAN WEDDING INVITATION
 * 
 * Mobile-first, single-page wedding stationery experience.
 * Structure:
 * 1. Opening Envelope Animation (3D realistic stationery seal & card sequence)
 * 2. Section One: The Hero (Names in gold arch, date/time, live countdown)
 * 3. Section Two: The Couple (Balanced Groom and Bride architectural portraits)
 * 4. Section Three: The Four Indian Ceremonies (Mehendi, Haldi, Sangeet, Wedding)
 * 5. Section Four: Venue (Venue name, address, Google Maps directions)
 * 6. Section Five: RSVP (Attendance selection, WhatsApp message generation)
 * 7. Section Six: Closing (Groom name, gold divider, Bride name)
 */
export function App() {
  const [isOpeningOpen, setIsOpeningOpen] = useState(true);

  const handleOpenInvitation = () => {
    setIsOpeningOpen(false);
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wedding-invitation-app">
      {/* Signature 3D Opening Envelope Interaction */}
      <InvitationOpening
        isOpen={isOpeningOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main Wedding Invitation Document */}
      <main>
        {/* Page Section One: The Hero */}
        <HeroSection />

        {/* Page Section Two: The Couple */}
        <CoupleSection />

        {/* Page Section Three: The Four Indian Wedding Ceremonies */}
        <CeremonyStack />

        {/* Page Section Four: Venue */}
        <VenueSection />

        {/* Page Section Five: RSVP */}
        <RSVPSection />
      </main>

      {/* Page Section Six: Closing */}
      <ClosingSection />
    </div>
  );
}

export default App;
