import { ArrowRight, MessageCircle, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

function QuoteSection() {
  const whatsappMessage = encodeURIComponent(
    'Hola, MT Emergencias. Me gustaría solicitar información y una cotización sobre sus servicios.'
  )

  const whatsappUrl = `https://wa.me/524151701311?text=${whatsappMessage}`

  return (
    <section className="relative overflow-hidden bg-[#c21b22] py-20 sm:py-24 lg:py-28">

      {/* =========================================
          DECORACIÓN
          ========================================= */}

      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#fbc94d]/20 blur-3xl" />

      <div className="container-mt relative">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

          {/* =========================================
              TEXTO
              ========================================= */}

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <Send size={15} />
              Hablemos
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              ¿Necesitas capacitación,
              certificación o un servicio especializado?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Cuéntanos qué necesitas. Nuestro equipo puede orientarte
              sobre las opciones disponibles y ayudarte a encontrar la
              solución adecuada.
            </p>

          </div>


          {/* =========================================
              BOTONES
              ========================================= */}

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

            {/* Cotización */}
            <Link
              to="/contacto"
              className="group inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#0b2742] shadow-lg transition hover:bg-slate-100"
            >
              Solicitar cotización

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>


            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <MessageCircle size={19} />

              Hablar por WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default QuoteSection