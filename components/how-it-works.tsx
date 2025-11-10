import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Demandez votre devis",
      description: "Remplissez notre formulaire rapide pour obtenir un devis personnalisé",
    },
    {
      number: "02",
      title: "Visite technique",
      description: "Notre expert visite votre domicile pour évaluer vos besoins",
    },
    {
      number: "03",
      title: "Installation professionnelle",
      description: "Installation complète et raccordements par nos techniciens certifiés",
    },
    {
      number: "04",
      title: "Suivi et maintenance",
      description: "Entretien régulier et support client pendant toute la durée de vie",
    },
  ]

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Comment ça marche</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent du devis à l'installation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl border border-border p-8 h-full">
                <div className="text-3xl font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-border hidden md:block"
                  size={24}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
