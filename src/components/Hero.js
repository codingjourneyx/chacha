'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { isBrowser } from '../utils/clientUtils';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  const scrollToServiceAndShowPopup = (serviceId) => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      setTimeout(() => {
        const event = new CustomEvent('openServicePopup', { 
          detail: { serviceId } 
        });
        document.dispatchEvent(event);
      }, 800);
    }
  };

  const [isCustomWidthRange, setIsCustomWidthRange] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (!isBrowser()) return;
      const width = window.innerWidth;
      setIsCustomWidthRange(width >= 1152 && width <= 1250);
    };
    
    checkScreenSize();
    
    if (isBrowser()) {
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white pt-20 pb-12 sm:py-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400"></div>
        <div className="absolute -top-64 -right-64 w-[30rem] h-[30rem] rounded-full bg-purple-700/30 blur-[100px] hidden sm:block"></div>
        <div className="absolute -bottom-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-purple-600/30 blur-[100px] hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] rounded-full bg-purple-600/10 blur-[120px]"></div>
        
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 backdrop-blur-md rounded-full opacity-20 hidden sm:block"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, -15, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-purple-300/20 backdrop-blur-md rounded-full opacity-20"
        />
        <motion.div 
          animate={{ 
            y: [0, 25, 0],
            opacity: [0.07, 0.15, 0.07]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 right-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-purple-300/20 backdrop-blur-md rounded-full opacity-20 hidden sm:block"
        />
      </div>
      
      <div className={`w-full max-w-[1920px] mx-auto px-6 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 relative z-10 ${isCustomWidthRange ? '!px-8' : ''}`}>
        <div className="flex flex-col items-start text-left max-w-4xl mx-0 ml-0 md:ml-8 lg:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-3"
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-700/20 via-purple-600/30 to-purple-700/20 text-purple-200 text-[10px] font-semibold tracking-wider rounded-full mb-4 backdrop-blur-sm border border-purple-500/20">
              INNOVATIVE TECHNOLOGY SOLUTIONS
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
          >
            ALHAMD TECHNOLOGIES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm mb-7 max-w-2xl text-purple-100 font-light leading-relaxed"
          >
            Experience the difference with Alhamd Technologies – where excellence is not just a goal, but a guarantee. We deliver cutting-edge solutions tailored to transform your business in today's digital landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-3 mb-8 w-full"
          >
            <Link href="#services" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto p-3 sm:px-6 sm:py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-800 rounded sm:rounded-full text-white font-medium shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
              >
                Explore Our Services
              </motion.button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto p-3 sm:px-6 sm:py-2 text-sm bg-transparent border border-purple-500/30 hover:border-purple-500/80 rounded sm:rounded-full text-purple-200 font-medium backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-4 gap-4 mb-8 w-full max-w-2xl"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '50+', label: 'Team Members' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-start sm:items-center bg-purple-900/30 backdrop-blur-md rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-700/40"
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-sm sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400 mb-1">{stat.value}</span>
                <span className="text-[9px] sm:text-[9px] md:text-[10px] text-purple-300">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="w-full mb-4"
          >
            <div className="flex justify-start gap-2 sm:gap-2 flex-wrap">
              {[
                { name: "Milling Work", id: 1 },
                { name: "Fabrication & Welding", id: 4 },

                { name: "Lathe Work", id: 2 },
                { name: "CNC Work", id: 3 },
                { name: "Band Saw Machine", id: 5 },
                { name: "Drilling & Tapping", id: 6 }
              ].map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToServiceAndShowPopup(service.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-purple-200 text-[10px] sm:text-[9px] md:text-[10px] font-medium tracking-wide bg-purple-900/30 px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-full hover:bg-purple-700/40 transition-colors cursor-pointer border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-sm mb-2"
                >
                  {service.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 