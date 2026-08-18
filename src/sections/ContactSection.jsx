import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function ContactSection() {
  const whatsappMessage = encodeURIComponent(
    'Hola, MT Emergencias. Me gustaría solicitar información sobre sus servicios.'
  )

  const whatsappUrl = `https://wa.me/524151701311?text=${whatsappMessage}`

  return (
    <section className="section-padding bg-[#f8fafc]">

      <div className="container-mt">

        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
            Contacto
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0b2742] sm:text-4xl lg:text-5xl">
            Estamos listos para
            <span className="block text-[#c21b22]">
              escucharte.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Cuéntanos qué necesitas y encuentra la mejor manera de
            comunicarte con MT Emergencias.
          </p>

        </div>


        {/* =========================================
            INFORMACIÓN DE CONTACTO
            ========================================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c21b22]/20 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d] transition group-hover:bg-[#c21b22] group-hover:text-white">
              <MessageCircle size={23} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              WhatsApp
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#0b2742]">
              415 170 1311
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Escríbenos directamente para recibir información.
            </p>

          </a>


          {/* Teléfono */}
          <a
            href="tel:+524151701311"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c21b22]/20 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d] transition group-hover:bg-[#c21b22] group-hover:text-white">
              <Phone size={23} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Teléfono
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#0b2742]">
              415 170 1311
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Comunícate directamente con nuestro equipo.
            </p>

          </a>


          {/* Ubicación */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c21b22]/20 hover:shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d] transition group-hover:bg-[#c21b22] group-hover:text-white">
              <MapPin size={23} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Ubicación
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#0b2742]">
              San Miguel de Allende
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Guanajuato, México.
            </p>

          </div>

        </div>


        {/* =========================================
            ACCIONES
            ========================================= */}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/contacto"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#9f151b] sm:w-auto"
          >
            Ver información de contacto

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>


          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-[#0b2742] transition hover:border-[#c21b22]/20 hover:bg-slate-50 sm:w-auto"
          >
            <MessageCircle size={19} />

            Hablar por WhatsApp
          </a>

        </div>

      </div>

    </section>
  )
}

export default ContactSection