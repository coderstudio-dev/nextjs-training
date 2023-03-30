import Link from "next/link";
import { type ReactNode } from "react";

export interface ICustomLink {
  url: string;
  content: ReactNode;
  className?: string;
}

const CustomLink: React.FC<ICustomLink> = ({ url, content, className }) => {
  return (
    <Link className={`text-indigo-600 hover:text-indigo-950 ${className || ''}`} href={url}>{content}</Link>
  );
};

export default CustomLink;
