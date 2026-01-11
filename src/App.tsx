import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { ThemeSwitch } from '@/components/theme/ThemeSwitch'
import { GlassCard } from '@/components/glass/GlassCard'
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
        {/* Overlay for readability */}
        <div className="fixed inset-0 bg-background/60 dark:bg-background/80 backdrop-blur-sm" />

        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-300/30 dark:bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-200/40 dark:bg-gold-600/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gold-shimmer mb-2">
                Hello React
              </h1>
              <p className="text-muted-foreground">
                Glassmorphism & Golden Theme
              </p>
            </div>
            <ThemeSwitch />
          </header>

          {/* Hero Section */}
          <section className="mb-16">
            <LiquidGlass className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to the Future
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the beauty of liquid glass effects powered by WebGL,
                combined with elegant golden accents and smooth theme transitions.
              </p>
            </LiquidGlass>
          </section>

          {/* Feature Cards */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <GlassCard>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Glassmorphism
                </h3>
              </div>
              <p className="text-muted-foreground">
                Beautiful frosted glass effect with backdrop blur and subtle borders.
              </p>
            </GlassCard>

            <GlassCard variant="gold">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/30 flex items-center justify-center">
                  <span className="text-xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300">
                  Golden Glass
                </h3>
              </div>
              <p className="text-muted-foreground">
                Luxurious golden-tinted glass with warm, inviting aesthetics.
              </p>
            </GlassCard>

            <GlassCard variant="heavy" withRefraction>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400/20 to-purple-400/20 flex items-center justify-center">
                  <span className="text-xl">🌈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Prismatic
                </h3>
              </div>
              <p className="text-muted-foreground">
                Rainbow light refraction with animated gradient borders.
              </p>
            </GlassCard>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <GlassCard variant="gold" className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Built With
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'TypeScript', 'Tailwind 4', 'Vite', 'liquidGL', 'Shadcn'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </section>

          {/* Footer */}
          <footer className="text-center text-muted-foreground">
            <p className="gold-shimmer inline-block font-medium">
              Made with love by Regal
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
