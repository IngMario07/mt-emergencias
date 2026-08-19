import { ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";

import CapaEspe from "../assets/images/CapaEspe.jpeg";
import EntrePrac from "../assets/images/EntrePrac.jpeg";
import AtePreh from "../assets/images/AtePreh.jpeg";
import ServicioEspe from "../assets/images/ServicioEspe.jpeg";

const galleryPreview = [
  {
    image: CapaEspe,
    title: "Capacitación especializada",
    description:
      "Formación práctica para responder ante situaciones de emergencia.",
  },
  {
    image: EntrePrac,
    title: "Entrenamiento práctico",
    description:
      "Aprendizaje basado en escenarios y práctica.",
  },
  {
    image: AtePreh,
    title: "Atención prehospitalaria",
    description:
      "Preparación para la atención y respuesta prehospitalaria.",
  },
  {
    image: ServicioEspe,
    title: "Servicios y actividades",
    description:
      "Parte de las actividades realizadas por MT Emergencias.",
  },
];

function GallerySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-mt">
        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
              <Camera size={16} />
              Nuestra experiencia
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0b2742] sm:text-4xl lg:text-5xl">
              Preparación que se vive
              <span className="block text-[#c21b22]">
                en la práctica.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Conoce una pequeña muestra de nuestras capacitaciones,
              actividades y servicios.
            </p>
          </div>

          {/* Enlace escritorio */}
          <Link
            to="/galeria"
            className="group hidden items-center gap-2 text-sm font-semibold text-[#c21b22] transition hover:text-[#9f151b] sm:inline-flex"
          >
            Ver galería completa

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =========================================
            GALERÍA
            ========================================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryPreview.map((item) => (
            <Link
              key={item.image}
              to="/galeria"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b2f]/90 via-[#071b2f]/20 to-transparent" />
              </div>

              {/* Información */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-slate-300">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* =========================================
            BOTÓN MÓVIL
            ========================================= */}

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/galeria"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b2742] px-7 py-4 font-semibold text-white transition hover:bg-[#13385d]"
          >
            Ver galería completa

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;