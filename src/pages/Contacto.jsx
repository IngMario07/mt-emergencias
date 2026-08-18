import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


function Contacto() {

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    servicio: '',
    mensaje: '',
  })


  const [enviado, setEnviado] = useState(false)


  /* ============================================================
     CAMBIO DE CAMPOS
     ============================================================ */

  const handleChange = (event) => {

    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

  }


  /* ============================================================
     ENVÍO A WHATSAPP
     ============================================================ */

  const handleSubmit = (event) => {

    event.preventDefault()

    const mensaje = `
Hola, MT EMERGENCIAS.

Me gustaría solicitar información.

Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Correo: ${formData.correo}
Servicio de interés: ${formData.servicio || 'No especificado'}

Mensaje:
${formData.mensaje || 'Sin mensaje adicional.'}
    `.trim()


    const whatsappUrl =
      `https://wa.me/524151701311?text=${encodeURIComponent(mensaje)}`


    setEnviado(true)

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    )

  }


  return (

    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar />


      <main>


        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="relative overflow-hidden bg-[#071b2f] pt-32 pb-20 sm:pb-24">

          {/* Decoraciones */}

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c21b22]/15 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fbc94d]/10 blur-3xl" />


          <div className="container-mt relative">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">


              {/* ==================================================
                  TEXTO
                  ================================================== */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#fbc94d]/20 bg-[#fbc94d]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">

                  <MessageCircle size={16} />

                  Contacto

                </div>


                <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                  Hablemos de lo que
                  <span className="block text-[#fbc94d]">
                    necesitas.
                  </span>

                </h1>


                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">

                  ¿Necesitas una capacitación, una certificación,
                  cobertura para un evento o alguno de nuestros
                  servicios especializados?

                </p>


                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">

                  Cuéntanos qué necesitas y nuestro equipo podrá
                  orientarte sobre las opciones disponibles.

                </p>


                {/* Indicadores */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#fbc94d]">

                      <ShieldCheck size={20} />

                    </div>

                    <span className="text-sm text-slate-300">
                      Atención profesional
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#fbc94d]">

                      <MessageCircle size={20} />

                    </div>

                    <span className="text-sm text-slate-300">
                      Atención por WhatsApp
                    </span>

                  </div>

                </div>

              </div>



              {/* ==================================================
                  CONTACTO RÁPIDO
                  ================================================== */}

              <div className="relative">

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl sm:p-8">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                    Atención directa
                  </p>


                  <h2 className="mt-3 text-2xl font-bold text-white">
                    ¿Prefieres escribirnos?
                  </h2>


                  <p className="mt-4 text-sm leading-6 text-slate-400">

                    También puedes contactarnos directamente
                    por WhatsApp o teléfono.

                  </p>


                  <div className="mt-7 space-y-4">


                    {/* WhatsApp */}

                    <a
                      href="https://wa.me/524151701311?text=Hola%20MT%20EMERGENCIAS,%20me%20gustaría%20solicitar%20información."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#fbc94d]/30 hover:bg-white/[0.06]"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c21b22] text-white">

                        <MessageCircle size={21} />

                      </div>


                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          WhatsApp
                        </p>

                        <p className="mt-1 font-semibold text-white">
                          415 170 1311
                        </p>

                      </div>

                    </a>



                    {/* Teléfono */}

                    <a
                      href="tel:+524151701311"
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#fbc94d]/30 hover:bg-white/[0.06]"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#13385d] text-[#fbc94d]">

                        <Phone size={21} />

                      </div>


                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Teléfono
                        </p>

                        <p className="mt-1 font-semibold text-white">
                          415 170 1311
                        </p>

                      </div>

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            FORMULARIO + INFORMACIÓN
            ===================================================== */}

        <section className="section-padding bg-white">

          <div className="container-mt">

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">


              {/* ==================================================
                  FORMULARIO
                  ================================================== */}

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

                <div className="max-w-2xl">

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                    Solicita información
                  </p>


                  <h2 className="mt-3 text-3xl font-bold text-[#0b2742] sm:text-4xl">
                    Cuéntanos qué necesitas.
                  </h2>


                  <p className="mt-4 leading-7 text-slate-600">

                    Completa los siguientes datos y al enviar
                    podrás continuar la conversación directamente
                    por WhatsApp.

                  </p>

                </div>



                {/* Mensaje enviado */}

                {enviado && (

                  <div className="mt-7 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">

                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <div>

                      <p className="font-semibold text-green-800">
                        Solicitud preparada correctamente.
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-700">
                        Se abrió WhatsApp con la información
                        que proporcionaste.
                      </p>

                    </div>

                  </div>

                )}



                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >


                  {/* Nombre */}

                  <div>

                    <label
                      htmlFor="nombre"
                      className="mb-2 block text-sm font-semibold text-[#0b2742]"
                    >
                      Nombre completo
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Escribe tu nombre"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#c21b22] focus:bg-white focus:ring-4 focus:ring-[#c21b22]/10"
                    />

                  </div>



                  {/* Teléfono + correo */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="telefono"
                        className="mb-2 block text-sm font-semibold text-[#0b2742]"
                      >
                        Teléfono
                      </label>

                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="415 000 0000"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#c21b22] focus:bg-white focus:ring-4 focus:ring-[#c21b22]/10"
                      />

                    </div>


                    <div>

                      <label
                        htmlFor="correo"
                        className="mb-2 block text-sm font-semibold text-[#0b2742]"
                      >
                        Correo electrónico
                      </label>

                      <input
                        id="correo"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#c21b22] focus:bg-white focus:ring-4 focus:ring-[#c21b22]/10"
                      />

                    </div>

                  </div>



                  {/* Servicio */}

                  <div>

                    <label
                      htmlFor="servicio"
                      className="mb-2 block text-sm font-semibold text-[#0b2742]"
                    >
                      ¿Qué servicio te interesa?
                    </label>

                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#c21b22] focus:bg-white focus:ring-4 focus:ring-[#c21b22]/10"
                    >

                      <option value="">
                        Selecciona una opción
                      </option>

                      <option value="Capacitación">
                        Capacitación
                      </option>

                      <option value="Certificación por competencias">
                        Certificación por competencias
                      </option>

                      <option value="Atención prehospitalaria">
                        Atención prehospitalaria
                      </option>

                      <option value="Servicios bomberiles">
                        Servicios bomberiles
                      </option>

                      <option value="Protección Civil">
                        Protección Civil
                      </option>

                      <option value="Cobertura de eventos">
                        Cobertura de eventos
                      </option>

                      <option value="Otro">
                        Otro
                      </option>

                    </select>

                  </div>



                  {/* Mensaje */}

                  <div>

                    <label
                      htmlFor="mensaje"
                      className="mb-2 block text-sm font-semibold text-[#0b2742]"
                    >
                      Cuéntanos qué necesitas
                    </label>

                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe aquí tu pregunta, servicio que necesitas, número de personas, fecha del evento o cualquier información que consideres importante..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#c21b22] focus:bg-white focus:ring-4 focus:ring-[#c21b22]/10"
                    />

                  </div>



                  {/* Botón */}

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c21b22] px-7 py-4 font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#9f151b]"
                  >

                    <Send size={18} />

                    Enviar solicitud por WhatsApp

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>


                  <p className="text-center text-xs leading-5 text-slate-400">

                    Al enviar, serás dirigido a WhatsApp para
                    continuar la conversación con MT Emergencias.

                  </p>

                </form>

              </div>



              {/* ==================================================
                  INFORMACIÓN
                  ================================================== */}

              <div className="space-y-5">


                {/* WhatsApp */}

                <a
                  href="https://wa.me/524151701311?text=Hola%20MT%20EMERGENCIAS,%20me%20gustaría%20solicitar%20información."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[2rem] bg-[#0b2742] p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c21b22] text-white">

                    <MessageCircle size={24} />

                  </div>


                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc94d]">
                    WhatsApp
                  </p>


                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Escríbenos directamente.
                  </h3>


                  <p className="mt-3 leading-7 text-slate-400">

                    Para una respuesta más directa puedes
                    comunicarte con nosotros por WhatsApp.

                  </p>


                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-white">

                    415 170 1311

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </div>

                </a>



                {/* Horario */}

                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-8">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#13385d] text-[#fbc94d]">

                    <Clock3 size={23} />

                  </div>


                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                    Atención
                  </p>


                  <h3 className="mt-2 text-2xl font-bold text-[#0b2742]">
                    Estamos para orientarte.
                  </h3>


                  <p className="mt-3 leading-7 text-slate-600">

                    Escríbenos para consultar disponibilidad,
                    fechas, costos y detalles del servicio que
                    necesitas.

                  </p>

                </div>



                {/* Ubicación */}

                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">

                    <MapPin size={23} />

                  </div>


                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                    Ubicación
                  </p>


                  <h3 className="mt-2 text-2xl font-bold text-[#0b2742]">
                    San Miguel de Allende
                  </h3>


                  <p className="mt-3 leading-7 text-slate-600">

                    Guanajuato, México.

                  </p>

                </div>



                {/* Correo */}

                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2742] text-[#fbc94d]">

                    <Mail size={23} />

                  </div>


                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#c21b22]">
                    Correo electrónico
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">

                    mt.emergencias@gmail.com

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            COTIZACIÓN
            ===================================================== */}

        <section className="relative overflow-hidden bg-[#c21b22] py-20">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#fbc94d]/15 blur-3xl" />

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#071b2f]/20 blur-3xl" />


          <div className="container-mt relative">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#fbc94d]">
                ¿Tienes un proyecto o evento?
              </p>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">

                Cuéntanos lo que necesitas y
                <span className="block">
                  encontremos una solución.
                </span>

              </h2>


              <p className="mt-5 leading-7 text-white/80">

                Podemos orientarte sobre capacitación,
                certificaciones, servicios especializados y
                cobertura de eventos.

              </p>


              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="https://wa.me/524151701311?text=Hola%20MT%20EMERGENCIAS,%20me%20gustaría%20solicitar%20una%20cotización."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#0b2742] transition hover:bg-slate-100"
                >

                  <MessageCircle size={19} />

                  Solicitar cotización

                </a>


                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/20"
                >

                  Ver servicios

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

    </div>
  )
}

export default Contacto