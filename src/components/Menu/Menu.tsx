import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import menuList from './menuList.json';

const Menu = () => {
  const [menu] = useState(menuList);

  return (
    <div className="w-64">
      {menu &&
        menu.map((menulist) => {
          if (menulist.category === 'Main') {
            return (
              <Link
                key={`${menulist.title}`}
                className="flex p-3 hover:bg-hoverTrans50 hover:underline"
                href={menulist.url}
              >
                <span className="mr-2">
                  <Image
                    src={menulist.assetUrl}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </span>
                {menulist.title}
              </Link>
            );
          }
        })}
      <div className="p-3 font-bold">Other</div>

      {menu &&
        menu.map((menulist) => {
          if (menulist.category === 'Others') {
            return (
              <Link
                key={`${menulist.title}`}
                className="flex p-3 hover:bg-hoverTrans50 hover:underline"
                href={menulist.url}
              >
                <span className="mr-2">
                  <Image
                    src={menulist.assetUrl}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </span>
                {menulist.title}
              </Link>
            );
          }
        })}

      <div className="flex justify-start pt-4">
        {menu &&
          menu.map((menulist) => {
            if (menulist.category === 'Bottom') {
              return (
                <Link
                  key={`${menulist.title}`}
                  href={menulist.url}
                  className="p-2  hover:bg-hoverTrans50"
                  target="_blank"
                >
                  <Image
                    src={menulist.assetUrl}
                    alt="Logo"
                    width={25}
                    height={25}
                    className="fill-neutral-600 hover:fill-cyan-700"
                  />
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Menu;
