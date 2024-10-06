"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import '../globals.css'; // Adjust the path as necessary

const Navbar = () => {
  const [pathname, setPathname] = useState('');
  const currentPathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Burger menu state

  useEffect(() => {
    setPathname(currentPathname);
  }, [currentPathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:py-4 sm:px-8"> {/* Reduced padding for mobile */}
        {/* Logo and Title Section */}
        <div className="flex items-center gap-2"> {/* Reduced gap */}
          <Image src="/logo.png" alt="Logo" width={30} height={30} className="sm:w-12 sm:h-12" /> {/* Smaller logo for mobile */}
          <h1 className="text-lg sm:text-2xl font-bold">Dani & Andrei Services</h1> {/* Smaller title for mobile */}
        </div>

        {/* Navigation Links Section for Desktop */}
        <div className="hidden sm:flex items-center"> {/* Hidden on small screens */}
          <ul className="flex flex-row gap-4"> {/* Reduced gap between links */}
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href} className="inline">
                <Link
                  href={href}
                  className={`px-3 py-1 rounded transition-colors duration-200 ${
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

        {/* Burger Menu for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="flex flex-col items-center justify-center">
            <div className="w-6 h-1 bg-white mb-1"></div> {/* Smaller lines */}
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="flex flex-col items-center bg-gray-700 py-2 sm:hidden"> {/* Reduced padding */}
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-1 rounded transition-colors duration-200 ${
                pathname === href
                  ? "bg-blue-500 text-white cursor-default font-semibold"
                  : "hover:bg-blue-300 hover:text-gray-800"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on item click
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
