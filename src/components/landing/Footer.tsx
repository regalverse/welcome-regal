import { type FC } from 'react'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
  return (
    <footer className="w-full px-6 py-10 md:px-20 lg:px-40 border-t border-deep-charcoal/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-deep-charcoal/40 dark:text-gray-500 text-[11px] uppercase tracking-widest">
        <div className="flex gap-8">
          <Link className="hover:text-primary transition-colors" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-primary transition-colors" to="/about">
            About Us
          </Link>
        </div>
        <p>© 2026 Astro Regal. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">
            LinkedIn
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
