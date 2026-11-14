'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection2() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [waLink, setWaLink] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.whatsapp) setWaLink(result.whatsapp);

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Failed to send message. Please check your connection.');
      setStatus('error');
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col space-y-8 bg-surface p-8 md:p-10 border border-ink/10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
              Visit Us
            </h2>
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
              We look forward to welcoming you to our restaurant in Batroun Old Souk.
            </p>
          </div>

          <ul className="space-y-4 pt-2 border-t border-ink/10">
            <li className="flex items-start gap-3 text-lg text-ink">
              <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
              <span>Address: Batroun Old Souk, Lebanon</span>
            </li>
            <li className="flex items-start gap-3 text-lg text-ink">
              <span className="material-symbols-outlined text-primary mt-0.5">call</span>
              <span>Phone: +961 71 608 833</span>
            </li>
            <li className="flex items-start gap-3 text-lg text-ink">
              <span className="material-symbols-outlined text-primary mt-0.5">schedule</span>
              <span>Hours: Daily 12 PM to 1 AM</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-ink/10">
            <Link
              className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white text-sm font-medium hover:opacity-90 transition-colors active:scale-95"
              href="tel:+96171608833"
            >
              Call Now
            </Link>
            <Link
              className="inline-flex justify-center items-center px-6 py-3 border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-white transition-colors active:scale-95"
              href="https://wa.me/96171608833"
            >
              Message on WhatsApp
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-surface p-8 md:p-10 border border-ink/10">
            <h3 className="text-2xl font-bold text-ink mb-6">Send us a Message</h3>
            
            {status === 'success' ? (
              <div className="space-y-6">
                <div className="p-4 bg-green-50 text-green-800 border border-green-200">
                  Thank you! Your message has been sent. We will get back to you shortly.
                </div>
                {waLink && (
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Send it on WhatsApp too
                  </a>
                )}
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-primary font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 border border-ink/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 border border-ink/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    disabled={status === 'sending'}
                    className="w-full px-4 py-2 border border-ink/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-2 border border-ink/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50 resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-50 text-red-700 text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-primary text-white font-bold hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
