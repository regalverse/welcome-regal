import { type FC } from 'react'
import { Gift, ScanLine, Sparkles } from 'lucide-react'
import { GooglePlayBadge } from './GooglePlayBadge'
import { Reveal } from './Reveal'

export const Download: FC = () => (
  <section id="download" className="relative px-6 py-20 md:py-28">
    <Reveal className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgb(124_92_252/0.35),transparent)]" aria-hidden />
      <div
        className="relative overflow-hidden rounded-[2rem] border-[1.5px] border-celestial-violet/40 px-6 py-16 shadow-modal md:px-16 md:py-20"
        style={{ background: 'linear-gradient(135deg, rgb(124 92 252 / 0.22) 0%, var(--midnight-space) 45%, var(--cosmic-void) 100%)' }}
      >
        {/* Decorative orbits */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-celestial-violet/20 animate-orbit" aria-hidden>
          <span className="absolute bottom-8 left-8 h-2 w-2 rounded-full bg-radiant-sun shadow-glow-gold" />
        </div>
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-dashed border-twilight-line animate-orbit-reverse" aria-hidden />

        <div className="relative grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col items-center gap-7 text-center md:items-start md:text-left">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-semibold text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-success animate-ping-soft" />
                <span className="relative h-2 w-2 rounded-full bg-success" />
              </span>
              Now live on Google Play
            </span>
            <h2 className="max-w-xl text-4xl leading-[1.1] md:text-6xl">
              Orra is <em className="text-gradient-violet">waiting for you.</em>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-cosmic-slate">
              Download AstroRegal, add your birth details, and ask your first question in under a minute. Your free Orra credits are
              on us.
            </p>

            <GooglePlayBadge className="-my-2 -ml-2" />

            <ul className="flex flex-col gap-3 text-sm text-pearl-mist sm:flex-row sm:gap-8">
              <li className="flex items-center justify-center gap-2">
                <Gift className="h-4 w-4 text-radiant-sun" aria-hidden />
                Free Orra credits on signup
              </li>
              <li className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-lunar-wisteria" aria-hidden />
                Free to download
              </li>
            </ul>
          </div>

          {/* Desktop visitors: scan to install on their phone */}
          <div className="hidden flex-col items-center gap-4 md:flex">
            <div className="rounded-sheet bg-starlight-white p-5 shadow-glow-violet">
              <img src="/brand/play-store-qr.svg" alt="QR code linking to AstroRegal on Google Play" className="h-44 w-44" />
            </div>
            <p className="inline-flex items-center gap-2 text-sm text-cosmic-slate">
              <ScanLine className="h-4 w-4 text-lunar-wisteria" aria-hidden />
              Scan with your phone to install
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
)
