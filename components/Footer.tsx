import Link from 'next/link';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-ink/10 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/images/logo.jpg" alt="Capitano Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-ink text-sm leading-relaxed max-w-xs">
              Authentic Italian Kitchen & Bar in the historic Batroun Old Souk. Handcrafted flavors and fresh ingredients.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/capitanolb" className="text-ink hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-ink uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <Link href="tel:+96171608833" className="text-ink hover:text-primary flex items-center gap-3 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">+961 71 608 833</span>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/96171608833" className="text-ink hover:text-primary flex items-center gap-3 transition-colors">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">WhatsApp</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.google.com/maps/place/?q=place_id:ChIJ99DS5BxZHxURH2em6f2gNIs" className="text-ink hover:text-primary flex items-center gap-3 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Batroun Old Souk, Lebanon</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-ink uppercase tracking-widest mb-6">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="text-sm text-ink">Daily: 12 PM to 1 AM</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-ink/10 text-center">
          <p className="text-ink/60 text-xs">
            © {new Date().getFullYear()} Capitano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
