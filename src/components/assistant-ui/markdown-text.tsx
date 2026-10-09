import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

interface MarkdownTextProps {
  content: string
  className?: string
}

const components: Partial<Components> = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-lunar-wisteria hover:text-twilight-orchid underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),
  p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children, className }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 rounded text-sm bg-void-overlay text-silver-frost font-mono">
          {children}
        </code>
      )
    }
    return <code className={className}>{children}</code>
  },
  pre: ({ children }) => (
    <pre className="p-4 rounded-lg overflow-x-auto my-3 bg-cosmic-void border border-nebula-edge text-pearl-mist text-sm font-mono">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-celestial-violet pl-4 my-3 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-3 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-3 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="text-foreground">{children}</li>,
  h1: ({ children }) => (
    <h1 className="text-2xl font-semibold mt-6 mb-3 font-display">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-5 mb-2 font-display">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mt-4 mb-2 font-display">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold mt-3 mb-2">{children}</h4>
  ),
  hr: () => <hr className="border-border my-6" />,
  table: ({ children }) => (
    <table className="w-full border-collapse my-3">{children}</table>
  ),
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="border border-border px-3 py-2 text-left bg-nebula-veil font-semibold text-sm">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-3 py-2 text-sm">{children}</td>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full rounded-lg my-3" />
  ),
}

export function MarkdownText({ content, className = '' }: MarkdownTextProps) {
  return (
    <div className={`text-foreground leading-relaxed ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
