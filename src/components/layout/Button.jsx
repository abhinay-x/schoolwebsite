import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: `
      bg-school-primary text-white 
      hover:bg-school-primary/90 
      focus:ring-school-primary/50
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}
    `,
    secondary: `
      bg-school-secondary text-white 
      hover:bg-school-secondary/90 
      focus:ring-school-secondary/50
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}
    `,
    outline: `
      border border-school-primary text-school-primary 
      hover:bg-school-primary/10 
      focus:ring-school-primary/50
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `,
    ghost: `
      text-school-text hover:bg-gray-100 
      focus:ring-school-primary/50
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  return (
    <button
      type={type}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button; 