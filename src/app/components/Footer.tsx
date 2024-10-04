// src/components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-800 text-white">
      <a
        className="flex items-center gap-2 hover:underline"
        href="https://nextjs.org/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline"
        href="https://vercel.com/templates?framework=next.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline"
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to nextjs.org →
      </a>
    </footer>
  );
};

export default Footer;
