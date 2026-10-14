import React from 'react';
import {
  MehendiMotif,
  HaldiMotif,
  SangeetMotif,
  MandapArchMotif,
  GoldDivider,
} from './OrnamentalIcons';

/**
 * Single Ceremony Panel Component.
 * Supports Mehendi, Haldi, Sangeet, and Wedding.
 */
export function CeremonyPanel({
  id,
  englishName,
  hindiName,
  dateTime,
  panelClass,
  motifType,
}) {
  const renderMotif = () => {
    switch (motifType) {
      case 'mehendi':
        return <MehendiMotif className="ceremony-motif-svg" />;
      case 'haldi':
        return <HaldiMotif className="ceremony-motif-svg" />;
      case 'sangeet':
        return <SangeetMotif className="ceremony-motif-svg" />;
      case 'wedding':
        return <MandapArchMotif className="ceremony-motif-svg" />;
      default:
        return <GoldDivider />;
    }
  };

  return (
    <section
      id={id}
      className={`ceremony-panel ${panelClass}`}
      aria-label={`${englishName} ceremony`}
    >
      <div className="ceremony-content-box">
        {/* Cultural non-religious motif */}
        <div className="ceremony-motif-wrap" aria-hidden="true">
          {renderMotif()}
        </div>

        {/* Hindi Ceremony Name in Tiro Devanagari Hindi */}
        <span className="ceremony-title-hindi" lang="hi">
          {hindiName}
        </span>

        {/* English Ceremony Name in Bodoni Moda */}
        <h2 className="ceremony-title-english">{englishName}</h2>

        {/* Gold Divider */}
        <GoldDivider width={140} />

        {/* Configured Ceremony Date & Time */}
        <div className="ceremony-details-box">
          <p className="ceremony-date-text">{dateTime}</p>
        </div>
      </div>
    </section>
  );
}

export default CeremonyPanel;
