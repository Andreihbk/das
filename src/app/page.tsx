import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Navbar from "./components/Navbar"; // Import the Navbar
import Footer from "./components/Footer"; // Import the Footer

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex flex-col gap-16 flex-grow items-center">
        {/* Hero Section */}
        <section className="text-center flex flex-col items-center max-w-3xl w-full">
          <h1 className="text-3xl sm:text-5xl font-bold">Welcome to Our Business</h1>
          <p className="mt-4 text-lg sm:text-xl">We provide the best solutions for your needs.</p>
        </section>

        {/* Services, Features, and Testimonials Section */}
        <section className="flex flex-col sm:flex-row justify-center items-center w-full max-w-6xl">
          <Link href="/services" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2 max-w-xs">
            <h2 className="font-semibold text-lg">Our Services</h2>
            <p className="mt-2">We offer a variety of services to help you succeed.</p>
          </Link>
          <Link href="/features" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2 max-w-xs">
            <h2 className="font-semibold text-lg">Features</h2>
            <p className="mt-2">Discover the unique features that set us apart.</p>
          </Link>
          <Link href="/testimonials" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2 max-w-xs">
            <h2 className="font-semibold text-lg">Testimonials</h2>
            <p className="mt-2">Hear what our satisfied clients say about us.</p>
          </Link>
        </section>

        {/* Dynamic Image Section */}
        <section className="w-full flex justify-center">
          <Image
            className="mt-4 object-contain max-w-full h-auto"
            src="/1.jpg"
            alt="Business logo"
            width={500} // Define a width suitable for your design
            height={300} // Define a height suitable for your design
            priority
          />
        </section>

        {/* Call to Action */}
        <section className="text-center mt-8 flex flex-col items-center max-w-3xl w-full">
          <h2 className="text-xl font-semibold">Ready to get started?</h2>
          <Link href="/contact" className="mt-4 inline-block rounded-full bg-blue-600 dark:bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 flex items-center justify-center text-base h-10 px-5">
            Contact Us
          </Link>
        </section>

        {/* Additional Content to Extend Page Height */}
        <section className="flex-grow text-center max-w-3xl w-full">
          <h2 className="text-2xl font-bold mt-10">More Information</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec tincidunt, nisi vel aliquam varius, elit justo posuere nisi, vel convallis sem velit ac neque. Quisque accumsan leo non augue laoreet, sit amet tincidunt est hendrerit.</p>
          <p className="mt-4">Duis dapibus, arcu sed convallis sodales, elit nulla volutpat felis, at dignissim libero massa ut risus. Vestibulum tincidunt facilisis mauris, non fermentum odio. Nullam interdum, massa ac vestibulum commodo, libero sapien viverra dolor, nec ultricies sem ante id dui.</p>
          <p className="mt-4">Morbi auctor, dolor id porttitor venenatis, mi libero fringilla ex, in congue erat nisl non lorem. Phasellus quis orci non quam vehicula vehicula. Fusce tincidunt, sapien sit amet vehicula tincidunt, nulla mi luctus dui, ut tempor odio ante a nisl.</p>
        </section>
      </main>

      <Footer /> {/* Footer stays fixed at the bottom */}
    </div>
  );
}
