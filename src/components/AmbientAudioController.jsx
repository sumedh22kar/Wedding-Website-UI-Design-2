import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * AMBIENT AUDIO CONTROLLER — PROMINENT MUSIC ON / OFF
 * 
 * Features:
 * - Persistent, high-visibility floating luxury control
 * - Explicit 'MUSIC ON' / 'MUSIC OFF' labels with status indicators
 * - Animated rhythmic soundwave bars when music is playing
 * - Instant click/tap toggle for celebration music
 * - Positioned safely so it never overlaps content or buttons
 */
export function AmbientAudioController({ isPlaying, onTogglePlay }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside className="ambient-audio-floating" aria-label="Wedding Music Player">
      <button
        type="button"
        className={`audio-music-pill-btn ${isPlaying ? 'pill-playing' : 'pill-muted'}`}
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Turn celebration music OFF' : 'Turn celebration music ON'}
        title={isPlaying ? 'Music is ON • Tap to turn OFF' : 'Music is OFF • Tap to turn ON'}
      >
        {/* Dynamic Icon */}
        <div className="audio-disc-icon-wrap" aria-hidden="true">
          <span className={`audio-disc-emoji ${isPlaying ? 'disc-spinning' : ''}`}>
            {isPlaying ? '🎵' : '🔇'}
          </span>
        </div>

        {/* Explicit ON / OFF Text Label */}
        <div className="audio-label-block">
          <span className="audio-state-tag">
            <span className={`status-dot ${isPlaying ? 'dot-active' : 'dot-inactive'}`} />
            {isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}
          </span>
          <span className="audio-track-subtitle">
            {isPlaying ? 'Kudmayi Playing' : 'Tap to Play'}
          </span>
        </div>

        {/* Animated Sound Wave Bars when ON */}
        {isPlaying && (
          <div className="audio-soundwaves-visual" aria-hidden="true">
            <span className="wave-line line-1" />
            <span className="wave-line line-2" />
            <span className="wave-line line-3" />
            <span className="wave-line line-4" />
          </div>
        )}
      </button>
    </aside>
  );
}

export default AmbientAudioController;
