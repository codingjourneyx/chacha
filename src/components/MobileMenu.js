import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-[80%] max-w-sm h-full shadow-lg transform transition-transform duration-300">
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-5">
          <ul className="space-y-4">
            <li>
              <Link 
                href="#home" 
                className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md font-medium"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#services" 
                className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md font-medium"
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md font-medium"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md font-medium"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
} 