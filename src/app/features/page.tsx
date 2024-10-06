"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

const featuresData = [
  {
    title: "Custom Solutions",
    description: "We offer tailor-made solutions that fit your specific business requirements.",
    image: "/z.jpg", // Update with your actual image path
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you.",
    image: "/clock.jpg", // Update with your actual image path
  },
  {
    title: "Data Security",
    description: "We prioritize data security and ensure your information is protected.",
    image: "/data.jpg", // Update with your actual image path
  },
];

export default function Features() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a short delay
    }, 20); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className={`flex flex-col gap-8 flex-grow items-center sm:items-start ${!loading ? 'fade-in' : 'opacity-0'}`}>
        <h1 className="text-3xl sm:text-5xl font-bold text-center">Our Features</h1>
        
        <section className="flex flex-col sm:flex-row justify-around w-full">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2"
            >
              <div className="flex justify-center mb-4"> {/* Center the image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <h2 className="font-semibold text-lg">{feature.title}</h2>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </section>

        <Link 
          href="/" 
          className="mt-8 inline-block rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center text-base h-10 px-5"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
