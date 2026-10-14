import React from 'react';
import { weddingConfig } from '../weddingConfig';
import CeremonyPanel from './CeremonyPanel';

/**
 * SECTION THREE: INDIAN WEDDING CEREMONIES
 * 
 * 4 full-screen ceremony panels in exact order:
 * 1. Mehendi  (deep green, botanical motif, Hindi: मेहंदी)
 * 2. Haldi    (turmeric yellow, marigold motif, Hindi: हल्दी)
 * 3. Sangeet  (deep plum, rhythm dots, Hindi: संगीत)
 * 4. Wedding  (deep crimson, mandap arch, Hindi: विवाह)
 * 
 * Desktop: sticky stacked scroll effect.
 * Mobile: natural vertical flow.
 */
export function CeremonyStack() {
  const { mehendi, haldi, sangeet, wedding } = weddingConfig;

  return (
    <div className="ceremonies-stack-container" aria-label="Indian Wedding Ceremonies">
      {/* 1. MEHENDI */}
      <CeremonyPanel
        id="mehendi"
        englishName={mehendi.name || 'Mehendi'}
        hindiName={mehendi.hindiName || 'मेहंदी'}
        dateTime={mehendi.dateTime}
        panelClass="ceremony-panel-mehendi"
        motifType="mehendi"
      />

      {/* 2. HALDI */}
      <CeremonyPanel
        id="haldi"
        englishName={haldi.name || 'Haldi'}
        hindiName={haldi.hindiName || 'हल्दी'}
        dateTime={haldi.dateTime}
        panelClass="ceremony-panel-haldi"
        motifType="haldi"
      />

      {/* 3. SANGEET */}
      <CeremonyPanel
        id="sangeet"
        englishName={sangeet.name || 'Sangeet'}
        hindiName={sangeet.hindiName || 'संगीत'}
        dateTime={sangeet.dateTime}
        panelClass="ceremony-panel-sangeet"
        motifType="sangeet"
      />

      {/* 4. WEDDING */}
      <CeremonyPanel
        id="wedding"
        englishName={wedding.name || 'Wedding'}
        hindiName={wedding.hindiName || 'विवाह'}
        dateTime={wedding.dateTime}
        panelClass="ceremony-panel-wedding"
        motifType="wedding"
      />
    </div>
  );
}

export default CeremonyStack;
