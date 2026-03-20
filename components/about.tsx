export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            The Poonyra Story
          </h2>
          <p className="text-muted-foreground">
            Luxury that feels right, every single day.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-center">
          <p>
            At Poonyra Luxe, we believe luxury should feel effortless — not expensive.
          </p>

          <p>
            Our pieces are thoughtfully curated to bring a refined, minimal elegance into your everyday life.
            Each design is selected for its ability to elevate without overpowering — subtle, timeless,
            and made to be worn again and again.
          </p>

          <p>
            We focus on what truly matters: clean aesthetics, versatile styling, and that quiet confidence
            a beautiful piece brings.
          </p>

          <p className="font-medium text-foreground">
            Poonyra Luxe isn’t about trends. It’s about pieces that stay.
          </p>
        </div>

        {/* GOLD CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

          <div className="bg-[#f8d98b] border border-[#e6d3a3] rounded-2xl p-6 text-center hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Minimal. Timeless. Essential.
            </h3>
            <p className="text-sm text-foreground/70">
              Pieces that never go out of style.
            </p>
          </div>

          <div className="bg-[#f8d98b] border border-[#e6d3a3] rounded-2xl p-6 text-center hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Designed for Everyday Luxury
            </h3>
            <p className="text-sm text-foreground/70">
              Effortless pieces you'll reach for daily.
            </p>
          </div>

          <div className="bg-[#f8d98b] border border-[#e6d3a3] rounded-2xl p-6 text-center hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Looks Premium. Feels Smart.
            </h3>
            <p className="text-sm text-foreground/70">
              Luxury aesthetic without the heavy price.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}