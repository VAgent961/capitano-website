"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/images/logo.jpg" alt="Capitano Logo" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-ink hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/menu" className="text-ink hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Menu
                </Link>
                <Link href="/gallery" className="text-ink hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Gallery
                </Link>
                <Link href="/contact" className="text-ink hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link
                href="https://wa.me/96171608833"
                className="bg-primary text-white px-6 py-2 font-medium hover:bg-red-900 transition-colors active:scale-95"
              >
                Book a Table
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-ink hover:text-primary focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-b border-ink/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-ink hover:text-primary block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/menu" onClick={() => setIsOpen(false)} className="text-ink hover:text-primary block px-3 py-2 text-base font-medium">
                Menu
              </Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-ink hover:text-primary block px-3 py-2 text-base font-medium">
                Gallery
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-ink hover:text-primary block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <Link
                href="https://wa.me/96171608833"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white block px-3 py-3 text-base font-medium text-center"
              >
                Book a Table
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-ink/10 px-4 py-3 flex items-center justify-between gap-4">
        <Link 
          href="tel:+96171608833" 
          className="flex-1 flex flex-col items-center justify-center gap-1 text-ink active:text-primary transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[12px] font-bold uppercase tracking-wider">Call</span>
        </Link>
        <Link 
          href="https://wa.me/96171608833" 
          className="flex-1 flex flex-col items-center justify-center gap-1 text-ink active:text-primary transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[12px] font-bold uppercase tracking-wider">WhatsApp</span>
        </Link>
        <Link 
          href="https://www.google.com/maps/place/?q=place_id:ChIJ99DS5BxZHxURH2em6f2gNIs" 
          className="flex-1 flex flex-col items-center justify-center gap-1 text-ink active:text-primary transition-colors"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-[12px] font-bold uppercase tracking-wider">Directions</span>
        </Link>
      </div>
    </>
  );
}
