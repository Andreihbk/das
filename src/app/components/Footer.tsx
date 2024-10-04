// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <p className="mb-0">© 2024 DAS. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
