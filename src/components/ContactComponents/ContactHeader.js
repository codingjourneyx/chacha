import React from 'react';

export default function ContactHeader() {
  return (
    <div className="mb-16">
      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
        REACH OUT TO US
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">CONTACT US</h2>
      <p className="max-w-2xl text-gray-600">
        Have questions or need a quote? We're here to help with all your engineering and manufacturing needs.
      </p>
      <div className="w-20 h-1 bg-purple-600 mt-6"></div>
    </div>
  );
} 