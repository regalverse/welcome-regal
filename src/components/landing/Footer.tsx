import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, type LucideIcon } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS, type SocialId } from '@/content/site'
import { Logo } from './Logo'

const SOCIAL_ICONS: Record<SocialId, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
}

export const Footer: FC = () => (
  <footer className="relative border-t border-nebula-edge bg-cosmic-void/80 px-6 pb-10 pt-16 backdrop-blur-glass">
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-cosmic-slate">
            Your cosmic companion. Real astronomy, Vedic wisdom and an AI that actually listens.
          </p>
          <ul className="flex flex-wrap gap-3" aria-label="AstroRegal on social media">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICONS[s.id]
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-twilight-line text-cosmic-slate transition-colors hover:border-celestial-violet hover:bg-celestial-violet/8 hover:text-starlight-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <nav aria-label="Explore" className="flex flex-col gap-3 text-sm">
          <p className="label-minor text-dark-nebula">Explore</p>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={`/${l.href}`} className="text-cosmic-slate transition-colors hover:text-starlight-white">
              {l.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Company" className="flex flex-col gap-3 text-sm">
          <p className="label-minor text-dark-nebula">Company</p>
          <Link to="/about" className="text-cosmic-slate transition-colors hover:text-starlight-white">
            About us
          </Link>
          <Link to="/privacy" className="text-cosmic-slate transition-colors hover:text-starlight-white">
            Privacy policy
          </Link>
          <a href="mailto:admin@astroregal.com" className="inline-flex items-center gap-2 text-cosmic-slate transition-colors hover:text-starlight-white">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            admin@astroregal.com
          </a>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-nebula-edge pt-8 text-xs text-dark-nebula md:flex-row">
        <p>© 2026 Regalverse Private Limited. All rights reserved.</p>
        <p>For reflection and self-discovery. Not a substitute for professional advice.</p>
      </div>
    </div>
  </footer>
)
