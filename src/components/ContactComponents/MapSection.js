import React from 'react';

export default function MapSection() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
      <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden flex-grow">
        <div className="aspect-video w-full h-full rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5650956267704!2d73.0089765!3d19.1388459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf65e6e43375%3A0x55b432b3d64b682e!2s42Q5%2B2H9%2C%20C%20V%20Raman%20Road%2C%20BS%20Ambedkar%20Nagar%2C%20Anushakti%20Nagar%2C%20MIDC%20Area%20Rd%2C%20Mumbai%2C%20Maharashtra%20400094%2C%20India!5e0!3m2!1sen-GB!2sin!4v1715844239196!5m2!1sen-GB!2sin" 
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
        
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">Visit Our Office</h4>
          <p className="text-gray-700">
            Sector No - 14, Plot No - 14, Near Shivaji Maharaj Chowk, PCNTDA, 
            Pune, Maharashtra - 411044
          </p>
        </div>
      </div>
    </div>
  );
} 