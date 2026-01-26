import { type FC } from 'react'
import { Sparkles } from 'lucide-react'

interface WelcomeScreenProps {
  onSuggestionClick?: (suggestion: string) => void
}

const suggestions = [
  'When will I get married?',
  'Career prospects this year',
  'Should I start a business?',
  'Health outlook for 2025',
]

export const WelcomeScreen: FC<WelcomeScreenProps> = ({ onSuggestionClick }) => {
  return (
    <div className="aui-welcome-root">
      <div className="mb-6">
        <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-4" />
      </div>
      <h1 className="aui-welcome-title">
        What cosmic insights do you seek?
      </h1>
      <p className="aui-welcome-subtitle">
        Ask me anything about your birth chart, timing of events, or life questions
      </p>
      <div className="aui-welcome-suggestions">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick?.(suggestion)}
            className="aui-welcome-suggestion"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
