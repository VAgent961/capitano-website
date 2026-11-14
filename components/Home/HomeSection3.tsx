export default function HomeSection3() {
  return (
    <>
      <section className="py-20 md:py-28 bg-surface border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-14 text-center md:text-left">
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-background p-8 md:p-10 border border-ink/10 flex flex-col justify-between">
              <p className="text-lg text-ink/80 mb-8 leading-relaxed">
                This is a cozy italian restaurant in Batroun old souk. I had a draft Heineken beer that was chilled to perfection and it came with a generous amount of pistacio. Then i had the goat cheese with sundried potato and olives starter which was a marvelous dish and the size was huge. Prices are reasonable for the quality.
              </p>
              <div className="pt-4 border-t border-ink/10">
                <h3 className="text-xl font-semibold text-ink uppercase tracking-wider">
                  Elias Assaf
                </h3>
              </div>
            </div>

            <div className="bg-background p-8 md:p-10 border border-ink/10 flex flex-col justify-between">
              <p className="text-lg text-ink/80 mb-8 leading-relaxed">
                Capitano in Batroun Souk is truly a gem for Italian food lovers. We tried the stuffed mushrooms, the prosciutto pizza, and the carbonara pasta — all were super delicious and full of authentic Italian flavor. The ingredients tasted fresh, the dishes were perfectly cooked, and the portions were just right. The atmosphere is warm and cozy.
              </p>
              <div className="pt-4 border-t border-ink/10">
                <h3 className="text-xl font-semibold text-ink uppercase tracking-wider">
                  Mazen Daou
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
