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

  const links = [
    { href: "/", icon: <HiOutlineHome /> },
    { href: "/noticias", icon: <HiOutlineViewGrid /> },
    { href: "/perfil", icon: <HiOutlineUser /> },
    { href: "/pesquisa", icon: <HiOutlineSearch /> },
  ];

  return (
    <header className="header flex justify-between items-center px-10 py-4 bg-azul-500 fixed w-screen">
      <div className="logo-section flex items-center gap-3 text-branco-500">
        <div className="logo font-bold text-3xl">JN</div>
        <h1 className="flex flex-col text-base/4">
          <span className="font-bold">Joelson</span>{" "}
          <span className="font-semibold ">News</span>
        </h1>
      </div>
      <nav>
        <ul className="navigation flex gap-8 text-cinza-500">
          {/* <li
            className={`w-[2.75rem] aspect-square flex items-center justify-center `}
          >
            <Link href="/">
              <HiOutlineHome />
            </Link>
          </li> */}
          {links.map((link) => (
            <li
              key={link.href}
              className={`w-[2.75rem] aspect-square flex items-center justify-center ${
                pathname === link.href ? "text-branco-500" : ""
              }`}
            >
              <Link href={link.href}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default header;
