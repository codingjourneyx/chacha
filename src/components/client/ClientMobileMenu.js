'use client';

import MobileMenu from '../MobileMenu';

export default function ClientMobileMenu({ isOpen, onClose }) {
  return <MobileMenu isOpen={isOpen} onClose={onClose} />;
} 