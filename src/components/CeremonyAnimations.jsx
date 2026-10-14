import React from 'react';

/**
 * ==============================================================================
 * CEREMONY ANIMATIONS — CULTURALLY RICH & ART-DIRECTED
 * ==============================================================================
 * 1. MehendiDrawingAnimation:
 *    Intricate henna mandala & paisley art drawing itself in real-time with
 *    an animated golden henna cone depositing dark henna lines and paste dots.
 * 
 * 2. SangeetDancingCouple:
 *    Celebratory Garba / Dandiya dancers with rhythmic swaying, striking dandiyas,
 *    swirling lehenga, floating musical notes, and rhythm sparkles.
 * 
 * 3. WeddingRoyalCouple:
 *    Regal Indian Bride & Groom under a royal mandap with Varmala garlands,
 *    fluttering bridal dupatta, sacred Agni flame, and falling blessing rose petals.
 * ==============================================================================
 */

// 1. MEHENDI DRAWING ANIMATION — Live Henna Art Drawing on Section
export function MehendiDrawingAnimation() {
  return (
    <div className="mehendi-drawing-scene" aria-hidden="true">
      {/* Decorative Henna Cone that moves as if drawing live */}
      <div className="henna-artist-cone">
        <svg width="44" height="60" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cone body with gold foil wrap */}
          <polygon points="22,58 2,10 42,10" fill="url(#coneGoldGrad)" stroke="#B38728" strokeWidth="0.8" />
          <polygon points="22,58 14,10 30,10" fill="url(#coneDarkGrad)" opacity="0.6" />
          {/* Cone rolled top */}
          <ellipse cx="22" cy="10" rx="20" ry="6" fill="#D2AA55" stroke="#9E7528" strokeWidth="0.8" />
          <ellipse cx="22" cy="10" rx="14" ry="4" fill="#6A1A24" />
          {/* Fine cone tip depositing fresh dark henna paste */}
          <circle cx="22" cy="58" r="2.5" fill="#1C3829" />
          <circle cx="22" cy="58" r="1.2" fill="#E7C97D" className="henna-tip-spark" />
          <defs>
            <linearGradient id="coneGoldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5D77F" />
              <stop offset="50%" stopColor="#D2AA55" />
              <stop offset="100%" stopColor="#8A6417" />
            </linearGradient>
            <linearGradient id="coneDarkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1C3B2B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2A5C43" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Intricate Henna Canvas with stroke drawing paths */}
      <svg
        className="mehendi-drawn-canvas-svg"
        width="340"
        height="180"
        viewBox="0 0 340 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hennaGoldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8EEE9" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#D2AA55" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#173F35" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background glow beneath henna */}
        <circle cx="170" cy="90" r="75" fill="url(#hennaGoldGlow)" />

        {/* LEFT PAISLEY (AMBI) MOTIF */}
        <g className="henna-motif left-paisley">
          <path
            className="henna-stroke stroke-paisley-body"
            d="M 120 90 C 80 60, 40 70, 30 100 C 20 130, 60 155, 90 140 C 115 125, 110 95, 85 95 C 65 95, 60 115, 75 120"
            stroke="#D2AA55"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Inner paisley mesh & lace */}
          <path
            className="henna-stroke stroke-paisley-inner"
            d="M 50 105 Q 65 90 85 105 Q 65 120 50 105 Z"
            stroke="#E7C97D"
            strokeWidth="1"
            fill="#D2AA55"
            fillOpacity="0.12"
          />
          <path
            className="henna-stroke stroke-paisley-frills"
            d="M 30 100 C 22 90, 22 75, 34 68 C 44 62, 58 70, 68 80"
            stroke="#D2AA55"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Decorative henna dots along spine */}
          <circle cx="28" cy="95" r="2" fill="#D2AA55" className="henna-dot dot-1" />
          <circle cx="36" cy="78" r="2.2" fill="#D2AA55" className="henna-dot dot-2" />
          <circle cx="48" cy="68" r="2" fill="#D2AA55" className="henna-dot dot-3" />
          <circle cx="62" cy="62" r="1.8" fill="#D2AA55" className="henna-dot dot-4" />
        </g>

        {/* RIGHT PAISLEY (AMBI) MOTIF */}
        <g className="henna-motif right-paisley">
          <path
            className="henna-stroke stroke-paisley-body-right"
            d="M 220 90 C 260 60, 300 70, 310 100 C 320 130, 280 155, 250 140 C 225 125, 230 95, 255 95 C 275 95, 280 115, 265 120"
            stroke="#D2AA55"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Inner paisley mesh & lace */}
          <path
            className="henna-stroke stroke-paisley-inner-right"
            d="M 290 105 Q 275 90 255 105 Q 275 120 290 105 Z"
            stroke="#E7C97D"
            strokeWidth="1"
            fill="#D2AA55"
            fillOpacity="0.12"
          />
          <path
            className="henna-stroke stroke-paisley-frills-right"
            d="M 310 100 C 318 90, 318 75, 306 68 C 296 62, 282 70, 272 80"
            stroke="#D2AA55"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Decorative henna dots along spine */}
          <circle cx="312" cy="95" r="2" fill="#D2AA55" className="henna-dot dot-1" />
          <circle cx="304" cy="78" r="2.2" fill="#D2AA55" className="henna-dot dot-2" />
          <circle cx="292" cy="68" r="2" fill="#D2AA55" className="henna-dot dot-3" />
          <circle cx="278" cy="62" r="1.8" fill="#D2AA55" className="henna-dot dot-4" />
        </g>

        {/* CENTRAL SACRED MANDALA */}
        <g className="henna-motif central-mandala">
          {/* Outer Scalloped Lace Ring */}
          <circle
            className="henna-stroke stroke-mandala-ring-outer"
            cx="170"
            cy="90"
            r="48"
            stroke="#D2AA55"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          {/* Main Petal Mandala Ring */}
          <circle
            className="henna-stroke stroke-mandala-ring-mid"
            cx="170"
            cy="90"
            r="36"
            stroke="#E7C97D"
            strokeWidth="1.4"
          />
          {/* Radiating 8-Petal Floral Flower */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
              key={angle}
              className={`henna-stroke stroke-petal stroke-petal-${i}`}
              d={`M 170 90 Q ${170 + 26 * Math.cos(((angle - 15) * Math.PI) / 180)} ${
                90 + 26 * Math.sin(((angle - 15) * Math.PI) / 180)
              } ${170 + 36 * Math.cos((angle * Math.PI) / 180)} ${
                90 + 36 * Math.sin((angle * Math.PI) / 180)
              } Q ${170 + 26 * Math.cos(((angle + 15) * Math.PI) / 180)} ${
                90 + 26 * Math.sin(((angle + 15) * Math.PI) / 180)
              } 170 90`}
              stroke="#D2AA55"
              strokeWidth="1.2"
              fill="#D2AA55"
              fillOpacity="0.15"
            />
          ))}

          {/* Inner Hub & Center Star */}
          <circle
            className="henna-stroke stroke-mandala-center"
            cx="170"
            cy="90"
            r="16"
            stroke="#D2AA55"
            strokeWidth="1.5"
            fill="#173F35"
          />
          <circle cx="170" cy="90" r="7" fill="#D2AA55" className="henna-core-dot" />

          {/* 8 Scalloped Outer Pearls */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle
              key={angle}
              cx={170 + 48 * Math.cos((angle * Math.PI) / 180)}
              cy={90 + 48 * Math.sin((angle * Math.PI) / 180)}
              r="2.2"
              fill="#E7C97D"
              className="henna-outer-pearl"
            />
          ))}

          {/* Hanging leaf accents below mandala */}
          <path
            className="henna-stroke stroke-vine-stem"
            d="M 170 138 Q 170 162 170 172"
            stroke="#D2AA55"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            className="henna-stroke stroke-vine-leaf-l"
            d="M 170 150 Q 155 152 150 160 Q 162 162 170 156"
            stroke="#D2AA55"
            strokeWidth="1"
            fill="#D2AA55"
            fillOpacity="0.2"
          />
          <path
            className="henna-stroke stroke-vine-leaf-r"
            d="M 170 156 Q 185 158 190 166 Q 178 168 170 162"
            stroke="#D2AA55"
            strokeWidth="1"
            fill="#D2AA55"
            fillOpacity="0.2"
          />
          <circle cx="170" cy="174" r="2.5" fill="#D2AA55" />
        </g>
      </svg>
    </div>
  );
}

