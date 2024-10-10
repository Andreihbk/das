"use client";

import React, { useState, useEffect } from 'react';
import '../globals.css';

export default function About() {
  const [sectionVisible, setSectionVisible] = useState({
    mission: false,
    team: false,
    history: false,
  });

  useEffect(() => {
    // Trigger animations when the component is mounted
    setTimeout(() => {
      setSectionVisible((prev) => ({
        ...prev,
        mission: true,
      }));
    }, 100); // Delay before mission section appears

    setTimeout(() => {
      setSectionVisible((prev) => ({
        ...prev,
        team: true,
      }));
    }, 300); // Delay before team section appears

    setTimeout(() => {
      setSectionVisible((prev) => ({
        ...prev,
        history: true,
      }));
    }, 500); // Delay before history section appears
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 pb-20 transition-all duration-500 ease-out">
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4 fade-in">About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to our showcase website. We are dedicated to providing quality services and products to our customers.
        </p>

        {/* Mission Section */}
        <section
          className={`max-w-2xl text-center mb-12 transition-opacity duration-700 ease-in-out ${
            sectionVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to deliver exceptional service and high-quality products that meet our customers&#39; needs.
          </p>
        </section>

        {/* Team Section */}
        <section
          className={`max-w-2xl text-center mb-12 transition-opacity duration-700 ease-in-out ${
            sectionVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
              <h3 className="font-bold">John Doe</h3>
              <p>Co-Founder & CEO</p>
              <p>John is passionate about innovation and customer satisfaction.</p>
            </div>
            <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
              <h3 className="font-bold">Jane Smith</h3>
              <p>Co-Founder & CTO</p>
              <p>Jane leads our tech initiatives and loves problem-solving.</p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section
          className={`max-w-2xl text-center transition-opacity duration-700 ease-in-out ${
            sectionVisible.history ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg">
            Founded in 2024, we have been committed to excellence and customer satisfaction since day one.
          </p>
        </section>
      </div>
    </div>
  );
}
