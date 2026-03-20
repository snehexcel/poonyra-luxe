export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo.png"
          alt="background logo"
          className="w-[400px] sm:w-[550px] opacity-55 rounded-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
        
        {/* Brand Name */}
        <h1 className="font-serif text-6xl md:text-7xl font-light text-foreground tracking-tight">
          Poonyra Luxe
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground-black font-light">
          affordable luxury • jewelry • pretty finds
        </p>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground-black max-w-2xl mx-auto leading-relaxed">
          Discover curated pieces that bring everyday elegance and minimal luxury into your life.
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <a
            href="#shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
          >
            Explore Collection
          </a>
        </div>

      </div>
    </section>
  );
}