import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-cosmic-slate hover:text-starlight-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="font-display text-4xl leading-tight text-starlight-white mb-2">
          Your Stars. No Filter. No Fluff. Just Facts.
        </h1>
        <p className="text-lg text-cosmic-slate mb-10">
          While other apps guess your vibe based on a map from 2,000 years ago,
          we calculate your reality using the sky as it exists today.
        </p>

        <section className="space-y-6 text-pearl-mist leading-relaxed">
          <p>
            Welcome to <strong>AstroRegal</strong>.
          </p>
          <p>
            We are the digital flagship of{' '}
            <strong>Regalverse Private Limited</strong>, born in a server room
            in Gurgaon. We are a collective of technologists and traditional
            experts who noticed a glitch in the matrix: The modern world is
            obsessed with data, yet we navigate our emotional lives using
            "Tropical" astrology—a system that ignores the actual movement of
            the universe.
          </p>

          <h2 className="font-display text-2xl text-starlight-white pt-4">
            The "Ghost Sky" Problem
          </h2>
          <p>
            Think about it. The Earth wobbles like a spinning top. Over
            thousands of years, the stars have shifted against the sky. If your
            astrology app hasn't adjusted for this shift (called the Ayanamsa),
            it is reading a "Ghost Sky."
          </p>
          <p>
            It tells you you're a Libra, but the constellation behind the Sun
            was actually Virgo. That discrepancy is why you don't fit the box.
            It's why the predictions feel generic. It's why the "vibe" is off.
          </p>

          <h2 className="font-display text-2xl text-starlight-white pt-4">
            The Regal Engine: Fixing the Glitch
          </h2>
          <p>
            We don't trade in "feel-good" aphorisms. We trade in astronomical
            coordinates. The heart of AstroRegal is the{' '}
            <strong>Regal Engine</strong>, a proprietary algorithmic stack that
            fuses NASA's JPL (Jet Propulsion Laboratory) ephemeris data with the
            rigorous mathematical frameworks of Vedic Astrology (Jyotish
            Shastra).
          </p>
          <p>Here is how we are different:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Real-Time Ayanamsa Correction:</strong> We calculate the
              exact longitudinal difference between the Tropical and Sidereal
              zodiacs to the second. We map the sky as it is, not as it was in
              200 AD.
            </li>
            <li>
              <strong>The "Sandhi" Check (Edge Cases):</strong> Most algorithms
              treat Zodiac signs as solid boxes. We know they are spectrums. The
              Regal Engine analyzes the Sandhi (Junction) points—the chaotic
              first and last degrees of a sign. If your Venus is at 29° Scorpio,
              you are in the Gandanta zone—a spiritual knot that traditional
              apps miss entirely.
            </li>
            <li>
              <strong>Situationship & Ghosting Algorithms:</strong> We monitor
              Ketu (the South Node)—the planet of detachment—to predict when
              communication is likely to go dark. We identify when Rahu (the
              North Node) is casting illusions on your 7th House, making you
              obsess over a connection that exists only in your head.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-starlight-white pt-4">
            Privacy as a Feature
          </h2>
          <p>
            We are a <strong>Privacy-First</strong> company. In an era where
            your data is the product, we treat your birth chart as a sacred
            document. We are fully compliant with India's Digital Personal Data
            Protection (DPDP) Act, 2023. We don't sell your future to
            advertisers. We just help you navigate it.
          </p>

          <p className="pt-6 text-sm text-dark-nebula">
            Regalverse Private Limited — Gurgaon, India. Architects of the
            Modern Cosmos.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
