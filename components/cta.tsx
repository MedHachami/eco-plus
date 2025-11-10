import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Prêt à réduire vos factures de chauffage?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Demandez votre devis gratuit et sans engagement. Nos experts vous aideront à trouver la meilleure solution
          pour votre maison.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-base inline-flex items-center gap-2"
        >
          Obtenir mon devis maintenant
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  )
}
