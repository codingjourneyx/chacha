export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Get to Know Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-semibold mb-2">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Get to Know <span className="text-blue-700">Alhamd Technologies</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Welcome to Alhamd Technologies, your premier destination for precision machining solutions. 
              With a focus on excellence, we specialize in a wide range of CNC work, cutting on our advanced 
              Band Saw Machine, and a suite of services including drilling, tapping, and slotting.
            </p>
            <div className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50 rounded-r-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700 font-medium mb-2">
                Quality work, always punctual and professional.
              </p>
              <p className="text-gray-700">
                Your trusted choice for all machining needs.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-blue-200 hover:-translate-y-2">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center relative">
                <span className="text-gray-500 absolute">Precision Machining</span>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470" 
                  alt="CNC Machining" 
                  className="w-full h-full object-cover opacity-80"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 shadow-xl transform transition-transform duration-300 hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-blue-600 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* What People Say & What We Do Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* What People Say About Us */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-10 h-1 bg-blue-600 mr-4"></span>
              What People Say About Us
            </h3>
            
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full mr-4 bg-blue-100 flex items-center justify-center overflow-hidden border-2 border-blue-200">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Robert Johnson</h4>
                  <p className="text-blue-600">Manufacturing Industry</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white relative">
                <svg className="absolute -top-3 left-6 text-blue-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <polygon points="0,0 20,0 10,10" />
                </svg>
                <p className="italic">
                  "Alhamd Technologies delivers exceptional precision machining services with remarkable attention to detail and consistently meets deadlines."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-10 h-1 bg-blue-600 mr-4"></span>
              What We Do
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our skilled team is equipped to handle all types of milling and lathe work, ensuring meticulous craftsmanship in every project.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Additionally, we offer top-notch fabrication and welding services for comprehensive manufacturing solutions.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  At Alhamd Technologies, we pride ourselves on delivering quality work, always punctual and executed in a highly professional manner.
                </p>
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Horizontal line at the bottom */}
        <div className="border-t border-gray-200 mt-16"></div>
      </div>
    </section>
  );
} 