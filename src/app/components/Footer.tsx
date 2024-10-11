import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 sm:py-4 sm:px-8"> {/* Reduced padding for mobile */}
        <p className="mb-2 sm:mb-0 text-xs sm:text-base">© 2024 DAS. All rights reserved.</p> {/* Smaller text on mobile */}
        <div className="flex justify-center space-x-1 sm:space-x-4"> {/* Smaller spacing between links on mobile */}
          <Link href="/privacy" className="text-gray-300 hover:text-white text-xs sm:text-base">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-300 hover:text-white text-xs sm:text-base">Terms of Service</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white text-xs sm:text-base">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
