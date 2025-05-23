import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 py-16 w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wide mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our valued clients have to say about our precision machining services.
          </p>
        </div>
        
        <div className="h-[600px] mb-16">
          <TestimonialSlider />
        </div>
        
        <div className="text-center">
          <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 text-lg">
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonial Slider Component
function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      role: "Manufacturing Industry",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Alhamd Technologies delivers exceptional precision machining services with remarkable attention to detail and consistently meets deadlines."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Automotive Sector",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The quality of work from Alhamd Technologies is consistently outstanding. Their precision machining has been crucial for our production line."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Aerospace Engineer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "We've relied on Alhamd Technologies for years. Their attention to detail and technical expertise has been invaluable for our specialized components."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Medical Device Manufacturer",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: "The precision and reliability of Alhamd Technologies' work has been essential for our medical components. Truly exceptional service."
    },
    {
      id: 5,
      name: "David Kim",
      role: "Electronics Industry",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote: "Finding a machining partner with such consistent quality and on-time delivery has been game-changing for our production schedule."
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2)); // Adjust for showing 3 at once
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2)); // Adjust for showing 3 at once
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-advance slides
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl shadow-xl text-white relative overflow-hidden h-full">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-400 opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <h3 className="text-3xl font-bold mb-10 relative z-10">What People Say About Us</h3>
      
      {/* Slider container */}
      <div className="relative z-10 overflow-hidden h-full">
        <div 
          className="transition-all duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {/* Testimonial slides - showing 3 at once */}
          <div className="flex w-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="w-1/3 px-4 flex-shrink-0"
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col hover:bg-white/20 transition-all duration-300 shadow-lg">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full border-2 border-white mr-4 object-cover shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200 text-base">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg italic mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex mt-auto">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-20 left-0">
          <button 
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 