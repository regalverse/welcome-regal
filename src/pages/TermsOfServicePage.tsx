import { type FC, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Section: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="font-display text-2xl text-starlight-white mb-3">{title}</h2>
    {children}
  </div>
)

const linkClass = 'font-semibold text-lunar-wisteria underline hover:text-twilight-orchid'

const TermsOfServicePage: FC = () => {
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

        <h1 className="font-display text-4xl leading-tight text-starlight-white mb-2">Terms of Service</h1>
        <p className="text-sm text-cosmic-slate mb-10">
          Last Updated: November 7, 2026 — Service Provider: Regalverse Private
          Limited ("AstroRegal", "we", "us", "our")
        </p>

        <section className="space-y-8 text-pearl-mist leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>
              These Terms of Service ("Terms") form a legally binding agreement
              between you and Regalverse Private Limited, governing your use of
              the AstroRegal mobile application, website, and the Orra AI
              astrologer (together, the "Services"). By creating an account or
              using the Services, you confirm that you have read, understood,
              and agree to these Terms and to our{' '}
              <Link to="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the Services.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must be at least 18 years old and capable of entering into a
                binding contract under the Indian Contract Act, 1872.
              </li>
              <li>
                You must not have been previously suspended or removed from the
                Services.
              </li>
              <li>
                If you use the Services on behalf of another person (for example,
                to generate their birth chart or a compatibility match), you
                confirm that you have their permission to share their details
                with us.
              </li>
            </ul>
          </Section>

          <Section title="3. Your Account">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Registration:</strong> Accounts are created and verified
                using your mobile number (OTP). You agree to provide accurate
                information, including your birth details, and to keep it up to
                date.
              </li>
              <li>
                <strong>Security:</strong> You are responsible for all activity
                under your account and for keeping your device and OTPs
                confidential. Notify us immediately at{' '}
                <a href="mailto:admin@astroregal.com" className={linkClass}>
                  admin@astroregal.com
                </a>{' '}
                if you suspect unauthorized access.
              </li>
              <li>
                <strong>One Person, One Account:</strong> Accounts are personal
                and may not be sold, transferred, or shared.
              </li>
            </ul>
          </Section>

          <Section title="4. Nature of the Services">
            <p className="mb-4">
              AstroRegal provides Vedic astrology content, including birth
              charts, daily readings, transit insights, compatibility matching,
              and conversations with Orra, our AI astrologer. Planetary positions
              are computed from astronomical ephemeris data and interpreted using
              classical Jyotish frameworks and AI language models.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Entertainment & Guidance Only:</strong> All readings,
                predictions, and responses are for entertainment, educational,
                and spiritual guidance purposes only. Astrology is not a science,
                and we make no guarantee about the accuracy of any prediction or
                outcome.
              </li>
              <li>
                <strong>Not Professional Advice:</strong> The Services are not a
                substitute for medical, psychological, legal, financial, or other
                professional advice. Always consult a qualified professional
                before making decisions in these areas.
              </li>
              <li>
                <strong>AI-Generated Content:</strong> Orra's responses are
                generated by artificial intelligence. They may occasionally be
                inaccurate, incomplete, or inappropriate, and do not represent
                the views of any human astrologer or of AstroRegal.
              </li>
              <li>
                <strong>Your Decisions Are Yours:</strong> You are solely
                responsible for any decision or action you take based on the
                Services.
              </li>
            </ul>
          </Section>

          <Section title="5. Health, Safety & Wellbeing">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No Cures or Remedies:</strong> In line with the Drugs and
                Magic Remedies (Objectionable Advertisements) Act, 1954,
                AstroRegal does not sell, endorse, or promote any "magic
                remedies," talismans, gemstones, or charms, and does not claim to
                diagnose, treat, or cure any disease or condition, including
                those listed in Schedule J of the Drugs and Cosmetics Rules, 1945.
              </li>
              <li>
                <strong>Emotional Wellbeing:</strong> If you are experiencing
                distress, thoughts of self-harm, or a mental health emergency,
                please contact a qualified professional or your local emergency
                services immediately. Orra is not a crisis service.
              </li>
            </ul>
          </Section>

          <Section title="6. Credits, Subscriptions & Payments">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Free Credits:</strong> New accounts may receive free Orra
                credits. Promotional credits have no cash value, may expire, and
                may be modified or withdrawn at our discretion.
              </li>
              <li>
                <strong>Paid Features:</strong> Certain features require the
                purchase of credits or a Premium subscription. Prices are shown
                in the app before purchase and are inclusive of applicable taxes
                unless stated otherwise.
              </li>
              <li>
                <strong>Payment Processing:</strong> Payments are processed by
                Google Play Billing or our authorised payment partners (such as
                Razorpay). Your payment is also subject to their terms. We do not
                store your raw card or bank details.
              </li>
              <li>
                <strong>Auto-Renewal:</strong> Subscriptions renew automatically
                at the end of each billing period unless cancelled at least 24
                hours before renewal through your Google Play account settings.
              </li>
              <li>
                <strong>Refunds:</strong> Purchased credits and subscription
                periods that have already begun are generally non-refundable,
                except where required by applicable law or by the refund policy
                of the platform you purchased through. If you believe you were
                charged in error, contact us within 7 days and we will review
                your request in good faith.
              </li>
              <li>
                <strong>Price Changes:</strong> We may change prices for future
                purchases. Changes to an active subscription will be notified in
                advance and take effect from the next billing period.
              </li>
            </ul>
          </Section>

          <Section title="7. Acceptable Use">
            <p className="mb-2">When using the Services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Services for any unlawful, harassing, defamatory, obscene,
                or harmful purpose, or to harm minors in any way.
              </li>
              <li>
                Submit another person's personal data without their consent, or
                impersonate any person or entity.
              </li>
              <li>
                Attempt to manipulate Orra into producing harmful, illegal, or
                abusive content, or to bypass its safety measures.
              </li>
              <li>
                Reverse engineer, decompile, scrape, or copy any part of the
                Services, or use automated means to access them.
              </li>
              <li>
                Resell, redistribute, or commercially exploit readings or
                AI-generated content without our written permission.
              </li>
              <li>
                Interfere with the security or proper functioning of the
                Services, or introduce viruses or malicious code.
              </li>
            </ul>
          </Section>

          <Section title="8. Intellectual Property">
            <p className="mb-4">
              The Services, including the AstroRegal and Orra names, logos,
              mascot, designs, software, the Regal Engine, and all original
              content, are owned by or licensed to Regalverse Private Limited and
              protected by Indian and international intellectual property laws.
            </p>
            <p>
              We grant you a limited, personal, non-exclusive, non-transferable,
              revocable licence to use the Services for your own non-commercial
              purposes. You retain ownership of the information you submit, and
              grant us a licence to use it solely to provide and improve the
              Services as described in our Privacy Policy.
            </p>
          </Section>

          <Section title="9. Suspension & Termination">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>By You:</strong> You may stop using the Services and
                delete your account at any time from Edit Profile &gt; Delete
                Account, or by emailing us. See our{' '}
                <Link to="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>{' '}
                for details on data erasure.
              </li>
              <li>
                <strong>By Us:</strong> We may suspend or terminate your access,
                with or without notice, if you breach these Terms, misuse the
                Services, or if required by law.
              </li>
              <li>
                <strong>Effect:</strong> On termination, your right to use the
                Services ends immediately. Unused credits are forfeited except
                where required by law. Sections that by their nature should
                survive termination (including disclaimers, limitation of
                liability, and governing law) will continue to apply.
              </li>
            </ul>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p>
              The Services are provided on an "as is" and "as available" basis.
              To the maximum extent permitted by law, we disclaim all warranties,
              express or implied, including warranties of accuracy,
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not guarantee that the Services will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Regalverse Private Limited,
              its directors, employees, and partners will not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              or for any loss of profits, data, or goodwill, arising from your use
              of or reliance on the Services. Our total liability for any claim
              relating to the Services will not exceed the amount you paid us in
              the three (3) months preceding the claim. Nothing in these Terms
              limits any rights you have as a consumer that cannot be excluded
              under the Consumer Protection Act, 2019.
            </p>
          </Section>

          <Section title="12. Indemnity">
            <p>
              You agree to indemnify and hold harmless Regalverse Private Limited
              and its affiliates from any claims, losses, or expenses (including
              reasonable legal fees) arising from your breach of these Terms,
              your misuse of the Services, or your violation of any law or the
              rights of a third party.
            </p>
          </Section>

          <Section title="13. Third-Party Services">
            <p>
              The Services may rely on or link to third-party services, such as
              Google Play, payment gateways, and mapping providers. We are not
              responsible for the content, policies, or practices of these third
              parties, and your use of them is governed by their own terms.
            </p>
          </Section>

          <Section title="14. Changes to the Services & Terms">
            <p>
              We may update, modify, or discontinue any part of the Services at
              any time. We may also revise these Terms from time to time. When we
              make material changes, we will update the "Last Updated" date above
              and notify you through the app or by other reasonable means. Your
              continued use of the Services after the changes take effect means
              you accept the revised Terms.
            </p>
          </Section>

          <Section title="15. Governing Law & Dispute Resolution">
            <p>
              These Terms are governed by the laws of India. We encourage you to
              contact us first so we can try to resolve any concern amicably.
              Subject to that, the courts at Gurugram, Haryana will have
              exclusive jurisdiction over any dispute arising out of or relating
              to these Terms or the Services, without prejudice to any rights
              you may have under applicable consumer protection law.
            </p>
          </Section>

          <Section title="16. General">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Entire Agreement:</strong> These Terms and our Privacy
                Policy are the entire agreement between you and us regarding the
                Services.
              </li>
              <li>
                <strong>Severability:</strong> If any provision is found
                unenforceable, the remaining provisions will remain in full
                effect.
              </li>
              <li>
                <strong>No Waiver:</strong> Our failure to enforce any right is
                not a waiver of that right.
              </li>
              <li>
                <strong>Assignment:</strong> You may not transfer your rights
                under these Terms. We may assign them in connection with a
                merger, acquisition, or sale of assets.
              </li>
            </ul>
          </Section>

          <Section title="17. Grievance Redressal & Contact">
            <p className="mb-2">
              In accordance with the Information Technology Act, 2000 and the
              rules made under it, questions, complaints, or reports of
              objectionable content may be addressed to:
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

export default TermsOfServicePage
