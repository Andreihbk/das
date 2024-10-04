"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import '../globals.css'; // Adjust the path as necessary

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo and Title Section */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">My Website</h1>
        </div>

        {/* Navigation Links Section */}
        <div className="flex items-center">
          <ul className="flex flex-row gap-6"> {/* Ensure horizontal layout with `flex-row` */}
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded transition-colors duration-200 ${
                    pathname === href
                      ? "bg-blue-500 text-white cursor-default font-semibold"
                      : "hover:bg-blue-300 hover:text-gray-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
