"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaOpacity, setCtaOpacity] = useState(1);
  const [additionalContentOpacity, setAdditionalContentOpacity] = useState(1);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setHeroVisible(true);
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    const ctaSection = document.getElementById("cta-section");
    const additionalContentSection = document.getElementById("additional-content-section");
    const imageSection = document.getElementById("image-section");

    // CTA Section Visibility
    if (ctaSection) {
      const ctaSectionRect = ctaSection.getBoundingClientRect();
      const distanceFromViewportCenter = Math.abs(ctaSectionRect.top + ctaSectionRect.height / 2 - windowHeight / 2);
      const opacity = distanceFromViewportCenter < windowHeight * 0.5 ? 1 : 0;
      setCtaOpacity(opacity);
    }

    // Additional Content Visibility
    if (additionalContentSection) {
      const additionalContentRect = additionalContentSection.getBoundingClientRect();
      const distanceFromViewportCenter = Math.abs(additionalContentRect.top + additionalContentRect.height / 2 - windowHeight / 2);
      const opacity = distanceFromViewportCenter < windowHeight * 0.5 ? 1 : 0;
      setAdditionalContentOpacity(opacity);
    }

    // Image Section Visibility and Animation Trigger
    if (imageSection) {
      const imageSectionRect = imageSection.getBoundingClientRect();
      const distanceFromViewportCenter = Math.abs(imageSectionRect.top + imageSectionRect.height / 2 - windowHeight / 2);
      const isVisible = distanceFromViewportCenter < windowHeight * 0.5;
      setImageVisible(isVisible);
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
    <div className="flex flex-col min-h-screen p-4 sm:p-8 gap-10 sm:gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col gap-10 flex-grow items-center w-full">
        {/* Hero Section */}
        <section
          className={`flex flex-col justify-center items-center text-center h-screen ${heroVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ transition: "opacity 100ms ease-in-out" }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold">Welcome to Our Business</h1>
          <p className="mt-2 text-base sm:text-lg px-4 sm:px-0">We provide the best solutions for your needs.</p>

          {/* Services, Features, and Testimonials Section */}
          <section className={`flex flex-col sm:flex-row justify-center items-center w-full mt-8 ${heroVisible ? 'fade-in' : 'opacity-0'}`} style={{ transition: "opacity 100ms ease-in-out" }}>
            {["/services", "/features", "/testimonials"].map((link, index) => (
              <Link 
                key={index}
                href={link} 
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-grow mx-1 my-2 max-w-full sm:max-w-xs transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white"
              >
                <h2 className="font-semibold text-md sm:text-lg">{
                  link === "/services" ? "Our Services" :
                  link === "/features" ? "Features" :
                  "Testimonials"
                }</h2>
                <p className="mt-1 sm:mt-2">{
                  link === "/services" ? "We offer a variety of services to help you succeed." :
                  link === "/features" ? "Discover the unique features that set us apart." :
                  "Hear what our satisfied clients say about us."
                }</p>
              </Link>
            ))}
          </section>
        </section>

        {/* Full Width Image Section with Animation */}
        <section
          id="image-section"
          className={`w-screen h-auto flex justify-center overflow-hidden transition-all ${imageVisible ? 'fade-in-scale' : 'opacity-0 scale-90'}`}
          style={{ transition: "opacity 500ms ease-in-out, transform 500ms ease-in-out" }}
        >
          <div className="relative w-full h-[400px] sm:h-[600px]">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="/1.jpg"
              alt="Business logo"
              fill
              priority
            />
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="cta-section"
          className="text-center mt-6 flex flex-col items-center max-w-3xl w-full transition-opacity"
          style={{ opacity: ctaOpacity, transition: "opacity 100ms ease-in-out" }}
        >
          <h2 className="text-lg sm:text-xl font-semibold">Ready to get started?</h2>
          <Link href="/contact" className="mt-4 inline-block rounded-full bg-blue-600 dark:bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 flex items-center justify-center text-base h-10 px-5">
            Contact Us
          </Link>
        </section>

        {/* Additional Content to Extend Page Height */}
        <section
          id="additional-content-section"
          className="flex-grow text-center max-w-3xl w-full transition-opacity"
          style={{ opacity: additionalContentOpacity, transition: "opacity 100ms ease-in-out" }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mt-10">More Information</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="mt-4">Duis dapibus, arcu sed convallis sodales, elit nulla volutpat felis...</p>
          <p className="mt-4">Morbi auctor, dolor id porttitor venenatis...</p>
        </section>

        {/* Extra spacing before the footer */}
        <div className="h-20 sm:h-32" />
      </main>

      <Footer />
    </div>
  );
}
