export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src="/sustainable-eco-packaging-materials-nature.jpg" alt="Sustainable materials" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Dedicated to <span className="text-primary">Sustainability</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              At Eco PacPlus, we believe that premium quality and environmental responsibility go hand in hand. We help
              businesses transition to sustainable packaging without compromising on excellence or performance.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">100% Recyclable Materials</h3>
                  <p className="text-foreground/60">
                    All our packaging solutions are fully recyclable and compostable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Carbon Neutral Production</h3>
                  <p className="text-foreground/60">
                    We offset 100% of our carbon emissions in the manufacturing process.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Certified Eco-Standards</h3>
                  <p className="text-foreground/60">All products meet international sustainability certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
