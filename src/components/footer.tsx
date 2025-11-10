"use client"

import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">PAC</span>
              </div>
              <span className="font-bold text-lg">Eco PacPlus</span>
            </div>
            <p className="text-sm opacity-90">Expert en installation et maintenance de pompes à chaleur pour un chauffage économique et écologique.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/" className="hover:opacity-100 transition-opacity">
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
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Installation PAC</li>
              <li>Maintenance & Réparation</li>
              <li>Audit Énergétique</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0182888449" className="hover:opacity-100 transition-opacity">
                  01 82 88 84 49
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@eco-pacplus.fr" className="hover:opacity-100 transition-opacity">
                  contact@eco-pacplus.fr
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
