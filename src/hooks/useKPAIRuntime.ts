import { useMemo } from 'react'
import { useChat } from '@ai-sdk/react'
import { useAISDKRuntime } from '@assistant-ui/react-ai-sdk'
import { DefaultChatTransport } from 'ai'
import type { AssistantRuntime } from '@assistant-ui/react'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

function getChatId(): string {
  const key = 'kpai-chat-id'
  let id = localStorage.getItem(key)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(key, id)
  }
  return id
}

export function clearChatId(): void {
  localStorage.removeItem('kpai-chat-id')
}

export function useKPAIRuntime(): AssistantRuntime {
  const chatId = useMemo(() => getChatId(), [])

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${API_BASE_URL}/assistant/chat/stream`,
        credentials: 'include',
      }),
    []
  )

  const chat = useChat({
    id: chatId,
    transport,
  })

  const runtime = useAISDKRuntime(chat)

  return runtime
}
