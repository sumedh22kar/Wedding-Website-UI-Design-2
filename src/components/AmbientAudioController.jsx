import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';

/**
 * AMBIENT AUDIO CONTROLLER
 * 
 * Elegant floating gold control:
 * - Plays "Kudmayi" automatically when invitation is opened
 * - Allows guest to mute/unmute seamlessly
 * - Animated soundwave bars when music is playing
 */
export function AmbientAudioController({ isPlaying, onTogglePlay }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside className="ambient-audio-floating" aria-label="Audio Controls">
      <button
        type="button"
        className={`audio-toggle-btn ${isPlaying ? 'audio-active' : 'audio-muted'}`}
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Mute ambient celebration music' : 'Play ambient celebration music'}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        <span className="audio-music-icon" aria-hidden="true">
          {isPlaying ? '♫' : '♪'}
        </span>

        {/* Animated Sound Wave Bars */}
        <div className="audio-wave-bars" aria-hidden="true">
          <span className="wave-bar bar-1" />
          <span className="wave-bar bar-2" />
          <span className="wave-bar bar-3" />
        </div>

        <span className="audio-tooltip-label">
          {isPlaying ? 'Kudmayi (Playing)' : 'Play Music'}
        </span>
      </button>
    </aside>
  );
}

export default AmbientAudioController;
