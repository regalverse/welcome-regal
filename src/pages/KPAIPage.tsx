import { type FC } from 'react'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { Thread } from '@/components/assistant-ui'
import { ToolUIRegistry } from '@/components/tools'
import { useKPAIRuntime } from '@/hooks/useKPAIRuntime'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const KPAIPage: FC = () => {
  const runtime = useKPAIRuntime()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('kpai-theme')
    const shouldBeDark = stored ? stored === 'dark' : prefersDark
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark', newIsDark)
    localStorage.setItem('kpai-theme', newIsDark ? 'dark' : 'light')
  }

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ToolUIRegistry />
      <div className="h-screen w-screen flex flex-col bg-background">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/50 backdrop-blur-sm">
          <h1 className="text-xl font-semibold font-display text-foreground">
            KP AI
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gold-400" />
            ) : (
              <Moon className="w-5 h-5 text-stone-600" />
            )}
          </button>
        </header>

        {/* Main Thread Area */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full max-w-4xl mx-auto">
            <Thread />
          </div>
        </main>
      </div>
    </AssistantRuntimeProvider>
  )
}
