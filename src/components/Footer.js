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
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400"></div>
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-[100px]"></div>
      
      {/* Newsletter Section - Before Grid */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-indigo-600/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Stay updated</h3>
              <p className="text-indigo-200 max-w-md">Join our newsletter for the latest updates, exclusive offers, and industry insights.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white placeholder:text-white/60 w-full md:w-64"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                  ALHAMD TECH
                </span>
              </h2>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Where excellence is not just a goal, but a guarantee. We deliver innovative solutions tailored to your business needs.
            </p>
            
            <div className="flex space-x-3 pt-4">
              {/* Social Icons with modern styling */}
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-lg bg-white/10 hover:bg-indigo-600 flex items-center justify-center backdrop-blur-sm border border-white/5 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-lg bg-white/10 hover:bg-indigo-600 flex items-center justify-center backdrop-blur-sm border border-white/5 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-lg bg-white/10 hover:bg-indigo-600 flex items-center justify-center backdrop-blur-sm border border-white/5 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.youtube.com/@TheAlhamdTechnologies" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-lg bg-white/10 hover:bg-indigo-600 flex items-center justify-center backdrop-blur-sm border border-white/5 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-lg font-semibold relative inline-block mb-4">
              <span className="text-white">Navigate</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#home" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Home
              </Link>
              <Link href="#services" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Services
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                About
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Products Column */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-lg font-semibold relative inline-block mb-4">
              <span className="text-white">Products</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#product1" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Product One
              </Link>
              <Link href="#product2" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Product Two
              </Link>
              <Link href="#product3" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Product Three
              </Link>
              <Link href="#product4" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Product Four
              </Link>
            </nav>
          </div>
          
          {/* Resources Column */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-lg font-semibold relative inline-block mb-4">
              <span className="text-white">Resources</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#blog" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Blog
              </Link>
              <Link href="#tutorials" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Tutorials
              </Link>
              <Link href="#documentation" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                Documentation
              </Link>
              <Link href="#faq" className="text-slate-300 hover:text-white transition-colors group flex items-center">
                <span className="w-0 group-hover:w-5 h-px bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                FAQ
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-lg font-semibold relative inline-block mb-4">
              <span className="text-white">Get in Touch</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>
            <div className="space-y-4">
              <a href="#map" className="flex items-center text-slate-300 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600/10 backdrop-blur-md flex items-center justify-center border border-indigo-600/20 mr-3 group-hover:bg-indigo-600/20 transition-colors">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-sm">123 Innovation Drive,<br />Tech Valley, CA 94043</span>
              </a>
              <a href="mailto:info@alhamdtech.com" className="flex items-center text-slate-300 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600/10 backdrop-blur-md flex items-center justify-center border border-indigo-600/20 mr-3 group-hover:bg-indigo-600/20 transition-colors">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-sm">info@alhamdtech.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center text-slate-300 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600/10 backdrop-blur-md flex items-center justify-center border border-indigo-600/20 mr-3 group-hover:bg-indigo-600/20 transition-colors">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Alhamd Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 order-1 md:order-2">
            <Link href="/privacy" className="hover:text-indigo-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-200 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-indigo-200 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 