import React, { useState, useRef, useEffect } from 'react';
import { weddingConfig } from './weddingConfig';
import JaipurBackgroundWorld from './components/JaipurBackgroundWorld';
import RoyalInvitationEnvelope from './components/RoyalInvitationEnvelope';
import HeroScene from './components/HeroScene';
import PortraitsScene from './components/PortraitsScene';
import SharedStoryScene from './components/SharedStoryScene';
import CeremoniesScene from './components/CeremoniesScene';
import DestinationScene from './components/DestinationScene';
import FinalCompositionScene from './components/FinalCompositionScene';
import AmbientAudioController from './components/AmbientAudioController';

/**
 * ==============================================================================
 * ROYAL JAIPUR: CINEMATIC WEDDING INVITATION EXPERIENCE
 * ==============================================================================
 * Groom: Sidharth Malhotra
 * Bride: Kiara Advani
 * Destination: Jaipur, Rajasthan, India
 * 
 * Continuous scroll-driven architecture with a stable base environment,
 * choreographed foreground motion, and all six supplied photographs.
 */
export function App() {
  const [isOpeningOpen, setIsOpeningOpen] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  // Play background celebration music
  const handleStartMusic = () => {
    try {
      if (!audioRef.current) {
        const audio = new Audio(weddingConfig.audio.src);
        audio.loop = true;
        audio.volume = 0.8;
        audioRef.current = audio;
      }
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlayingMusic(true))
          .catch((err) => {
            console.warn('Audio playback waiting for gesture:', err);
            setIsPlayingMusic(false);
          });
      }
    } catch (e) {
      console.warn('Audio error:', e);
    }
  };

  const handleToggleMusic = () => {
    if (!audioRef.current) {
      handleStartMusic();
      return;
    }
    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch(console.warn);
    } else {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    }
  };

  const handleOpeningComplete = () => {
    setIsOpeningOpen(false);
  };

  return (
    <div className="royal-jaipur-app-root">
      {/* LAYER 1 & 2: Stable, Continuous Jaipur World Environment */}
      <JaipurBackgroundWorld activeTheme="default" />

      {/* SCENE ONE: The Royal Invitation Reveal (Envelope & 3D S&K Seal) */}
      {isOpeningOpen && (
        <RoyalInvitationEnvelope
          isOpen={isOpeningOpen}
          onOpenStart={handleStartMusic}
          onComplete={handleOpeningComplete}
        />
      )}

      {/* Persistent Audio Controller */}
      <AmbientAudioController
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />

      {/* SCROLL-DRIVEN CINEMATIC JOURNEY */}
      <main className="cinematic-scroll-container">
        {/* SCENE TWO: The Hero World (Image 1: sidharth-kiara-hero.jpg) */}
        <HeroScene />

        {/* SCENE THREE: Individual Introductions (Image 2: sidharth & Image 3: kiara) */}
        <PortraitsScene />

        {/* SCENE FOUR: Their Shared Story (Image 4: royal traditional wedding & Image 5: celebration) */}
        <SharedStoryScene />

        {/* SCENE FIVE: The Four Indian Wedding Celebrations (Mehendi, Haldi, Sangeet, Wedding) */}
        <CeremoniesScene />

        {/* SCENE SIX: The Jaipur Destination (Image 6: jal-mahal-venue.jpg) */}
        <DestinationScene />
      </main>

      {/* SCENE SEVEN: The Final Composition */}
      <FinalCompositionScene />
    </div>
  );
}

export default App;
