"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState<boolean>(false);
  const [ctaVisible, setCtaVisible] = useState<boolean>(false);
  const [additionalContentVisible, setAdditionalContentVisible] = useState<boolean>(false);
  const [imageVisible, setImageVisible] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 20);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as string;
          if (id === "cta-section") {
            setCtaVisible(true);
          } else if (id === "additional-content-section") {
            setAdditionalContentVisible(true);
          } else if (id === "image-section") {
            setImageVisible(true);
          }
        } else {
          setFadeOut(true); // Fade out when not visible
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ["cta-section", "additional-content-section", "image-section"];

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen p-4 sm:p-8 gap-10 sm:gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900 ${fadeOut ? 'fade-out' : ''}`}>
      <main className="flex flex-col gap-10 flex-grow items-center w-full">
        {/* Hero Section */}
        <section
          className={`flex flex-col justify-center items-center text-center h-screen ${heroVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ transition: "opacity 500ms ease-in-out" }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold">Welcome to DAS - Tailored IT Solutions for Your Business Needs</h1>
          <p className="mt-2 text-base sm:text-lg px-4 sm:px-0">Innovative, data-driven services to accelerate your business growth.</p>

          {/* Services, Features, and Testimonials Section */}
          <section className={`flex flex-col sm:flex-row justify-center items-center w-full mt-8 ${heroVisible ? 'fade-in' : 'opacity-0'}`} style={{ transition: "opacity 500ms ease-in-out" }}>
            {["/services", "/features", "/testimonials"].map((link, index) => (
              <Link 
                key={index}
                href={link} 
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-grow mx-2 my-2 max-w-full sm:max-w-xs transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white"
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <h2 className="font-semibold text-sm sm:text-lg">{ 
                  link === "/services" ? "Our Services" :
                  link === "/features" ? "Features" :
                  "Testimonials"
                }</h2>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm">{
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
          style={{ transition: "opacity 700ms ease-in-out, transform 700ms ease-in-out" }}
        >
          <div className="relative w-full h-[400px] sm:h-[600px]">
          <Image
            src="/1.jpg"
            alt="Business logo"
            width={1200} // specify the width of the image
            height={800} // specify the height of the image
            priority // ensures the image is preloaded
            quality={75} // adjust quality for optimization
            className="absolute inset-0 object-cover w-full h-full"
            loader={({ src }) => `${src}?webp`} // This ensures WebP format for browsers that support it
            //loading="lazy"
          />

 
          </div>
        </section>

        <div className="h-12"></div>

        {/* Call to Action */}
        <section
          id="cta-section"
          className={`text-center mt-6 flex flex-col items-center max-w-3xl w-full transition-opacity ${ctaVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ transition: "opacity 100ms ease-in-out" }}
        >
          <h2 className="text-lg sm:text-2xl font-semibold">Ready to get started?</h2>
          <Link href="/contact" className="mt-4 inline-block rounded-full bg-blue-600 dark:bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 flex items-center justify-center text-lg sm:text-xl h-12 sm:h-14 px-6">
            Contact Us
          </Link>
        </section>

        <div className="h-12"></div>

        {/* Additional Content Section */}
        <section
          id="additional-content-section"
          className={`flex-grow text-center max-w-2xl w-full transition-opacity ${additionalContentVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ transition: "opacity 500ms ease-in-out" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mt-16">Why Choose Us?</h2>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed px-6">
            At DAS, we’re more than just an IT services provider – we’re your partner in growth. We pride ourselves on delivering tailored IT solutions that are uniquely designed to meet your specific business needs. In an ever-evolving digital landscape, staying competitive requires innovation, agility, and the right technology to drive success.
          </p>

          <div className="h-12"></div>

          <ul className="list-none mt-10 space-y-6 text-lg sm:text-xl px-6">
            {[
              "Customized solutions tailored to your unique goals",
              "Data-driven strategies to fuel sustainable growth",
              "Responsive designs that deliver seamless user experiences",
              "24/7 expert support to ensure your success"
            ].map((item, index) => (
              <li key={index} className={`flex justify-center items-center ${additionalContentVisible ? 'fade-in' : 'opacity-0'}`} style={{ transition: "opacity 500ms ease-in-out" }}>
                <div className="flex items-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full mr-2 sm:mr-4"></div>
                  <span className="text-base sm:text-lg">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="h-12"></div>

          <p className="mt-10 text-lg sm:text-xl leading-relaxed px-6">
            Our mission is to empower businesses like yours to thrive in today’s competitive market by providing cutting-edge technology and personalized support every step of the way. Let us transform your vision into reality and give you the tools to excel in your industry. Ready to elevate your business? Get in touch today!
          </p>
        </section>

        <div className="h-16"></div>
      </main>
      <Footer />
    </div>
  );
}
