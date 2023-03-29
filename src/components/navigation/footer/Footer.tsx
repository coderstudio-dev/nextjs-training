import { type ReactNode } from "react";

export interface IFooter {
  footerContent: ReactNode;
}

const Footer: React.FC<IFooter> = ({ footerContent }) => {

  return (
    <footer
      className='w-full p-5 bg-slate-100 text-slate-500 text-center'
    >
      {footerContent}
    </footer>
  );
};

export default Footer;