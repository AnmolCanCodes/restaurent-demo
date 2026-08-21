import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import restaurantInfo from '../data/restaurantInfo.json';

/**
 * Reviews section with customer testimonials and star ratings
 */
function Reviews() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        style={{ width: '20px', height: '20px', color: index < rating ? 'var(--color-accent)' : 'var(--color-background-warm)' }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="section">
      <div className="container">
        <SectionHeading
          title="What Guests Say"
          subtitle="Reviews"
          align="center"
        />

        {/* Reviews Grid */}
        <div className="grid md-grid-cols-2 lg-grid-cols-3" style={{ display: 'grid', gap: 'var(--space-xl)' }}>
          {restaurantInfo.reviews.map((review, index) => (
            <div 
              key={index}
              style={{ backgroundColor: 'var(--color-background-alt)', padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
            >
              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', fontStyle: 'italic' }}>
                "{review.text}"
              </p>

              {/* Author and Publication */}
              <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-background-warm)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-primary)' }}>
                  {review.author}
                </p>
                {review.publication && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {review.publication}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Press Mentions */}
        <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-md)' }}>
            As Featured In
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-xl)' }}>
            {restaurantInfo.reviews
              .filter(review => review.publication)
              .map((review, index) => (
                <span 
                  key={index}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}
                >
                  {review.publication}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
