'use client';

import React from 'react';
import ContactHeader from './ContactComponents/ContactHeader';
import ContactForm from './ContactComponents/ContactForm';
import ContactInfo from './ContactComponents/ContactInfo';
import BusinessHours from './ContactComponents/BusinessHours';
import MapSection from './ContactComponents/MapSection';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <ContactHeader />
        
        {/* Two-column layout for form and map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ContactForm />
          <MapSection />
        </div>
        
        {/* Contact info and business hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <BusinessHours />
        </div>
      </div>
    </section>
  );
} 