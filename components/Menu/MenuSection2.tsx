export default function MenuSection2() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left border-b border-ink/10 pb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">Our Menu</h2>
          </div>
          <div className="space-y-12">
            <article className="group">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-ink">Stuffed Mushrooms</h3>
              </div>
              <p className="mt-2 text-base md:text-lg text-ink/80">Chef's signature mushroom dish.</p>
            </article>

            <article className="group">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-ink">Goat Cheese Starter</h3>
              </div>
              <p className="mt-2 text-base md:text-lg text-ink/80">Served with sundried potatoes and olives.</p>
            </article>

            <article className="group">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-ink">Quinoa Salad</h3>
              </div>
              <p className="mt-2 text-base md:text-lg text-ink/80">Fresh and healthy signature salad.</p>
            </article>

            <article className="group">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-ink">Prosciutto Pizza</h3>
              </div>
              <p className="mt-2 text-base md:text-lg text-ink/80">Authentic pizza with premium prosciutto.</p>
            </article>

            <article className="group">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-ink">Carbonara Pasta</h3>
              </div>
              <p className="mt-2 text-base md:text-lg text-ink/80">Classic pasta with authentic flavor.</p>
            </article>

            <article className="group">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-ink">Regional Wine</h3>
              </div>
              <p className="mt-2 text-base md:text-lg text-ink/80">Quality wine from the region.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
