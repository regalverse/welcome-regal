import { type FC, type ReactNode, type ElementType, type CSSProperties, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  /** Animate in on mount instead of on scroll (above-the-fold content). */
  immediate?: boolean
}

/** Fades + lifts its children into view the first time they scroll on screen. */
export const Reveal: FC<RevealProps> = ({ children, className, delay = 0, as: Tag = 'div', immediate = false }) => {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (immediate || typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(frame)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
