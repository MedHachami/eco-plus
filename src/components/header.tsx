"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PAC</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Eco PacPlus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              À Propos
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden sm:inline-block px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Devis Gratuit
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Basculer le menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border flex flex-col gap-4">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              À Propos
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm text-center hover:opacity-90 transition-opacity"
            >
              Devis Gratuit
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
