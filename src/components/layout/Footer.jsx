import {
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const whatsappMessage = encodeURIComponent(
    'Hola, MT Emergencias. Me gustaría recibir información sobre sus servicios.'
  )

  const whatsappUrl = `https://wa.me/524151701311?text=${whatsappMessage}`

  return (
    <footer className="bg-[#071b2f] text-white">

      {/* =========================================
          CONTENIDO PRINCIPAL
          ========================================= */}

      <div className="container-mt py-16 sm:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* =========================================
              MARCA
              ========================================= */}

          <div className="max-w-md">

            <Link
              to="/"
              className="inline-block"
            >
              <span className="text-2xl font-black tracking-tight">
                MT <span className="text-[#fbc94d]">EMERGENCIAS</span>
              </span>
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              Capacitación, certificación y servicios profesionales
              relacionados con emergencias, atención prehospitalaria,
              bomberos y protección civil.
            </p>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c21b22] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9f151b]"
            >
              <MessageCircle size={18} />

              WhatsApp

              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =========================================
              NAVEGACIÓN
              ========================================= */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
              Navegación
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Inicio
              </Link>

              <Link
                to="/nosotros"
                className="text-slate-400 transition hover:text-white"
              >
                Nosotros
              </Link>

              <Link
                to="/servicios"
                className="text-slate-400 transition hover:text-white"
              >
                Servicios
              </Link>

              <Link
                to="/certificaciones"
                className="text-slate-400 transition hover:text-white"
              >
                Certificaciones
              </Link>

              <Link
                to="/galeria"
                className="text-slate-400 transition hover:text-white"
              >
                Galería
              </Link>

              <Link
                to="/contacto"
                className="text-slate-400 transition hover:text-white"
              >
                Contacto
              </Link>

            </nav>

          </div>


          {/* =========================================
              CONTACTO
              ========================================= */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 transition hover:text-white"
              >
                WhatsApp

                <span className="mt-1 block font-semibold text-white">
                  415 170 1311
                </span>
              </a>


              <a
                href="tel:+524151701311"
                className="block text-slate-400 transition hover:text-white"
              >
                Teléfono

                <span className="mt-1 block font-semibold text-white">
                  415 170 1311
                </span>
              </a>


              <div className="text-slate-400">

                Ubicación

                <span className="mt-1 block font-semibold text-white">
                  San Miguel de Allende
                </span>

                <span className="block text-sm">
                  Guanajuato, México
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BARRA INFERIOR
          ========================================= */}

      <div className="border-t border-white/10">

        <div className="container-mt flex flex-col gap-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} MT Emergencias.
            Todos los derechos reservados.
          </p>


          <div className="flex items-center gap-5">

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Aviso de privacidad
            </Link>

            <span className="text-slate-700">
              |
            </span>

            <span>
              Preparados para responder.
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer