import { ArrowRight, Quote, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    name: 'Testimonio próximamente',
    role: 'Participante de capacitación',
    text: '',
  },
  {
    name: 'Testimonio próximamente',
    role: 'Participante de certificación',
    text: '',
  },
  {
    name: 'Testimonio próximamente',
    role: 'Cliente MT Emergencias',
    text: '',
  },
]

function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#f8fafc]">

      <div className="container-mt">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
            Experiencias
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0b2742] sm:text-4xl lg:text-5xl">
            La confianza también se construye
            <span className="block text-[#c21b22]">
              después de cada experiencia.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Muy pronto compartiremos las experiencias de personas,
            empresas e instituciones que han trabajado con MT Emergencias.
          </p>

        </div>


        {/* =========================================
            TESTIMONIOS
            ========================================= */}

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial) => (

            <article
              key={testimonial.role}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >

              {/* Comillas */}
              <div className="absolute right-6 top-6 text-[#c21b22]/10">
                <Quote size={42} />
              </div>


              {/* Estrellas */}
              <div className="flex gap-1 text-[#fbc94d]">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}

              </div>


              {/* Texto */}
              <p className="mt-6 min-h-[96px] leading-7 text-slate-600">
                "{testimonial.text}"
              </p>


              {/* Persona */}
              <div className="mt-7 border-t border-slate-100 pt-5">

                <p className="font-bold text-[#0b2742]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            CTA
            ========================================= */}

        <div className="mt-10 flex justify-center">

          <Link
            to="/contacto"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#c21b22] transition hover:text-[#9f151b]"
          >
            ¿Quieres conocer más sobre nosotros?

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>

    </section>
  )
}

export default TestimonialsSection
