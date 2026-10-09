import { type FC } from 'react'
import { Sparkles } from 'lucide-react'
import { MARQUEE_QUESTIONS } from '@/content/site'
import { cn } from '@/lib/utils'

const Row: FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className="marquee-mask flex overflow-hidden">
    <ul
      className={cn('flex shrink-0 gap-3 pr-3', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}
      style={{ '--marquee-duration': '70s' } as React.CSSProperties}
    >
      {/* Rendered twice so the -50% translate loops seamlessly */}
      {[...items, ...items].map((q, i) => (
        <li
          key={i}
          aria-hidden={i >= items.length}
          className="flex shrink-0 items-center gap-2 rounded-full border border-twilight-line bg-nebula-veil px-5 py-2.5 text-sm text-pearl-mist"
        >
          <Sparkles className="h-3.5 w-3.5 text-lunar-wisteria" aria-hidden />
          {q}
        </li>
      ))}
    </ul>
  </div>
)

export const QuestionMarquee: FC = () => {
  const half = Math.ceil(MARQUEE_QUESTIONS.length / 2)
  return (
    <section aria-label="Questions you can ask Orra" className="flex flex-col gap-3 border-y border-nebula-edge bg-cosmic-void/60 py-8">
      <Row items={MARQUEE_QUESTIONS.slice(0, half)} />
      <Row items={MARQUEE_QUESTIONS.slice(half)} reverse />
    </section>
  )
}
