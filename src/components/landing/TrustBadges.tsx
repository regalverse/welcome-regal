import { type FC } from 'react'
import { Shield, Gavel, Cpu } from 'lucide-react'

interface Badge {
  icon: React.ReactNode
  label: string
}

const badges: Badge[] = [
  { icon: <Shield className="w-4 h-4" />, label: 'Vedic Precision' },
  { icon: <Gavel className="w-4 h-4" />, label: 'Legal Compliance' },
  { icon: <Cpu className="w-4 h-4" />, label: 'AI Integration' },
]

export const TrustBadges: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 px-4 py-1.5 border border-deep-charcoal/10 rounded-full bg-white/50 dark:bg-white/5"
        >
          <span className="text-primary">
            {badge.icon}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-deep-charcoal/60 dark:text-gray-400">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  )
}
