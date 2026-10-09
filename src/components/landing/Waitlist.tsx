import { type FC } from 'react'
import { BellRing, Gift, Play } from 'lucide-react'
import { EmailSignup } from './EmailSignup'
import { Reveal } from './Reveal'

export const Waitlist: FC = () => (
  <section id="waitlist" className="relative px-6 py-20 md:py-28">
    <Reveal className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgb(124_92_252/0.35),transparent)]" aria-hidden />
      <div
        className="relative overflow-hidden rounded-[2rem] border-[1.5px] border-celestial-violet/40 px-6 py-16 text-center shadow-modal md:px-16 md:py-20"
        style={{ background: 'linear-gradient(135deg, rgb(124 92 252 / 0.22) 0%, var(--midnight-space) 45%, var(--cosmic-void) 100%)' }}
      >
        {/* Decorative orbits */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-celestial-violet/20 animate-orbit" aria-hidden>
          <span className="absolute bottom-8 left-8 h-2 w-2 rounded-full bg-radiant-sun shadow-glow-gold" />
        </div>
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-dashed border-twilight-line animate-orbit-reverse" aria-hidden />

        <div className="relative flex flex-col items-center gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-radiant-sun/30 bg-radiant-sun/10 px-4 py-1.5 text-xs font-semibold text-radiant-sun">
            <Play className="h-3 w-3 fill-current" aria-hidden />
            Coming soon on Google Play
          </span>
          <h2 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            Be first in <em className="text-gradient-violet">orbit.</em>
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cosmic-slate">
            AstroRegal is in final review on the Play Store. Join the waitlist and you’ll hear the moment it goes live, with free Orra
            credits waiting in your account.
          </p>

          <EmailSignup />

          <ul className="flex flex-col gap-3 text-sm text-pearl-mist sm:flex-row sm:gap-8">
            <li className="flex items-center justify-center gap-2">
              <BellRing className="h-4 w-4 text-lunar-wisteria" aria-hidden />
              Launch-day email, nothing else
            </li>
            <li className="flex items-center justify-center gap-2">
              <Gift className="h-4 w-4 text-radiant-sun" aria-hidden />
              Free Orra credits on signup
            </li>
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
)
