import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { ThemeSwitch } from '@/components/theme/ThemeSwitch'
import { LiquidGlass } from '@/components/glass/LiquidGlass'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Wallpaper background */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/wallpaper.jpg)' }}
        />
        {/* Subtle overlay */}
        <div className="fixed inset-0 bg-background/20 dark:bg-background/30" />

        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-300/30 dark:bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-200/40 dark:bg-gold-600/10 rounded-full blur-3xl" />
        </div>

        {/* Theme Switch - Top Right */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeSwitch />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <LiquidGlass className="text-center py-16 px-16">
            <h1 className="text-6xl md:text-8xl font-bold gold-shimmer">
              Welcome Regal
            </h1>
          </LiquidGlass>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
