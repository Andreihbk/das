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

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-8 gap-10 sm:gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      {/* <Navbar /> */}

      <main className="flex flex-col gap-10 flex-grow items-center w-full">
        {/* Hero Section */}
        <section
          className={`flex flex-col justify-center items-center text-center h-screen ${heroVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ transition: "opacity 100ms ease-in-out" }}
        >

        <h1 className="text-2xl sm:text-4xl font-bold">Welcome to DAS - Tailored IT Solutions for Your Business Needs</h1>
<p       className="mt-2 text-base sm:text-lg px-4 sm:px-0">Innovative, data-driven services to accelerate your business growth.</p>


          
          {/* Services, Features, and Testimonials Section */}
          <section className={`flex flex-col sm:flex-row justify-center items-center w-full mt-8 ${heroVisible ? 'fade-in' : 'opacity-0'}`} style={{ transition: "opacity 100ms ease-in-out" }}>
            {["/services", "/features", "/testimonials"].map((link, index) => (
              <Link 
                key={index}
                href={link} 
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-grow mx-2 my-2 max-w-full sm:max-w-xs transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white"
                style={{ width: "100%", maxWidth: "300px" }}  // Limit width for mobile
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

        <section
  id="additional-content-section"
  className="flex-grow text-center max-w-4xl w-full transition-opacity px-4 sm:px-0"
  style={{ opacity: additionalContentOpacity, transition: "opacity 100ms ease-in-out" }}
>
  <h2 className="text-2xl sm:text-3xl font-bold mt-12">Why Choose Us?</h2>
  
  <p className="mt-6 text-lg sm:text-xl leading-relaxed">
    At DAS, we’re more than just an IT services provider – we’re your partner in growth. 
    We pride ourselves on delivering tailored IT solutions that are uniquely designed to meet 
    your specific business needs. In an ever-evolving digital landscape, staying competitive 
    requires innovation, agility, and the right technology to drive success.
  </p>
  
  <p className="mt-4 text-lg sm:text-xl leading-relaxed">
    Whether you need advanced data analytics, AI-powered insights, or a fully responsive website, 
    our team of experienced professionals is here to provide you with state-of-the-art solutions 
    that streamline your operations, improve efficiency, and help you scale. We don’t just solve 
    problems – we unlock opportunities for your business.
  </p>

  <ul className="list-none mt-8 space-y-4 text-lg sm:text-xl">
    <li className="flex justify-center items-center">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
        <span>Customized solutions tailored to your unique goals</span>
      </div>
    </li>
    <li className="flex justify-center items-center">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
        <span>Data-driven strategies to fuel sustainable growth</span>
      </div>
    </li>
    <li className="flex justify-center items-center">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
        <span>Responsive designs that deliver seamless user experiences</span>
      </div>
    </li>
    <li className="flex justify-center items-center">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
        <span>24/7 expert support to ensure your success</span>
      </div>
    </li>
  </ul>

  <p className="mt-8 text-lg sm:text-xl leading-relaxed">
    Our mission is to empower businesses like yours to thrive in today’s competitive market by 
    providing cutting-edge technology and personalized support every step of the way. Let us 
    transform your vision into reality and give you the tools to excel in your industry. 
    Ready to elevate your business? Get in touch today!
  </p>
</section>


        {/* Extra spacing before the footer */}
        <div className="h-20 sm:h-32" />
      </main>

      <Footer />
    </div>
  );
}
