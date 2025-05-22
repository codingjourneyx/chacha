import React from 'react';

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-5 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-3">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Contact Details</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600">
              <a href="tel:+919022726250" className="hover:text-blue-700 transition-colors">+91 90227 26250</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600">
              <a href="mailto:thealhamdtechnologies@gmail.com" className="hover:text-blue-700 transition-colors">thealhamdtechnologies@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600">
              Sector No - 14, Plot No - 14, <br />
              Near Shivaji Maharaj Chowk, PCNTDA, <br />
              Pune, Maharashtra - 411044
            </p>
          </div>
        </div>
      </div>
      
      {/* Need Assistance Section */}
      <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">Need Assistance?</h4>
        <p className="text-gray-700 mb-3">
          Our customer support team is available during business hours to assist you with any inquiries.
        </p>
        <a 
          href="tel:+919022726250" 
          className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call us now
        </a>
      </div>
      
     
    </div>
  );
} 