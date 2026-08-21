import React from 'react';

/**
 * Button component with multiple variants
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'text'} props.variant - Button style variant
 * @param {'small'|'medium'|'large'} props.size - Button size
 * @param {string} props.href - If provided, renders as anchor tag
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  href, 
  onClick, 
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'btn-text'
  };
  
  const sizes = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
