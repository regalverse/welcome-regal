import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LiquidGlassProps {
  children: ReactNode
  className?: string
}

export function LiquidGlass({
  children,
  className,
}: LiquidGlassProps) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6',
        'bg-white/10 dark:bg-black/10',
        'backdrop-blur-xl',
        'border border-white/20 dark:border-white/10',
        'shadow-2xl shadow-black/10',
        className
      )}
    >
      {children}
    </div>
  )
}
