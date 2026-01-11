import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'
import { useLiquidGL } from '@/hooks/useLiquidGL'

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  useLiquidGL('.theme-switch-liquid', {
    refraction: 0.8,
    bevelDepth: 0.6,
    frost: 0.05,
    magnify: 1.08,
    tilt: true,
  })

  return (
    <button
      onClick={toggleTheme}
      className="
        theme-switch-liquid liquidGL
        relative w-20 h-10 rounded-full
        bg-gold-400/15 dark:bg-gold-600/15
        backdrop-blur-md
        border border-gold-300/30 dark:border-gold-500/20
        transition-all duration-300
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2
        focus:ring-offset-background
        cursor-pointer
      "
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="content relative z-10 w-full h-full flex items-center">
        <span className="
          absolute inset-0.5 rounded-full
          bg-gradient-to-r from-gold-200/20 to-gold-300/20
          dark:from-gold-700/20 dark:to-gold-800/20
          transition-all duration-300
        " />

        <span
          className={`
            absolute top-1 w-8 h-8 rounded-full
            bg-gradient-to-br from-gold-400 to-gold-600
            shadow-lg shadow-gold-500/50
            flex items-center justify-center
            transition-all duration-500 ease-out
            ${theme === 'dark' ? 'left-[calc(100%-2.25rem)]' : 'left-1'}
          `}
        >
          {theme === 'light' ? (
            <Sun className="w-5 h-5 text-gold-900" />
          ) : (
            <Moon className="w-5 h-5 text-gold-100" />
          )}
        </span>
      </span>
    </button>
  )
}
