import { type FC } from 'react'
import { Coffee, MoonStar, Sunrise, Sunset, Zap } from 'lucide-react'
import { DAILY_MOMENTS } from '@/content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const ICONS = [Sunrise, Zap, Coffee, Sunset, MoonStar]

export const DailyCompanion: FC = () => (
  <section id="companion" className="relative px-6 py-20 md:py-28">
    <div className="mx-auto flex max-w-6xl flex-col gap-16">
      <SectionHeading
        eyebrow="Your daily companion"
        title={
          <>
            Not just an astrology app.
            <br />
            <em className="text-gradient-gold">Someone to talk to, every day.</em>
          </>
        }
        subtitle="Horoscopes tell you what everyone born in your month should feel. Orra is there for your actual day: the meeting, the mood, the message you’re overthinking."
      />

      <div className="relative">
        {/* Sky arc: sunrise gold → dusk violet → night */}
        <div
          className="absolute left-0 right-0 top-[22px] hidden h-px md:block"
          style={{ background: 'linear-gradient(90deg, var(--radiant-sun), var(--celestial-violet) 60%, var(--twilight-line))' }}
          aria-hidden
        />
        <ol className="grid gap-6 md:grid-cols-5">
          {DAILY_MOMENTS.map((m, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal as="li" key={m.time} delay={i * 110} className="relative flex flex-col gap-4">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-twilight-line bg-midnight-space shadow-card">
                  <Icon className={i < 2 ? 'h-5 w-5 text-radiant-sun' : 'h-5 w-5 text-lunar-wisteria'} aria-hidden />
                </span>
                <div className="card-horizon flex flex-1 flex-col gap-3 p-5 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.72px] text-cosmic-slate">{m.time}</span>
                  <h3 className="text-xl leading-tight">{m.title}</h3>
                  <p className="rounded-panel rounded-br-chip bg-celestial-violet/15 px-3 py-2 text-sm text-twilight-orchid">“{m.prompt}”</p>
                  <p className="text-sm leading-relaxed text-cosmic-slate">{m.body}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </div>
  </section>
)
