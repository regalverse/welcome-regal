import { type FC } from 'react'
import { PLAY_STORE_URL } from '@/content/site'
import { cn } from '@/lib/utils'

/**
 * Official "Get it on Google Play" badge (unmodified artwork, per Google's
 * brand guidelines). The PNG includes its own transparent safe-area padding.
 */
export const GooglePlayBadge: FC<{ className?: string }> = ({ className }) => (
  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get AstroRegal on Google Play"
    className={cn('inline-block transition-transform duration-300 hover:-translate-y-0.5', className)}
  >
    <img src="/brand/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} className="h-[76px] w-auto" />
  </a>
)
