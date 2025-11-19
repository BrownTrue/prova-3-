import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string; // If provided, renders as an anchor
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  href,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-heading font-semibold text-lg rounded-full transition-all duration-300 transform active:scale-95 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1";
  
  const variants = {
    primary: "bg-rose-400 text-white hover:bg-rose-500 border-2 border-rose-400",
    secondary: "bg-sky-400 text-white hover:bg-sky-500 border-2 border-sky-400",
    outline: "bg-white text-brand-dark border-2 border-brand-dark hover:bg-gray-50"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};