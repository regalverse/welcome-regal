import { type FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-8 md:px-20 lg:px-40">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <img 
            src="/astroregal_logo_full.png" 
            alt="AstroRegal Logo" 
            className="w-full h-full object-contain"
          />
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
