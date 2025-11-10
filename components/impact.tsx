export default function Impact() {
  const stats = [
    { label: "Tons of Waste Prevented", value: "50K+" },
    { label: "Carbon Offset", value: "100K+" },
    { label: "Happy Customers", value: "2.5K+" },
    { label: "Certifications", value: "12" },
  ]

  return (
    <section id="impact" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Measurable <span className="text-primary">Environmental Impact</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our commitment to sustainability creates real, measurable change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
