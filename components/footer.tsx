import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-foreground font-bold text-sm">
                EP
              </div>
              <span className="font-bold text-lg">eco-pacplus</span>
            </div>
            <p className="text-sm opacity-75">
              Votre partenaire pour l'installation de pompes à chaleur de qualité en France.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Pompe à chaleur air-eau
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Pompe à chaleur air-air
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Ballon thermodynamique
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Plancher chauffant
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-accent">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Nos certifications
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-accent">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:0182888449" className="opacity-75 hover:opacity-100 transition">
                  01 82 88 84 49
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:contact@eco-pacplus.fr" className="opacity-75 hover:opacity-100 transition">
                  contact@eco-pacplus.fr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span className="opacity-75">France Entière</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>&copy; 2025 eco-pacplus. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
