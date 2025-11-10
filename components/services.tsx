export default function Services() {
  const services = [
    {
      title: "Pompe à chaleur air-eau",
      description: "Système haute performance pour le chauffage central et l'eau chaude",
      icon: "🌊",
    },
    {
      title: "Pompe à chaleur air-air",
      description: "Climatisation réversible et chauffage pour chaque pièce",
      icon: "❄️",
    },
    {
      title: "Ballon thermodynamique",
      description: "Eau chaude gratuite en exploitation avec efficacité énergétique maximale",
      icon: "🔥",
    },
    {
      title: "Plancher chauffant",
      description: "Confort optimal avec distribution de chaleur uniforme",
      icon: "⚡",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour votre confort thermique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
