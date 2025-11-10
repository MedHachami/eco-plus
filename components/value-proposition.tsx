import { Shield, Zap, MapPin } from "lucide-react"

export default function ValueProposition() {
  const values = [
    {
      icon: Shield,
      title: "Techniciens certifiés",
      description: "Nos experts sont qualifiés RGE et QualiPAC avec plus de 26 ans d'expérience combinée",
    },
    {
      icon: Zap,
      title: "Réductions garanties",
      description: "Réduisez vos factures de chauffage jusqu'à 60% avec nos solutions écologiques",
    },
    {
      icon: MapPin,
      title: "Intervention nationale",
      description: "Nous opérons dans toute la France métropolitaine avec nos équipes mobiles",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos points forts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pourquoi choisir eco-pacplus pour votre installation de pompe à chaleur
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
