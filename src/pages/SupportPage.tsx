import { type FC, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail } from 'lucide-react'
import { PLAY_STORE_URL } from '@/content/site'

const SUPPORT_EMAIL = 'admin@astroregal.com'

const Section: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="font-display text-2xl text-starlight-white mb-3">{title}</h2>
    {children}
  </div>
)

const linkClass = 'font-semibold text-lunar-wisteria underline hover:text-twilight-orchid'

const EmailLink: FC<{ subject?: string }> = ({ subject }) => (
  <a
    href={`mailto:${SUPPORT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`}
    className={linkClass}
  >
    {SUPPORT_EMAIL}
  </a>
)

const SupportPage: FC = () => {
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

        <h1 className="font-display text-4xl leading-tight text-starlight-white mb-2">Support</h1>
        <p className="text-lg text-cosmic-slate mb-10">
          Need a hand with AstroRegal or Orra? Find quick answers below, or
          write to us and a real person will get back to you.
        </p>

        <div className="bg-midnight-space border-[1.5px] border-twilight-line rounded-card p-6 mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl text-starlight-white mb-1">Contact support</p>
            <p className="text-sm text-cosmic-slate">
              We reply within 24 hours, usually much sooner.
            </p>
          </div>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('AstroRegal support')}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-celestial-violet px-5 py-2.5 text-sm font-semibold text-starlight-white transition-colors hover:bg-celestial-violet/15"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {SUPPORT_EMAIL}
          </a>
        </div>

        <section className="space-y-8 text-pearl-mist leading-relaxed">
          <Section title="Getting Started">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Download:</strong> AstroRegal is available for Android
                on the{' '}
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Google Play Store
                </a>
                .
              </li>
              <li>
                <strong>Sign up:</strong> Create your account with your mobile
                number and verify it with the one-time password (OTP) we send
                you.
              </li>
              <li>
                <strong>Add your birth details:</strong> Enter your date, time
                and place of birth. Your birth time sets your Rising sign and
                houses, so the more accurate it is, the more precise your
                readings will be. If you don't know it, you can still use the
                app and Orra will tell you which insights depend on it.
              </li>
              <li>
                <strong>Free credits:</strong> New accounts receive free Orra
                credits so you can start chatting right away.
              </li>
            </ul>
          </Section>

          <Section title="Login & OTP Issues">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Check that you entered your mobile number correctly, including
                the right country code.
              </li>
              <li>
                OTPs can take up to a minute to arrive. Make sure you have
                network signal and that SMS from unknown senders aren't being
                blocked or filtered as spam.
              </li>
              <li>
                Wait for the resend timer to finish before requesting a new
                code. Only the most recent OTP will work.
              </li>
              <li>
                Still stuck? Email us at <EmailLink subject="Login / OTP issue" />{' '}
                with your registered mobile number and we'll look into it.
              </li>
            </ul>
          </Section>

          <Section title="Birth Details & Readings">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Updating your details:</strong> You can update your
                birth details from Edit Profile in the app. Your chart and
                readings are recalculated from the new details.
              </li>
              <li>
                <strong>Reading doesn't look right?</strong> First double-check
                your birth time (including AM/PM) and birthplace. A difference
                of even a few minutes can change your Rising sign or house
                placements, especially near sign boundaries.
              </li>
              <li>
                <strong>Different from another app?</strong> AstroRegal uses
                the sidereal (Vedic) zodiac with live Ayanamsa correction and
                NASA JPL ephemeris data. Apps that use the tropical zodiac will
                often show your signs about one sign earlier.
              </li>
            </ul>
          </Section>

          <Section title="Chatting with Orra">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                If Orra isn't responding, check your internet connection, then
                close and reopen the app.
              </li>
              <li>
                Make sure you have credits available. Your balance is shown in
                the app.
              </li>
              <li>
                Keep the app updated to the latest version from Google Play for
                the best experience and newest fixes.
              </li>
              <li>
                Orra's answers are generated by AI and can occasionally be
                wrong. If you see a response that seems inaccurate,
                inappropriate or harmful, please report it to us.
              </li>
            </ul>
          </Section>

          <Section title="Credits, Subscriptions & Refunds">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Credits not added after payment?</strong> Wait a few
                minutes and restart the app. If they still don't appear, email
                us with your registered mobile number, the purchase date and
                your Google Play order ID (it starts with "GPA.") or payment
                reference.
              </li>
              <li>
                <strong>Cancel a subscription:</strong> Subscriptions purchased
                through Google Play are managed there. Open the Play Store, tap
                your profile icon, go to Payments &amp; subscriptions &gt;
                Subscriptions, select AstroRegal and tap Cancel. Cancel at
                least 24 hours before renewal to avoid the next charge.
              </li>
              <li>
                <strong>Refunds:</strong> If you believe you were charged in
                error, contact us within 7 days. You can also request a refund
                for Google Play purchases directly through Google Play. See
                section 6 of our{' '}
                <Link to="/terms" className={linkClass}>
                  Terms of Service
                </Link>{' '}
                for full details.
              </li>
            </ul>
          </Section>

          <Section title="Delete Your Account">
            <p className="mb-2">You can delete your account directly from the app:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Open Edit Profile and scroll down.</li>
              <li>Tap Delete Account and confirm.</li>
            </ol>
            <p>
              Can't access the app? Email us at{' '}
              <EmailLink subject="Account deletion request" /> from your
              registered details (such as your mobile number) and our team will
              delete your account for you. Some records, such as payment
              records, may be retained where the law requires it. See our{' '}
              <Link to="/privacy" className={linkClass}>
                Privacy Policy
              </Link>{' '}
              for details.
            </p>
          </Section>

          <Section title="Privacy & Your Data">
            <p>
              You can ask us to access, correct or erase your personal data, or
              withdraw consent, at any time in line with India's Digital
              Personal Data Protection Act, 2023. Write to{' '}
              <EmailLink subject="Data request" /> and we'll respond promptly.
              Read the full{' '}
              <Link to="/privacy" className={linkClass}>
                Privacy Policy
              </Link>{' '}
              to learn how we handle your information.
            </p>
          </Section>

          <Section title="Report a Problem">
            <p className="mb-2">
              To help us fix things quickly, please include the following when
              you email <EmailLink subject="Bug report" />:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your registered mobile number</li>
              <li>Your phone model and Android version</li>
              <li>The AstroRegal app version (from the Play Store listing)</li>
              <li>What happened, what you expected, and when it happened</li>
              <li>Screenshots or a screen recording, if you can</li>
            </ul>
          </Section>

          <Section title="Your Wellbeing">
            <p>
              Orra is here for reflection and perspective, but it is not a
              crisis service and cannot replace a doctor, therapist, lawyer or
              financial adviser. If you are in distress or having thoughts of
              self-harm, please reach out for help now: in India you can call
              the Tele-MANAS mental health helpline at <strong>14416</strong>{' '}
              (24/7, free), or dial <strong>112</strong> in an emergency.
            </p>
          </Section>

          <Section title="Grievance Officer">
            <p className="mb-2">
              If your issue hasn't been resolved, or you want to report
              objectionable content, you can contact our Grievance Officer under
              the Information Technology Act, 2000:
            </p>
            <div className="bg-midnight-space border-[1.5px] border-twilight-line rounded-card p-4 text-sm space-y-1">
              <p>
                <strong>Designation:</strong> Grievance Officer
              </p>
              <p>
                <strong>Email:</strong> {SUPPORT_EMAIL}
              </p>
              <p>
                <strong>Address:</strong> Regalverse Private Limited, Gurgaon,
                India
              </p>
            </div>
            <p className="mt-4">
              We will acknowledge complaints within 24 hours and aim to resolve
              them within 15 days of receipt.
            </p>
          </Section>
        </section>
      </div>
    </div>
  )
}

export default SupportPage
