import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * Ambient Indian Wedding Music Player
 * Uses Web Audio API to create a gentle, warm, soothing traditional
 * sitar & tanpura meditative wedding harmony without external audio files.
 */
export function AmbientMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const masterGainRef = useRef(null);

  // Frequencies for a peaceful Indian wedding Raag (Bhoopali / Yaman notes: Sa, Re, Ga, Pa, Dha)
  // Base D note: D3 (146.8Hz), E3 (164.8Hz), F#3 (185Hz), A3 (220Hz), B3 (246.9Hz), D4 (293.7Hz)
  const notes = [146.83, 164.81, 185.0, 220.0, 246.94, 293.66, 329.63, 369.99];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
      
      const masterGain = audioCtxRef.current.createGain();
      masterGain.gain.setValueAtTime(0.12, audioCtxRef.current.currentTime);
      masterGain.connect(audioCtxRef.current.destination);
      masterGainRef.current = masterGain;

      // Create warm gentle tanpura drone base
      playDrone(audioCtxRef.current, masterGain);
    }
  };

  const playDrone = (ctx, destination) => {
    // 2 warm harmonic oscillators for drone
    [146.83, 220.0].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      osc.connect(gain);
      gain.connect(destination);
      osc.start();
    });
  };

  const playSitarPluck = (freq) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Rich string tone
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    // Quick attack, gentle slow decay like a sitar or veena string
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);
    
    osc.connect(gain);
    gain.connect(masterGainRef.current);
    
    osc.start();
    osc.stop(ctx.currentTime + 2.5);
  };

  const startMusic = () => {
    initAudio();
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    setIsPlaying(true);

    // Sequence graceful melodic sitar notes
    let noteIndex = 0;
    const sequence = [0, 2, 3, 4, 5, 4, 3, 2, 0, 3, 5, 7, 5, 4, 2, 0];
    
    intervalRef.current = setInterval(() => {
      const noteFreq = notes[sequence[noteIndex % sequence.length]];
      playSitarPluck(noteFreq);
      noteIndex++;
    }, 700);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="floating-music-widget" aria-label="Wedding celebration music player">
      <button
        type="button"
        className={`music-toggle-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Mute background wedding music' : 'Play background wedding music'}
        title={isPlaying ? 'Mute Shehnai & Sitar Melody' : 'Play Shehnai & Sitar Melody'}
      >
        <div className="music-icon-wrap">
          {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </div>
        
        <span className="music-label">
          {isPlaying ? 'Wedding Raga' : 'Play Music'}
        </span>

        {/* Animated equalizer waves */}
        {isPlaying && (
          <div className="equalizer-bars" aria-hidden="true">
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </div>
        )}
      </button>
    </div>
  );
}

export default AmbientMusicPlayer;
