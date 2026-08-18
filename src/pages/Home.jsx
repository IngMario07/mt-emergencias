import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection'
import CertificationSection from '../sections/CertificationSection'
import ServicesSection from '../sections/ServicesSection'
import GallerySection from '../sections/GallerySection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ProcessSection from '../sections/ProcessSection'
import FAQSection from '../sections/FAQSection'
import QuoteSection from '../sections/QuoteSection'
import ContactSection from '../sections/ContactSection'

function Home() {
  return (
    <div className="min-h-screen bg-[#071b2f] text-slate-900">

      <Navbar />

      <main>

        {/* Presentación principal */}
        <Hero />


        {/* Pequeña introducción de MT Emergencias */}
        <AboutSection />


        {/* Introducción a RED CONOCER */}
        <CertificationSection />


        {/* Resumen de servicios */}
        <ServicesSection />


        {/* Pequeña muestra de fotografías */}
        <GallerySection />


        {/* Experiencias de clientes/alumnos */}
        <TestimonialsSection />


        {/* Resumen de nuestro proceso */}
        <ProcessSection />


        {/* Preguntas frecuentes */}
        <FAQSection />


        {/* Llamado principal a solicitar información */}
        <QuoteSection />


        {/* Información de contacto */}
        <ContactSection />

      </main>
      <Footer />
    </div>
  )
}

export default Home