// 2. SANGEET DANCING CELEBRATION — Animated Indian Garba & Dandiya Dancers
export function SangeetDancingCouple() {
  return (
    <div className="sangeet-dancers-scene" aria-hidden="true">
      {/* Radiating Musical Beats & Golden Sparkles */}
      <div className="sangeet-music-notes">
        <span className="music-note note-1">♪</span>
        <span className="music-note note-2">♫</span>
        <span className="music-note note-3">♩</span>
        <span className="music-note note-4">♬</span>
        <span className="rhythm-sparkle spark-1">✧</span>
        <span className="rhythm-sparkle spark-2">✦</span>
      </div>

      <svg
        className="sangeet-dancers-svg"
        width="340"
        height="190"
        viewBox="0 0 340 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dancerGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F9E2A8" />
            <stop offset="50%" stopColor="#D2AA55" />
            <stop offset="100%" stopColor="#A07928" />
          </linearGradient>
          <linearGradient id="lehengaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D2AA55" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#4A0F22" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D2AA55" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="kurtaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E7C97D" />
            <stop offset="100%" stopColor="#A47D2E" />
          </linearGradient>
        </defs>

        {/* Circular stage ring under dancers */}
        <ellipse cx="170" cy="172" rx="100" ry="12" stroke="#D2AA55" strokeWidth="1" strokeDasharray="5 3" opacity="0.5" />
        <ellipse cx="170" cy="172" rx="70" ry="8" stroke="#D2AA55" strokeWidth="0.8" opacity="0.3" />

        {/* Central Dandiya Clack Strike Sparkles */}
        <g className="dandiya-clack-burst" transform="translate(170, 78)">
          <circle cx="0" cy="0" r="6" fill="#F8EEE9" opacity="0.9" className="strike-flash" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#F9E2A8" strokeWidth="1.5" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#F9E2A8" strokeWidth="1.5" />
          <line x1="-8" y1="-8" x2="8" y2="8" stroke="#F9E2A8" strokeWidth="1.2" />
          <line x1="8" y1="-8" x2="-8" y2="8" stroke="#F9E2A8" strokeWidth="1.2" />
        </g>

        {/* ============================================================
            DANCER 1 (LEFT — FEMALE DANCER WITH SWIRLING LEHENGA)
            ============================================================ */}
        <g className="dancer-character female-dancer">
          {/* Swirling Flowing Dupatta Overhead */}
          <path
            className="dancer-dupatta"
            d="M 95 65 C 80 30, 115 15, 135 32 C 145 42, 130 65, 120 70"
            stroke="url(#dancerGoldGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* Head & Jhumkas */}
          <circle cx="118" cy="46" r="8" fill="url(#dancerGoldGrad)" />
          {/* Hair Bun with Gajra flowers */}
          <ellipse cx="112" cy="43" rx="5" ry="4" fill="#6A1A24" />
          <circle cx="110" cy="41" r="1.5" fill="#FFFFFF" />
          <circle cx="112" cy="45" r="1.5" fill="#FFFFFF" />
          {/* Slender Upper Body (Choli) */}
          <path d="M 118 54 L 114 85 L 128 85 L 123 54 Z" fill="url(#dancerGoldGrad)" />
          {/* Bangles on Waist / Kamarbandh */}
          <line x1="112" y1="85" x2="130" y2="85" stroke="#F9E2A8" strokeWidth="2.5" />

          {/* Dynamic Swirling Lehenga (Flared Skirt) */}
          <path
            className="dancer-lehenga-skirt"
            d="M 114 85 Q 90 120 72 155 Q 120 166 162 155 Q 140 120 128 85 Z"
            fill="url(#lehengaGrad)"
            stroke="#D2AA55"
            strokeWidth="1.5"
          />
          {/* Lehenga Border Zari Embroidery */}
          <path
            d="M 75 151 Q 120 162 159 151"
            stroke="#F8EEE9"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          {/* Dancing Feet with Ghungroo */}
          <circle cx="106" cy="166" r="3" fill="#D2AA55" />
          <circle cx="132" cy="167" r="3" fill="#D2AA55" />

          {/* Left Arm Raised Holding Striking Dandiya */}
          <g className="dancer-arm-left">
            <path d="M 122 60 Q 142 58 158 72" stroke="url(#dancerGoldGrad)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Dandiya Stick */}
            <line x1="148" y1="88" x2="172" y2="76" stroke="#F8EEE9" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="172" cy="76" r="2" fill="#D2AA55" />
          </g>

          {/* Right Arm Gracefully Flowing Backward */}
          <path d="M 114 62 Q 95 72 88 88" stroke="url(#dancerGoldGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <line x1="82" y1="98" x2="94" y2="80" stroke="#F8EEE9" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ============================================================
            DANCER 2 (RIGHT — MALE DANCER IN FESTIVE KURTA-DHOTI)
            ============================================================ */}
        <g className="dancer-character male-dancer">
          {/* Turban / Safa with Kalgi */}
          <path d="M 215 36 Q 225 30 236 38 Q 232 46 218 46 Z" fill="#4A0F22" stroke="#D2AA55" strokeWidth="1" />
          <circle cx="218" cy="35" r="2.2" fill="#F8EEE9" />
          {/* Head & Confident Profile */}
          <circle cx="224" cy="46" r="8" fill="url(#dancerGoldGrad)" />
          {/* Kurta Body with Festive Angrakha Cut */}
          <path d="M 216 54 L 210 100 L 236 100 L 232 54 Z" fill="url(#kurtaGrad)" stroke="#B58D36" strokeWidth="1" />
          <line x1="216" y1="56" x2="232" y2="82" stroke="#F8EEE9" strokeWidth="1.2" opacity="0.8" />
          {/* Festive Stole (Dupatta) across chest */}
          <path d="M 214 56 Q 224 82 242 110" stroke="#4A0F22" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Dynamic Dhoti Legs in Jumping / Lunging Pose */}
          <path
            className="dancer-dhoti-legs"
            d="M 210 100 Q 192 130 186 162 Q 205 160 218 142 Q 230 162 248 162 Q 242 130 236 100 Z"
            fill="url(#dancerGoldGrad)"
            stroke="#9E7528"
            strokeWidth="1.2"
          />
          {/* Dhoti Pleats */}
          <path d="M 222 100 L 216 142" stroke="#7A5615" strokeWidth="1" strokeDasharray="3 2" />
          {/* Dancing Feet with Juttis */}
          <ellipse cx="186" cy="164" rx="4" ry="2.5" fill="#4A0F22" />
          <ellipse cx="248" cy="164" rx="4" ry="2.5" fill="#4A0F22" />

          {/* Right Arm Raised Striking Partner's Dandiya */}
          <g className="dancer-arm-right">
            <path d="M 216 62 Q 196 60 180 72" stroke="url(#dancerGoldGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Striking Dandiya meeting central spark */}
            <line x1="192" y1="88" x2="168" y2="76" stroke="#F8EEE9" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="168" cy="76" r="2" fill="#D2AA55" />
          </g>

          {/* Left Arm Balancing Dynamically Behind */}
          <path d="M 232 64 Q 252 75 258 92" stroke="url(#dancerGoldGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <line x1="264" y1="102" x2="252" y2="84" stroke="#F8EEE9" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

