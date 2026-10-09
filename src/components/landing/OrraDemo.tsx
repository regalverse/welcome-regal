import { type FC, useEffect, useRef, useState } from 'react'
import { Orbit, SendHorizontal } from 'lucide-react'
import { ORRA_TOPICS } from '@/content/site'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Phase = 'thinking' | 'answering' | 'done'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const OrraDemo: FC = () => {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('thinking')
  const [typed, setTyped] = useState(0)
  const [inView, setInView] = useState(false)
  const [userPicked, setUserPicked] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const playedRef = useRef<string | null>(null)
  const topic = ORRA_TOPICS[index]

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Thinking dots → typed-out answer, played once per topic while on screen.
  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(topic.answer.length)
      setPhase('done')
      return
    }
    if (!inView || playedRef.current === topic.id) return
    playedRef.current = topic.id
    setPhase('thinking')
    setTyped(0)
    let interval: number | undefined
    const start = window.setTimeout(() => {
      setPhase('answering')
      interval = window.setInterval(() => {
        setTyped((n) => {
          const next = n + 3
          if (next >= topic.answer.length) {
            window.clearInterval(interval)
            setPhase('done')
            return topic.answer.length
          }
          return next
        })
      }, 18)
    }, 1100)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
      // Interrupted (scrolled away / topic switched): finish instantly on return.
      setTyped(topic.answer.length)
      setPhase('done')
    }
  }, [topic, inView])

  // Auto-advance through topics until the visitor picks one themselves.
  useEffect(() => {
    if (phase !== 'done' || userPicked || !inView || prefersReducedMotion()) return
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % ORRA_TOPICS.length), 5500)
    return () => window.clearTimeout(t)
  }, [phase, userPicked, inView])

  return (
    <section id="orra" ref={sectionRef} className="relative px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Meet Orra"
            title={
              <>
                Ask the stars. <em className="text-gradient-violet">Get real answers.</em>
              </>
            }
            subtitle="Orra is the AI at the heart of AstroRegal. It reads your full Vedic chart, checks today’s real sky, and answers like a friend who knows astrology inside out. Pick a topic and watch."
          />

          <Reveal delay={150} className="flex flex-wrap gap-2.5" as="div">
            {ORRA_TOPICS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setUserPicked(true)
                  setIndex(i)
                }}
                aria-pressed={i === index}
                className={cn(
                  'rounded-full border-[1.5px] px-4 py-2 text-sm font-semibold transition-colors',
                  i === index
                    ? 'border-celestial-violet bg-celestial-violet/15 text-starlight-white'
                    : 'border-twilight-line bg-nebula-veil text-cosmic-slate hover:border-stardust-glow hover:text-pearl-mist',
                )}
              >
                {t.label}
              </button>
            ))}
          </Reveal>

          <Reveal delay={250} className="hidden overflow-hidden rounded-sheet border border-twilight-line lg:block">
            <img src="/app/orra-mascot.png" alt="Orra, the AstroRegal AI mascot, holding a glowing chat bubble" className="h-44 w-full object-cover" loading="lazy" />
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgb(124_92_252/0.25),transparent)]" aria-hidden />
            <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[1.75rem] border-[1.5px] border-twilight-line bg-midnight-space shadow-modal">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-nebula-edge px-5 py-4">
                <div className="relative">
                  <img src="/app/orra-mascot.png" alt="" className="h-10 w-10 rounded-full object-cover object-[30%_40%] ring-2 ring-celestial-violet/50" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-midnight-space bg-success" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-starlight-white">Orra</p>
                  <p className="text-xs text-cosmic-slate">Reading your chart · NASA JPL positions</p>
                </div>
                <span className="rounded-full bg-radiant-sun/15 px-2.5 py-1 text-[11px] font-semibold text-radiant-sun">Advanced AI</span>
              </div>

              {/* Messages */}
              <div className="flex flex-1 flex-col gap-4 px-5 py-6" aria-live="polite">
                <div key={`q-${topic.id}`} className="ml-auto max-w-[85%] rounded-panel rounded-br-chip bg-celestial-violet px-4 py-3 text-[15px] leading-relaxed text-starlight-white shadow-glow-violet">
                  {topic.question}
                </div>

                {phase === 'thinking' ? (
                  <div className="flex items-center gap-2 text-sm text-cosmic-slate">
                    <Orbit className="h-4 w-4 animate-spin text-lunar-wisteria [animation-duration:2.5s]" aria-hidden />
                    Mapping today’s transits to your chart
                    <span className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <span key={d} className="typing-dot h-1 w-1 rounded-full bg-lunar-wisteria" style={{ animationDelay: `${d * 150}ms` }} />
                      ))}
                    </span>
                  </div>
                ) : (
                  <div className="max-w-[92%] rounded-panel rounded-bl-chip border border-twilight-line bg-nebula-veil px-4 py-3">
                    <p className={cn('text-[15px] leading-relaxed text-pearl-mist', phase === 'answering' && 'typing-caret')}>
                      {topic.answer.slice(0, typed)}
                    </p>
                    {phase === 'done' && (
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-chip bg-celestial-violet/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.72px] text-twilight-orchid">
                        {topic.chart}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Composer (decorative) */}
              <div className="flex items-center gap-3 border-t border-nebula-edge px-5 py-4">
                <div className="flex-1 rounded-full border-[1.5px] border-twilight-line bg-nebula-veil px-4 py-2.5 text-sm text-dark-nebula">Ask Orra anything…</div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-celestial-violet text-starlight-white shadow-glow-violet" aria-hidden>
                  <SendHorizontal className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-dark-nebula">
            Example conversation. In the app, Orra answers from your own birth chart and today’s sky.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
