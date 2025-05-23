import React, { useState, useEffect } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'fullscreen'
  const [isLoading, setIsLoading] = useState(true);
  
  const galleryImages = [
    {
      url: "/images/1.webp",
      alt: "Precision Machining at Alhamd Technologies"
    },
    {
      url: "/images/2.webp",
      alt: "CNC Machining Process"
    },
    {
      url: "/images/3.webp",
      alt: "Manufacturing Facility"
    },
    {
      url: "/images/4.webp",
      alt: "Quality Control Process"
    },
    {
      url: "/images/5.webp",
      alt: "Advanced Engineering"
    },
    {
      url: "/images/6.webp",
      alt: "Precision Parts Manufacturing"
    },
    {
      url: "/images/7.webp",
      alt: "Industrial Equipment"
    },
    {
      url: "/images/8.webp",
      alt: "Technical Measurements"
    },
    {
      url: "/images/9.webp",
      alt: "Factory Production Line"
    },
    {
      url: "/images/10.webp",
      alt: "Modern Machining Technology"
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          if (viewMode === 'fullscreen') {
            setViewMode('grid');
            setSelectedImageIndex(null);
          } else {
            closeModal();
          }
          break;
        case 'ArrowRight':
          if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => 
              prev === galleryImages.length - 1 ? 0 : prev + 1
            );
          }
          break;
        case 'ArrowLeft':
          if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => 
              prev === 0 ? galleryImages.length - 1 : prev - 1
            );
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, selectedImageIndex, galleryImages.length, viewMode]);

  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
      // Preload all images
      const preloadImages = galleryImages.map(img => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = img.url;
          image.onload = resolve;
        });
      });
      
      Promise.all(preloadImages).then(() => {
        setIsLoading(false);
      });
    }
  }, [isModalOpen, galleryImages]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setViewMode('grid');
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const selectImage = (index) => {
    setSelectedImageIndex(index);
    setViewMode('fullscreen');
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleBackToGrid = () => {
    setViewMode('grid');
    setSelectedImageIndex(null);
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content - 50% */}
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wide mb-4">
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We are <span className="text-blue-600 relative inline-block">
                Alhamd Technologies
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-30 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Alhamd Technologies, your premier destination for precision machining solutions. 
              With over a decade of experience, we have established ourselves as industry leaders in CNC machining 
              and custom manufacturing services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our team of skilled engineers and technicians is dedicated to delivering top-quality products 
              that meet exact specifications. We utilize state-of-the-art technology and innovative processes 
              to ensure exceptional results for every project, regardless of size or complexity.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">CNC Machining</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
                <span className="font-medium text-gray-700">Drilling & Tapping</span>
          </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Band Saw Cutting</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
                <span className="font-medium text-gray-700">Custom Solutions</span>
            </div>
            </div>
          </div>
          
          {/* Right Image - 50% */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-xl opacity-10 transform rotate-2 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-600 rounded-xl opacity-10 transform -rotate-2 hidden md:block"></div>
            <div className="relative h-full overflow-hidden rounded-xl shadow-2xl cursor-pointer group" onClick={openModal}>
              <img 
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className="w-full h-full min-h-[500px] object-cover md:max-h-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Excellence in Every Detail</h3>
                  <p className="opacity-80">Precision engineering at its finest</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={closeModal}>
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-60">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          <div 
            className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} w-full h-full flex items-center justify-center`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery View */}
            {viewMode === 'grid' && (
              <div className="max-w-7xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-4 md:p-6">
                {/* Gallery Header */}
                <div className="flex justify-between items-center mb-6 text-white">
                  <h3 className="text-2xl font-bold">Our Gallery</h3>
                  <button 
                    onClick={closeModal}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Masonry Gallery */}
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="break-inside-avoid overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mb-4 bg-white/5 backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        selectImage(index);
                      }}
                    >
                      <div className="relative transition-transform duration-300 group">
                        <img 
                          src={image.url} 
                          alt={image.alt} 
                          className="w-full h-auto object-cover"
                          style={{ 
                            height: `${index % 5 === 0 ? '400px' : 
                                   index % 3 === 0 ? '350px' : 
                                   index % 2 === 0 ? '300px' : '250px'}`
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                          <p className="text-white font-medium opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">{image.alt}</p>
                        </div>
                        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fullscreen Image View */}
            {viewMode === 'fullscreen' && selectedImageIndex !== null && (
              <div className="fixed inset-0 z-60 flex flex-col items-center justify-center">
                {/* Navigation Header */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-70 bg-gradient-to-b from-black/80 to-transparent">
                  <button 
                    onClick={handleBackToGrid}
                    className="text-white flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to gallery</span>
                  </button>
                  <div className="text-white/80 text-sm">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full flex items-center justify-center p-4 md:p-10">
                  <img 
                    src={galleryImages[selectedImageIndex].url} 
                    alt={galleryImages[selectedImageIndex].alt}
                    className="max-w-full max-h-[85vh] object-contain mx-auto shadow-2xl"
                  />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium text-center max-w-3xl mx-auto">
                      {galleryImages[selectedImageIndex].alt}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 md:p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 md:p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Thumbnail Navigation */}
                <div className="absolute bottom-16 left-0 right-0 overflow-x-auto py-2 px-4 hidden md:block">
                  <div className="flex justify-center space-x-2 max-w-4xl mx-auto">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        className={`relative flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index ? 'border-blue-500 scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectImage(index);
                        }}
                      >
                        <img 
                          src={image.url} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
} 