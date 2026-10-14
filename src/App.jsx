import React, { useState } from 'react';
import InvitationOpening from './components/InvitationOpening';
import CoupleHero from './components/CoupleHero';
import BrideGroomIntroduction from './components/BrideGroomIntroduction';
import TheirJourney from './components/TheirJourney';
import HaldiSection from './components/HaldiSection';
import MehendiSection from './components/MehendiSection';
import SangeetSection from './components/SangeetSection';
import WeddingCeremonySection from './components/WeddingCeremonySection';
import ReceptionSection from './components/ReceptionSection';
import VenueSection from './components/VenueSection';
import ClosingSection from './components/ClosingSection';
import AmbientMusicPlayer from './components/AmbientMusicPlayer';

export function App() {
  // State for the invitation opening card overlay
  const [isOpeningOpen, setIsOpeningOpen] = useState(true);

  const handleOpenInvitation = () => {
    setIsOpeningOpen(false);
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wedding-invitation-app">
      {/* SECTION ONE: THE INVITATION OPENING */}
      <InvitationOpening
        isOpen={isOpeningOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Floating Gentle Indian Wedding Music Control */}
      <AmbientMusicPlayer />

      <main>
        {/* SECTION TWO: THE COUPLE HERO */}
        <CoupleHero />

        {/* SECTION THREE: MEET THE BRIDE AND GROOM */}
        <BrideGroomIntroduction />

        {/* SECTION FOUR: THEIR JOURNEY */}
        <TheirJourney />

        {/* SECTION FIVE: THE WEDDING CELEBRATIONS */}
        <section
          className="invitation-section celebrations-wrapper-section"
          aria-label="Wedding celebration itinerary"
        >
          <div className="invitation-container">
            <div className="celebrations-main-header">
              <span className="section-eyebrow">SACRED TRADITIONS & RITUALS</span>
              <h2>The Wedding Celebrations</h2>
              <div className="traditional-motif" aria-hidden="true">
                <i>𑁍</i>
              </div>
              <p className="celebrations-intro-text">
                A joyous celebration of two families coming together across five cherished gatherings of music, traditions, and joyful beginnings.
              </p>
            </div>

            {/* 1. Haldi */}
            <HaldiSection />

            {/* 2. Mehendi */}
            <MehendiSection />

            {/* 3. Sangeet */}
            <SangeetSection />

            {/* 4. Wedding Ceremony (Centerpiece) */}
            <WeddingCeremonySection />

            {/* 5. Reception */}
            <ReceptionSection />
          </div>
        </section>

        {/* SECTION SIX: A PLACE TO GATHER — DESTINATION VENUE */}
        <VenueSection />
      </main>

      {/* SECTION SEVEN: A FINAL NOTE */}
      <ClosingSection />
    </div>
  );
}

export default App;
