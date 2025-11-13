export default function Coverage() {
  const regions = [
    "Île-de-France",
    "Auvergne-Rhône-Alpes",
    "Provence-Alpes-Côte d'Azur",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Hauts-de-France",
    "Grand Est",
    "Bourgogne-Franche-Comté",
    "Pays de la Loire",
    "Bretagne",
    "Normandie",
    "Centre-Val de Loire",
  ]

  return (
    <section id="coverage" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos zones d'intervention</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous intervenons dans toute la France métropolitaine
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-muted transition-colors"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground text-xs">✓</span>
                </div>
                <span className="text-foreground font-medium">{region}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground">
              Votre région n'est pas dans la liste? Contactez-nous, nous étudions toutes les demandes!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
