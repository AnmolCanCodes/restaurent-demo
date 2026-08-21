import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import menuItems from '../data/menu.json';

/**
 * Menu section with visual grid of signature dishes
 */
function Menu() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <SectionHeading
          title="Signature Dishes"
          subtitle="Our Menu"
          description="A curated selection of our most beloved creations, each crafted with passion and precision."
          align="center"
        />

        {/* Menu Grid */}
        <div className="grid grid-menu" style={{ display: 'grid', gap: 'var(--space-xl)' }}>
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              style={{ cursor: 'pointer' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.5s' }}
                  loading="lazy"
                  width="400"
                  height="300"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-primary)' }}>
                    {item.name}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-lg)', color: 'var(--color-secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                    ${item.price}
                  </span>
                </div>

                {/* Dietary Tags */}
                {item.dietaryTags && item.dietaryTags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                    {item.dietaryTags.map((tag, index) => (
                      <span 
                        key={index}
                        style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
