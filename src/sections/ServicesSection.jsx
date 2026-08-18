import {
  Ambulance,
  Flame,
  GraduationCap,
  Award,
  ShieldCheck,
  CalendarCheck,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Ambulance,
    number: '01',
    title: 'Atención prehospitalaria',
    description:
      'Atención especializada y servicios orientados a la respuesta prehospitalaria ante situaciones de emergencia.',
  },
  {
    icon: Flame,
    number: '02',
    title: 'Servicios bomberiles',
    description:
      'Servicios relacionados con prevención, preparación y respuesta ante situaciones de emergencia.',
  },
  {
    icon: GraduationCap,
    number: '03',
    title: 'Capacitación',
    description:
      'Cursos y capacitación especializada para personas, empresas e instituciones.',
  },
  {
    icon: Award,
    number: '04',
    title: 'Certificaciones',
    description:
      'Procesos de evaluación y certificación de competencias conforme al estándar correspondiente.',
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Protección Civil',
    description:
      'Servicios y capacitación relacionados con prevención, preparación y respuesta ante emergencias.',
  },
  {
    icon: CalendarCheck,
    number: '06',
    title: 'Cobertura de eventos',
    description:
      'Cobertura y atención para eventos privados, empresariales y actividades especiales.',
  },
]

function ServicesSection() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-mt">
        {/* Encabezado */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
              Servicios
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0b2742] sm:text-4xl lg:text-5xl">
              Soluciones profesionales para prepararte y responder.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Desde capacitación y certificación hasta servicios especializados
              de emergencia y cobertura de eventos.
            </p>
          </div>

          <div className="hidden lg:block">
            <span className="text-sm font-medium text-slate-400">
              MT EMERGENCIAS
            </span>
          </div>
        </div>

        {/* Tarjetas de servicios */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.number}
                to="/servicios"
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c21b22]/20 hover:shadow-xl"
              >
                {/* Número */}
                <div className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition group-hover:text-[#c21b22]/10">
                  {service.number}
                </div>

                {/* Icono */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d] transition duration-300 group-hover:bg-[#c21b22] group-hover:text-white">
                  <Icon size={25} />
                </div>

                {/* Contenido */}
                <div className="relative">
                  <h3 className="mt-7 text-xl font-bold text-[#0b2742]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Indicador */}
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#c21b22]">
                  Ver detalles del servicio
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center rounded-full bg-[#0b2742] px-7 py-4 font-semibold text-white transition hover:bg-[#13385d]"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection