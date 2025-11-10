import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Laurent",
      location: "Paris (75)",
      rating: 5,
      quote:
        "Service impeccable du devis à l'installation. Les techniciens étaient professionnels et rapides. Mes factures ont déjà baissé de 50%!",
    },
    {
      name: "Pierre Durand",
      location: "Lyon (69)",
      rating: 5,
      quote:
        "Équipe à l'écoute qui a bien expliqué le fonctionnement de la pompe. Installation sans problème. Je recommande vivement!",
    },
    {
      name: "Sophie Bernard",
      location: "Marseille (13)",
      rating: 5,
      quote:
        "Vraiment satisfaite. Très bon suivi après l'installation et disponibles pour les questions. Excellent rapport qualité-prix.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nos clients sont satisfaits
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-lg font-bold text-foreground">4.9/5</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">2 847 avis</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-border p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
