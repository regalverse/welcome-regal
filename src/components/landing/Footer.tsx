import { type FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="w-full px-6 py-10 md:px-20 lg:px-40 border-t border-deep-charcoal/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-deep-charcoal/40 dark:text-gray-500 text-[11px] uppercase tracking-widest">
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
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
