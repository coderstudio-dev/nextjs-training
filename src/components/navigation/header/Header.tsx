import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";

export interface IHeader {
  isLoggedIn: boolean;
}

const Header: React.FC<IHeader> = ({ isLoggedIn }) => {
  return <header
    className='wsticky top-0 -full flex flex-row justify-between border-b-2 border-slate-100'
  >
    <div className="flex space-x-2 m-5 justify-center">
      <Button content={<Image
        src="assets/menu-icon.svg"
        alt="Logo"
        width={25}
        height={25}
      />} buttonType="btn-transparent" className="hidden max-md:block" />
      <Link href="/">
        <Image
          src="/dev_logo.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
      </Link>
      <div className="relative">
        <input type="text" className="transition-all h-10 w-96 pl-2 rounded-lg z-0 border border-slate-300 focus:outline-2 outline-indigo-600 focus:border-none" placeholder="Search..." />
        <div className="absolute top-0 right-0">
          <Button content={<Image
            src="assets/search-icon.svg"
            alt="Logo"
            width={25}
            height={25}
          />} buttonType="btn-transparent" />
        </div>
      </div>
    </div>
    <div className="space-x-2 m-5 flex align-center">
      <Button content={<Image
        src="assets/search-icon.svg"
        alt="Logo"
        width={25}
        height={25}
      />} buttonType="btn-transparent" className="hidden max-md:block" />
      {
        isLoggedIn ? (<Button content="Sign Out" buttonType="btn-transparent" />) : (
          <>
            <Button content="Log in" buttonType="btn-transparent" />
            <Button content="Create Account" buttonType="btn-outline" className='max-md:hidden' />
          </>
        )
      }

    </div>
  </header>;
};

export default Header;