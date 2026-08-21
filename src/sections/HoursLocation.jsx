import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import restaurantInfo from '../data/restaurantInfo.json';

/**
 * Hours and Location section with schedule and embedded Google Maps
 */
function HoursLocation() {
  return (
    <section id="hours" className="section section-alt">
      <div className="container">
        <SectionHeading
          title="Visit Us"
          subtitle="Hours & Location"
          align="center"
        />

        <div className="grid lg-grid-cols-2" style={{ display: 'grid', gap: 'var(--space-3xl)' }}>
          {/* Hours Schedule */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-primary)', marginBottom: 'var(--space-xl)' }}>
              Hours
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {restaurantInfo.hours.map((schedule, index) => (
                <div 
                  key={index} 
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-md) 0', borderBottom: '1px solid var(--color-background-warm)' }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                    {schedule.day}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                  Address
                </h4>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${restaurantInfo.address.street}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state} ${restaurantInfo.address.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}
                  className="hover-text-secondary"
                >
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </a>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                  Phone
                </h4>
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}
                  className="hover-text-secondary"
                >
                  {restaurantInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div style={{ position: 'relative', height: '400px' }}>
            <iframe
              src={restaurantInfo.mapEmbedUrl}
              title="Google Maps - Kashi & Co. Location"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HoursLocation;
