import { type ReactNode } from 'react';

export interface IContent {
  content?: ReactNode;
  textType?: string;
  className?: string;
  withIcon?: boolean;
  icon?: ReactNode;
}

const Content = ({ content, textType, className, withIcon, icon }: IContent) => {
  return (
    withIcon ?
      <span className={`flex items-center justify-between ${className || ''}`}>
        {icon}&nbsp;&nbsp;
        {content}
      </span>
      : <p className={`${textType || ''} ${className || ''}`}>{content}</p>
  );
};

export default Content;
