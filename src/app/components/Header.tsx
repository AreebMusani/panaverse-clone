import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiAlignRight } from "react-icons/bi";


const Header = () => {
  return (
    <div className="flex justify-between px-10 items-center bg-slate-700">
        <Image src={"/Logo.webp"} width={150} height={150} alt={"web Logo"} />
        <ul className="sm:flex hidden text-white items-center space-x-4 md:space-x-10">
            <li className="text-lg"><Link className="hover:text-blue-700" href="#">Home</Link></li>
            <li className="text-lg"><Link className="hover:text-blue-700" href="#">Explore</Link></li>
            <li className="text-lg"><Link className="hover:text-blue-700" href="#">About</Link></li>
            <li className="text-lg"><Link className="hover:text-blue-700" href="#">Contact</Link></li>
            <button className="text-lg font-bold px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700">Apply</button>
        </ul>
        <button className="sm:hidden static text-3xl text-white hover:text-gray-400"><BiAlignRight /></button>
    </div>
  )
};

export default Header;
