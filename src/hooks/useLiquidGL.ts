import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    liquidGL: (options: LiquidGLOptions) => LiquidGLInstance
  }
}

interface LiquidGLOptions {
  target: string
  snapshot?: string
  refraction?: number
  bevelDepth?: number
  bevelWidth?: number
  frost?: number
  magnify?: number
  tilt?: boolean
  on?: {
    init?: () => void
  }
}

interface LiquidGLInstance {
  destroy?: () => void
  refresh?: () => void
}

export function useLiquidGL(
  selector: string,
  options: Omit<LiquidGLOptions, 'target'> = {}
) {
  const instanceRef = useRef<LiquidGLInstance | null>(null)

  useEffect(() => {
    const initLiquidGL = () => {
      if (typeof window.liquidGL === 'function') {
        try {
          instanceRef.current = window.liquidGL({
            target: selector,
            snapshot: 'body',
            refraction: 0.5,
            bevelDepth: 0.3,
            frost: 0.2,
            magnify: 1.02,
            tilt: true,
            ...options,
          })
        } catch (e) {
          console.warn('liquidGL initialization failed:', e)
        }
      }
    }

    if (document.readyState === 'complete') {
      setTimeout(initLiquidGL, 100)
    } else {
      window.addEventListener('load', () => setTimeout(initLiquidGL, 100))
    }

    return () => {
      if (instanceRef.current?.destroy) {
        instanceRef.current.destroy()
      }
    }
  }, [selector, options])

  return instanceRef.current
}
