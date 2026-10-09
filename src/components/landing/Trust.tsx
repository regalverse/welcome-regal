import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeCheck, Building2, HeartHandshake, Lock, Satellite, ShieldCheck, Smartphone } from 'lucide-react'
import { CERTIFICATIONS, TRUST_PILLARS } from '@/content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const ICONS = [Satellite, ShieldCheck, Lock, HeartHandshake, Building2, Smartphone]

export const Trust: FC = () => (
  <section id="trust" className="relative px-6 py-20 md:py-28">
    <div className="mx-auto flex max-w-6xl flex-col gap-14">
      <SectionHeading
        eyebrow="Built to be trusted"
        title={
          <>
            Precision you can check.
            <br />
            <em className="text-gradient-gold">Privacy you don’t have to.</em>
          </>
        }
        subtitle="Astrology asks for your most personal details. Here is exactly how we earn that trust, with no fine print and nothing invented."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_PILLARS.map((pillar, i) => {
          const Icon = ICONS[i]
          return (
            <Reveal key={pillar.title} delay={(i % 3) * 100} className="card-horizon flex flex-col gap-4 p-7 transition-colors hover:border-stardust-glow">
              <span className="flex h-12 w-12 items-center justify-center rounded-panel border border-radiant-sun/30 bg-radiant-sun/10">
                <Icon className="h-5 w-5 text-radiant-sun" aria-hidden />
              </span>
              <h3 className="text-xl">{pillar.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-cosmic-slate">{pillar.body}</p>
              {pillar.link && (
                <Link to={pillar.link.to} className="inline-flex items-center gap-1 text-sm font-semibold text-lunar-wisteria underline-offset-4 hover:text-twilight-orchid hover:underline">
                  {pillar.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              )}
            </Reveal>
          )
        })}
      </div>

      {CERTIFICATIONS.length > 0 && (
        <Reveal className="flex flex-wrap items-center justify-center gap-4">
          {CERTIFICATIONS.map((c) => (
            <div key={c.id} className="flex items-center gap-3 rounded-panel border-[1.5px] border-radiant-sun/40 bg-midnight-space px-5 py-3 shadow-glow-gold">
              <BadgeCheck className="h-6 w-6 text-radiant-sun" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-starlight-white">{c.name}</p>
                <p className="text-xs text-cosmic-slate">
                  {c.issuer} · {c.id}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      )}
    </div>
  </section>
)
