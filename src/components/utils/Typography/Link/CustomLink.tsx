import Link from "next/link";
import { type ReactNode } from "react";

export interface ICustomLink {
  url: string;
  content: ReactNode;
}

const CustomLink: React.FC<ICustomLink> = ({ url, content }) => {
  return (
    <Link className="text-indigo-400 hover:text-indigo-800" href={url}>{content}</Link>
  );
};

export default CustomLink;
