import { type FC, useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; base: number; speed: number; phase: number; depth: number }
type Comet = { x: number; y: number; vx: number; vy: number; life: number }

/**
 * Fixed full-viewport starfield: twinkling stars with gentle scroll parallax
 * and the occasional shooting star. Renders a single static frame when the
 * visitor prefers reduced motion.
 */
export const Starfield: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let stars: Star[] = []
    let comet: Comet | null = null
    let nextComet = performance.now() + 3000
    let raf = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((width * height) / 5200)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.2,
        base: Math.random() * 0.5 + 0.25,
        speed: Math.random() * 0.0015 + 0.0005,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.6 + 0.1,
      }))
      if (reduceMotion) draw(0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      const scroll = window.scrollY
      for (const s of stars) {
        const twinkle = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(t * s.speed + s.phase)
        const y = (((s.y - scroll * s.depth * 0.15) % height) + height) % height
        ctx.globalAlpha = s.base * twinkle
        ctx.fillStyle = s.r > 1 ? '#c4b5fd' : '#f3f4f6'
        ctx.beginPath()
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) {
        if (!comet && t > nextComet) {
          comet = {
            x: Math.random() * width * 0.7 + width * 0.2,
            y: Math.random() * height * 0.3,
            vx: -(Math.random() * 6 + 7),
            vy: Math.random() * 3 + 3,
            life: 1,
          }
        }
        if (comet) {
          const tail = 14
          const grad = ctx.createLinearGradient(comet.x, comet.y, comet.x - comet.vx * tail, comet.y - comet.vy * tail)
          grad.addColorStop(0, `rgba(243,244,246,${0.9 * comet.life})`)
          grad.addColorStop(1, 'rgba(124,92,252,0)')
          ctx.globalAlpha = 1
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(comet.x, comet.y)
          ctx.lineTo(comet.x - comet.vx * tail, comet.y - comet.vy * tail)
          ctx.stroke()
          comet.x += comet.vx
          comet.y += comet.vy
          comet.life -= 0.012
          if (comet.life <= 0 || comet.x < -200 || comet.y > height + 200) {
            comet = null
            nextComet = t + 4000 + Math.random() * 6000
          }
        }
      }
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    if (!reduceMotion) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />
}
