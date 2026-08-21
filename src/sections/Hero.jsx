import React from 'react';
import Button from '../components/ui/Button';
import restaurantInfo from '../data/restaurantInfo.json';

/**
 * Hero section with full-bleed background image, restaurant name, tagline, and CTA buttons
 */
function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image with Overlay */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/images/hero/hero-image.jpg"
          alt="Beautiful restaurant interior and cuisine"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="eager"
          width="1920"
          height="1080"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26, 21, 18, 0.6)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }} className="container text-center">
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-light)', fontStyle: 'italic', fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 'var(--space-md)', color: 'var(--color-white)' }}>
          {restaurantInfo.name}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 'var(--font-weight-light)', marginBottom: 'var(--space-xl)', maxWidth: '40rem', margin: '0 auto var(--space-xl)', color: 'var(--color-white)' }}>
          {restaurantInfo.tagline}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', justifyContent: 'center', alignItems: 'center' }} className="sm-flex-row">
          <Button 
            href="https://example-booking.com" 
            variant="primary" 
            size="large"
          >
            Book a Table
          </Button>
          <Button 
            href="#menu" 
            variant="text" 
            size="large"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
