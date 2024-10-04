// components/Spinner.js
import React from 'react';

export default function Spinner() {
    return (
      <div className="flex items-center justify-center h-screen bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 fixed inset-0 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  