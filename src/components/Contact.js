'use client';

import React from 'react';
import ContactHeader from './ContactComponents/ContactHeader';
import CombinedContactForm from './ContactComponents/CombinedContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <ContactHeader />
        
        {/* Combined form with business hours */}
        <div className="mb-12">
          <CombinedContactForm />
        </div>

        {/* Map Section */}
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 w-full mb-10">
          <div className="flex items-center mb-3">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 rounded-lg shadow-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-800 ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">Our Location</h3>
          </div>
          <div className="aspect-video w-full h-80 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9442112511206!2d73.00586867475159!3d19.146331982088835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfb90f07b83d%3A0xcbb920ab0abea5f6!2sAlhamd%20Technologies!5e0!3m2!1sen!2sin!4v1715093525421!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Alhamd Technologies Location"
            ></iframe>
          </div>
          
          <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
            <h4 className="font-medium text-sm text-purple-800 mb-1">Visit Our Office</h4>
            <p className="text-xs text-gray-700">
              Sector No - 14, Plot No - 14, Near Shivaji Maharaj Chowk, PCNTDA, 
              Pune, Maharashtra - 411044
            </p>
          </div>
        </div>

        {/* Contact Details Section - 3 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Block 1: Phone Number */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">Phone Number</h3>
                <p className="text-xs text-gray-500 mt-0.5">Call us directly</p>
              </div>
            </div>
            <div className="mt-3 pl-13">
              <a href="tel:+919022726250" className="text-sm text-gray-700 hover:text-purple-800 font-medium transition-colors">
                +91 90227 26250
              </a>
             
            </div>
          </div>
          
          {/* Block 2: Email */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">Email Address</h3>
                <p className="text-xs text-gray-500 mt-0.5">Write to us anytime</p>
              </div>
            </div>
            <div className="mt-3 pl-13">
              <a href="mailto:thealhamdtechnologies@gmail.com" className="text-sm text-gray-700 hover:text-purple-800 font-medium transition-colors break-all">
                thealhamdtechnologies@gmail.com
              </a>
             
            </div>
          </div>
          
          {/* Block 3: Address */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">Office Address</h3>
                <p className="text-xs text-gray-500 mt-0.5">Visit our location</p>
              </div>
            </div>
            <div className="mt-3 pl-13">
              <p className="text-xs text-gray-700">
                Sector No - 14, Plot No - 14, <br />
                Near Shivaji Maharaj Chowk, PCNTDA, <br />
                Pune, Maharashtra - 411044
              </p>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
} 