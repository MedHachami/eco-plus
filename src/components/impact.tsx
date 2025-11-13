"use client"

export default function Impact() {
  const metrics = [
    { value: "70%", label: "Économies sur Factures", highlight: true },
    { value: "5K+", label: "PAC Installées", highlight: false },
    { value: "90%", label: "Aides État Disponibles", highlight: true },
    { value: "20+", label: "Années d'Expérience", highlight: false },
  ]

  return (
    <section className="py-16 md:py-24 px-4 text-primary-foreground  bg-[#A0A083]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#EAE0CC]">Nos Résultats</h2>
          <p className="text-lg  opacity-90 max-w-2xl mx-auto text-[#EAE0CC]">
            Des économies réelles et un impact positif sur l'environnement grâce à l'énergie renouvelable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-lg ${metric.highlight ? "bg-primary-foreground/10" : ""}`}
            >
              <p className="text-4xl md:text-5xl font-bold mb-2 text-[#EAE0CC]">{metric.value}</p>
              <p className="text-sm md:text-base opacity-90 text-black">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
