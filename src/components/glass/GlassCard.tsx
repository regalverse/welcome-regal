import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gold' | 'heavy'
  withRefraction?: boolean
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  withRefraction = false
}: GlassCardProps) {
  const variants = {
    default: 'glass',
    gold: 'glass-gold',
    heavy: 'glass-heavy'
  }

  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        variants[variant],
        withRefraction && 'refraction-border prism-glow overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
}
