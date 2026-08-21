import React, { useState } from 'react';
import Button from '../ui/Button';

/**
 * Header component with navigation and booking button
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(250, 248, 245, 0.95)', backdropFilter: 'blur(4px)' }}>
      <div className="container flex-between" style={{ padding: 'var(--space-md) clamp(1rem, 4vw, 3rem)' }}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-primary)' }}>
          Kashi & Co.
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: 'var(--space-lg)' }} className="md-flex">
          <a href="#about" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }} className="hover-text-primary">
            About
          </a>
          <a href="#menu" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }} className="hover-text-primary">
            Menu
          </a>
          <a href="#hours" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }} className="hover-text-primary">
            Hours & Location
          </a>
          <a href="#reviews" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }} className="hover-text-primary">
            Reviews
          </a>
          <Button 
            href="https://example-booking.com" 
            variant="primary" 
            size="small"
          >
            Book a Table
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          style={{ display: 'block', padding: 'var(--space-sm)' }} 
          className="md-hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav style={{ display: 'block', backgroundColor: 'var(--color-background)', borderTop: '1px solid var(--color-background-alt)' }} className="md-hidden">
          <div className="flex-column" style={{ padding: 'var(--space-md) clamp(1rem, 4vw, 3rem)' }}>
            <a 
              href="#about" 
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', padding: 'var(--space-sm) 0' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#menu" 
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', padding: 'var(--space-sm) 0' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#hours" 
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', padding: 'var(--space-sm) 0' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Hours & Location
            </a>
            <a 
              href="#reviews" 
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', padding: 'var(--space-sm) 0' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <Button 
              href="https://example-booking.com" 
              variant="primary" 
              size="small"
              style={{ marginTop: 'var(--space-md)' }}
            >
              Book a Table
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
