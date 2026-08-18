import {
  MessageCircle,
  ClipboardList,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const processSteps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Cuéntanos qué necesitas',
    description:
      'Ponte en contacto con nuestro equipo y cuéntanos qué servicio, capacitación o certificación estás buscando.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Definimos la solución',
    description:
      'Analizamos tus necesidades y te orientamos sobre la opción más adecuada para tu caso.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Realizamos el servicio',
    description:
      'Coordinamos contigo la capacitación, evaluación o servicio que hayas solicitado.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Seguimos contigo',
    description:
      'Buscamos que tu experiencia con MT Emergencias sea clara, profesional y satisfactoria.',
  },
]

function ProcessSection() {
  return (
    <section className="section-padding bg-[#0b2742]">

      <div className="container-mt">

        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
            Nuestro proceso
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            De la primera pregunta
            <span className="block text-[#fbc94d]">
              a la respuesta.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Trabajamos contigo para entender tus necesidades y encontrar
            la solución adecuada.
          </p>

        </div>


        {/* =========================================
            PASOS
            ========================================= */}

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* Línea decorativa en escritorio */}
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-white/10 lg:block" />

          {processSteps.map((step) => {

            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#fbc94d]/30 hover:bg-white/[0.07]"
              >

                {/* Número + icono */}
                <div className="relative z-10 flex items-center justify-between">

                  <span className="text-4xl font-black text-white/10">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#13385d] text-[#fbc94d]">
                    <Icon size={22} />
                  </div>

                </div>


                {/* Contenido */}
                <h3 className="mt-7 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>

              </article>
            )
          })}

        </div>


        {/* =========================================
            CTA
            ========================================= */}

        <div className="mt-12 flex justify-center">

          <Link
            to="/contacto"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Habla con nosotros

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

export default ProcessSection