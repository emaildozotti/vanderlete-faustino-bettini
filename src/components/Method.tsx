import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 4 Metodo)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'método',
  heading: 'Desbloqueio Extraordinário',
  intro: 'Eu não fico só ouvindo e acolhendo. Eu identifico o bloqueio na primeira sessão e te dou tarefa pra fazer no dia a dia.',
  pillars: [
    {
      title: 'Identificar o bloqueio',
      body: 'Na primeira sessão eu mapeio o que está te travando. Bloqueio mental, bloqueio emocional, padrão que se repete sem que você perceba. Sai daqui com clareza imediata.',
      expanded: false,
    },
    {
      title: 'Romper o ciclo com ação prática',
      body: 'Cada sessão você sai com tarefa concreta pra executar até a próxima. Não é teoria, não é livro. É ação no seu dia a dia que destrava o que está parado. É no fazer que o bloqueio cai.',
      expanded: true,
    },
    {
      title: 'Criar a sua realidade',
      body: 'Quando o bloqueio cai e a clareza chega, você começa a criar com intenção a vida que sempre quis. Não é magia. É clareza mais ação.',
      expanded: false,
    },
  ],
  pillarCentralLabel: 'pilar central',
  naoPrometo: 'Eu não prometo milagre. Não prometo cura. Eu não posso salvar ninguém. Eu mostro o caminho. O caminhar pertence a você.',
  transition: 'Pra eu poder te apontar o caminho, eu precisei caminhar antes. Deixa eu te contar quem eu fui.',
}
// ════════════════════════════════════════════════════════════════════

export default function Method() {
  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
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
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-base md:text-lg leading-relaxed mb-14 md:mb-20"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text-main)',
              fontWeight: 300,
              maxWidth: '560px',
              opacity: 0.8,
            }}
          >
            {COPY.intro}
          </p>
        </FadeIn>

        {/* Pillars */}
        <div className="flex flex-col gap-0">
          {COPY.pillars.map((pillar, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10"
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)`,
                  ...(i === COPY.pillars.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)` }
                    : {}),
                }}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-start gap-5">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        color: 'var(--color-secondary)',
                        opacity: 0.6,
                        paddingTop: '2px',
                        minWidth: '28px',
                        fontStyle: 'normal',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3
                        className={pillar.expanded ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-primary)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.title}
                        {pillar.expanded && (
                          <span
                            style={{
                              marginLeft: '12px',
                              fontSize: '11px',
                              fontFamily: 'var(--font-sans)',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: 'var(--color-secondary)',
                              fontStyle: 'normal',
                              verticalAlign: 'middle',
                              opacity: 0.8,
                            }}
                          >
                            {COPY.pillarCentralLabel}
                          </span>
                        )}
                      </h3>
                      <p
                        className={pillar.expanded ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-text-main)',
                          fontWeight: pillar.expanded ? 400 : 300,
                          lineHeight: 1.8,
                          opacity: 0.85,
                          maxWidth: pillar.expanded ? '600px' : '540px',
                        }}
                      >
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Not promised */}
        <FadeIn delay={0.35}>
          <div
            className="mt-12 md:mt-14 p-6 md:p-8"
            style={{
              backgroundColor: 'var(--color-bg-warm)',
              borderRadius: '4px 16px 4px 16px',
            }}
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.naoPrometo}
            </p>
          </div>
        </FadeIn>

        {/* Transition */}
        <FadeIn delay={0.4}>
          <p
            className="mt-12 text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-primary)',
              fontWeight: 300,
              opacity: 0.7,
              fontStyle: 'italic',
            }}
          >
            {COPY.transition}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
