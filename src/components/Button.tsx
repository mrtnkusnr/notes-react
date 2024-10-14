import React from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isActive: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive
          ? "font-bold text-violet-600"
          : "hover:text-violet-500 text-slate-500"
      } bg-transparent`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
