import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export interface IHeader {
  sampleTextProp: string;
}

const Header: React.FC<IHeader> = ({ sampleTextProp }) => {
  return <header
    className='w-full flex flex-row justify-between bg-slate-100'
  >
    <div className="flex space-x-2 m-5">
      <button className="hidden border p-2 px-4 sm:px-6 border-indigo-500 hover:bg-indigo-100 rounded text-indigo-500 max-md:block">
        <HiOutlineMenu />
      </button>
      <Link href="/">
        <Image
          src="images/devLogo.png"
          alt="Logo"
          width={55}
          height={55}
          priority
        />
      </Link>
      {/* <form>
        <div className="flex rounded-md overflow-hidden w-full">
          <input type="text" className="outline outline-blue-500 w-80 rounded-md p-2" placeholder="Search...." />
          <button className="bg-white text-black px-4 text-lg py-3 rounded-r-md hover:bg-indigo-100"><HiOutlineSearch /></button>
        </div>
      </form> */}
      <form className="max-md:hidden">
        <input
          type="text"
          className="rounded-md border-2 w-5/6 sm:w-96 h-11 px-3"
          placeholder="Search"
        />
        <button className="border ml-1 p-2 px-4 sm:px-6 border-indigo-500 hover:bg-indigo-100 rounded text-indigo-500">
          Search
        </button>
      </form>
    </div>
    <div className="space-x-2 m-5 flex align-center">
      <button className="hidden border py-3 px-4 sm:px-6 bg-indigo-500 rounded text-white border-indigo-500 hover:bg-indigo-100 max-md:block">
        <HiOutlineSearch />
      </button>
      <button className="border p-2 px-4 sm:px-6 border-indigo-500 hover:bg-indigo-100 rounded text-indigo-500">
        Log in
      </button>
      <button className="border-1 p-2 px-4 sm:px-6 bg-indigo-500 rounded text-white max-md:hidden">
        Create account
      </button>
    </div>
  </header>;
};

export default Header;