import { type FC } from 'react'
import {
  Navbar,
  Hero,
  QuestionMarquee,
  OrraDemo,
  DailyCompanion,
  Difference,
  AppGlimpse,
  Trust,
  Faq,
  Download,
  Footer,
  Starfield,
} from '@/components/landing'

export const LandingPage: FC = () => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-hidden">
      <Starfield />
      <div className="grain-texture" />

      {/* Nebula + gold glows (Figma: nebula-glow-top / gold-glow-mid) */}
      <div className="pointer-events-none absolute -left-60 -top-60 -z-10 h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(93_56_222/0.22),transparent)]" />
      <div className="pointer-events-none absolute -right-40 top-[1400px] -z-10 h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgb(212_168_67/0.06),transparent)]" />
      <div className="pointer-events-none absolute -left-40 top-[3200px] -z-10 h-[800px] w-[800px] rounded-full bg-[radial-gradient(closest-side,rgb(124_92_252/0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <QuestionMarquee />
        <OrraDemo />
        <DailyCompanion />
        <Difference />
        <AppGlimpse />
        <Trust />
        <Faq />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
