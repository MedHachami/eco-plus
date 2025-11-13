"use client"

import { Box, Leaf, Zap, TrendingUp } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Box,
      title: "Installation PAC",
      description: "Installation complète de pompes à chaleur air/eau, air/air, géothermique sur tout le territoire",
    },
    {
      icon: Leaf,
      title: "Audit Énergétique",
      description: "Étude personnalisée pour déterminer la PAC adaptée à votre logement et vos besoins",
    },
    {
      icon: Zap,
      title: "Maintenance & Dépannage",
      description: "Contrats de maintenance préventive et intervention d'urgence sous 24h",
    },
    {
      icon: TrendingUp,
      title: "Aides & Financement",
      description: "Accompagnement pour bénéficier de toutes les aides disponibles (jusqu'à 90% du coût)",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-[#EAE0CC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-[#A0A083] max-w-2xl mx-auto">
            Installation, maintenance et conseil en pompes à chaleur pour particuliers et professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = [
              "bg-primary/10 text-primary hover:bg-primary/20",
              "bg-secondary/10 text-secondary hover:bg-secondary/20",
              "bg-accent/10 text-accent hover:bg-accent/20",
              "bg-chart-1/10 text-chart-1 hover:bg-chart-1/20",
            ]
            return (
              <div
                key={service.title}
                className="p-6 rounded-lg bg-card transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-xl border border-[#A0A083] p-6 "
              >
                <div className={`w-12 h-12 rounded-lg ${colorClasses[index % 4]} flex items-center justify-center mb-4 transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
