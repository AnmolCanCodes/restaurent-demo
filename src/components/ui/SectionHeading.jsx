import React from 'react';

/**
 * Section heading component with optional subtitle and description
 * @param {Object} props
 * @param {string} props.title - Main heading text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {string} props.description - Optional description paragraph
 * @param {'left'|'center'|'right'} props.align - Text alignment
 * @param {string} props.className - Additional CSS classes
 */
function SectionHeading({ 
  title, 
  subtitle, 
  description, 
  align = 'left',
  className = '' 
}) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <p className="text-sm uppercase tracking-[0.2em] text-(--color-accent) mb-4 font-medium">
          {subtitle}
        </p>
      )}
      <h2 className="font-light italic text-(--color-primary)">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-(--color-text-secondary max-w-2xl mt-6 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
