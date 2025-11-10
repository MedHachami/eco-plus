"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean Dupont",
      company: "Propriétaire - Maison 120m²",
      text: "Installation d'une PAC air/eau il y a 2 ans. Ma facture de chauffage a baissé de 65% ! Équipe professionnelle et installation impeccable.",
      rating: 5,
    },
    {
      name: "Marie Laurent",
      company: "Propriétaire - Appartement 80m²",
      text: "Excellent service de A à Z. L'audit était gratuit et très détaillé. Les aides ont couvert 85% du coût. Je recommande sans hésiter !",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      company: "Propriétaire - Villa 200m²",
      text: "PAC géothermique installée il y a 3 ans. Confort optimal, factures divisées par 3, et maintenance annuelle sans problème. Parfait !",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Témoignages Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 5000 installations réalisées avec satisfaction. Découvrez les retours de nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
