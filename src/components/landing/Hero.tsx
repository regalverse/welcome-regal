import { type FC } from 'react'
import { ArrowRight, Check, Gift, Satellite } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LAUNCH_STEPS } from '@/content/site'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from './Reveal'

const LaunchTracker: FC = () => (
  <ol className="flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Launch progress">
    {LAUNCH_STEPS.map((step, i) => (
      <li key={step.label} className="flex items-center gap-2">
        <span
          className={cn(
            'relative flex h-5 w-5 items-center justify-center rounded-full border text-[10px]',
            step.done && 'border-celestial-violet bg-celestial-violet text-starlight-white',
            step.active && 'border-radiant-sun text-radiant-sun',
            !step.done && !step.active && 'border-twilight-line text-dark-nebula',
          )}
        >
          {step.done && <Check className="h-3 w-3" strokeWidth={3} />}
          {step.active && (
            <>
              <span className="absolute inset-0 rounded-full bg-radiant-sun/40 animate-ping-soft" />
              <span className="h-1.5 w-1.5 rounded-full bg-radiant-sun" />
            </>
          )}
        </span>
        <span
          className={cn(
            'text-xs',
            step.done && 'text-pearl-mist',
            step.active && 'font-semibold text-radiant-sun',
            !step.done && !step.active && 'text-dark-nebula',
          )}
        >
          {step.label}
        </span>
        {i < LAUNCH_STEPS.length - 1 && <span className="h-px w-4 bg-twilight-line" aria-hidden />}
      </li>
    ))}
  </ol>
)

const PhoneConstellation: FC = () => (
  <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[600px]">
    {/* Orbit rings */}
    <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-celestial-violet/15 animate-orbit sm:h-[600px] sm:w-[600px]">
      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radiant-sun shadow-glow-gold" />
    </div>
    <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-twilight-line animate-orbit-reverse sm:h-[460px] sm:w-[460px]">
      <span className="absolute bottom-6 left-10 h-2 w-2 rounded-full bg-lunar-wisteria shadow-glow-violet" />
    </div>
    <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(124_92_252/0.35),transparent)]" />

    {/* Phones */}
    <PhoneMockup
      src="/app/birth-chart.png"
      alt="AstroRegal birth chart screen"
      className="absolute left-[2%] top-[14%] w-[150px] -rotate-[9deg] opacity-80 sm:left-[4%] sm:w-[190px]"
    />
    <PhoneMockup
      src="/app/mars.png"
      alt="AstroRegal Mars planet detail screen"
      className="absolute right-[2%] top-[18%] w-[150px] rotate-[9deg] opacity-80 sm:right-[4%] sm:w-[190px]"
    />
    <PhoneMockup
      src="/app/home-top.png"
      alt="AstroRegal home screen with Orra search and daily cosmic reading"
      priority
      className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:w-[256px]"
    />

    {/* Floating chat snippets */}
    <div className="absolute left-0 top-[4%] z-10 max-w-[200px] animate-float rounded-panel rounded-bl-chip border border-twilight-line bg-midnight-space/90 px-4 py-3 text-sm text-pearl-mist shadow-modal backdrop-blur-glass sm:left-[2%]">
      Should I take the job offer?
    </div>
    <div className="absolute bottom-[6%] right-0 z-10 max-w-[230px] animate-float-slow rounded-panel rounded-br-chip border border-celestial-violet/40 bg-celestial-violet/15 px-4 py-3 text-sm text-pearl-mist shadow-glow-violet backdrop-blur-glass sm:right-[2%]">
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.72px] text-lunar-wisteria">Orra</span>
      Jupiter is backing you, but wait until Mars leaves your 6th house ✨
    </div>
    <div className="absolute bottom-[18%] left-[4%] z-10 hidden items-center gap-2 rounded-full border border-twilight-line bg-midnight-space/90 px-3 py-1.5 text-[11px] text-cosmic-slate shadow-card backdrop-blur-glass sm:flex">
      <Satellite className="h-3.5 w-3.5 text-radiant-sun" aria-hidden />
      NASA JPL data · live
    </div>
  </div>
)

export const Hero: FC = () => (
  <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
    <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
      <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
        <Reveal immediate>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-radiant-sun/30 bg-radiant-sun/10 px-4 py-1.5 text-xs font-semibold text-radiant-sun">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-radiant-sun animate-ping-soft" />
              <span className="relative h-2 w-2 rounded-full bg-radiant-sun" />
            </span>
            Submitted to Google Play · Launching soon
          </span>
        </Reveal>

        <Reveal immediate delay={100}>
          <h1 className="text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Meet <em className="text-gradient-violet pr-1">Orra</em>,
            <br />
            your cosmic best friend.
          </h1>
        </Reveal>

        <Reveal immediate delay={200}>
          <p className="max-w-xl text-lg leading-relaxed text-cosmic-slate">
            AstroRegal pairs <span className="text-pearl-mist">NASA JPL planetary data</span> with{' '}
            <span className="text-pearl-mist">fine-tuned AI</span>, so you can ask the stars anything about your day, your career,
            your love life or your mood. Every answer is read from your exact birth chart.
          </p>
        </Reveal>

        <Reveal immediate delay={300} className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-button bg-celestial-violet px-7 py-4 text-[17px] font-bold tracking-[0.17px] text-starlight-white shadow-glow-violet transition-colors hover:bg-astral-iris active:bg-lunar-wisteria"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#orra"
            className="inline-flex items-center gap-2 rounded-button border-[1.5px] border-stardust-glow px-7 py-4 text-[15px] font-semibold text-pearl-mist transition-colors hover:border-celestial-violet hover:bg-celestial-violet/8"
          >
            See Orra in action
          </a>
        </Reveal>

        <Reveal immediate delay={400} className="flex flex-col items-center gap-6 lg:items-start">
          <p className="inline-flex items-center gap-2 text-sm text-pearl-mist">
            <Gift className="h-4 w-4 text-radiant-sun" aria-hidden />
            Free Orra credits for every new account
          </p>
          <LaunchTracker />
        </Reveal>
      </div>

      <Reveal immediate delay={200}>
        <PhoneConstellation />
      </Reveal>
    </div>
  </section>
)
