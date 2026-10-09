import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicyPage: FC = () => {
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

        <h1 className="font-display text-4xl leading-tight text-starlight-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-cosmic-slate mb-10">
          Last Updated: February 16, 2026 — Data Fiduciary: Regalverse Private
          Limited ("AstroRegal")
        </p>

        <section className="space-y-8 text-pearl-mist leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to AstroRegal. We recognize that your astrological
              data—the precise map of the heavens at the moment of your birth—is
              deeply personal. This Privacy Policy is crafted in strict
              compliance with the Digital Personal Data Protection Act, 2023
              (DPDP Act) to ensure that your "Digital Personal Data" is processed
              with transparency, security, and accountability.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              2. Notice of Collection
            </h2>
            <p className="mb-4">
              By using AstroRegal, you consent to the processing of the specific
              categories of data listed below. We believe in Data
              Minimization—we only ask for what the stars need.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-[1.5px] border-twilight-line">
                <thead>
                  <tr className="bg-midnight-space">
                    <th className="text-left p-3 border-b border-twilight-line font-semibold text-starlight-white">
                      Data
                    </th>
                    <th className="text-left p-3 border-b border-twilight-line font-semibold text-starlight-white">
                      Purpose
                    </th>
                    <th className="text-left p-3 border-b border-twilight-line font-semibold text-starlight-white">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-nebula-edge">
                      Birth Coordinates (Date, Time, City)
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Calculate Natal Chart, Ascendant (Lagna), and Planetary
                      Degrees
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Mandatory
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-nebula-edge">
                      Current Location (GPS)
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Calculate "Local Mean Time" for Transit Charts and
                      Astro-Weather
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Mandatory
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-nebula-edge">
                      Mobile Number
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Account authentication (OTP), password recovery, security
                      notifications
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Mandatory
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-nebula-edge">
                      Contact List
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Enable "Cosmic Compatibility" matching with friends
                    </td>
                    <td className="p-3 border-b border-nebula-edge">
                      Optional
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Payment Information</td>
                    <td className="p-3">
                      Processed by gateway partners (e.g., Razorpay) for
                      subscriptions. We do not store raw card details.
                    </td>
                    <td className="p-3">Mandatory for Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              3. Consent Architecture
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Voluntary Consent:</strong> Your consent is the legal
                basis for our processing. You have the right to deny consent for
                "Optional" data without losing access to core features.
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> You may withdraw at any
                time via Settings &gt; Privacy &gt; Withdraw Consent.
              </li>
              <li>
                <strong>Effect of Withdrawal:</strong> If you withdraw consent
                for "Birth Coordinates," your account will be deactivated.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              4. Data Retention & Erasure
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Active Retention:</strong> We retain your data only as
                long as your account remains active.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Upon request, we permanently
                erase your personal data from active servers.
              </li>
              <li>
                <strong>Legal Hold:</strong> Financial records retained 7 years
                (GST Act). Cyber security logs retained 180 days (CERT-In).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              5. Processing of Children's Data
            </h2>
            <p>
              AstroRegal is designed strictly for users aged 18 and above. We do
              not knowingly collect data from children.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              6. Your Rights (The Data Principal)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right to Access:</strong> Request a summary of personal
                data we hold about you.
              </li>
              <li>
                <strong>Right to Correction:</strong> Update your birth
                time/location if you discover an error.
              </li>
              <li>
                <strong>Right to Nominate:</strong> Nominate an individual to
                exercise your rights in the event of death or incapacity via
                Account Settings &gt; Legacy Nomination.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              7. Important Disclaimers
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No "Magic Remedies" (DMRA Compliance):</strong>{' '}
                AstroRegal does not sell or endorse any "magic remedies,"
                talismans, or charms.
              </li>
              <li>
                <strong>Schedule J Compliance:</strong> We disclaim any ability
                to treat or cure any condition listed in Schedule J of the Drugs
                and Cosmetics Rules, 1945.
              </li>
              <li>
                <strong>Entertainment Only:</strong> Services are for
                entertainment, educational, and spiritual guidance purposes only.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              8. Grievance Redressal
            </h2>
            <p className="mb-2">
              For privacy concerns, complaints, or to exercise your rights:
            </p>
            <div className="bg-midnight-space border-[1.5px] border-twilight-line rounded-card p-4 text-sm space-y-1">
              <p>
                <strong>Designation:</strong> Grievance Officer
              </p>
              <p>
                <strong>Email:</strong> admin@astroregal.com
              </p>
              <p>
                <strong>Address:</strong> Regalverse Private Limited, Gurgaon,
                India
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-starlight-white mb-3">
              9. How to Delete Your Account
            </h2>
            <p className="mb-2">
              You can delete your AstroRegal account directly from the app:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>
                <strong>Step 1:</strong> Navigate to Edit Profile and scroll
                down.
              </li>
              <li>
                <strong>Step 2:</strong> Find the Delete Account button and
                proceed with it.
              </li>
            </ol>
            <p>
              Alternatively, you can share your account details (such as your
              registered mobile number) with us at{' '}
              <a
                href="mailto:admin@astroregal.com"
                className="font-semibold text-lunar-wisteria underline hover:text-twilight-orchid"
              >
                admin@astroregal.com
              </a>{' '}
              and our team will delete your account for you.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
