import { type FC, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { APP_SCREENS } from '@/content/site'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export const AppGlimpse: FC = () => {
  const trackRef = useRef<HTMLUListElement>(null)
  const scrollBy = (dir: 1 | -1) => trackRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })

  return (
    <section id="app" className="relative py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            className="items-center text-center md:items-start md:text-left"
            eyebrow="A glimpse of the app"
            title={
              <>
                The whole cosmos, <em className="text-gradient-violet">in your pocket.</em>
              </>
            }
            subtitle="Designed for late-night scrolling and early-morning check-ins: dark, calm and easy on the eyes."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous screens"
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-stardust-glow text-pearl-mist transition-colors hover:border-celestial-violet hover:bg-celestial-violet/8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next screens"
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-stardust-glow text-pearl-mist transition-colors hover:border-celestial-violet hover:bg-celestial-violet/8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Reveal delay={100}>
        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-px-6 px-6 pb-6 pt-4 md:scroll-px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        >
          {APP_SCREENS.map((screen) => (
            <li key={screen.src} className="group flex w-[240px] shrink-0 snap-start flex-col gap-5 sm:w-[260px]">
              <PhoneMockup
                src={screen.src}
                alt={`AstroRegal app: ${screen.title}`}
                className="transition-transform duration-500 group-hover:-translate-y-2"
              />
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="text-xl">{screen.title}</h3>
                <p className="text-sm leading-relaxed text-cosmic-slate">{screen.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
