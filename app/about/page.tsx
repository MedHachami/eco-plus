import Header from "@/components/header"
import Footer from "@/components/footer"
import { Leaf, Award, Zap, Heart, Lightbulb, Shield, Users, Briefcase } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Leaf className="text-primary" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              À propos de eco-pacplus
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depuis 2010, nous sommes les spécialistes du chauffage écologique en France
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Notre Histoire</h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                eco-pacplus a été fondée en 2010 par une équipe d'ingénieurs passionnés par les solutions énergétiques
                durables. Nous avons commencé par installer quelques pompes à chaleur dans notre région, et nous sommes
                rapidement devenus les leaders du secteur.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Aujourd'hui, nous avons installé plus de 10 000 systèmes de chauffage écologiques dans toute la France.
                Notre engagement envers la qualité et le service client n'a jamais vacillé. Nos techniciens certifiés
                interviennent 7j/7 et garantissent une satisfaction client de 98%.
              </p>
              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
                >
                  Demander un Devis
                </a>
                <a
                  href="tel:0182888449"
                  className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
                >
                  Nous Appeler
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl h-96 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/team-meeting-for-sustainability.jpg"
                alt="Notre équipe"
                className="rounded-xl w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <div className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="text-primary" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary">10K+</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Installations</h3>
              <p className="text-muted-foreground text-sm">Pompes à chaleur installées avec succès</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="text-accent" size={28} />
                </div>
                <div className="text-4xl font-bold text-accent">15 ans</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">D'expérience</h3>
              <p className="text-muted-foreground text-sm">D'expertise dans le secteur énergétique</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="text-primary" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary">98%</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Satisfaction</h3>
              <p className="text-muted-foreground text-sm">De nos clients satisfaits de leurs services</p>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Nos Valeurs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Leaf className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Durabilité</h3>
                    <p className="text-muted-foreground">
                      Nous nous engageons à réduire l'empreinte carbone de nos clients grâce à des solutions
                      énergétiques durables et performantes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-accent/5 to-transparent rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Lightbulb className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Excellence</h3>
                    <p className="text-muted-foreground">
                      Chaque projet est exécuté avec précision et attention aux détails, en utilisant les meilleures
                      technologies disponibles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Confiance</h3>
                    <p className="text-muted-foreground">
                      Nos clients peuvent compter sur notre expertise et notre transparence dans tous nos échanges et
                      services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-accent/5 to-transparent rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Innovation</h3>
                    <p className="text-muted-foreground">
                      Nous investissons continuellement dans les nouvelles technologies pour offrir les solutions les
                      plus efficaces et économiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-24 pt-12 border-t border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-accent" size={28} />
                  <h2 className="text-3xl font-bold text-foreground">Notre Équipe</h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Notre équipe est composée de techniciens certifiés RGE et QualiPAC avec une expérience moyenne de 12
                  ans dans le secteur des énergies renouvelables.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Tous nos collaborateurs suivent une formation continue pour rester à la pointe des dernières
                  technologies et normes environnementales.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
                  <Briefcase className="text-primary mb-3" size={32} />
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground text-sm">Techniciens experts</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-transparent p-6 rounded-xl border border-accent/20">
                  <Award className="text-accent mb-3" size={32} />
                  <p className="text-4xl font-bold text-accent mb-2">100%</p>
                  <p className="text-muted-foreground text-sm">Certifiés RGE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
