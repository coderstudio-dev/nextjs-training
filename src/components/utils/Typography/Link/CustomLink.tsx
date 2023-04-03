import Link from 'next/link';
import { type ReactNode } from 'react';

export interface ICustomLink {
  url: string;
  content: ReactNode;
  className?: string;
  titleLink?: boolean;
}

const CustomLink: React.FC<ICustomLink> = ({ url, content, className, titleLink }) => {
  return (
    <Link className={`text-indigo-600 ${titleLink && 'hover:underline' || ''} ${titleLink && 'hover:text-indigo-950' || ''} ${className || ''}`} href={url}>{content}</Link>
  );
};

export default CustomLink;
