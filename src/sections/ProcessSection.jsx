import {
  MessageCircle,
  ClipboardList,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Cuéntanos qué necesitas",
    description:
      "Ponte en contacto con nuestro equipo y cuéntanos qué servicio, capacitación o certificación estás buscando.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Definimos la solución",
    description:
      "Analizamos tus necesidades y te orientamos sobre la opción más adecuada para tu caso.",
  },
  {
    number: "03",
    icon: Users,
    title: "Realizamos el servicio",
    description:
      "Coordinamos contigo la capacitación, evaluación o servicio que hayas solicitado.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Seguimos contigo",
    description:
      "Buscamos que tu experiencia con MT Emergencias sea clara, profesional y satisfactoria.",
  },
];

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b2742] py-24 sm:py-28">
      {/* Luces decorativas */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#c21b22]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />

      <div className="container-mt relative">
        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
            Nuestro proceso
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
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
            PASOS DEL PROCESO
            ========================================= */}

        <div className="relative mt-16">
          {/* Línea central */}
          <div className="absolute left-[8%] right-[8%] top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#fbc94d]/30 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative"
                >
                  {/* Punto de conexión */}
                  <div className="absolute left-1/2 top-[3rem] z-20 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#0b2742] bg-[#fbc94d] shadow-[0_0_0_5px_rgba(251,201,77,0.08)] lg:block" />

                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#fbc94d]/30 group-hover:bg-white/[0.07] group-hover:shadow-2xl group-hover:shadow-black/20">
                    {/* Línea superior */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#fbc94d]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Número */}
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-black leading-none text-white/[0.07] transition-colors duration-300 group-hover:text-[#fbc94d]/15">
                        {step.number}
                      </span>

                      {/* Icono */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#fbc94d]/10 bg-[#13385d] text-[#fbc94d] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[#fbc94d]/30 group-hover:bg-[#fbc94d] group-hover:text-[#0b2742]">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="mt-8">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#fbc94d]/70">
                        Paso {index + 1}
                      </p>

                      <h3 className="mt-3 text-xl font-bold leading-tight text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    {/* Indicador inferior */}
                    <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-white/30 transition-colors duration-300 group-hover:text-[#fbc94d]">
                      <span className="h-px w-6 bg-current" />
                      MT Emergencias
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================
            CTA
            ========================================= */}

        <div className="mt-14 flex justify-center">
          <Link
            to="/contacto"
            className="group inline-flex items-center gap-3 rounded-full bg-[#c21b22] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#9f151b] hover:shadow-xl hover:shadow-red-950/40"
          >
            Habla con nosotros

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;