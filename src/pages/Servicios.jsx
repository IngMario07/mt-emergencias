import {
  Ambulance,
  Flame,
  GraduationCap,
  Award,
  ShieldCheck,
  CalendarCheck,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import AtePrehImg from '../assets/images/AtePreh1.jpeg'
import BomberosImg from '../assets/images/Bomberos.jpeg'
import CapacitacionImg from '../assets/images/Capacitacion.jpeg'
import CertificacionImg from '../assets/images/Certificacion.jpeg'
import PcImg from '../assets/images/pc.jpeg'
import EventoImg from '../assets/images/Evento2.jpeg'

const services = [
  {
    id: 'prehospitalaria',
    number: '01',
    icon: Ambulance,
    title: 'Atención prehospitalaria',
    subtitle: 'Respuesta y atención especializada',
    description:
      'Servicios orientados a la atención prehospitalaria y respuesta ante situaciones que requieren atención especializada antes de llegar a una unidad hospitalaria.',
    image: AtePrehImg,
    benefits: [
      'Atención prehospitalaria',
      'Personal capacitado',
      'Respuesta ante situaciones de emergencia',
      'Orientación y atención profesional',
    ],
  },
  {
    id: 'bomberiles',
    number: '02',
    icon: Flame,
    title: 'Servicios bomberiles',
    subtitle: 'Prevención, preparación y respuesta',
    description:
      'Servicios relacionados con la prevención, preparación y respuesta ante situaciones de emergencia dentro del ámbito bomberil.',
    image: BomberosImg,
    benefits: [
      'Servicios relacionados con emergencias',
      'Prevención y preparación',
      'Capacitación especializada',
      'Atención profesional',
    ],
  },
  {
    id: 'capacitacion',
    number: '03',
    icon: GraduationCap,
    title: 'Capacitación',
    subtitle: 'Aprende. Practica. Prepárate.',
    description:
      'Cursos y capacitación especializada dirigidos a personas, empresas e instituciones que buscan fortalecer sus conocimientos y habilidades.',
    image: CapacitacionImg,
    benefits: [
      'Capacitación especializada',
      'Formación teórica y práctica',
      'Cursos para personas y organizaciones',
      'Enfoque orientado a la preparación',
    ],
  },
  {
    id: 'certificaciones',
    number: '04',
    icon: Award,
    title: 'Certificaciones',
    subtitle: 'Reconoce tus competencias',
    description:
      'Procesos de evaluación y certificación por competencias con base en el Estándar de Competencia correspondiente.',
    image: CertificacionImg,
    benefits: [
      'Evaluación de competencias',
      'Estándares de Competencia',
      'Proceso de certificación',
      'Certificado de competencia laboral cuando corresponda',
    ],
  },
  {
    id: 'proteccion-civil',
    number: '05',
    icon: ShieldCheck,
    title: 'Protección Civil',
    subtitle: 'Preparación para responder',
    description:
      'Servicios y capacitación relacionados con prevención, preparación y respuesta ante situaciones de emergencia y protección civil.',
    image: PcImg,
    benefits: [
      'Prevención de riesgos',
      'Preparación ante emergencias',
      'Capacitación',
      'Orientación especializada',
    ],
  },
  {
    id: 'eventos',
    number: '06',
    icon: CalendarCheck,
    title: 'Cobertura de eventos',
    subtitle: 'Tu evento, con respaldo profesional',
    description:
      'Cobertura y atención para eventos privados, empresariales y actividades especiales que requieren apoyo relacionado con emergencias.',
    image: EventoImg,
    benefits: [
      'Cobertura de eventos',
      'Eventos privados',
      'Eventos empresariales',
      'Actividades especiales',
    ],
  },
]

function Servicios() {
  const whatsappMessage = encodeURIComponent(
    'Hola, MT Emergencias. Me gustaría solicitar información y una cotización sobre uno de sus servicios.'
  )

  const whatsappUrl = `https://wa.me/524151701311?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <section className="relative overflow-hidden bg-[#071b2f] pt-20">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c21b22]/15 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />

        <div className="container-mt relative">

          <div className="flex min-h-[55vh] items-center py-20 sm:py-24 lg:py-28">

            <div className="max-w-4xl">

              <span className="inline-flex items-center rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                Servicios
              </span>

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Soluciones profesionales
                <span className="block text-[#fbc94d]">
                  para prepararte y responder.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg lg:text-xl">
                Conoce nuestros servicios de capacitación, certificación,
                atención prehospitalaria, servicios bomberiles, protección
                civil y cobertura de eventos.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-[#9f151b]"
                >
                  <MessageCircle size={19} />
                  Solicitar información
                </a>

                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explorar servicios
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCCIÓN
          ===================================================== */}

      <section className="section-padding bg-white">

        <div className="container-mt">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
              Lo que hacemos
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">
              Una solución para cada necesidad.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              En MT Emergencias trabajamos con personas, empresas e
              instituciones para ofrecer capacitación, evaluación y servicios
              relacionados con la preparación y respuesta ante emergencias.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICIOS
          ===================================================== */}

      <section
        id="servicios"
        className="section-padding bg-[#f8fafc]"
      >

        <div className="container-mt">

          <div className="space-y-8">

            {services.map((service, index) => {

              const Icon = service.icon
              const reversed = index % 2 !== 0

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                >

                  <div
                    className={`grid lg:grid-cols-2 ${
                      reversed ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >

                    {/* =====================================
                        IMAGEN
                        ===================================== */}

                    <div className="relative min-h-[320px] overflow-hidden bg-[#0b2742] sm:min-h-[400px]">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading={index > 1 ? 'lazy' : 'eager'}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071b2f]/80 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#fbc94d] backdrop-blur-md sm:left-8 sm:top-8">
                        <Icon size={24} />
                      </div>

                      <span className="absolute bottom-6 right-6 text-6xl font-black text-white/10 sm:bottom-8 sm:right-8 sm:text-8xl">
                        {service.number}
                      </span>

                    </div>

                    {/* =====================================
                        INFORMACIÓN
                        ===================================== */}

                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                        Servicio {service.number}
                      </span>

                      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">
                        {service.title}
                      </h2>

                      <p className="mt-2 font-semibold text-[#c21b22]">
                        {service.subtitle}
                      </p>

                      <p className="mt-5 leading-7 text-slate-600">
                        {service.description}
                      </p>

                      {/* Beneficios */}
                      <div className="mt-7 space-y-3">

                        {service.benefits.map((benefit) => (

                          <div
                            key={benefit}
                            className="flex items-start gap-3"
                          >

                            <CheckCircle2
                              size={19}
                              className="mt-0.5 shrink-0 text-[#c21b22]"
                            />

                            <span className="text-sm leading-6 text-slate-600">
                              {benefit}
                            </span>

                          </div>

                        ))}

                      </div>

                      {/* Botones */}
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                        <a
                          href={`https://wa.me/524151701311?text=${encodeURIComponent(
                            `Hola, MT Emergencias. Me interesa el servicio de ${service.title}. Me gustaría recibir información y una cotización.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-6 py-3.5 font-semibold text-white transition hover:bg-[#9f151b]"
                        >
                          <MessageCircle size={18} />
                          Preguntar por WhatsApp
                        </a>

                        {service.id === 'certificaciones' && (
                          <Link
                            to="/certificaciones"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 font-semibold text-[#0b2742] transition hover:border-[#c21b22]/30 hover:bg-slate-50"
                          >
                            Ver certificaciones
                            <ArrowRight size={17} />
                          </Link>
                        )}

                      </div>

                    </div>

                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          ¿NO SABES QUÉ SERVICIO NECESITAS?
          ===================================================== */}

      <section className="section-padding bg-[#071b2f]">

        <div className="container-mt">

          <div className="mx-auto max-w-4xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
              ¿Tienes dudas?
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              No necesitas saber exactamente qué servicio necesitas.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Cuéntanos qué necesitas, qué quieres aprender o qué situación
              necesitas cubrir. Podemos orientarte sobre la opción adecuada.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white transition hover:bg-[#9f151b]"
              >
                <MessageCircle size={19} />
                Hablar con nosotros
              </a>

              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Solicitar cotización
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Servicios