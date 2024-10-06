"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false); // Hero section visibility
  const [ctaOpacity, setCtaOpacity] = useState(0); // Call to action opacity
  const [additionalContentOpacity, setAdditionalContentOpacity] = useState(0); // Additional content opacity

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setHeroVisible(true); // Show hero section after loading
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setHasScrolled(scrollTop > 50); // Adjust this threshold as needed
  
    // Get viewport height
    const windowHeight = window.innerHeight;
  
    // Check if Call to Action section is in view
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      const ctaSectionTop = ctaSection.getBoundingClientRect().top;
  
      // Calculate opacity for Call to Action section
      if (ctaSectionTop < windowHeight && ctaSectionTop > windowHeight * 0.75) {
        const newCtaOpacity = 1 - ((ctaSectionTop - windowHeight * 0.75) / (windowHeight * 0.25)); // Fade in
        setCtaOpacity(Math.max(0, Math.min(newCtaOpacity, 1))); // Clamp between 0 and 1
      } else if (ctaSectionTop < windowHeight * 0.75) {
        const newCtaOpacity = (ctaSectionTop + windowHeight * 0.25) / windowHeight; // Fade out
        setCtaOpacity(Math.max(0, Math.min(newCtaOpacity, 1))); // Clamp between 0 and 1
      } else {
        setCtaOpacity(0); // Hide if out of view
      }
    }
  
    // Check if Additional Content section is in view
    const additionalContentSection = document.getElementById("additional-content-section");
    if (additionalContentSection) {
      const additionalContentTop = additionalContentSection.getBoundingClientRect().top;
  
      // Calculate opacity for Additional Content section
      if (additionalContentTop < windowHeight && additionalContentTop > windowHeight * 0.75) {
        const newAdditionalContentOpacity = 1 - ((additionalContentTop - windowHeight * 0.75) / (windowHeight * 0.25)); // Fade in
        setAdditionalContentOpacity(Math.max(0, Math.min(newAdditionalContentOpacity, 1))); // Clamp between 0 and 1
      } else if (additionalContentTop < windowHeight * 0.75) {
        const newAdditionalContentOpacity = (additionalContentTop + windowHeight * 0.25) / windowHeight; // Fade out
        setAdditionalContentOpacity(Math.max(0, Math.min(newAdditionalContentOpacity, 1))); // Clamp between 0 and 1
      } else {
        setAdditionalContentOpacity(0); // Hide if out of view
      }
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col gap-16 flex-grow items-center w-full">
        {/* Hero Section */}
        <section className={`flex flex-col justify-center items-center h-screen text-center ${heroVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-500`}>
          <h1 className="text-3xl sm:text-5xl font-bold">Welcome to Our Business</h1>
          <p className="mt-4 text-lg sm:text-xl">We provide the best solutions for your needs.</p>

          {/* Services, Features, and Testimonials Section */}
          <section className={`flex flex-col sm:flex-row justify-center items-center w-full mt-16 ${heroVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-500`}>
            <Link href="/services" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2 max-w-xs transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white">
              <h2 className="font-semibold text-lg">Our Services</h2>
              <p className="mt-2">We offer a variety of services to help you succeed.</p>
            </Link>
            <Link href="/features" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2 max-w-xs transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white">
              <h2 className="font-semibold text-lg">Features</h2>
              <p className="mt-2">Discover the unique features that set us apart.</p>
            </Link>
            <Link href="/testimonials" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2 max-w-xs transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white">
              <h2 className="font-semibold text-lg">Testimonials</h2>
              <p className="mt-2">Hear what our satisfied clients say about us.</p>
            </Link>
          </section>
        </section>

        {/* Full Width Image Section */}
        <section className={`w-full flex justify-center overflow-hidden ${hasScrolled ? 'fade-in' : ''}`}>
          <div className="relative w-full h-60">
            <Image className="absolute inset-0 object-cover w-full h-full" src="/1.jpg" alt="Business logo" fill priority />
          </div>
        </section>

        {/* Call to Action */}
        <section 
          id="cta-section" 
          className={`text-center mt-8 flex flex-col items-center max-w-3xl w-full transition-opacity duration-500`} 
          style={{ opacity: ctaOpacity }}>
          <h2 className="text-xl font-semibold">Ready to get started?</h2>
          <Link href="/contact" className="mt-4 inline-block rounded-full bg-blue-600 dark:bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 flex items-center justify-center text-base h-10 px-5">
            Contact Us
          </Link>
        </section>

        {/* Additional Content to Extend Page Height */}
        <section 
          id="additional-content-section" 
          className={`flex-grow text-center max-w-3xl w-full transition-opacity duration-500`} 
          style={{ opacity: additionalContentOpacity }}>
          <h2 className="text-2xl font-bold mt-10">More Information</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="mt-4">Duis dapibus, arcu sed convallis sodales, elit nulla volutpat felis...</p>
          <p className="mt-4">Morbi auctor, dolor id porttitor venenatis...</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
