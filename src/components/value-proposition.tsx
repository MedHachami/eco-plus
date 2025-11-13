"use client"

import { Leaf, Award, Zap, Heart, Lightbulb, Shield } from "lucide-react"

export default function ValueProposition() {
  const values = [
    {
      icon: Leaf,
      title: "Économies d'Énergie",
      description: "Réduisez vos factures jusqu'à 70% grâce à une pompe à chaleur performante",
    },
    {
      icon: Award,
      title: "Installation Certifiée",
      description: "Artisans RGE qualifiés pour une installation conforme aux normes",
    },
    {
      icon: Zap,
      title: "Aides Financières",
      description: "Accès aux aides de l'État : MaPrimeRénov, CEE, éco-PTZ jusqu'à 90% du coût",
    },
    {
      icon: Heart,
      title: "Service 24/7",
      description: "Maintenance et dépannage disponibles en urgence toute l'année",
    },
    {
      icon: Lightbulb,
      title: "Technologie Inverter",
      description: "PAC dernière génération avec régulation précise et performance optimale",
    },
    {
      icon: Shield,
      title: "Garantie Étendue",
      description: "Garanties constructeur et main-d'œuvre pour votre tranquillité d'esprit",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-[#A0A083]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#EAE0CC]">Pourquoi Choisir Eco PacPlus ?</h2>
          <p className="text-lg text-[#EAE0CC] max-w-2xl mx-auto">
            Expert reconnu en pompes à chaleur, nous vous garantissons économies, confort et respect de l'environnement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            const colorClasses = [
              "text-primary border-primary/30 hover:bg-primary/5",
              "text-secondary border-secondary/30 hover:bg-secondary/5",
              "text-accent border-accent/30 hover:bg-accent/5",
              "text-chart-1 border-chart-1/30 hover:bg-chart-1/5",
              "text-chart-2 border-chart-2/30 hover:bg-chart-2/5",
              "text-primary border-primary/30 hover:bg-primary/5",
            ]
            return (
              <div
                key={value.title}
                className={`Card p-6 rounded-lg border ${colorClasses[index % 6]} border border-[#EAE0CC] hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#EAE0CC]">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
