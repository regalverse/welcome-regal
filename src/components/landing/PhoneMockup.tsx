import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  /** Load eagerly (above-the-fold hero phones). */
  priority?: boolean
}

/** Device frame for a 390×844 app screen exported from Figma. */
export const PhoneMockup: FC<PhoneMockupProps> = ({ src, alt, className, priority }) => (
  <div
    className={cn(
      'relative aspect-[390/844] rounded-[2.6rem] bg-[#05060a] p-[7px] shadow-modal ring-1 ring-white/10',
      'before:absolute before:inset-0 before:rounded-[2.6rem] before:shadow-[0_30px_80px_-20px_rgb(124_92_252/0.45)] before:content-[""]',
      className,
    )}
  >
    <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-cosmic-void">
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </div>
)
