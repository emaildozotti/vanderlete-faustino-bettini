import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 7 Depoimentos)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'o que dizem',
  heading: 'Quem destravou',
  headingEm: 'conta como foi.',
  testimonials: [
    {
      text: 'Cheguei na Vanderlete sem dormir, sem comer, com medo de atender o telefone. Em três sessões voltei a atender clientes, comecei atividade física, e quando meu funcionário faltou eu disse pra mim mesmo que eu comecei sozinho e dou conta de continuar.',
      name: 'R. M., 30 anos',
      highlight: 'Em três sessões voltei a atender clientes',
    },
    {
      text: 'Eu não me reconhecia mais. Tinha vergonha de admitir que aos 42 anos não sabia o que queria. A Vanderlete não enrolou. Identificou o bloqueio na primeira sessão e me deu tarefa pra fazer. Hoje eu sei pra onde estou indo.',
      name: 'C. S., 42 anos',
      highlight: 'Identificou o bloqueio na primeira sessão',
    },
    {
      text: 'Já tinha feito terapia com duas pessoas antes e não tinha visto resultado. Com a Vanderlete foi diferente porque ela não fica só ouvindo. Ela dá direção. Ela exige ação. Foi o que eu precisava.',
      name: 'A. F., 38 anos',
      highlight: 'Ela não fica só ouvindo. Ela dá direção',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % COPY.testimonials.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [])

  const t = COPY.testimonials[current]

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-12 md:mb-16"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative min-h-[320px] md:min-h-[260px]">
            {/* Giant quote mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '120px',
                lineHeight: 1,
                color: 'var(--color-secondary)',
                opacity: 0.2,
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 pt-10 md:pt-12 pl-4 md:pl-8"
              >
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 300,
                    maxWidth: '680px',
                    lineHeight: 1.85,
                  }}
                >
                  {t.text.split(t.highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong style={{ fontWeight: 500, color: 'var(--color-primary)' }}>
                          {t.highlight}
                        </strong>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
                <span
                  className="eyebrow-ultra"
                  style={{ color: 'var(--color-secondary)', opacity: 0.7 }}
                >
                  {t.name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Progress bars */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mt-10">
            {COPY.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-500 cursor-pointer"
                style={{
                  width: i === current ? '28px' : '8px',
                  height: '2px',
                  backgroundColor: 'var(--color-secondary)',
                  opacity: i === current ? 1 : 0.3,
                  border: 'none',
                  padding: 0,
                  borderRadius: '1px',
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
