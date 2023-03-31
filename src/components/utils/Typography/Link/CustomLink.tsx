import Link from 'next/link';
import { type ReactNode } from 'react';

export interface ICustomLink {
  url: string;
  content: ReactNode;
  className?: string;
}

const CustomLink = ({ url, content, className }: ICustomLink) => {
  return (
    <Link
      className={`hover:text-indigo-950 text-indigo-600 ${className || ''}`}
      href={url}
    >
      {content}
    </Link>
  );
};

export default CustomLink;
