"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"info" | "success" | "error">("info");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.message) {
      setMessageType("error");
      setMessage("Name and message fields cannot be empty.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessageType("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage(null); // Reset previous message

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setMessageType("success");
        setMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setMessageType("error");
        setMessage(result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessageType("error");
      setMessage("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col flex-grow items-center justify-center p-8 sm:p-20">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        {loading && <div>Loading...</div>}
        {message && (
          <div
            aria-live="polite"
            className={`mt-4 p-2 rounded ${messageType === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
          >
            {message}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block text-lg mb-2">Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
