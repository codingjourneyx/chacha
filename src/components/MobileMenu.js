import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
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
    <div 
      className="fixed inset-0 bg-white/30 backdrop-blur-md flex justify-end"
      style={{ zIndex: 60 }}
      onClick={(e) => {
        // Close menu when clicking the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-[85%] max-w-sm h-full shadow-xl transform transition-transform duration-300 animate-slide-in-right border-l border-gray-200">
        <div className="p-4 border-b flex justify-between items-center bg-white">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 focus:outline-none p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4 bg-white">
          <ul className="space-y-2">
            {['home', 'services', 'about', 'testimonials', 'videos', 'contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`}
                  className={`block py-2.5 px-4 text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium transition-colors ${
                    activeSection === item ? 'bg-purple-50 text-purple-700' : ''
                  }`}
                  onClick={onClose}
                >
                  {item === 'contact' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a 
              href="#contact" 
              onClick={onClose}
              className="block w-full py-2.5 text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-md hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

// Add this to your global CSS
/*
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.animate-slide-in-right {
  animation: slideInRight 0.3s ease-out forwards;
}
*/ 