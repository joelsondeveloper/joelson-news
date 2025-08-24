"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HiOutlineHome,
  HiOutlineViewGrid,
  HiOutlineUser,
  HiOutlineSearch,
} from "react-icons/hi";

const header = () => {

    const pathname = usePathname();

  return (
    <header className="header flex justify-between items-center px-10 py-4">
      <div className="logo-section flex items-center gap-3">
        <div className="logo font-bold text-3xl">JN</div>
        <h1 className="flex flex-col text-base/4">
          <span className="font-bold">Joelson</span> <span className="font-semibold ">News</span>
        </h1>
      </div>
      <nav>
        <ul className="navigation flex gap-8">
          <li className={`w-[2.75rem] aspect-square flex items-center justify-center`}>
            <Link href="/">
              <HiOutlineHome />
            </Link>
          </li>
          <li>
            <Link href="/noticias">
              <HiOutlineViewGrid />
            </Link>
          </li>
          <li>
            <Link href="/perfil">
              <HiOutlineUser />
            </Link>
          </li>
          <li>
            <Link href="/busca">
              <HiOutlineSearch />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
