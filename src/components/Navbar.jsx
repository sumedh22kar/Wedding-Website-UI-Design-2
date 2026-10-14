import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import weddingConfig from '../weddingConfig';

export function Navbar({ onOpenWelcome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Couple', href: '#couple' },
    { label: 'Our Story', href: '#story' },
    { label: 'Celebration', href: '#celebration' },
    { label: 'The Venue', href: '#venue' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="topbar">
        <div className="container topbar-container">
          {/* Brand Monogram */}
          <a
            href="#hero"
            className="topbar-brand"
            aria-label="Return to top"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            V <span>&</span> A
            <span className="topbar-brand-star">✳</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action */}
          <div className="topbar-cta">
            <button
              type="button"
              className="nav-rsvp-btn"
              onClick={(e) => handleNavClick(e, '#rsvp')}
            >
              Kindly Reply
            </button>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-primary mobile-nav-rsvp"
            onClick={(e) => handleNavClick(e, '#rsvp')}
          >
            Kindly Reply
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
