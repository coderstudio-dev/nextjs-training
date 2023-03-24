import { type ReactNode } from "react";

export interface IContent {
  content: ReactNode;
  textType: string;
  className: string;
}

const Content: React.FC<IContent> = ({ content, textType, className }) => {
  return (
    <p className={`${textType} ${className}`}>{content}</p>
  );
};

export default Content;
