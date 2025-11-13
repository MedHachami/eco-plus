"use client"

import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#A0A083] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-12 rounded-lg bg-gradient-to-br from-primary-foreground/30 to-accent/30 flex items-center justify-center">
                <img src="/ecopacplus-logo.png" alt="eco-pacplus-logo" className="w-8 h-8" />

              </div>
            </div>
            <p className="text-black opacity-90 font-semibold">Expert en installation et maintenance de pompes à chaleur pour un chauffage économique et écologique.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#EAE0CC]">Liens Rapides</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/" className="hover:opacity-100 transition-opacity ">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/about" className="hover:opacity-100 transition-opacity">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#EAE0CC]">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Installation PAC</li>
              <li>Maintenance & Réparation</li>
              <li>Audit Énergétique</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[#EAE0CC]">Contact</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+33 74 58 85 815" className="hover:opacity-100 transition-opacity">
                  +33 7 45 88 58 15
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@eco-pacplus.com" className="hover:opacity-100 transition-opacity">
                  contact@eco-pacplus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} Eco PacPlus. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Confidentialité
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Conditions
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
