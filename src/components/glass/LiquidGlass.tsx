import { ReactNode, useId } from 'react'
import { cn } from '@/lib/utils'
import { useLiquidGL } from '@/hooks/useLiquidGL'

interface LiquidGlassProps {
  children: ReactNode
  className?: string
  refraction?: number
  bevelDepth?: number
  frost?: number
  magnify?: number
  tilt?: boolean
}

export function LiquidGlass({
  children,
  className,
  refraction = 0.7,
  bevelDepth = 0.5,
  frost = 0.1,
  magnify = 1.05,
  tilt = true,
}: LiquidGlassProps) {
  const id = useId()
  const glassId = `liquid-glass-${id.replace(/:/g, '')}`

  useLiquidGL(`.${glassId}`, {
    refraction,
    bevelDepth,
    frost,
    magnify,
    tilt,
  })

  return (
    <div
      className={cn(
        glassId,
        'liquidGL rounded-3xl p-6',
        'bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10',
        className
      )}
    >
      <div className="content relative z-10">
        {children}
      </div>
    </div>
  )
}
