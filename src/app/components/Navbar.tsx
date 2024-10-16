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
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:py-4 sm:px-8">
        {/* Logo and Title Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} height={40} 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"  // Adjusted size for consistency
          />
          <h1 className="text-lg sm:text-2xl font-bold whitespace-nowrap">Dani & Andrei Services</h1>
        </Link>

        {/* Navigation Links Section for Desktop */}
        <div className="hidden sm:flex items-center">
          <ul className="flex flex-row gap-4">
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
          <button
            onClick={toggleMenu}
            className="relative flex flex-col items-center justify-center focus:outline-none"
          >
            {/* Top Line */}
            <div
              className={`w-8 h-1 bg-white mb-1 transition-transform duration-300 ease-in-out ${
                menuOpen ? 'transform rotate-45 translate-y-2' : 'transform translate-y-0'
              }`}
            ></div>
            {/* Middle Line (becomes invisible when open) */}
            <div
              className={`w-8 h-1 bg-white mb-1 transition-opacity duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            {/* Bottom Line */}
            <div
              className={`w-8 h-1 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? 'transform -rotate-45 -translate-y-2' : 'transform translate-y-0'
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`flex flex-col items-center bg-gray-700 sm:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`block px-5 py-3 text-lg rounded transition-colors duration-200 ${
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
    </nav>
  );
};

export default Navbar;
