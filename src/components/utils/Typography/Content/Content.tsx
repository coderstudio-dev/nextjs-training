import { type ReactNode } from 'react';

export interface IContent {
  content?: ReactNode;
  textType?: string;
  className?: string;
}

const Content = ({ content, textType, className }: IContent) => {
  return <p className={`${textType || ''} ${className || ''}`}>{content}</p>;
};

export default Content;
