"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quelle est la durée de vie d'une pompe à chaleur ?",
    answer:
      "Les pompes à chaleur modernes ont une durée de vie typique de 15 à 20 ans. Avec un entretien régulier, elles peuvent durer encore plus longtemps et fonctionner de manière optimale.",
  },
  {
    question: "Combien d'économies puis-je réaliser ?",
    answer:
      "Vous pouvez économiser jusqu'à 50% sur vos factures de chauffage selon votre ancien système. Les économies dépendent de votre climat, de la taille de votre maison et de vos habitudes de consommation.",
  },
  {
    question: "Y a-t-il des aides financières disponibles ?",
    answer:
      "Oui, plusieurs aides existent : crédit d'impôt, MaPrimeRénov, CEE (Certificats d'Économies d'Énergie). Notre équipe peut vous aider à déterminer vos éligibilités.",
  },
  {
    question: "Quel est le délai d'installation ?",
    answer:
      "L'installation typique prend entre 3 à 5 jours selon la complexité du projet. Nous coordonnons tous les aspects pour minimiser les perturbations.",
  },
  {
    question: "Avez-vous une garantie ?",
    answer:
      "Oui, nous offrons une garantie fabricant de 5 ans sur les équipements et une garantie d'installation de 2 ans sur nos services.",
  },
  {
    question: "Les pompes à chaleur fonctionnent-elles par temps froid ?",
    answer:
      "Absolument ! Les pompes à chaleur modernes fonctionnent efficacement jusqu'à -15°C. Elles sont conçues pour les climats tempérés français.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-background" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-muted-foreground">
            Trouvez les réponses à vos questions sur nos services et solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-white transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-muted/50 transition"
              >
                <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