// 3. WEDDING ROYAL COUPLE — Animated Bride & Groom under Mandap Arch
export function WeddingRoyalCouple() {
  return (
    <div className="wedding-royal-couple-scene" aria-hidden="true">
      {/* Floating Sacred Rose Petals raining divine blessings */}
      <div className="royal-wedding-blessings">
        <span className="wedding-rose-petal p1" />
        <span className="wedding-rose-petal p2" />
        <span className="wedding-rose-petal p3" />
        <span className="wedding-rose-petal p4" />
        <span className="wedding-rose-petal p5" />
        <span className="holy-amber-spark s1" />
        <span className="holy-amber-spark s2" />
      </div>

      <svg
        className="wedding-couple-svg"
        width="340"
        height="220"
        viewBox="0 0 340 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldRoyal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF1C2" />
            <stop offset="45%" stopColor="#D2AA55" />
            <stop offset="100%" stopColor="#8C6518" />
          </linearGradient>
          <linearGradient id="crimsonBridal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A82842" />
            <stop offset="70%" stopColor="#691225" />
            <stop offset="100%" stopColor="#4A0F22" />
          </linearGradient>
          <linearGradient id="sherwaniGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F8EEE9" />
            <stop offset="60%" stopColor="#EAD8CA" />
            <stop offset="100%" stopColor="#F5E8DC" />
          </linearGradient>
          <radialGradient id="holyFireGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F29C1B" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#E5B92E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8E2036" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ============================================================
            ROYAL MANDAP ARCH PILLARS & FLORAL JASMINE DROPS
            ============================================================ */}
        {/* Mandap Outer Canopy Roof */}
        <path
          d="M 30 50 Q 170 12 310 50"
          stroke="url(#goldRoyal)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M 50 56 Q 170 24 290 56"
          stroke="#D2AA55"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.6"
        />
        {/* Mandap Arch Columns */}
        <line x1="30" y1="50" x2="30" y2="210" stroke="url(#goldRoyal)" strokeWidth="2.2" opacity="0.85" />
        <line x1="310" y1="50" x2="310" y2="210" stroke="url(#goldRoyal)" strokeWidth="2.2" opacity="0.85" />
        {/* Hanging Jasmine & Marigold Strings */}
        <path d="M 30 50 Q 80 85 130 54" stroke="#D2AA55" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
        <path d="M 210 54 Q 260 85 310 50" stroke="#D2AA55" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
        {/* Rosette Drops on Mandap */}
        <circle cx="80" cy="74" r="3" fill="#E5B92E" />
        <circle cx="170" cy="24" r="4" fill="url(#goldRoyal)" />
        <circle cx="260" cy="74" r="3" fill="#E5B92E" />

        {/* ============================================================
            SACRED AGNI (HOLY FIRE) AT CENTER BASE
            ============================================================ */}
        <g className="sacred-fire-altar" transform="translate(170, 192)">
          {/* Altar Pedestal with Golden Steps */}
          <polygon points="-24,18 24,18 18,10 -18,10" fill="#3D0B1A" stroke="#D2AA55" strokeWidth="1" />
          <polygon points="-16,10 16,10 12,4 -12,4" fill="#5E1428" stroke="#D2AA55" strokeWidth="0.8" />
          {/* Sacred Flame Glow Aura */}
          <circle cx="0" cy="-2" r="22" fill="url(#holyFireGlow)" className="fire-aura" />
          {/* Sacred Holy Agni Flames */}
          <path
            className="agni-flame-outer"
            d="M -8 4 Q -10 -12 0 -22 Q 10 -12 8 4 Z"
            fill="#F29C1B"
          />
          <path
            className="agni-flame-inner"
            d="M -4 4 Q -6 -6 0 -15 Q 6 -6 4 4 Z"
            fill="#FFF2A8"
          />
        </g>

        {/* ============================================================
            THE GROOM (LEFT) — VIRAT IN ROYAL SHERWANI & SAFA
            ============================================================ */}
        <g className="royal-character royal-groom">
          {/* Royal Safa / Pagri (Turban) with Royal Kalgi Brooch */}
          <path
            d="M 92 62 C 90 48, 122 45, 126 56 C 128 66, 96 68, 92 62 Z"
            fill="#A82842"
            stroke="url(#goldRoyal)"
            strokeWidth="1.2"
          />
          {/* Kalgi Feather & Emerald Jewel */}
          <line x1="102" y1="52" x2="98" y2="40" stroke="#FFF1C2" strokeWidth="1.4" />
          <circle cx="102" cy="52" r="2.2" fill="#E7C97D" />
          <path d="M 98 40 Q 94 34 98 28 Q 102 34 98 40 Z" fill="#D2AA55" />

          {/* Face Profile Facing Bride */}
          <circle cx="112" cy="66" r="9" fill="url(#goldRoyal)" />
          {/* Groom Beard & Jawline */}
          <path d="M 108 68 Q 116 75 120 70 L 118 66 Z" fill="#2A0B14" />

          {/* Royal Cream Silk Sherwani */}
          <path
            d="M 98 76 L 90 185 L 134 185 L 126 76 Z"
            fill="url(#sherwaniGrad)"
            stroke="#C4A15A"
            strokeWidth="1.2"
          />
          {/* Sherwani Royal Golden Buttons */}
          <line x1="114" y1="80" x2="114" y2="135" stroke="#D2AA55" strokeWidth="1.5" strokeDasharray="2 5" />
          {/* Royal Pocket Square */}
          <polygon points="120,86 125,82 124,88" fill="#8E2036" />

          {/* Royal Varmala (Red Rose & Jasmine Wedding Garland) */}
          <path
            className="groom-varmala"
            d="M 104 76 Q 114 116 128 114 Q 132 95 120 76"
            stroke="#8E2036"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Golden Varmala beads */}
          <circle cx="106" cy="85" r="2.2" fill="#FFF1C2" />
          <circle cx="112" cy="102" r="2.5" fill="#FFF1C2" />
          <circle cx="124" cy="114" r="2.5" fill="#FFF1C2" />
          <circle cx="126" cy="95" r="2.2" fill="#FFF1C2" />

          {/* Groom Hand with Ring Reaching Forward to Hold Bride's Hand */}
          <path
            d="M 122 108 Q 142 118 156 125"
            stroke="url(#goldRoyal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Gold Wedding Ring */}
          <circle cx="152" cy="123" r="2" fill="#FFF1C2" />
        </g>

        {/* ============================================================
            THE BRIDE (RIGHT) — ANUSHKA IN ROYAL BRIDAL LEHENGA
            ============================================================ */}
        <g className="royal-character royal-bride">
          {/* Flowing Bridal Sheer Dupatta Over Head */}
          <path
            className="bridal-dupatta-flowing"
            d="M 226 56 C 248 56, 258 72, 254 185 L 244 185 C 248 100, 238 68, 222 65 Z"
            fill="#8E2036"
            fillOpacity="0.45"
            stroke="url(#goldRoyal)"
            strokeWidth="1.2"
          />
          {/* Bridal Maang Tikka on Hair */}
          <circle cx="225" cy="58" r="2" fill="#FFF1C2" />
          <line x1="225" y1="58" x2="228" y2="52" stroke="#D2AA55" strokeWidth="1" />
          {/* Graceful Face Profile Facing Groom */}
          <circle cx="226" cy="66" r="8.5" fill="url(#goldRoyal)" />
          {/* Traditional Bridal Nath (Nose Ring) */}
          <circle cx="218" cy="67" r="1.8" stroke="#FFF1C2" strokeWidth="0.8" fill="none" />

          {/* Bridal Choli / Blouse */}
          <path d="M 218 76 L 214 98 L 236 98 L 232 76 Z" fill="url(#crimsonBridal)" stroke="#D2AA55" strokeWidth="1" />

          {/* Royal Flared Bridal Lehenga */}
          <path
            className="bridal-lehenga-skirt"
            d="M 214 98 Q 192 140 182 185 L 254 185 Q 242 140 236 98 Z"
            fill="url(#crimsonBridal)"
            stroke="#D2AA55"
            strokeWidth="1.5"
          />
          {/* Zari Gold Scallop Border on Lehenga Hem */}
          <path
            d="M 183 181 Q 218 175 253 181"
            stroke="url(#goldRoyal)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
          {/* Inner Golden Motifs on Bridal Skirt */}
          <circle cx="206" cy="148" r="2.2" fill="#D2AA55" />
          <circle cx="222" cy="155" r="2.5" fill="#D2AA55" />
          <circle cx="236" cy="148" r="2.2" fill="#D2AA55" />

          {/* Bride Varmala (Red Rose Garland) */}
          <path
            className="bride-varmala"
            d="M 234 76 Q 224 116 210 114 Q 206 95 218 76"
            stroke="#8E2036"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Golden Varmala beads */}
          <circle cx="232" cy="85" r="2.2" fill="#FFF1C2" />
          <circle cx="226" cy="102" r="2.5" fill="#FFF1C2" />
          <circle cx="214" cy="114" r="2.5" fill="#FFF1C2" />
          <circle cx="212" cy="95" r="2.2" fill="#FFF1C2" />

          {/* Traditional Chooda (Bridal Bangles) & Henna Hand holding Groom's Hand */}
          <path
            d="M 218 108 Q 198 118 184 125"
            stroke="url(#goldRoyal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Red and Gold Bridal Bangles (Chooda) */}
          <line x1="202" y1="115" x2="206" y2="120" stroke="#8E2036" strokeWidth="3" />
          <line x1="206" y1="118" x2="210" y2="123" stroke="#FFF1C2" strokeWidth="3" />
        </g>

        {/* ============================================================
            HASTAMELAP / HAND CLASP UNION WITH SACRED TIE (GATHBANDHAN)
            ============================================================ */}
        <g className="hastamelap-union">
          {/* The gentle romantic meeting of their hands */}
          <circle cx="170" cy="126" r="3.5" fill="#FFF1C2" className="union-glow" />
          {/* Golden Sacred Knot Ribbon (Gathbandhan) */}
          <path
            d="M 134 140 Q 155 130 170 145 Q 185 130 206 140"
            stroke="url(#goldRoyal)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
}
