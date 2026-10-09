import { type FC } from 'react'
import { cn } from '@/lib/utils'

/** Crescent mark + AstroRegal wordmark from the app's Figma file. */
export const Logo: FC<{ className?: string }> = ({ className }) => (
  <span className={cn('flex items-center gap-2.5', className)}>
    <img src="/brand/logo-mark.svg" alt="" className="h-7 w-auto" />
    <img src="/brand/wordmark.svg" alt="AstroRegal" className="h-7 w-auto" />
  </span>
)
