"use client"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#A0A083]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Prêt à Réduire Vos Factures de 70% ?</h2>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto text-[#EAE0CC] font-bold">
          Bénéficiez d'un audit gratuit et découvrez comment une PAC peut transformer votre confort tout en économisant des milliers d'euros
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/contact"
            className="sm:inline-block px-8 py-3 rounded-lg  border border-border  text-foreground font-semibold hover:bg-[#798478] transition-colors"
          >
            Audit Gratuit
          </a>
          <a
            href="tel:+33745885815"
            className="sm:inline-block px-8 py-3 rounded-lg  border border-border  text-foreground font-semibold hover:bg-[#798478] transition-colors"
          >
            Appeler : 07 45 88 58 15
          </a>
        </div>
      </div>
    </section>
  )
}
