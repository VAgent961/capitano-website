import Link from 'next/link';

export default function HomeMenu() {
  return (
    <>
      <section className="border-b border-ink/10" id="menu">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col justify-center bg-surface">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
              Our Kitchen Specialties
            </h2>
            <p className="text-lg md:text-xl text-ink/80 mb-12 max-w-xl">
              We focus on a restricted menu to guarantee the highest quality. Enjoy our signature stuffed mushrooms, fresh prosciutto pizza, and authentic carbonara pasta.
            </p>

            <div className="space-y-8">
              <div className="pb-6 border-b border-ink/10">
                <p className="text-lg md:text-xl text-ink leading-relaxed">
                  Stuffed Mushrooms: A must-try appetizer featuring fresh ingredients.
                </p>
              </div>
              <div className="pb-6 border-b border-ink/10">
                <p className="text-lg md:text-xl text-ink leading-relaxed">
                  Prosciutto Pizza: Authentic Italian pizza topped with quality prosciutto.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary min-h-[300px] lg:min-h-full flex items-center justify-center p-12">
            <div className="w-full h-full border border-white/20 p-8 flex flex-col justify-end">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">Capitano</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
