import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Navbar from "./components/Navbar"; // Import the Navbar
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 flex-grow items-center sm:items-start">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold">Welcome to Our Business</h1>
          <p className="mt-4 text-lg sm:text-xl">We provide the best solutions for your needs.</p>
          <Image
            className="dark:invert mt-4"
            src="/logo.png"
            alt="Business logo"
            width={180}
            height={50}
            priority
          />
        </section>

        {/* Services, Features, and Testimonials Section */}
        <section className="flex flex-col sm:flex-row justify-around w-full">
          <Link href="/services" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2">
            <h2 className="font-semibold text-lg">Our Services</h2>
            <p className="mt-2">We offer a variety of services to help you succeed.</p>
          </Link>
          <Link href="/features" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2">
            <h2 className="font-semibold text-lg">Features</h2>
            <p className="mt-2">Discover the unique features that set us apart.</p>
          </Link>
          <Link href="/testimonials" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2">
            <h2 className="font-semibold text-lg">Testimonials</h2>
            <p className="mt-2">Hear what our satisfied clients say about us.</p>
          </Link>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-8">
          <h2 className="text-xl font-semibold">Ready to get started?</h2>
          <Link href="/contact" className="mt-4 inline-block rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center text-base h-10 px-5">
            Contact Us
          </Link>
        </section>
      </main>
      
      {/* Footer moved outside of the main content */}
      <Footer />
    </div>
  );
}
