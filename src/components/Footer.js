import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400"></div>
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-purple-700/30 blur-[100px]"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-600/30 blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-[120px]"></div>
      
      {/* Newsletter Section - Before Grid */}
      <div className="container mx-auto px-3 sm:px-4 mb-10 sm:mb-16 relative z-10">
        <div className="bg-gradient-to-r from-purple-700/20 via-purple-600/30 to-purple-700/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-purple-500/10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-base font-semibold relative inline-block mb-2">
                <span className="text-white">Stay updated</span>
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
              </h3>
              <p className="text-purple-200 text-sm max-w-md">Join our newsletter for the latest updates and exclusive offers.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-3 py-2 sm:px-4 sm:py-3 bg-purple-900/30 backdrop-blur-md border border-purple-500/20 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder:text-white/60 w-full md:w-64 text-sm"
                required
              />
              <button 
                type="submit" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg sm:rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 lg:gap-6">
          {/* Company Info */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                  ALHAMD TECH
                </span>
              </h2>
            </div>
            
            <p className="text-purple-100 leading-relaxed">
              Where excellence is not just a goal, but a guarantee. We deliver innovative solutions tailored to your business needs.
            </p>
            
            <div className="flex space-x-3 pt-4">
              {/* Social Icons with modern styling */}
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-lg bg-purple-900/30 hover:bg-purple-600 flex items-center justify-center backdrop-blur-sm border border-purple-500/10 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-lg bg-purple-900/30 hover:bg-purple-600 flex items-center justify-center backdrop-blur-sm border border-purple-500/10 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-lg bg-purple-900/30 hover:bg-purple-600 flex items-center justify-center backdrop-blur-sm border border-purple-500/10 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.youtube.com/@TheAlhamdTechnologies" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-lg bg-purple-900/30 hover:bg-purple-600 flex items-center justify-center backdrop-blur-sm border border-purple-500/10 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Navigate</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#home" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Home
              </Link>
              <Link href="#services" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Services
              </Link>
              <Link href="#about" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                About
              </Link>
              <Link href="#testimonials" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Testimonials
              </Link>
              <Link href="#videos" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Videos
              </Link>
              <Link href="#contact" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Products Column changed to Specialization */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Specialization</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#services?id=1" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Milling Work
              </Link>
              <Link href="#services?id=2" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Lathe Work
              </Link>
              <Link href="#services?id=3" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                CNC Work
              </Link>
              <Link href="#services?id=4" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Fabrication and Welding
              </Link>
            </nav>
          </div>
          
          {/* Resources Column changed to Facilities & Capabilities */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Facilities & Capabilities</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#services?id=14" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Wire Cut and EDM
              </Link>
              <Link href="#services?id=15" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Laser and Plasma Cutting
              </Link>
              <Link href="#services?id=5" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Band Saw Machine
              </Link>
              <Link href="#services?id=6" className="text-purple-200 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Drilling, Tapping, Slotting
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Get in Touch</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></span>
            </h3>
            <div className="space-y-4">
              <a href="#map" className="flex items-center text-purple-200 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-900/30 backdrop-blur-md flex items-center justify-center border border-purple-500/20 mr-3 group-hover:bg-purple-700/40 transition-colors">
                  <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-sm">Sector No - 14, Plot No - 14,<br />Near Shivaji Maharaj Chowk, PCNTDA,<br />Pune, Maharashtra - 411044</span>
              </a>
              <a href="mailto:thealhamdtechnologies@gmail.com" className="flex items-center text-purple-200 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-900/30 backdrop-blur-md flex items-center justify-center border border-purple-500/20 mr-3 group-hover:bg-purple-700/40 transition-colors">
                  <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-sm">thealhamdtechnologies@gmail.com</span>
              </a>
              <a href="tel:+919022726250" className="flex items-center text-purple-200 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-900/30 backdrop-blur-md flex items-center justify-center border border-purple-500/20 mr-3 group-hover:bg-purple-700/40 transition-colors">
                  <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-sm">+91 90227 26250</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-purple-900/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300/70 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Alhamd Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-300/70 order-1 md:order-2">
            <Link href="/privacy" className="hover:text-purple-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-200 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-purple-200 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 