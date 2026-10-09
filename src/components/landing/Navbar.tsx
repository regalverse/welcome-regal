import { type FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/content/site'
import { Logo } from './Logo'

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-6',
          scrolled || open
            ? 'border border-violet-whisper bg-midnight-space/75 shadow-modal backdrop-blur-glass'
            : 'border border-transparent',
        )}
      >
        <Link to="/" aria-label="AstroRegal home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-cosmic-slate transition-colors hover:text-starlight-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden rounded-button bg-celestial-violet px-5 py-2.5 text-sm font-semibold text-starlight-white shadow-glow-violet transition-colors hover:bg-astral-iris active:bg-lunar-wisteria sm:inline-flex"
          >
            Join the waitlist
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-pearl-mist hover:bg-nebula-veil md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-sheet border border-violet-whisper bg-midnight-space/95 p-3 shadow-modal backdrop-blur-glass md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-card px-4 py-3 text-pearl-mist hover:bg-nebula-veil"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-button bg-celestial-violet px-4 py-3 text-center font-semibold text-starlight-white"
          >
            Join the waitlist
          </a>
        </div>
      )}
    </header>
  )
}
