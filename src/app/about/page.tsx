import React from 'react';
import Navbar from "../components/Navbar"; // Import the Navbar

export default function About() {
    return (
      <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-center">
          Welcome to our showcase website. We are dedicated to providing quality services and products to our customers.
        </p>
      </div>
      </div>

    );
  }
  