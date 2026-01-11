import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-20 h-10 rounded-full
        bg-white/15 dark:bg-black/20
        backdrop-blur-xl
        border border-gold-300/30 dark:border-gold-500/20
        shadow-lg shadow-gold-500/20
        transition-all duration-300
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2
        focus:ring-offset-background
        cursor-pointer
      "
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
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
    </button>
  )
}
