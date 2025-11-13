"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#EAE0CC] from-background via-background to-secondary/5 px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-2 rounded-full bg-[#A0A083] border border-[#C9ADA1] hover:bg-[#798478] transition-colors">
          <p className="text-sm font-medium text-accent">Énergie Renouvelable</p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#798478]">
          Pompe à Chaleur (PAC) : Économies d'Énergie Garanties
        </h1>

        <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
          Installation et maintenance de pompes à chaleur professionnelles. Réduisez vos factures jusqu'à 70% tout en
          préservant l'environnement
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="/contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Obtenir un Devis
          </a>
          <a
            href="/about"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-[#798478] transition-colors"
          >
            En Savoir Plus
          </a>
        </div>

        <div className="pt-8 grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">5K+</p>
            <p>PAC Installées</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">20+</p>
            <p>Années d'Expérience</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">70%</p>
            <p>Économies Moyennes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
