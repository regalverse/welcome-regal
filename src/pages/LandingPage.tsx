import { type FC } from 'react'
import { Header, CelestialDiagram, EmailSignup, TrustBadges, Footer } from '@/components/landing'

export const LandingPage: FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Subtle Grain Overlay */}
      <div className="grain-texture" />
      
      <Header />
      
      {/* Main Hero Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 md:px-20 lg:px-40 text-center">
        <div className="max-w-3xl w-full flex flex-col items-center gap-12">
          {/* Headline & Subhead */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight text-deep-charcoal dark:text-white">
              The Future of <span className="italic">Cosmic Guidance</span>.
            </h1>
            <p className="text-sm md:text-base font-light tracking-[0.05em] leading-relaxed text-deep-charcoal/70 dark:text-gray-400 max-w-xl mx-auto">
              Something revolutionary is on the horizon. AstroRegal is redefining astrology for young minds. Launching soon.
            </p>
          </div>
          
          <CelestialDiagram />
          
          <EmailSignup />
          
          <TrustBadges />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
