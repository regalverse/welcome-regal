import { type FC, type ReactNode } from 'react'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export const SectionHeading: FC<SectionHeadingProps> = ({ eyebrow, title, subtitle, align = 'center', className }) => (
  <Reveal className={cn('flex flex-col gap-4', align === 'center' ? 'items-center text-center' : 'items-start', className)}>
    <span className="inline-flex items-center gap-2 rounded-full border border-celestial-violet/25 bg-celestial-violet/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-lunar-wisteria">
      <Sparkles className="h-3 w-3" aria-hidden />
      {eyebrow}
    </span>
    <h2 className="max-w-3xl text-4xl leading-[1.1] md:text-5xl">{title}</h2>
    {subtitle && <p className="max-w-2xl text-base leading-relaxed text-cosmic-slate md:text-lg">{subtitle}</p>}
  </Reveal>
)
