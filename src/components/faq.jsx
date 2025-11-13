import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Combien coûte l'installation d'une pompe à chaleur ?",
      answer:
        "Le prix d'une PAC varie entre 10 000€ et 25 000€ selon le type (air/eau, air/air, géothermique) et la puissance. Avec les aides de l'État (MaPrimeRénov, CEE), vous pouvez bénéficier jusqu'à 90% de financement. Demandez un devis gratuit pour une estimation précise.",
    },
    {
      question: "Quelles sont les aides financières disponibles ?",
      answer:
        "Vous pouvez bénéficier de MaPrimeRénov (jusqu'à 15 000€), des Certificats d'Économies d'Énergie (CEE), de l'éco-PTZ à taux zéro, et de la TVA réduite à 5,5%. Le montant total peut couvrir jusqu'à 90% du coût d'installation.",
    },
    {
      question: "Quel type de PAC choisir pour ma maison ?",
      answer:
        "Le choix dépend de votre logement : PAC air/eau pour le chauffage central, PAC air/air pour le chauffage/climatisation, PAC géothermique pour les grandes surfaces. Notre audit gratuit détermine la solution optimale.",
    },
    {
      question: "Combien de temps dure l'installation ?",
      answer:
        "L'installation d'une PAC air/eau prend généralement 1 à 3 jours. Pour une PAC géothermique avec forage, comptez 5 à 10 jours. Nos artisans RGE certifiés s'engagent sur des délais respectés.",
    },
    {
      question: "Quelle est la garantie sur l'installation ?",
      answer:
        "Nous offrons une garantie pièces et main-d'œuvre de 2 ans minimum, plus les garanties constructeur (jusqu'à 10 ans sur le compresseur). Contrats de maintenance disponibles pour prolonger les garanties.",
    },
    {
      question: "Une PAC fonctionne-t-elle même en hiver froid ?",
      answer:
        "Oui ! Les PAC modernes fonctionnent jusqu'à -25°C. En cas de grand froid, un appoint électrique peut compléter. Les PAC géothermiques sont les plus performantes en hiver car elles puisent la chaleur dans le sol.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#EAE0CC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#798478]">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-[#A0A083]">
            Vous avez une question ? Nous avons les réponses
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 animate-slide-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-[#EAE0CC]/30 transition-all duration-300"
              >
                <span className="font-semibold text-left text-[#798478] group-hover:text-[#A0A083] transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C9ADA1] transition-all duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-5 border-t-2 border-[#EAE0CC] text-black bg-gradient-to-br from-[#EAE0CC]/20 to-[#C9ADA1]/10 animate-fade-in-down">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
