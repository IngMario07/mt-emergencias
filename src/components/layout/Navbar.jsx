import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'


const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Certificaciones', path: '/certificaciones' },
  { label: 'Galería', path: '/galeria' },
  { label: 'Contacto', path: '/contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const goHome = () => {
    setIsOpen(false)

    // Si ya estamos en Inicio, no hacemos ninguna navegación.
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <nav className="border-b border-white/10 bg-[#0b2742]/90 backdrop-blur-xl">

        <div className="container-mt flex h-20 items-center justify-between">

          {/* =========================================
              LOGO
              ========================================= */}

          <Link
            to="/"
            onClick={goHome}
            className="flex items-center"
            aria-label="Ir al inicio de MT Emergencias"
          >
            <img
              src="/images/LOGOMTSF.png"
              alt="MT Emergencias"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path
                    ? 'text-[#fbc94d]'
                    : 'text-white/80 hover:text-[#fbc94d]'
                }`}
              >
                {link.label}
              </Link>

            ))}


            {/* Contacto */}
            <a
              href="tel:+524151701311"
              className="flex items-center gap-2 rounded-full bg-[#c21b22] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9f151b]"
            >
              <Phone size={16} />
              Contáctanos
            </a>

          </div>


          {/* =========================================
              BOTÓN MENÚ MÓVIL
              ========================================= */}

          <button
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>


        {/* =========================================
            MENÚ MÓVIL
            ========================================= */}

        {isOpen && (

          <div className="border-t border-white/10 bg-[#0b2742] lg:hidden">

            <div className="container-mt flex flex-col py-5">

              {navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-white/10 py-4 text-base font-medium transition ${
                    location.pathname === link.path
                      ? 'text-[#fbc94d]'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>

              ))}


              {/* Contacto móvil */}
              <a
                href="tel:+524151701311"
                onClick={() => setIsOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-5 py-3 font-semibold text-white transition hover:bg-[#9f151b]"
              >
                <Phone size={18} />
                Contáctanos
              </a>

            </div>

          </div>

        )}

      </nav>

    </header>
  )
}

export default Navbar