import { Award, ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

function CertificationSection() {
  return (
    <section className="relative overflow-hidden bg-[#071b2f] py-20 sm:py-24 lg:py-28">

      {/* Luces decorativas */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c21b22]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />

      <div className="container-mt relative">

        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
            <Award size={16} />
            Red Conocer
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Convierte tu experiencia en
            <span className="block text-[#fbc94d]">
              una competencia reconocida.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Conoce la diferencia entre capacitarte y participar en un proceso
            de evaluación y certificación por competencias.
          </p>

        </div>


        {/* =========================================
            CURSO VS CERTIFICACIÓN
            ========================================= */}

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">

          {/* Capacitación */}
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
              <BookOpen size={23} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Capacitación
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Aprende y desarrolla tus habilidades
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Fortalece tus conocimientos y habilidades mediante formación
              especializada.
            </p>

          </article>


          {/* Certificación */}
          <article className="relative overflow-hidden rounded-3xl border border-[#fbc94d]/20 bg-[#fbc94d]/[0.06] p-7 sm:p-9">

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#fbc94d]/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fbc94d] text-[#0b2742]">
                <Award size={23} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                Certificación
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Demuestra tus competencias
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Participa en un proceso de evaluación basado en un Estándar
                de Competencia.
              </p>

            </div>

          </article>

        </div>


        {/* =========================================
            CTA
            ========================================= */}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/certificaciones"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg shadow-red-950/30 transition hover:bg-[#9f151b]"
          >
            Conoce las certificaciones

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/certificaciones"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            ¿Cómo funciona?
          </Link>

        </div>

      </div>

    </section>
  )
}

export default CertificationSection