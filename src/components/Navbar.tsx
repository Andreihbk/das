// src/components/Navbar.tsx

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import React from "react";

const Navbar = () => {
  const router = useRouter(); // Initialize useRouter

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <Image
        src="/logo.png"
        alt="Business logo"
        width={180}
        height={50}
      />
      <div className="flex gap-6">
        <Link href="/about">
          <span className={router.pathname === "/about" ? "font-bold" : ""}>About Us</span>
        </Link>
        <Link href="/contact">
          <span className={router.pathname === "/contact" ? "font-bold" : ""}>Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
