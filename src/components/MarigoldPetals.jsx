import React from 'react';

/**
 * Floating Marigold Petals Animation for Haldi Section
 */
export function MarigoldPetals() {
  const petals = [
    { id: 1, left: '8%', delay: '0s', duration: '9s', size: 18, rotate: 45 },
    { id: 2, left: '22%', delay: '2.5s', duration: '11s', size: 24, rotate: 120 },
    { id: 3, left: '42%', delay: '1s', duration: '8.5s', size: 16, rotate: 80 },
    { id: 4, left: '65%', delay: '3.2s', duration: '10s', size: 22, rotate: 190 },
    { id: 5, left: '82%', delay: '0.8s', duration: '9.2s', size: 20, rotate: 260 },
    { id: 6, left: '94%', delay: '4s', duration: '12s', size: 15, rotate: 30 },
  ];

  return (
    <div className="marigold-petals-layer" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="marigold-petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: `${p.size}px`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          ✿
        </span>
      ))}
    </div>
  );
}

export default MarigoldPetals;
