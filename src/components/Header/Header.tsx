import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';

export interface IHeader extends React.ComponentPropsWithRef<'header'> {
  isLoggedIn: boolean;
}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {

  return (
    <header
      {...headerProps}
      className="-full sticky top-0 z-10 flex flex-row justify-between border-b-2 border-slate-100 bg-white"
    >
      <div className="m-2 flex justify-center space-x-2">
        <Button
          content={
            <Image
              src="assets/menu-icon.svg"
              alt="Logo"
              width={25}
              height={25}
            />
          }
          buttonType="btn-transparent"
          className="hidden max-md:block p-1"
        />
        <Link href="/">
          <Image
            src="/dev_logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <form className="relative max-md:hidden">
          <input
            type="text"
            className="z-0 h-10 w-96 rounded-lg border border-slate-300 pl-2 outline-indigo-600 focus:border-none focus:outline-2"
            placeholder="Search..."
          />
          <div className="absolute top-0 right-0">
            <Button
              content={
                <Image
                  src="/assets/search-icon.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
              }
              buttonType="btn-transparent"
            />
          </div>
        </form>
      </div>
      <div className="align-center m-2 flex space-x-2">
        <Button
          content={
            <Image
              src="/assets/search-icon.svg"
              alt="Logo"
              width={25}
              height={25}
            />
          }
          buttonType="btn-transparent"
          className="hidden max-md:block p-1"
        />
        <Button className="max-md:hidden" content="Log in" buttonType="btn-transparent" />
        <Button
          content="Create Account"
          buttonType="btn-outline"
          className="max-md:text-sm"
        />
      </div>
    </header>
  );
};

export default Header;
