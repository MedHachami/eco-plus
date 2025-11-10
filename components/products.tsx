export default function Products() {
  const products = [
    {
      name: "Eco Boxes",
      description: "Biodegradable cardboard packaging with minimal waste design",
      image: "/eco-cardboard-box-packaging.jpg",
    },
    {
      name: "Plant-Based Films",
      description: "100% compostable protective wrapping from renewable sources",
      image: "/plant-based-sustainable-film-wrap.jpg",
    },
    {
      name: "Organic Labels",
      description: "Sustainable labeling solutions made from recycled materials",
      image: "/organic-sustainable-labels-eco.jpg",
    },
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive sustainable packaging solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6 bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-foreground/60 mb-4">{product.description}</p>
              <button className="text-accent font-medium hover:text-primary transition-colors">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
