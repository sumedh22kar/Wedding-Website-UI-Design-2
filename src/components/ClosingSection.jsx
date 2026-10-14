import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { GoldDivider } from './OrnamentalIcons';

/**
 * SECTION SIX: CLOSING
 * 
 * Calm, refined stationery sign-off:
 * - Sidharth Malhotra
 * - Small gold ornamental divider
 * - Kiara Advani
 */
export function ClosingSection() {
  const { groom, bride } = weddingConfig;

  return (
    <footer className="closing-section" aria-label="Invitation Closing">
      <div className="closing-content">
        <p className="closing-groom-name">{groom}</p>
        <div className="closing-divider-wrap">
          <GoldDivider width={160} />
        </div>
        <p className="closing-bride-name">{bride}</p>
      </div>
    </footer>
  );
}

export default ClosingSection;
