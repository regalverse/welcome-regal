import { type FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-8 md:px-20 lg:px-40">
      <div className="flex items-center gap-2">
        <div className="text-primary">
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1"
            />
          </svg>
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-deep-charcoal dark:text-white">
          AstroRegal
        </h2>
      </div>
      <div className="hidden md:flex gap-8">
        <button className="text-xs uppercase tracking-[0.2em] font-medium text-deep-charcoal/60 hover:text-primary transition-colors">
          Philosophy
        </button>
        <button className="text-xs uppercase tracking-[0.2em] font-medium text-deep-charcoal/60 hover:text-primary transition-colors">
          Legacy
        </button>
      </div>
    </header>
  )
}
