import { ShieldCheck, GraduationCap, Siren } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formación especializada',
    text: 'Capacitación orientada al desarrollo de conocimientos y competencias para responder ante situaciones de emergencia.',
  },
  {
    icon: ShieldCheck,
    title: 'Certificación por competencias',
    text: 'Procesos de evaluación y certificación vinculados con estándares de competencia.',
  },
  {
    icon: Siren,
    title: 'Respuesta profesional',
    text: 'Servicios relacionados con atención prehospitalaria, emergencias, bomberos y protección civil.',
  },
]

function AboutSection() {
  return (
    <section className="section-padding bg-white">

      <div className="container-mt">

        {/* Encabezado */}
        <div className="max-w-3xl">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
            Nosotros
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0b2742] sm:text-4xl lg:text-5xl">
            Preparación que se convierte en capacidad para actuar.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            En MT Emergencias desarrollamos capacitación, evaluación y
            servicios profesionales enfocados en la atención de emergencias,
            atención prehospitalaria, bomberos y protección civil.
          </p>

        </div>


        {/* Tarjetas */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {highlights.map((item) => {

            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c21b22]/20 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d] transition group-hover:bg-[#c21b22]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0b2742]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>

              </article>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default AboutSection