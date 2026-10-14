import React from 'react';

/**
 * Starry Bokeh & Festive Lights for Sangeet Night
 */
export function StarryBokeh() {
  const orbs = [
    { id: 1, top: '15%', left: '10%', size: 90, color: 'rgba(236, 200, 128, 0.12)', delay: '0s' },
    { id: 2, top: '65%', left: '18%', size: 140, color: 'rgba(214, 179, 124, 0.14)', delay: '2s' },
    { id: 3, top: '25%', left: '78%', size: 120, color: 'rgba(240, 160, 180, 0.1)', delay: '1.5s' },
    { id: 4, top: '75%', left: '82%', size: 110, color: 'rgba(236, 200, 128, 0.15)', delay: '3s' },
    { id: 5, top: '45%', left: '48%', size: 160, color: 'rgba(214, 179, 124, 0.08)', delay: '4s' },
  ];

  return (
    <div className="sangeet-bokeh-layer" aria-hidden="true">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="bokeh-orb"
          style={{
            top: orb.top,
            left: orb.left,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

export default StarryBokeh;
