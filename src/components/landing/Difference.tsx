import { type FC } from 'react'
import { Check, X } from 'lucide-react'
import { COMPARISON, PIPELINE } from '@/content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Real sky vs the "ghost sky": the ~24° gap between tropical and sidereal zodiacs. */
const SkyShift: FC = () => (
  <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
    <defs>
      <radialGradient id="sky-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgb(124 92 252 / 0.35)" />
        <stop offset="100%" stopColor="rgb(124 92 252 / 0)" />
      </radialGradient>
    </defs>
    <circle cx="160" cy="160" r="150" fill="url(#sky-core)" />
    {/* Tropical (ghost) wheel */}
    <g className="origin-center" opacity="0.45">
      <circle cx="160" cy="160" r="128" fill="none" stroke="var(--dark-nebula)" strokeDasharray="3 5" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="160" y1="32" x2="160" y2="48" stroke="var(--dark-nebula)" transform={`rotate(${i * 30} 160 160)`} />
      ))}
    </g>
    {/* Sidereal (real) wheel, shifted ~24° */}
    <g transform="rotate(24 160 160)">
      <circle cx="160" cy="160" r="104" fill="none" stroke="var(--celestial-violet)" strokeWidth="1.5" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="160" y1="56" x2="160" y2="74" stroke="var(--lunar-wisteria)" strokeWidth="1.5" transform={`rotate(${i * 30} 160 160)`} />
      ))}
      <circle cx="160" cy="56" r="5" fill="var(--radiant-sun)" />
    </g>
    <path d="M160 32 A128 128 0 0 1 212 43" fill="none" stroke="var(--radiant-sun)" strokeWidth="2" strokeLinecap="round" />
    <text x="222" y="40" fill="var(--radiant-sun)" fontSize="13" fontFamily="var(--typeface-sans)" fontWeight="600">~24°</text>
    <circle cx="160" cy="160" r="4" fill="var(--starlight-white)" />
  </svg>
)

export const Difference: FC = () => (
  <section id="difference" className="relative px-6 py-20 md:py-28">
    <div className="mx-auto flex max-w-6xl flex-col gap-16">
      <SectionHeading
        eyebrow="Why AstroRegal is different"
        title={
          <>
            Most apps read a <span className="text-dark-nebula line-through decoration-1">ghost sky</span>.
            <br />
            <em className="text-gradient-violet">We read the real one.</em>
          </>
        }
        subtitle="The Earth wobbles, so the constellations behind the Sun have drifted about 24° since tropical astrology was written down. If your app ignores that, it’s describing a sky that no longer exists."
      />

      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="relative mx-auto aspect-square w-full max-w-[360px]">
          <SkyShift />
          <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-5 text-xs">
            <span className="flex items-center gap-2 text-dark-nebula">
              <span className="h-px w-5 border-t border-dashed border-dark-nebula" /> Tropical (ghost sky)
            </span>
            <span className="flex items-center gap-2 text-lunar-wisteria">
              <span className="h-0.5 w-5 bg-celestial-violet" /> Sidereal (real sky)
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="overflow-hidden rounded-sheet border-[1.5px] border-twilight-line bg-midnight-space shadow-card">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">AstroRegal compared with typical astrology apps</caption>
            <thead>
              <tr className="border-b border-nebula-edge">
                <th scope="col" className="hidden px-5 py-4 font-semibold text-cosmic-slate sm:table-cell" />
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.72px] text-dark-nebula">Typical astrology apps</th>
                <th scope="col" className="bg-celestial-violet/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.72px] text-lunar-wisteria">AstroRegal</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.topic} className="border-b border-nebula-edge last:border-0">
                  <th scope="row" className="hidden px-5 py-4 align-top font-semibold text-starlight-white sm:table-cell">{row.topic}</th>
                  <td className="px-5 py-4 align-top text-cosmic-slate">
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.72px] text-dark-nebula sm:hidden">{row.topic}</span>
                    <span className="flex gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-error/80" aria-hidden />
                      {row.them}
                    </span>
                  </td>
                  <td className="bg-celestial-violet/5 px-5 py-4 align-top text-pearl-mist">
                    <span className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                      {row.us}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>

      {/* Precision pipeline */}
      <div className="flex flex-col gap-8">
        <Reveal>
          <h3 className="text-center text-3xl">From NASA’s data to your answer</h3>
        </Reveal>
        <ol className="relative grid gap-5 md:grid-cols-4">
          <div
            className="absolute left-[12%] right-[12%] top-8 hidden h-px md:block"
            style={{ background: 'linear-gradient(90deg, var(--radiant-sun), var(--celestial-violet), var(--lunar-wisteria))' }}
            aria-hidden
          />
          {PIPELINE.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 120} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] border-twilight-line bg-midnight-space font-display text-2xl text-starlight-white shadow-glow-violet">
                {p.step}
              </span>
              <h4 className="text-lg font-bold text-starlight-white">{p.title}</h4>
              <p className="text-sm leading-relaxed text-cosmic-slate">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
)
