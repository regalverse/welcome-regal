import { type FC, useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '@/content/site'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export const Faq: FC = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" subtitle="Everything people ask us before they ask Orra." />

        <Reveal as="ul" className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            return (
              <li
                key={item.q}
                className={cn(
                  'rounded-sheet border-[1.5px] bg-midnight-space transition-colors',
                  isOpen ? 'border-celestial-violet/60' : 'border-twilight-line hover:border-stardust-glow',
                )}
              >
                <h3 className="font-sans text-base">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold text-starlight-white"
                  >
                    {item.q}
                    <Plus
                      className={cn('h-5 w-5 shrink-0 text-lunar-wisteria transition-transform duration-300', isOpen && 'rotate-45')}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  className={cn('grid transition-[grid-template-rows] duration-300 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-cosmic-slate">{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
