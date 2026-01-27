import { type FC } from 'react'

export const CelestialDiagram: FC = () => {
  return (
    <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
      {/* Animated orbital rings */}
      <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-4 border-[1px] border-primary/30 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
      <div className="absolute inset-12 border-[0.5px] border-primary/40 rounded-full" />
      
      {/* Central celestial symbol */}
      <svg 
        className="w-48 h-48 text-primary opacity-80" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" fill="currentColor" r="1" />
        <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
        <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="30" strokeDasharray="2 2" strokeWidth="0.3" />
        <path d="M20 20 L80 80 M80 20 L20 80" opacity="0.5" strokeWidth="0.1" />
      </svg>
      
      {/* Decorative planets */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary/60 rounded-full" />
    </div>
  )
}
