import React from 'react';
import Navbar from "../components/Navbar"; // Import the Navbar
import Footer from "./../components/Footer"; // Import the Footer
import '../globals.css';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to our showcase website. We are dedicated to providing quality services and products to our customers.
        </p>

        <section className="max-w-2xl text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to deliver exceptional service and high-quality products that meet our customers&#39; needs.
          </p>
        </section> {/* Closing tag for the first section */}

        <section className="max-w-2xl text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded shadow">
              <h3 className="font-bold">John Doe</h3>
              <p>Co-Founder & CEO</p>
              <p>John is passionate about innovation and customer satisfaction.</p>
            </div>
            <div className="p-4 border rounded shadow">
              <h3 className="font-bold">Jane Smith</h3>
              <p>Co-Founder & CTO</p>
              <p>Jane leads our tech initiatives and loves problem-solving.</p>
            </div>
          </div>
        </section>

        <section className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg">
            Founded in 2024, we have been committed to excellence and customer satisfaction since day one.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
