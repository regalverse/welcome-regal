import { type FC } from 'react'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { Thread } from '@/components/assistant-ui'
import { ToolUIRegistry } from '@/components/tools'
import { useKPAIRuntime } from '@/hooks/useKPAIRuntime'

export const KPAIPage: FC = () => {
  const runtime = useKPAIRuntime()

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ToolUIRegistry />
      <div className="h-screen w-screen flex flex-col bg-background">
        {/* Header */}
        <header className="flex items-center px-6 py-4 border-b border-nebula-edge bg-card/50 backdrop-blur-glass">
          <h1 className="text-xl font-display text-starlight-white">
            KP AI
          </h1>
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
