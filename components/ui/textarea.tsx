import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // You can add custom props here if needed
}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={`bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 w-full ${className}`}
    />
  );
};

export default Textarea;
