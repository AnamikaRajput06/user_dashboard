import React from 'react';

interface ButtonProps {
  onClick: (event: React.FormEvent) => any;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-green-900 text-white rounded disabled:opacity-50 ${className} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
