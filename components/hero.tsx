import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              26 ans d'expérience
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
              Devis gratuit – Installation de pompe à chaleur
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
              Remplacez votre chaudière, réduisez vos factures jusqu'à 60% et bénéficiez des aides gouvernementales
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                Je demande un devis gratuit
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                En savoir plus
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Nos certifications</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">RGE Qualifié</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">QualiPAC</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">France Entière</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl overflow-hidden h-96">
              <img
                src="/modern-heat-pump-system-installation-in-home.jpg"
                alt="Installation de pompe à chaleur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
