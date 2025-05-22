'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  // Add a scroll handler function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-black text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        
        {/* Animated floating elements */}
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/3 w-16 h-16 bg-white rounded-full opacity-10"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center md:items-start max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider rounded-full mb-6">
              INNOVATIVE TECHNOLOGY SOLUTIONS
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left mb-6 text-white"
          >
            ALHAMD TECHNOLOGIES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-center md:text-left mb-8 max-w-3xl text-slate-300 font-light leading-relaxed"
          >
            Experience the difference with Alhamd Technologies – where excellence is not just a goal, but a guarantee. We deliver cutting-edge solutions tailored to transform your business in today's digital landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 w-full max-w-3xl"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '50+', label: 'Team Members' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-slate-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center gap-6 mt-10 w-full justify-center md:justify-start flex-wrap"
          >
            <span className="text-xs text-slate-400">Our Services:</span>
            <div className="flex items-center gap-4 flex-wrap">
              {[
                { name: "Milling Work", id: "milling" },
                { name: "Lathe Work", id: "lathe" },
                { name: "CNC Work", id: "cnc" },
                { name: "Fabrication & Welding", id: "fabrication" },
                { name: "Band Saw Machine", id: "bandsaw" },
                { name: "Drilling & Tapping", id: "drilling" }
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(service.id)}
                  className="text-indigo-300 text-xs font-semibold tracking-wide bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 