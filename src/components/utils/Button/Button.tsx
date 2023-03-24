import React, { type ReactNode } from "react";

export interface IButton {
  content: ReactNode;
  buttonType: string;
  className?: string;
  handleClick?: React.MouseEventHandler;
}

const Button: React.FC<IButton> = ({ content, buttonType, className, handleClick }) => {

  // hover:btn-hover-transparent 

  return (
    <button onClick={handleClick} className={`btn-default ${buttonType} ${className || ''}`}>{content}</button>
  );
};

export default Button;
