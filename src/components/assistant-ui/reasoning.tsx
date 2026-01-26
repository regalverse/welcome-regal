import { useState, type FC, type PropsWithChildren } from 'react'
import { ChevronDown, Brain } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReasoningProps {
  content: string
  isStreaming?: boolean
}

export const Reasoning: FC<ReasoningProps> = ({ content, isStreaming = false }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="aui-reasoning-root">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="aui-reasoning-header w-full"
      >
        <Brain className="w-4 h-4" />
        <span>Thinking</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 ml-auto transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      {isOpen && (
        <div className={cn('aui-reasoning-content', isStreaming && 'aui-reasoning-streaming')}>
          {content}
        </div>
      )}
    </div>
  )
}

export const ReasoningGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div className="space-y-1">{children}</div>
}
