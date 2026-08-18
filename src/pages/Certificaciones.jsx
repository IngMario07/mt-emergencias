import { useMemo, useState } from 'react'
import {
  Award,
  CheckCircle2,
  Search,
  BookOpen,
  ClipboardCheck,
  FileCheck2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  GraduationCap,
  Ambulance,
  Flame,
  HeartPulse,
  Truck,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


/* ============================================================
   ESTÁNDARES DE COMPETENCIA
   MT EMERGENCIAS
   ============================================================ */

const estandaresMT = [
  {
    codigo: 'EC0076',
    titulo:
      'Evaluación de la competencia de candidatos con base en Estándares de Competencia',
    categoria: 'Evaluación',
    icon: Award,
  },

  {
    codigo: 'EC0217.01',
    titulo:
      'Impartición de cursos de formación del capital humano de manera presencial grupal',
    categoria: 'Capacitación',
    icon: GraduationCap,
  },

  {
    codigo: 'EC0532',
    titulo: 'Operación de vehículos de emergencia',
    categoria: 'Emergencias',
    icon: Ambulance,
  },

  {
    codigo: 'EC0555',
    titulo: 'Conducción y manejo del camión motobomba',
    categoria: 'Bomberos',
    icon: Flame,
  },

  {
    codigo: 'EC0585',
    titulo:
      'Atención de primeros auxilios a la persona afectada/lesionada',
    categoria: 'Primeros auxilios',
    icon: HeartPulse,
  },

  {
    codigo: 'EC0616',
    titulo:
      'Prestación de servicios auxiliares de enfermería en cuidados básicos y orientación a personas en unidades de atención médica',
    categoria: 'Salud',
    icon: ShieldCheck,
  },

  {
    codigo: 'EC0307.01',
    titulo: 'Atención prehospitalaria nivel básico',
    categoria: 'Atención prehospitalaria',
    icon: Ambulance,
  },

  {
    codigo: 'EC1046',
    titulo:
      'Instalación de fuegos artificiales para la presentación de espectáculos aéreos',
    categoria: 'Emergencias',
    icon: Flame,
  },

  {
    codigo: 'EC1403',
    titulo: 'Operación y técnicas de extracción vehicular básicas',
    categoria: 'Rescate',
    icon: Truck,
  },

  {
    codigo: 'EC1492',
    titulo:
      'Realización de RCP básico y uso de Desfibrilador Externo Automático (DEA) para emergencia cardiaca en lugares públicos',
    categoria: 'RCP y DEA',
    icon: HeartPulse,
  },
]


/* ============================================================
   CATEGORÍAS
   ============================================================ */

const categorias = [
  'Todos',
  'Atención prehospitalaria',
  'Emergencias',
  'Primeros auxilios',
  'RCP y DEA',
  'Bomberos',
  'Rescate',
  'Salud',
  'Capacitación',
  'Evaluación',
]


/* ============================================================
   COMPONENTE
   ============================================================ */

function Certificaciones() {

  const [search, setSearch] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')


  /* ============================================================
     WHATSAPP
     ============================================================ */

  const crearMensajeWhatsApp = (estandar = null) => {

    if (estandar) {
      return encodeURIComponent(
        `Hola, MT Emergencias. Me interesa información sobre la certificación ${estandar.codigo} - ${estandar.titulo}.`
      )
    }

    return encodeURIComponent(
      'Hola, MT Emergencias. Me interesa conocer información sobre sus certificaciones por competencias y los Estándares de Competencia disponibles.'
    )
  }


  const whatsappGeneral = `https://wa.me/524151701311?text=${crearMensajeWhatsApp()}`


  /* ============================================================
     FILTRADO
     ============================================================ */

  const estandaresFiltrados = useMemo(() => {

    const termino = search.trim().toLowerCase()

    return estandaresMT.filter((estandar) => {

      const coincideCategoria =
        categoriaActiva === 'Todos' ||
        estandar.categoria === categoriaActiva

      const coincideBusqueda =
        termino === '' ||
        estandar.codigo.toLowerCase().includes(termino) ||
        estandar.titulo.toLowerCase().includes(termino) ||
        estandar.categoria.toLowerCase().includes(termino)

      return coincideCategoria && coincideBusqueda
    })

  }, [search, categoriaActiva])


  /* ============================================================
     LIMPIAR FILTROS
     ============================================================ */

  const limpiarFiltros = () => {
    setSearch('')
    setCategoriaActiva('Todos')
  }


  return (

    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />


      <main>


        {/* ======================================================
            HERO
            ====================================================== */}

        <section className="relative overflow-hidden bg-[#071b2f] pt-20">

          {/* Luces decorativas */}

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c21b22]/15 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />


          <div className="container-mt relative">

            <div className="grid min-h-[65vh] items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">


              {/* ==================================================
                  TEXTO
                  ================================================== */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">

                  <Award size={16} />

                  Red CONOCER

                </div>


                <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                  No solamente aprendas.

                  <span className="block text-[#fbc94d]">
                    Demuestra lo que sabes hacer.
                  </span>

                </h1>


                <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">

                  Conoce nuestras opciones de certificación por competencias
                  y descubre cómo puedes demostrar formalmente los
                  conocimientos, habilidades y competencias relacionadas con
                  diferentes funciones profesionales.

                </p>


                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <a
                    href={whatsappGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg shadow-red-950/30 transition hover:bg-[#9f151b]"
                  >

                    <MessageCircle size={19} />

                    Solicitar información

                  </a>


                  <a
                    href="#estandares"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                  >

                    Ver estándares

                    <ArrowRight size={18} />

                  </a>

                </div>

              </div>


              {/* ==================================================
                  TARJETA HERO
                  ================================================== */}

              <div className="relative">

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl sm:p-10">

                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#fbc94d]/10 blur-3xl" />


                  <div className="relative">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fbc94d] text-[#0b2742]">

                      <Award size={30} />

                    </div>


                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                      Certificación por competencias
                    </p>


                    <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                      Reconoce formalmente tus competencias.
                    </h2>


                    <p className="mt-5 leading-7 text-slate-400">

                      La certificación se basa en la evaluación de
                      competencias conforme a un Estándar de Competencia.

                    </p>


                    <div className="mt-8 space-y-4">


                      <div className="flex items-start gap-3">

                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-[#fbc94d]"
                        />

                        <span className="text-sm text-slate-300">
                          Evaluación basada en criterios establecidos.
                        </span>

                      </div>


                      <div className="flex items-start gap-3">

                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-[#fbc94d]"
                        />

                        <span className="text-sm text-slate-300">
                          Reconocimiento de competencias.
                        </span>

                      </div>


                      <div className="flex items-start gap-3">

                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-[#fbc94d]"
                        />

                        <span className="text-sm text-slate-300">
                          Proceso de evaluación y certificación.
                        </span>

                      </div>


                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* ======================================================
            ¿QUÉ ES UNA CERTIFICACIÓN?
            ====================================================== */}

        <section
          id="que-es"
          className="section-padding scroll-mt-24 bg-white"
        >

          <div className="container-mt">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">


              <div>

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                  ¿Qué significa certificarse?
                </span>


                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">

                  Una certificación no es simplemente otro curso.

                </h2>

              </div>


              <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

                <p>

                  La capacitación está orientada a aprender o fortalecer
                  conocimientos y habilidades.

                </p>


                <p>

                  La certificación por competencias implica un proceso
                  mediante el cual se evalúa el desempeño de una persona
                  tomando como referencia un Estándar de Competencia.

                </p>


                <p>

                  Esto permite reconocer las competencias que una persona
                  demuestra durante el proceso de evaluación.

                </p>

              </div>

            </div>

          </div>

        </section>



        {/* ======================================================
            CURSO VS CERTIFICACIÓN
            ====================================================== */}

        <section className="section-padding bg-[#f8fafc]">

          <div className="container-mt">


            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                La diferencia
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">

                Capacitación y certificación cumplen funciones diferentes.

              </h2>

            </div>



            <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">


              {/* CURSO */}

              <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">

                  <GraduationCap size={27} />

                </div>


                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Formación
                </p>


                <h3 className="mt-2 text-2xl font-bold text-[#0b2742]">
                  Curso o capacitación
                </h3>


                <p className="mt-5 leading-7 text-slate-600">

                  Su objetivo principal es ayudarte a adquirir o fortalecer
                  conocimientos, habilidades y herramientas para desempeñar
                  una actividad.

                </p>


                <div className="mt-7 space-y-3">

                  {[
                    'Desarrollo de conocimientos',
                    'Fortalecimiento de habilidades',
                    'Aprendizaje teórico y práctico',
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-slate-400"
                      />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </article>



              {/* CERTIFICACIÓN */}

              <article className="relative overflow-hidden rounded-[2rem] border border-[#fbc94d]/30 bg-[#0b2742] p-8 shadow-xl sm:p-10">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fbc94d]/10 blur-3xl" />


                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbc94d] text-[#0b2742]">

                    <Award size={27} />

                  </div>


                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                    Evaluación
                  </p>


                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Certificación por competencias
                  </h3>


                  <p className="mt-5 leading-7 text-slate-300">

                    Su objetivo es evaluar si una persona demuestra las
                    competencias establecidas en un Estándar de Competencia.

                  </p>


                  <div className="mt-7 space-y-3">

                    {[
                      'Evaluación de competencias',
                      'Referencia en un Estándar de Competencia',
                      'Proceso formal de certificación',
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-[#fbc94d]"
                        />

                        <span className="text-sm text-slate-300">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </article>

            </div>

          </div>

        </section>



        {/* ======================================================
            ESTÁNDAR DE COMPETENCIA
            ====================================================== */}

        <section className="section-padding bg-white">

          <div className="container-mt">

            <div className="mx-auto max-w-4xl">

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">

                <div className="flex flex-col gap-8 md:flex-row">


                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">

                    <ShieldCheck size={30} />

                  </div>


                  <div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                      Estándar de Competencia
                    </span>


                    <h2 className="mt-3 text-2xl font-bold text-[#0b2742] sm:text-3xl">

                      El estándar establece qué competencias serán evaluadas.

                    </h2>


                    <p className="mt-5 leading-7 text-slate-600">

                      Un Estándar de Competencia sirve como referencia para
                      determinar los conocimientos, habilidades, actitudes
                      y desempeño asociados a una determinada función.

                    </p>


                    <p className="mt-4 leading-7 text-slate-600">

                      Antes de iniciar un proceso de certificación es
                      importante identificar cuál es el estándar relacionado
                      con la competencia que deseas demostrar.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* ======================================================
            ESTÁNDARES MT EMERGENCIAS
            ====================================================== */}

        <section
          id="estandares"
          className="section-padding scroll-mt-24 bg-[#f8fafc]"
        >

          <div className="container-mt">


            {/* ENCABEZADO */}

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                MT EMERGENCIAS
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0b2742] sm:text-4xl">

                Estándares de Competencia

              </h2>


              <p className="mt-5 leading-7 text-slate-600">

                Conoce los estándares que forman parte de nuestra oferta
                de evaluación y certificación.

              </p>

            </div>



            {/* BUSCADOR */}

            <div className="mx-auto mt-10 max-w-4xl">

              <div className="relative">

                <Search
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />


                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Busca por código o nombre del estándar..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-12 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#c21b22] focus:ring-4 focus:ring-[#c21b22]/10"
                />


                {search && (

                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Limpiar búsqueda"
                  >

                    <X size={17} />

                  </button>

                )}

              </div>

            </div>



            {/* FILTROS */}

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">

              {categorias.map((categoria) => (

                <button
                  key={categoria}
                  type="button"
                  onClick={() => setCategoriaActiva(categoria)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                    categoriaActiva === categoria
                      ? 'bg-[#0b2742] text-white'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-[#c21b22]/30 hover:text-[#c21b22]'
                  }`}
                >

                  {categoria}

                </button>

              ))}

            </div>



            {/* RESULTADOS */}

            <div className="mt-10">

              {estandaresFiltrados.length > 0 ? (

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {estandaresFiltrados.map((estandar) => {

                    const Icon = estandar.icon

                    const whatsappUrl = `https://wa.me/524151701311?text=${crearMensajeWhatsApp(estandar)}`


                    return (

                      <article
                        key={estandar.codigo}
                        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c21b22]/20 hover:shadow-xl"
                      >


                        {/* Línea superior */}

                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c21b22] via-[#fbc94d] to-[#da832a]" />


                        {/* Cabecera */}

                        <div className="flex items-start justify-between gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d] transition group-hover:bg-[#c21b22] group-hover:text-white">

                            <Icon size={22} />

                          </div>


                          <span className="rounded-full bg-[#f8fafc] px-3 py-1 text-xs font-bold text-[#0b2742]">

                            {estandar.codigo}

                          </span>

                        </div>


                        {/* Categoría */}

                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#c21b22]">

                          {estandar.categoria}

                        </p>


                        {/* Título */}

                        <h3 className="mt-3 text-lg font-bold leading-7 text-[#0b2742]">

                          {estandar.titulo}

                        </h3>


                        {/* Espaciador */}

                        <div className="flex-1" />


                        {/* CTA */}

                        <div className="mt-7 flex flex-col gap-2">

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c21b22] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9f151b]"
                          >

                            <MessageCircle size={17} />

                            Solicitar información

                          </a>

                        </div>

                      </article>

                    )

                  })}

                </div>

              ) : (

                /* SIN RESULTADOS */

                <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">

                  <Search
                    size={34}
                    className="mx-auto text-slate-300"
                  />


                  <h3 className="mt-5 text-xl font-bold text-[#0b2742]">
                    No encontramos ese estándar
                  </h3>


                  <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-500">

                    Intenta buscar con otro código o palabra. También
                    puedes contactarnos para consultar disponibilidad.

                  </p>


                  <button
                    type="button"
                    onClick={limpiarFiltros}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0b2742] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#13385d]"
                  >

                    Mostrar todos

                  </button>

                </div>

              )}

            </div>


            {/* RESULTADOS */}

            <div className="mt-7 text-center">

              <p className="text-sm text-slate-400">

                Mostrando{' '}

                <span className="font-bold text-[#0b2742]">
                  {estandaresFiltrados.length}
                </span>{' '}

                de{' '}

                <span className="font-bold text-[#0b2742]">
                  {estandaresMT.length}
                </span>{' '}

                estándares.

              </p>

            </div>

          </div>

        </section>



        {/* ======================================================
            COLABORACIÓN / CHSS
            ====================================================== */}

        <section className="section-padding bg-white">

          <div className="container-mt">

            <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 sm:p-12">

              <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">


                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">

                  <ShieldCheck size={30} />

                </div>


                <div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                    Más opciones de certificación
                  </span>


                  <h2 className="mt-3 text-2xl font-bold text-[#0b2742] sm:text-3xl">

                    ¿Buscas un estándar diferente?

                  </h2>


                  <p className="mt-4 max-w-3xl leading-7 text-slate-600">

                    MT Emergencias también puede orientarte sobre otras
                    opciones de certificación disponibles mediante nuestra
                    colaboración con centros especializados de la Red de
                    Prestadores de Servicios CONOCER.

                  </p>


                  <p className="mt-4 text-sm font-semibold text-[#0b2742]">

                    Capacitación Humanidad y Servicio a la Salud S.C. (CHSS)

                  </p>


                  <a
                    href={whatsappGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0b2742] px-6 py-3 font-semibold text-white transition hover:bg-[#13385d]"
                  >

                    Consultar otros estándares

                    <ArrowRight size={17} />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* ======================================================
            CTA FINAL
            ====================================================== */}

        <section className="relative overflow-hidden bg-[#c21b22] py-20">

          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#fbc94d]/20 blur-3xl" />


          <div className="container-mt relative">

            <div className="mx-auto max-w-3xl text-center">


              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">

                <MessageCircle size={26} />

              </div>


              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">

                ¿No sabes qué certificación necesitas?

              </h2>


              <p className="mt-5 leading-7 text-white/80">

                Escríbenos. Podemos orientarte para identificar el estándar
                que se relaciona con la competencia que deseas demostrar.

              </p>


              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#0b2742] transition hover:bg-slate-100"
                >

                  <MessageCircle size={19} />

                  Consultar por WhatsApp

                </a>


                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/20"
                >

                  Solicitar cotización

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </section>


      </main>


      <Footer />

    </div>
  )
}

export default Certificaciones