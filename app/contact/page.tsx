"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, CheckCircle, Users, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property_type: "maison",
    surface: "",
    heating_type: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulaire envoyé:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      name: "",
      email: "",
      phone: "",
      property_type: "maison",
      surface: "",
      heating_type: "",
      message: "",
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-accent/10 via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Mail className="text-accent" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Devis & Rendez-Vous Gratuit
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé en 24h
            </p>
            <p className="text-lg text-primary font-semibold mt-4">
              26 années d'expérience en installation d'énergie renouvelable
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                  <a href="tel:0182888449" className="text-accent hover:text-primary transition font-bold text-lg">
                    01 82 88 84 49
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Mail className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:contact@eco-pacplus.fr" className="text-accent hover:text-primary transition">
                    contact@eco-pacplus.fr
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground text-sm">16 Allée Gambetta, 93340 Le Raincy, Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form and Sidebar */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="jean@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Adresse / Rue *</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="123 Rue de l'Exemple"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Code Postal *</label>
                  <input
                    type="text"
                    name="postal_code"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="75000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Type de bien *</label>
                  <select
                    name="property_type"
                    value={formData.property_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                    <option value="batiment">Bâtiment commercial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Surface (m²) *</label>
                  <input
                    type="number"
                    name="surface"
                    value={formData.surface}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="120"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Système actuel</label>
                  <input
                    type="text"
                    name="heating_type"
                    value={formData.heating_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Électrique, gaz, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Message supplémentaire</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Décrivez votre projet ou vos questions..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90 py-3 font-semibold text-base"
              >
                Demander un Devis Gratuit
              </Button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-800 font-medium">Merci ! Votre demande de devis a été envoyée.</p>
                    <p className="text-green-700 text-sm">
                      Nous vous recontacterons rapidement aux coordonnées fournies.
                    </p>
                  </div>
                </div>
              )}
            </form>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">Devis gratuit et sans engagement</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">Réponse en moins de 24 heures</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">Des vrais techniciens certifiés RGE</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">Installation rapide et professionnelle</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">Garantie 5 ans sur équipements</span>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="text-primary" size={24} />
                  Jours Ouvert
                </h3>
                <div className="space-y-3 text-muted-foreground font-semibold">
                  <p>Lundi-Vendredi: 8h00 - 21h00</p>
                  <p>Weekends: 8h00 - 21h00</p>
                </div>
              </div>

              {/* Team */}
              <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="text-accent" size={24} />
                  Notre équipe
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Techniciens expérimentés en énergie renouvelable avec plus de 12 ans d'expertise moyenne.
                </p>
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="text-muted-foreground text-sm">Techniciens à votre service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
