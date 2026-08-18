import {
  ArrowRight,
  Camera,
  GraduationCap,
  Ambulance,
  Flame,
  Award,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


const galleryItems = [
  {
    category: 'Capacitación',
    title: 'Formación en atención prehospitalaria',
    description:
      'Prácticas y ejercicios orientados al desarrollo de habilidades para responder ante situaciones de emergencia.',
    image: null,
    icon: GraduationCap,
  },

  {
    category: 'Primeros auxilios',
    title: 'Prácticas de atención y RCP',
    description:
      'Actividades prácticas para fortalecer conocimientos y habilidades de respuesta ante emergencias.',
    image: null,
    icon: ShieldCheck,
  },

  {
    category: 'Atención prehospitalaria',
    title: 'Simulación de escenarios de emergencia',
    description:
      'Ejercicios prácticos que permiten aplicar protocolos y técnicas de atención prehospitalaria.',
    image: null,
    icon: Ambulance,
  },

  {
    category: 'Certificación',
    title: 'Evaluación de competencias',
    description:
      'Procesos de evaluación realizados con base en los criterios establecidos en el Estándar de Competencia correspondiente.',
    image: null,
    icon: Award,
  },

  {
    category: 'Servicios bomberiles',
    title: 'Preparación y respuesta',
    description:
      'Actividades relacionadas con prevención, preparación y respuesta ante situaciones de emergencia.',
    image: null,
    icon: Flame,
  },

  {
    category: 'Capacitación',
    title: 'Entrenamiento práctico',
    description:
      'Sesiones prácticas diseñadas para que los participantes desarrollen experiencia en situaciones controladas.',
    image: null,
    icon: GraduationCap,
  },

  {
    category: 'Servicios',
    title: 'Cobertura y atención de eventos',
    description:
      'Servicios especializados para eventos privados, empresariales y actividades especiales.',
    image: null,
    icon: Ambulance,
  },

  {
    category: 'Protección Civil',
    title: 'Preparación para emergencias',
    description:
      'Capacitación y actividades enfocadas en prevención y preparación ante diferentes escenarios.',
    image: null,
    icon: ShieldCheck,
  },
]


function Galeria() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO GALERÍA
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#071b2f] pt-32 pb-20 sm:pb-24">

        {/* Decoraciones */}

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c21b22]/15 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />


        <div className="container-mt relative">

          <div className="max-w-3xl">

            {/* Etiqueta */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">

              <Camera size={16} />

              Galería

            </div>


            {/* Título */}

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

              Experiencia que se aprende.

              <span className="block text-[#fbc94d]">
                Experiencia que se demuestra.
              </span>

            </h1>


            {/* Descripción */}

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">

              Conoce parte de las actividades, capacitaciones,
              evaluaciones y servicios que realizamos en
              MT Emergencias.

            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          GALERÍA
          ===================================================== */}

      <main className="section-padding">

        <div className="container-mt">


          {/* Introducción */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                Nuestro trabajo
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b2742] sm:text-4xl">
                Formación, práctica y respuesta.
              </h2>

            </div>

            <p className="max-w-xl leading-7 text-slate-600">

              Cada actividad representa una oportunidad para
              aprender, practicar y estar mejor preparados para
              responder ante una emergencia.

            </p>

          </div>



          {/* =================================================
              TARJETAS
              ================================================= */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {galleryItems.map((item, index) => {

              const Icon = item.icon

              return (

                <article
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Imagen / Placeholder */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0b2742]">

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    ) : (

                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#13385d] via-[#0b2742] to-[#071b2f]">

                        {/* Luces */}

                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#c21b22]/20 blur-3xl" />

                        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#fbc94d]/10 blur-3xl" />


                        <div className="relative z-10 text-center">

                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#fbc94d]">

                            <Icon size={28} />

                          </div>

                          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                            MT Emergencias
                          </p>

                          <p className="mt-2 text-sm text-slate-400">
                            Fotografía próximamente
                          </p>

                        </div>

                      </div>

                    )}


                    {/* Categoría */}

                    <div className="absolute left-4 top-4">

                      <span className="rounded-full bg-[#071b2f]/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">

                        {item.category}

                      </span>

                    </div>

                  </div>


                  {/* Contenido */}

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-[#0b2742]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </article>

              )

            })}

          </div>



          {/* =================================================
              AVISO PARA FUTURAS FOTOGRAFÍAS
              ================================================= */}

          <div className="mt-14 rounded-3xl border border-[#0b2742]/10 bg-[#0b2742] p-7 sm:p-9">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                  Galería en crecimiento
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Próximamente más actividades.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">

                  Esta galería se actualizará con fotografías reales
                  de nuestras capacitaciones, certificaciones,
                  servicios y actividades.

                </p>

              </div>


              <Link
                to="/contacto"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c21b22] px-6 py-3.5 font-semibold text-white transition hover:bg-[#9f151b]"
              >

                Solicitar información

                <ArrowRight size={17} />

              </Link>

            </div>

          </div>

        </div>

      </main>



      {/* =====================================================
          CTA WHATSAPP
          ===================================================== */}

      <section className="bg-white pb-20">

        <div className="container-mt">

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">

            <MessageCircle
              size={32}
              className="mx-auto text-[#c21b22]"
            />

            <h2 className="mt-5 text-2xl font-bold text-[#0b2742] sm:text-3xl">
              ¿Quieres conocer nuestros servicios?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">

              Escríbenos directamente y cuéntanos qué necesitas.
              Podemos orientarte sobre capacitación, certificación,
              cobertura de eventos y nuestros demás servicios.

            </p>


            <a
              href="https://wa.me/524151701311?text=Hola%20MT%20Emergencias,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-[#9f151b]"
            >
              
              <MessageCircle size={19} />

              Contactar por WhatsApp

            </a>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Galeria