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
  refraction = 0.5,
  bevelDepth = 0.3,
  frost = 0.2,
  magnify = 1.02,
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
        'liquidGL rounded-2xl p-6',
        'glass',
        className
      )}
    >
      <div className="content relative z-10">
        {children}
      </div>
    </div>
  )
}
