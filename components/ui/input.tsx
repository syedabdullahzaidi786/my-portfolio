import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 w-full ${className}`}
    />
  );
};

export default Input;
