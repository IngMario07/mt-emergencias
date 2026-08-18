import { useState } from 'react'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: '¿Qué diferencia hay entre un curso y una certificación?',
    answer:
      'Un curso está orientado a la capacitación y desarrollo de conocimientos y habilidades. Una certificación por competencias implica un proceso de evaluación con base en un Estándar de Competencia.',
    link: '/certificaciones',
  },
  {
    question: '¿Qué es una certificación por competencias?',
    answer:
      'Es un proceso mediante el cual se evalúan las competencias de una persona tomando como referencia los criterios establecidos en un Estándar de Competencia.',
    link: '/certificaciones',
  },
  {
    question: '¿Puedo solicitar capacitación para mi empresa?',
    answer:
      'Sí. Podemos orientarte sobre las opciones de capacitación disponibles de acuerdo con las necesidades de tu empresa, institución o grupo.',
    link: '/servicios',
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer:
      'Puedes comunicarte directamente con MT Emergencias por WhatsApp o utilizar nuestro formulario de contacto para explicarnos qué necesitas.',
    link: '/contacto',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">

      <div className="container-mt">

        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#c21b22]">
            <HelpCircle size={16} />
            Preguntas frecuentes
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0b2742] sm:text-4xl lg:text-5xl">
            Antes de comenzar,
            <span className="block text-[#c21b22]">
              resolvamos tus dudas.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Algunas respuestas a las preguntas que recibimos con mayor
            frecuencia.
          </p>

        </div>


        {/* =========================================
            FAQ
            ========================================= */}

        <div className="mx-auto mt-12 max-w-3xl">

          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className="px-6 sm:px-8"
                >

                  {/* Pregunta */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >

                    <span className="text-base font-semibold text-[#0b2742] sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? 'bg-[#c21b22] text-white'
                          : 'bg-[#0b2742]/5 text-[#0b2742]'
                      }`}
                    >
                      <ChevronDown
                        size={19}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>

                  </button>


                  {/* Respuesta */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="pb-6 pr-12">

                        <p className="leading-7 text-slate-600">
                          {faq.answer}
                        </p>

                        <Link
                          to={faq.link}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c21b22] transition hover:text-[#9f151b]"
                        >
                          Conoce más

                          <ArrowRight size={16} />

                        </Link>

                      </div>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </div>


        {/* =========================================
            CTA
            ========================================= */}

        <div className="mt-10 flex justify-center">

          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b2742] px-7 py-4 font-semibold text-white transition hover:bg-[#13385d]"
          >
            ¿Tienes otra pregunta?

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  )
}

export default FAQSection