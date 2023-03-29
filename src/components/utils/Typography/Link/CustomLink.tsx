import Link from "next/link";
import { type ReactNode } from "react";

export interface ICustomLink {
  url: string;
  content: ReactNode;
  className?: string;
}

const CustomLink: React.FC<ICustomLink> = ({ url, content, className }) => {
  return (
    <Link className={`text-indigo-400 hover:text-indigo-800 ${className || ''}`} href={url}>{content}</Link>
  );
};

export default CustomLink;
