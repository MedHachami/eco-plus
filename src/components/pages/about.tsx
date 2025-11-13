"use client"

import { Award, Users, Target, Leaf } from "lucide-react"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-[#EAE0CC]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#798478]">À Propos d'Eco PacPlus</h1>
            <p className="text-xl text-muted-foreground max-w-3xl text-[#798478">
              Expert reconnu en installation et maintenance de pompes à chaleur depuis plus de 20 ans. Réduisez vos factures énergétiques jusqu'à 70%
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "20+", label: "Années d'Expérience" },
              { number: "5K+", label: "PAC Installées" },
              { number: "30+", label: "Artisans RGE" },
              { number: "70%", label: "Économies Moyennes" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-[#798478]">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 bg-[#A0A083]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Chez Eco PacPlus, nous sommes spécialisés dans l'installation et la maintenance de pompes à chaleur. Notre mission est de vous aider à réduire vos factures énergétiques jusqu'à 70% tout en préservant l'environnement grâce à l'énergie renouvelable.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Avec plus de 20 ans d'expérience et une équipe d'artisans RGE certifiés, nous vous accompagnons de l'audit énergétique jusqu'à la mise en service de votre PAC, en vous aidant à bénéficier de toutes les aides financières disponibles.
              </p>
              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="sm:inline-block px-8 py-3 rounded-lg  border border-border  text-foreground font-semibold hover:bg-[#798478] transition-colors"
                >
                  Audit Gratuit
                </a>
                <a
                  href="tel:0182888449"
                  className="sm:inline-block px-8 py-3 rounded-lg  border border-border  text-foreground font-semibold hover:bg-[#798478] transition-colors"
                >
                  Nous Appeler
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Leaf, title: "Énergie Verte", desc: "100% renouvelable" },
                { icon: Award, title: "Certifié RGE", desc: "Artisans qualifiés" },
                { icon: Users, title: "Expert", desc: "30+ artisans RGE" },
                { icon: Target, title: "Économies", desc: "Jusqu'à 70% d'économies" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="p-6 rounded-lg bg-secondary/50 border border-border">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
