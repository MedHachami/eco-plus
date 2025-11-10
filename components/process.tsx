"use client"

import { ClipboardList, Pencil, Factory, Truck } from "lucide-react"

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Understand your packaging needs and sustainability goals",
      icon: ClipboardList,
    },
    {
      number: "02",
      title: "Design",
      description: "Create custom solutions tailored to your specifications",
      icon: Pencil,
    },
    {
      number: "03",
      title: "Production",
      description: "Manufacture using eco-friendly processes and materials",
      icon: Factory,
    },
    {
      number: "04",
      title: "Delivery",
      description: "Receive premium sustainable packaging ready to use",
      icon: Truck,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            A streamlined approach to delivering sustainable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connector line for desktop - appears between steps */}
                {index < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-accent to-accent/30" />
                    <div className="hidden lg:block absolute top-12 -right-4 w-1 h-1 bg-accent rounded-full" />
                  </>
                )}

                <div className="h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className="inline-block">
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

                      {/* Main number box */}
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-3xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {step.number}
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground p-2 rounded-full shadow-lg">
                        <IconComponent size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary duration-300">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-base flex-1">{step.description}</p>
                  </div>

                  {/* Mobile connector - visible only on smaller screens */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 flex justify-center">
                      <div className="h-8 w-1 bg-gradient-to-b from-accent to-accent/30" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 pt-12 border-t border-accent/20 flex justify-center">
          <div className="inline-flex items-center gap-3 text-foreground/80">
            <div className="h-1 w-8 bg-accent rounded" />
            <span className="text-sm font-medium">Sustainable at every step</span>
            <div className="h-1 w-8 bg-accent rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
