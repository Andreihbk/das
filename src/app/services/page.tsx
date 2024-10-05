import Image from "next/image";
import Link from "next/link";
import React from 'react';
import '../globals.css';

const servicesData = [
  {
    title: "Web Development",
    description: "We build responsive and modern websites tailored to your business needs.",
    image: "/web.jpg", // Update with your actual image path
  },
  {
    title: "Mobile App Development",
    description: "Our team creates user-friendly mobile applications for both Android and iOS.",
    image: "/phone.jpg", // Update with your actual image path
  },
  {
    title: "Digital Marketing",
    description: "We offer comprehensive digital marketing strategies to grow your online presence.",
    image: "/digital.jpg", // Update with your actual image path
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
      <main className="flex flex-col gap-8 flex-grow items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">Our Services</h1>
        <section className="flex flex-col sm:flex-row justify-around w-full">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex-1 m-2">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="rounded mb-4"
              />
              <h2 className="font-semibold text-lg">{service.title}</h2>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </section>
        <Link href="/" className="mt-8 inline-block rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center text-base h-10 px-5">
          Back to Home
        </Link>
      </main>
     
    </div>
  );
}
