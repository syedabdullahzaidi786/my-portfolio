import React from 'react';

<<<<<<< HEAD
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 w-full ${className}`}
    />
  );
};

=======
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add custom props here if needed
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 w-full ${className}`}
    />
  );
};

>>>>>>> c3bb9e7f2d65651c9bbf1c7867530795cafae985
export default Input;
