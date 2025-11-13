"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function QuickForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-12 md:py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Votre devis en 5 minutes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Remplissez rapidement vos informations. Rendez-vous et devis 100% gratuits, sans engagement.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">Rapide</p>
                  <p className="text-sm text-muted-foreground">Moins de 5 minutes</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">Gratuit</p>
                  <p className="text-sm text-muted-foreground">Aucun frais caché</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">Sans engagement</p>
                  <p className="text-sm text-muted-foreground">Vous êtes libre</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-card rounded-xl border border-border p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Devis & rendez-vous gratuit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-input"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-input"
                    placeholder="jean@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-input"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zipcode" className="text-foreground mb-2 block">
                    Code postal
                  </Label>
                  <Input
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className="border-input"
                    placeholder="75001"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-input"
                  placeholder="Décrivez votre projet..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12"
              >
                Obtenir mon devis gratuit
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Nous respectons votre confidentialité. Vos données ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
