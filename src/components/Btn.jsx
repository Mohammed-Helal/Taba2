import React from "react";

const Btn = ({
  children,       // Content inside the button (text, icons, etc.)
  onClick,       // Click handler
  className = "", // Custom CSS classes
  type = "button", // Button type (button, submit, reset)
  disabled = false, // Disable state
  ...props       // Additional props (e.g., aria-labels)
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`border-none rounded-full text-white cursor-pointer p-1.5 text-xs duration-200 hover:scale-110 bg-secondary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;