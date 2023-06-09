import { type ReactNode } from 'react';
import CustomLink from '../utils/Typography/CustomLink';

export interface IFooter {
  footerContent?: ReactNode;
}

const Footer = ({ footerContent }: IFooter) => {
  const footerLinks = [
    {
      text: 'Home',
      url: 'https://localhost.com',
    },
    {
      text: 'Listings',
      url: 'https://localhost.com',
    },
    {
      text: 'Podcasts',
      url: 'https://localhost.com',
    },
    {
      text: 'Videos',
      url: 'https://localhost.com',
    },
    {
      text: 'Tags',
      url: 'https://localhost.com',
    },
    {
      text: 'FAQ',
      url: 'https://localhost.com',
    },
    {
      text: 'Forem Shop',
      url: 'https://localhost.com',
    },
    {
      text: 'Sponsors',
      url: 'https://localhost.com',
    },
    {
      text: 'About',
      url: 'https://localhost.com',
    },
    {
      text: 'Contact',
      url: 'https://localhost.com',
    },
    {
      text: 'Guides',
      url: 'https://localhost.com',
    },
    {
      text: 'Software Comparisons',
      url: 'https://localhost.com',
    },
  ];

  const footerLinks2 = [
    {
      text: 'Code of Conduct',
      url: 'https://localhost.com',
    },
    {
      text: 'Privacy Policy',
      url: 'https://localhost.com',
    },
    {
      text: 'Terms of Use',
      url: 'https://localhost.com',
    },
  ];

  return (
    <footer
      className="mt-5 w-full bg-zinc-200 p-10 
      text-center text-sm text-slate-800"
    >
      <p>
        <CustomLink url="#" className='font-semibold' content="DEV Community " titleLink /> — A constructive and inclusive social network for software developers. With you every step of your journey.
      </p>
      <ul className="mt-2 flex flex-wrap justify-center gap-2">
        {footerLinks.map((footerLink, index) => {
          return (
            <li className="flex items-center" key={`${footerLink.text}`}>
              <CustomLink
                url={footerLink.url}
                content={footerLink.text}
                className="px-2"
              />
              {index !== footerLinks.length - 1 && '•'}
            </li>
          );
        })}
      </ul>
      <ul className="mt-2 flex flex-wrap justify-center gap-2">
        {footerLinks2.map((footerLink, index) => {
          return (
            <li className="flex items-center" key={`${footerLink.text}`}>
              <CustomLink
                url={footerLink.url}
                content={footerLink.text}
                className="px-2 first:list-none max-md:list-none"
              />
              {index !== footerLinks2.length - 1 && '•'}
            </li>
          );
        })}
      </ul>
      <p className="pt-2">
        Built on <CustomLink url="#" content="Forem" /> — the{' '}
        <CustomLink url="#" content="open source" /> software that powers{' '}
        <CustomLink url="#" content="DEV" /> and other inclusive communities.
      </p>
      <p>
        Made with love and <CustomLink url="#" content="Ruby on Rails" />. DEV
        Community © 2016 - 2023.
      </p>
      {footerContent}
    </footer>
  );
};

export default Footer;
