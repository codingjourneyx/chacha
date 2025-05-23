import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wide">
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We are <span className="text-blue-600">Alhamd Technologies</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Alhamd Technologies, your premier destination for precision machining solutions. 
              With a focus on excellence, we specialize in a wide range of CNC work, cutting on our advanced 
              Band Saw Machine, and a suite of services including drilling, tapping, and slotting.
            </p>
            <div className="bg-white p-6 border-l-4 border-blue-600 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <p className="text-gray-700 font-medium">
                "Quality work, always punctual and professional. Your trusted choice for all machining needs."
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-xl opacity-20"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470" 
                  alt="CNC Machining" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Precision Machining</h3>
                  <p className="opacity-80">Excellence in every detail</p>
                </div>
            </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white rounded-full p-4 shadow-xl transform transition-transform duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '50+', label: 'Regular Clients' },
            { value: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h4>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 