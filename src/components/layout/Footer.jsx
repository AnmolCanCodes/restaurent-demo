import React from 'react';
import restaurantInfo from '../../data/restaurantInfo.json';

/**
 * Footer component with contact information and hours
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: 'var(--space-4xl) 0' }}>
      <div className="container">
        <div className="grid md-grid-cols-3" style={{ display: 'grid', gap: 'var(--space-3xl)', marginBottom: 'var(--space-3xl)' }}>
          {/* Brand Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-light)', fontStyle: 'italic', fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-xl)', color: 'var(--color-accent)' }}>
              Kashi & Co.
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-xl)' }}>
              {restaurantInfo.description}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: 'var(--space-xl)' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-xs)' }}>Address</p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${restaurantInfo.address.street}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state} ${restaurantInfo.address.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-white)', transition: 'color 0.3s' }}
                  className="hover-text-accent"
                >
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </a>
              </div>
              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-xs)' }}>Phone</p>
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  style={{ color: 'var(--color-white)', transition: 'color 0.3s' }}
                  className="hover-text-accent"
                >
                  {restaurantInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: 'var(--space-xl)' }}>
              Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', fontSize: 'var(--font-size-sm)' }}>
              {restaurantInfo.hours.map((schedule, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>{schedule.day}</span>
                  <span style={{ color: 'var(--color-white)' }}>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(196, 163, 90, 0.2)', paddingTop: 'var(--space-xl)', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
            © {currentYear} Kashi & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
