import { type FC } from 'react'
import {
  ThreadPrimitive,
  ComposerPrimitive,
  MessagePrimitive,
  useThreadRuntime,
  AssistantIf,
} from '@assistant-ui/react'
import { SendHorizonal, Square } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MarkdownText } from './markdown-text'
import { WelcomeScreen } from './welcome-screen'
import { ToolFallback } from './tool-fallback'

export const Thread: FC = () => {
  const runtime = useThreadRuntime()

  const handleSuggestionClick = (suggestion: string) => {
    runtime.append({
      role: 'user',
      content: [{ type: 'text', text: suggestion }],
    })
  }

  return (
    <ThreadPrimitive.Root className="aui-thread-root">
      <ThreadPrimitive.Viewport className="aui-thread-viewport scrollbar-thin">
        <ThreadPrimitive.Empty>
          <WelcomeScreen onSuggestionClick={handleSuggestionClick} />
        </ThreadPrimitive.Empty>

        <ThreadPrimitive.Messages
          components={{
            UserMessage,
            AssistantMessage,
          }}
        />
      </ThreadPrimitive.Viewport>

      <Composer />
    </ThreadPrimitive.Root>
  )
}

const UserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="aui-message-root aui-user-message">
      <div className="aui-user-message-content">
        <MessagePrimitive.Content
          components={{
            Text: ({ text }) => <span>{text}</span>,
          }}
        />
      </div>
    </MessagePrimitive.Root>
  )
}

const AssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="aui-message-root aui-assistant-message">
      <div className="aui-assistant-message-content">
        <MessagePrimitive.Parts
          components={{
            Text: ({ text }) => <MarkdownText content={text} />,
            tools: {
              Fallback: ToolFallback,
            },
          }}
        />
      </div>
      {/* Typing indicator when running */}
      <AssistantIf condition={({ message }) => message.isLast}>
        <AssistantIf condition={({ thread }) => thread.isRunning}>
          <div className="aui-typing-indicator flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground">
            <span className="animate-pulse">Thinking</span>
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
          </div>
        </AssistantIf>
      </AssistantIf>
    </MessagePrimitive.Root>
  )
}

const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className="aui-composer-root">
      <ComposerPrimitive.Input
        placeholder="Ask about your chart..."
        className="aui-composer-input"
        autoFocus
      />
      <AssistantIf condition={({ thread }) => !thread.isRunning}>
        <ComposerPrimitive.Send className="aui-composer-send">
          <SendHorizonal className="w-5 h-5" />
        </ComposerPrimitive.Send>
      </AssistantIf>
      <AssistantIf condition={({ thread }) => thread.isRunning}>
        <ComposerPrimitive.Cancel
          className={cn(
            'aui-composer-send',
            'bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600'
          )}
        >
          <Square className="w-4 h-4" />
        </ComposerPrimitive.Cancel>
      </AssistantIf>
    </ComposerPrimitive.Root>
  )
}
