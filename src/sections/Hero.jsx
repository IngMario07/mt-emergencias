import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ambulancia from "../public/images/MT013D.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071b2f] pt-20">
      {/* Luces decorativas */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#c21b22]/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#da832a]/15 blur-3xl" />

      <div className="container-mt relative flex min-h-[calc(100vh-5rem)] items-center">
        <div className="grid w-full items-center gap-14 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
          {/* =========================================
              TEXTO PRINCIPAL
              ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#fbc94d]/25 bg-[#fbc94d]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#fbc94d]">
              <ShieldCheck size={16} />
              Formación · Certificación · Respuesta
            </div>

            {/* Título */}
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Prepárate para
              <span className="block text-[#fbc94d]">responder.</span>
            </h1>

            {/* Descripción */}
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Capacitación especializada, certificación por competencias y
              servicios profesionales en emergencias, atención prehospitalaria,
              bomberos y protección civil.
            </p>

            {/* Botones */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/servicios"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg shadow-red-950/30 transition hover:bg-[#9f151b]"
              >
                Conoce nuestros servicios

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Solicitar información
              </Link>
            </div>

            {/* Indicadores */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ Capacitación profesional</span>
              <span>✓ Certificación</span>
              <span>✓ Atención especializada</span>
            </div>
          </motion.div>

          {/* =========================================
              IMAGEN DE LA AMBULANCIA
              ========================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl">
              {/* Imagen horizontal */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={ambulancia}
                  alt="Ambulancia MT Emergencias"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              {/* Línea institucional */}
              <div className="h-1 bg-gradient-to-r from-[#c21b22] via-[#fbc94d] to-[#da832a]" />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#0b2742]/95 px-5 py-4 shadow-xl backdrop-blur-md sm:block">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                MT Emergencias
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Preparados para responder.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex">
        <span>Descubre más</span>

        <div className="h-10 w-px bg-white/20" />
      </div>
    </section>
  );
}

export default Hero;