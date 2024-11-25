import React, { CSSProperties } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  sizevar?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  style?: CSSProperties; 
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  style = {},
  sizevar = "small",
}) => {
  const baseStyles =
    "font-medium rounded focus:outline-none";

  const variantStyles = {
    primary: "bg-bpurple-60 text-white hover:bg-[#4c5465]",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-30 0",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const size = {
    small: "py-3 px-4",
    medium: "py-4 px-8",
    large: "py-4 px-12",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed focus:ring-0 hover:bg-opacity-50";

  const appliedStyles = `${baseStyles} ${variantStyles[variant]} ${
    size[sizevar]
  } ${disabled ? disabledStyles : ""} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={appliedStyles}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
