import Image from "next/image";
import Link from "next/link";
import Button from "../../utils/Button/Button";

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
      {/* <form>
        <div className="flex rounded-md overflow-hidden w-full">
          <input type="text" className="outline outline-blue-500 w-80 rounded-md p-2" placeholder="Search...." />
          <button className="bg-white text-black px-4 text-lg py-3 rounded-r-md hover:bg-indigo-100"><HiOutlineSearch /></button>
        </div>
      </form> */}
      {/* <form className="max-md:hidden">
        <input
          type="text"
          className="rounded-md border-2 w-5/6 sm:w-96 h-11 px-3"
          placeholder="Search"
        />
        <button className="border ml-1 p-2 px-4 sm:px-6 border-indigo-500 hover:bg-indigo-100 rounded text-indigo-500">
          Search
        </button>
      </form> */}
      <div className="relative">
        <input type="text" className="h-10 w-96 pl-2 rounded-lg z-0 border border-slate-300 focus:outline-2 outline-indigo-600 focus:border-none" placeholder="Search..." />
        <div className="absolute top-0 right-0">
          <Button content={<Image
            src="assets/search-icon.svg"
            alt="Logo"
            width={25}
            height={25}
          />} buttonType="btn-transparent" />
          {/* <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> */}
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
      <Button content="Log in" buttonType="btn-transparent" />
      <Button content="Create Account" buttonType="btn-outline" className='max-md:hidden' />
    </div>
  </header>;
};

export default Header;