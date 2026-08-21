import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

/**
 * About section with editorial copy and supporting photo
 */
function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="grid lg-grid-cols-2" style={{ display: 'grid', gap: 'var(--space-3xl)', alignItems: 'center', gridTemplateColumns: '1fr' }}>
          {/* Text Content */}
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="About Kashi & Co."
              align="left"
            />
            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-text-secondary)' }}>
              At Kashi & Co., we believe that great Indian cuisine is an art form that honors tradition while embracing innovation. Our kitchen is led by Chef Arjun Kapoor, whose culinary journey spans the diverse regions of India—from the aromatic streets of Mumbai to the royal kitchens of Rajasthan.
            </p>
            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-text-secondary)' }}>
              Every dish we serve tells a story, crafted with locally-sourced ingredients and time-honored techniques passed down through generations. We invite you to experience the warmth of Indian hospitality and the complexity of flavors that make our cuisine so extraordinary.
            </p>
          </div>

          {/* Supporting Photo */}
          <div style={{ position: 'relative' }}>
            <img
              src="/images/interior/restaurant-interior.jpg"
              alt="Warm and inviting restaurant interior with elegant decor"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
