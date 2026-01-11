import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-16 h-8 rounded-full
        glass-gold
        transition-all duration-300
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2
        focus:ring-offset-background
        cursor-pointer
      "
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="
        absolute inset-0.5 rounded-full
        bg-gradient-to-r from-gold-200 to-gold-300
        dark:from-gold-700 dark:to-gold-800
        transition-all duration-300
      " />

      <span
        className={`
          absolute top-0.5 w-7 h-7 rounded-full
          bg-gradient-to-br from-gold-400 to-gold-600
          shadow-lg shadow-gold-500/30
          flex items-center justify-center
          transition-all duration-300 ease-out
          ${theme === 'dark' ? 'left-[calc(100%-1.875rem)]' : 'left-0.5'}
        `}
      >
        {theme === 'light' ? (
          <Sun className="w-4 h-4 text-gold-900" />
        ) : (
          <Moon className="w-4 h-4 text-gold-100" />
        )}
      </span>
    </button>
  )
}
