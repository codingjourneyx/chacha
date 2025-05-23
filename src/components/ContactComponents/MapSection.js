import React from 'react';

export default function MapSection() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
      <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden flex-grow">
        <div className="aspect-video w-full h-full rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/place/Alhamd+Technologies/@19.1463319,73.0080576,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bfb90f07b83d:0xcbb920ab0abea5f6!8m2!3d19.1463319!4d73.0080576!16s%2Fg%2F11vdfb36fz?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D" 
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
        
        <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
          <h4 className="font-semibold text-purple-800 mb-2">Visit Our Office</h4>
          <p className="text-gray-700">
            Sector No - 14, Plot No - 14, Near Shivaji Maharaj Chowk, PCNTDA, 
            Pune, Maharashtra - 411044
          </p>
        </div>
      </div>
    </div>
  );
} 