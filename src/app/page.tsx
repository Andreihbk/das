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
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaOpacity, setCtaOpacity] = useState(0);
  const [additionalContentOpacity, setAdditionalContentOpacity] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setHeroVisible(true);
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setHasScrolled(scrollTop > 50);

    const windowHeight = window.innerHeight;
    const ctaSection = document.getElementById("cta-section");
    const additionalContentSection = document.getElementById("additional-content-section");

    if (ctaSection) {
      const ctaSectionTop = ctaSection.getBoundingClientRect().top;
      if (ctaSectionTop < windowHeight && ctaSectionTop > windowHeight * 0.75) {
        const newCtaOpacity = 1 - ((ctaSectionTop - windowHeight * 0.75) / (windowHeight * 0.25));
        setCtaOpacity(Math.max(0, Math.min(newCtaOpacity, 1)));
      } else if (ctaSectionTop < windowHeight * 0.75) {
        const newCtaOpacity = (ctaSectionTop + windowHeight * 0.25) / windowHeight;
        setCtaOpacity(Math.max(0, Math.min(newCtaOpacity, 1)));
      } else {
        setCtaOpacity(0);
      }
    }
   


    if (additionalContentSection) {
      const additionalContentTop = additionalContentSection.getBoundingClientRect().top;
      if (additionalContentTop < windowHeight && additionalContentTop > windowHeight * 0.75) {
        const newAdditionalContentOpacity = 1 - ((additionalContentTop - windowHeight * 0.75) / (windowHeight * 0.25));
        setAdditionalContentOpacity(Math.max(0, Math.min(newAdditionalContentOpacity, 1)));
      } else if (additionalContentTop < windowHeight * 0.75) {
        const newAdditionalContentOpacity = (additionalContentTop + windowHeight * 0.25) / windowHeight;
        setAdditionalContentOpacity(Math.max(0, Math.min(newAdditionalContentOpacity, 1)));
      } else {
        setAdditionalContentOpacity(0);
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
    <div className="flex flex-col min-h-screen p-4 sm:p-8 gap-10 sm:gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col gap-10 flex-grow items-center w-full">
        {/* Hero Section */}
        <section className={`flex flex-col justify-center items-center text-center h-screen ${heroVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-500`}>
        <h1 className="text-2xl sm:text-4xl font-bold">Welcome to DAS - Tailored IT Solutions for Your Business Needs</h1>
<p       className="mt-2 text-base sm:text-lg px-4 sm:px-0">Innovative, data-driven services to accelerate your business growth.</p>

          
          {/* Services, Features, and Testimonials Section */}
          <section className={`flex flex-col sm:flex-row justify-center items-center w-full mt-8 ${heroVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-500`}>
            <Link href="/services"
              className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center flex-1 mx-1 sm:m-2 max-w-full sm:max-w-xs transition-transform duration-200 hover:scale-110 hover:border-blue-500 hover:border-2 hover:shadow-md">
              <h2 className="font-semibold text-md sm:text-lg">Our Services</h2>
              <p className="mt-1 sm:mt-2">We offer a variety of services to help you succeed.</p>
            </Link>

            <Link href="/features"
              className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center flex-1 mx-1 sm:m-2 max-w-full sm:max-w-xs transition-transform duration-200 hover:scale-110 hover:border-blue-500 hover:border-2 hover:shadow-md">
              <h2 className="font-semibold text-md sm:text-lg">Features</h2>
              <p className="mt-1 sm:mt-2">Discover the unique features that set us apart.</p>
            </Link>

            <Link href="/testimonials"
              className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center flex-1 mx-1 sm:m-2 max-w-full sm:max-w-xs transition-transform duration-200 hover:scale-110 hover:border-blue-500 hover:border-2 hover:shadow-md">
              <h2 className="font-semibold text-md sm:text-lg">Testimonials</h2>
              <p className="mt-1 sm:mt-2">Hear what our satisfied clients say about us.</p>
            </Link>
          </section>


        </section>

        {/* Full Width Image Section */}
        <section className={`w-full flex justify-center overflow-hidden ${hasScrolled ? 'fade-in' : ''}`}>
          <div className="relative w-full h-40 sm:h-60">
            <Image className="absolute inset-0 object-cover w-full h-full" src="/1.jpg" alt="Business logo" fill priority />
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="cta-section"
          className="text-center mt-6 flex flex-col items-center max-w-3xl w-full transition-opacity duration-500"
          style={{ opacity: ctaOpacity }}
        >
          <h2 className="text-lg sm:text-xl font-semibold">Ready to get started?</h2>
          <Link href="/contact" className="mt-4 inline-block rounded-full bg-blue-600 dark:bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 flex items-center justify-center text-base h-10 px-5">
            Contact Us
          </Link>
        </section>

        <section
          id="additional-content-section"
          className="flex-grow text-center max-w-3xl w-full transition-opacity duration-500"
          style={{ opacity: additionalContentOpacity }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mt-10">Why Choose Us?</h2>
          <p className="mt-4">
            At DAS, we provide tailored IT solutions designed to meet your unique business needs. Our team of experts uses the latest technology to deliver high-quality, data-driven solutions that help you stay ahead of the competition.
          </p>
          <p className="mt-4">
            We specialize in custom development, ensuring that our services align perfectly with your goals. Whether you need advanced analytics, AI-driven insights, or a responsive, user-friendly website, we’ve got you covered.
          </p>
          <ul className="list-disc mt-4 pl-5">
            <li>Customized solutions for your business</li>
            <li>Data-driven approaches for growth</li>
            <li>Responsive, user-friendly designs</li>
            <li>Expert support every step of the way</li>
          </ul>
          <p className="mt-4">
            Let us help you transform your business with cutting-edge technology and personalized support. Reach out today to learn more!
          </p>
        </section>

        
        {/* Extra spacing before the footer */}
        <div className="h-20 sm:h-32" /> {/* Add more height to ensure spacing before the footer */}
      </main>

      <Footer />
    </div>
  );
}
