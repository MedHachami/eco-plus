import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import Products from "@/components/products"
import Impact from "@/components/impact"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <Products />
      <Impact />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
