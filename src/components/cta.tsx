"use client"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">Prêt à Réduire Vos Factures de 70% ?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Bénéficiez d'un audit gratuit et découvrez comment une PAC peut transformer votre confort tout en économisant des milliers d'euros
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/contact"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Audit Gratuit
          </a>
          <a
            href="tel:0182888449"
            className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            Appeler : 01 82 88 84 49
          </a>
        </div>
      </div>
    </section>
  )
}
