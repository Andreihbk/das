import React from 'react';
import Navbar from "../components/Navbar"; // Import the Navbar
import Footer from "./../components/Footer"; // Import the Footer

export default function Contact() {
    return (
      <div className="min-h-screen">
      <Navbar /> 
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-center mb-4">
          Feel free to reach out to us via email at: <strong>contact@example.com</strong>
        </p>
      </div>
      <Footer />
      </div>
    );
  }
  