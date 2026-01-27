import { type FC, useState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

// TODO: Replace this with your Google Apps Script Web App URL after deployment
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || ''

type SubmissionState = 'idle' | 'loading' | 'success' | 'error'

export const EmailSignup: FC = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<SubmissionState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address')
      setState('error')
      return
    }

    setState('loading')
    setErrorMessage('')

    try {
      // Fetch user's IP address
      let userIp = 'Unknown'
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        userIp = ipData.ip
      } catch (e) {
        console.warn('Could not fetch IP, proceeding as Unknown', e)
      }

      // If no URL is configured, simulate success for testing
      if (!GOOGLE_SCRIPT_URL) {
        console.log('Email submitted (demo mode):', email, 'IP:', userIp)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setState('success')
        setEmail('')
        return
      }

      // Use URLSearchParams for a 'simple request' that works better with no-cors
      const formData = new URLSearchParams()
      formData.append('email', email)
      formData.append('ip', userIp) // Send the IP we just found

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })

      // With no-cors, we assume success if no network error occurred
      // Use void to explicitly ignore the opaque response
      void response
      
      setState('success')
      setEmail('')
      
      // Keep success message visible for 10 seconds
      setTimeout(() => {
        setState('idle')
      }, 10000)
    } catch (error) {
      console.error('Submission error:', error)
      setErrorMessage('Something went wrong. Please try again.')
      setState('error')
      
      // Reset error after 5 seconds
      setTimeout(() => {
        if (state === 'error') setState('idle')
      }, 5000)
    }
  }

  const isDisabled = state === 'loading' || state === 'success'

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className={`flex flex-col sm:flex-row gap-0 border rounded-lg overflow-hidden transition-all ${
          state === 'success' 
            ? 'border-green-500/60' 
            : state === 'error' 
            ? 'border-red-500/60' 
            : 'border-primary/40 focus-within:border-primary'
        }`}>
          <input 
            className="flex-1 bg-transparent border-none px-5 py-4 text-sm focus:ring-0 placeholder:text-deep-charcoal/30 text-deep-charcoal dark:text-white disabled:opacity-50 disabled:cursor-not-allowed" 
            placeholder="Enter your professional email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
            required
          />
          <button 
            type="submit"
            disabled={isDisabled}
            className="bg-primary text-deep-charcoal font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {state === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : state === 'success' ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Sent!
              </>
            ) : (
              'Request Invite'
            )}
          </button>
        </div>
      </form>
      
      {/* Status Messages */}
      {state === 'success' && (
        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          <p>Thanks! You're on the list. We'll be in touch soon.</p>
        </div>
      )}
      
      {state === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          <p>{errorMessage}</p>
        </div>
      )}
      
      {state === 'idle' && (
        <p className="mt-4 text-[10px] uppercase tracking-widest text-deep-charcoal/40 dark:text-gray-500">
          Exclusively for curated professionals
        </p>
      )}
    </div>
  )
}
