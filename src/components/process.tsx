"use client"

import { ClipboardList, Pencil, Factory, Truck } from "lucide-react"

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Audit Gratuit",
      description: "Visite à domicile pour analyser vos besoins et déterminer la PAC idéale",
    },
    {
      number: "02",
      icon: Pencil,
      title: "Devis Personnalisé",
      description: "Devis détaillé avec simulation des aides et financement adapté à votre budget",
    },
    {
      number: "03",
      icon: Factory,
      title: "Installation Pro",
      description: "Installation par nos artisans RGE certifiés en 1 à 3 jours selon le modèle",
    },
    {
      number: "04",
      icon: Truck,
      title: "Mise en Service",
      description: "Réception des travaux, formation à l'utilisation et suivi post-installation",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-[#EAE0CC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#A0A083]">Notre Processus</h2>
          <p className="text-lg text-[#A0A083] max-w-2xl mx-auto">
            De l'audit gratuit à la mise en service, un accompagnement complet pour votre projet PAC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="group">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-24 h-24 md:w-28 md:h-28">
                      {/* Number box with gradient */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary/80 flex items-center justify-center group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                        <span className="text-4xl font-bold text-[#A0A083]">{step.number}</span>
                      </div>
                      {/* Icon positioned on top-right */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-md border-2 border-black group-hover:border-black group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </div>

                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-center text-[#A0A083] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-center font-semibold text-sm text-black">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-10 w-10 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
