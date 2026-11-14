import Link from 'next/link';
import { Utensils } from 'lucide-react';

export default function HomeSection1() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-ink tracking-tight mb-6">
              Authentic Italian Kitchen & Bar
            </h1>
            <p className="text-lg md:text-xl text-ink/80 max-w-xl mb-10">
              Experience fresh, handcrafted Italian flavors in the historic Batroun Old Souk.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://wa.me/96171608833"
                className="bg-primary text-white px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-red-900 transition-colors active:scale-95"
              >
                Book a Table
              </Link>
              <Link
                href="/menu"
                className="border border-ink text-ink px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-ink hover:text-white transition-colors active:scale-95"
              >
                View Menu
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative w-full h-[450px] lg:h-[580px]">
            <div className="w-full h-full border border-ink/10 bg-white overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center bg-primary">
                <Utensils className="text-white w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
