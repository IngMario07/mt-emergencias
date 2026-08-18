import {
  Award,
  GraduationCap,
  ShieldCheck,
  Ambulance,
  Flame,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Nosotros() {
  const whatsappMessage = encodeURIComponent(
    'Hola, MT Emergencias. Me gustaría conocer más sobre la empresa y sus servicios.'
  )

  const whatsappUrl = `https://wa.me/524151701311?text=${whatsappMessage}`

  return (
    
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#071b2f] pt-20">

        {/* Luces */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c21b22]/15 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />

        <div className="container-mt relative">

          <div className="grid min-h-[65vh] items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">

            {/* Texto */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                MT Emergencias
              </span>

              <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Preparación, conocimiento
                <span className="block text-[#fbc94d]">
                  y capacidad para responder.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Somos una empresa enfocada en capacitación, certificación
                por competencias y servicios profesionales relacionados con
                emergencias, atención prehospitalaria, bomberos y protección civil.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/servicios"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white transition hover:bg-[#9f151b]"
                >
                  Conoce nuestros servicios

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  <MessageCircle size={18} />

                  Hablar por WhatsApp
                </a>

              </div>

            </div>


            {/* Imagen / placeholder */}
            <div className="relative">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">

                {/* =========================================
                    FUTURA FOTOGRAFÍA

                    Cambia posteriormente por:

                    <img
                      src="/images/nosotros.jpg"
                      alt="MT Emergencias"
                      className="h-full w-full object-cover"
                    />
                    ========================================= */}

                <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#13385d] via-[#0b2742] to-[#071b2f]">

                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#c21b22]/20 blur-3xl" />

                  <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#fbc94d]/10 blur-3xl" />

                  <div className="relative z-10 px-8 text-center">

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl">
                      🚑
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#fbc94d]">
                      MT Emergencias
                    </p>

                    <p className="mt-3 text-lg font-semibold text-white">
                      Formación · Certificación · Respuesta
                    </p>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-400">
                      Aquí colocaremos posteriormente una fotografía
                      institucional de MT Emergencias.
                    </p>

                  </div>

                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b2f]/70 via-transparent to-transparent" />

              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#0b2742]/95 px-5 py-4 shadow-xl backdrop-blur-md sm:block">

                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  MT Emergencias
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Preparados para responder.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ¿QUIÉNES SOMOS?
          ===================================================== */}

      <section className="section-padding bg-white">

        <div className="container-mt">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                Quiénes somos
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">
                Una organización enfocada en preparar personas para actuar.
              </h2>

            </div>


            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

              <p>
                En MT Emergencias trabajamos en áreas relacionadas con la
                capacitación, evaluación, certificación y atención de
                situaciones vinculadas con emergencias.
              </p>

              <p>
                Nuestro enfoque combina formación teórica y práctica con
                una visión orientada a la preparación y respuesta profesional.
              </p>

              <p>
                Buscamos que cada persona, empresa o institución encuentre
                una solución adecuada a sus necesidades de capacitación,
                certificación o servicio.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUÉ HACEMOS
          ===================================================== */}

      <section className="section-padding bg-[#f8fafc]">

        <div className="container-mt">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
              Nuestro trabajo
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">
              Cuatro áreas que forman parte de nuestra experiencia.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Desarrollamos soluciones relacionadas con formación,
              evaluación y respuesta profesional.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Capacitación */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">
                <GraduationCap size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0b2742]">
                Capacitación
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Formación especializada para desarrollar conocimientos,
                habilidades y competencias.
              </p>

            </article>


            {/* Certificación */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">
                <Award size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0b2742]">
                Certificación
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Procesos de evaluación y certificación por competencias
                conforme al estándar correspondiente.
              </p>

            </article>


            {/* Emergencias */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">
                <Ambulance size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0b2742]">
                Emergencias
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Servicios relacionados con atención prehospitalaria
                y respuesta ante situaciones de emergencia.
              </p>

            </article>


            {/* Bomberos / Protección Civil */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">
                <Flame size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0b2742]">
                Bomberos y Protección Civil
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Formación y servicios relacionados con prevención,
                preparación y respuesta ante emergencias.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUESTROS PILARES
          ===================================================== */}

      <section className="section-padding bg-[#071b2f]">

        <div className="container-mt">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                Nuestra filosofía
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Preparar no es solamente aprender.
                <span className="block text-[#fbc94d]">
                  Es estar listo para actuar.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-slate-300">
                Nuestro trabajo busca conectar el conocimiento con la
                práctica y la preparación con la capacidad de responder.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <ShieldCheck className="text-[#fbc94d]" size={25} />

                <h3 className="mt-5 font-bold text-white">
                  Profesionalismo
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Buscamos mantener procesos claros y una atención
                  profesional en cada servicio.
                </p>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <GraduationCap className="text-[#fbc94d]" size={25} />

                <h3 className="mt-5 font-bold text-white">
                  Formación
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Promovemos el desarrollo continuo de conocimientos
                  y habilidades.
                </p>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <Award className="text-[#fbc94d]" size={25} />

                <h3 className="mt-5 font-bold text-white">
                  Competencia
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  La evaluación permite reconocer las competencias
                  conforme al estándar correspondiente.
                </p>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <Ambulance className="text-[#fbc94d]" size={25} />

                <h3 className="mt-5 font-bold text-white">
                  Respuesta
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Nuestro enfoque está orientado a la preparación
                  para situaciones reales.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICACIÓN
          ===================================================== */}

      <section className="section-padding bg-white">

        <div className="container-mt">

          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 sm:p-12">

            <div className="flex flex-col gap-8 md:flex-row md:items-center">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">

                <Award size={30} />

              </div>


              <div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                  Red CONOCER
                </span>

                <h2 className="mt-2 text-2xl font-bold text-[#0b2742] sm:text-3xl">
                  Capacitación y certificación son procesos diferentes.
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  En MT Emergencias queremos que conozcas la diferencia
                  y entiendas cómo funciona la certificación por competencias.
                </p>

                <Link
                  to="/certificaciones"
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-[#c21b22]"
                >
                  Conoce nuestras certificaciones

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#c21b22] py-20">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#fbc94d]/20 blur-3xl" />

        <div className="container-mt relative">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              ¿Quieres conocer más sobre MT Emergencias?
            </h2>

            <p className="mt-5 leading-7 text-white/80">
              Estamos disponibles para orientarte sobre nuestros servicios,
              capacitaciones y procesos de certificación.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#0b2742] transition hover:bg-slate-100"
              >
                Contactarnos

                <ArrowRight size={18} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                <MessageCircle size={18} />

                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
    
  )
}

export default Nosotros