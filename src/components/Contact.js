'use client';

import React from 'react';
import ContactHeader from './ContactComponents/ContactHeader';
import ContactInfo from './ContactComponents/ContactInfo';
import MapSection from './ContactComponents/MapSection';
import CombinedContactForm from './ContactComponents/CombinedContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <ContactHeader />
        
        {/* Combined form with business hours */}
        <div className="mb-12">
          <CombinedContactForm />
        </div>
        
        {/* Map and contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MapSection />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
} 