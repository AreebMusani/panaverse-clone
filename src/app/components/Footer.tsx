import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
    <div className="md:flex bg-gray-900 gap-4 text-gray-400 p-10">
        <div className="md:w-1/4">
            <h1 className="text-xl text-white font-bold border-l-8 mb-5 pl-3 border-l-blue-600">About Us</h1>
            <Image src={"/Logo.webp"} width={120} height={120} alt="mylogo"/>
            <p className="mt-5">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</p>
        </div>
        <div className="md:w-1/4">
            <h1 className="md:mt-0 mt-8 text-xl text-white font-bold border-l-8 mb-5 pl-3 border-l-blue-600">UseFul Links</h1>
            <ul>
                <li><Link className="hover:text-white" href={"#"}>Home</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Syllabus</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Explore</Link></li>
                <li><Link className="hover:text-white" href={"#"}>About</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Contact</Link></li>
            </ul>
        </div>
        <div className="md:w-1/4">
            <h1 className="md:mt-0 mt-8 text-xl text-white font-bold border-l-8 mb-5 pl-3 border-l-blue-600">Follow Us</h1>
            <ul>
                <li><Link className="hover:text-white" href={"#"}>Facebook</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Linkedin</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Twitter</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Youtube</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Github</Link></li>
            </ul>
        </div>
        <div className="md:w-1/4">
            <h1 className="md:mt-0 mt-8 text-xl text-white font-bold border-l-8 mb-5 pl-3 border-l-blue-600">Contact Us</h1>
            <ul>
                <li><Link className="hover:text-white" href={"#"}>+92 316 2240727</Link></li>
                <li><Link className="hover:text-white" href={"#"}>areebmusani0@gmail.com</Link></li>
                <li><Link className="hover:text-white" href={"#"}>Karachi, Pakistan</Link></li>
            </ul>
        </div>
    </div>
    <div className="md:flex text-center justify-between bg-slate-700 text-white text-lg px-10 py-5">
        <p>All Rights Reserved © | <br className="sm:hidden"/><Link className="hover:text-gray-300" href={"https://github.com/AreebMusani"} target="_blank">Muhammad Areeb Musani</Link></p>
        <div className="mt-2 md:mt-0">
            <Link href={"#"} className="hover:text-gray-300">Legals</Link><span> | </span>
            <Link href={"#"} className="hover:text-gray-300">Terms Of Use</Link><span> | </span>
            <Link href={"#"} className="hover:text-gray-300">Privacy Policy</Link>
        </div>
    </div>
    </>
  );
};

export default Footer
