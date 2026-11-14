import Link from 'next/link';

export default function HomeContact() {
  return (
    <>
      <section className="relative bg-white py-20 md:py-28 border-b border-ink/10 overflow-hidden" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border border-ink/10 overflow-hidden min-h-[480px] flex items-center justify-center p-8 md:p-16">
            <div className="absolute inset-0 bg-muted/5 opacity-60 pointer-events-none"></div>

            <div className="relative z-10 max-w-lg w-full bg-white p-8 md:p-10 border border-ink/10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                Find Us in Batroun Old Souk
              </h2>
              <p className="text-lg text-ink/80 mb-8">
                Open daily from 12 PM to 1 AM. Visit us for an authentic dining experience.
              </p>
              <Link
                className="inline-block bg-primary text-white px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-red-900 transition-colors active:scale-95"
                href="https://www.google.com/maps/place/?q=place_id:ChIJ99DS5BxZHxURH2em6f2gNIs"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
