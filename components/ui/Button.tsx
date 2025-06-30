'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105';
    
    const variantStyles = {
      default: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/50',
      secondary: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
      outline: 'border border-white/20 bg-transparent hover:bg-white/10',
      ghost: 'hover:bg-white/10 hover:text-white',
      link: 'text-primary-500 underline-offset-4 hover:underline',
    };
    
    const sizeStyles = {
      default: 'h-12 px-6 py-3',
      sm: 'h-9 rounded-xl px-4',
      lg: 'h-14 rounded-2xl px-8',
      icon: 'h-12 w-12',
    };

    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button }; 