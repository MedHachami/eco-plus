"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                PC
              </div>
              <span className="font-bold text-lg text-foreground">eco-pacplus</span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition">
              Processus
            </a>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              À propos
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Devis gratuit</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#services" className="text-foreground hover:text-primary">
              Services
            </a>
            <a href="#process" className="text-foreground hover:text-primary">
              Processus
            </a>
            <Link href="/about" className="text-foreground hover:text-primary">
              À propos
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-accent text-accent-foreground">Devis gratuit</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
