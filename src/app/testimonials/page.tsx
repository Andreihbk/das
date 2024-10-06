"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import '../globals.css';

const testimonialsData = [
  {
    name: "Alice Johnson",
    title: "CEO of Acme Corp",
    testimonial: "The services provided were exceptional! Our project was completed on time and exceeded our expectations.",
    image: "/matei.png", // Replace with the actual image path
  },
  {
    name: "Bob Smith",
    title: "Marketing Director at Widgets Inc",
    testimonial: "I couldn't be happier with the results. The team was professional and the support was fantastic.",
    image: "/serban.png", // Replace with the actual image path
  },
];

export default function Testimonials() {
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
        <h1 className="text-3xl sm:text-5xl font-bold text-center">What Our Clients Say</h1>
        
        <section className="flex flex-col sm:flex-row justify-around w-full">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2"
            >
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s picture`}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="font-semibold text-lg">{testimonial.name}</h2>
              <p className="text-sm italic">{testimonial.title}</p>
              <p className="mt-2">{testimonial.testimonial}</p>
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
