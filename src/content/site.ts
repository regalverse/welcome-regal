// Single source of truth for landing-page copy and links.

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.astroregal.app'

export type SocialId = 'instagram' | 'facebook'

export const SOCIAL_LINKS: { id: SocialId; label: string; href: string }[] = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/astro_regal/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594981871900' },
]

export const NAV_LINKS = [
  { label: 'Meet Orra', href: '#orra' },
  { label: 'Why AstroRegal', href: '#difference' },
  { label: 'The App', href: '#app' },
  { label: 'FAQ', href: '#faq' },
]

// Quick facts shown under the hero download button.
export const HERO_FACTS = ['Free to download', 'Free Orra credits on signup', 'Android']

export const MARQUEE_QUESTIONS = [
  'How will my day go?',
  'Should I take the job offer?',
  'Why do I keep attracting the same type?',
  'Is this a good week to sign the lease?',
  'What does my Moon sign say about me?',
  'Lucky colour for today?',
  'When does my Saturn phase ease up?',
  'Are we actually compatible?',
  'Best time to ask for a raise?',
  'Why am I so restless lately?',
  'Should I text them back?',
  'What is my Rising sign really doing?',
  'Help me reflect on today',
  'Which career suits my chart?',
  'Is Mercury retrograde affecting me?',
  'How do I handle this conflict at home?',
]

export type OrraTopic = {
  id: string
  label: string
  question: string
  answer: string
  chart: string
}

export const ORRA_TOPICS: OrraTopic[] = [
  {
    id: 'daily',
    label: 'Daily life',
    question: 'Big presentation tomorrow and I’m honestly nervous. Any advice?',
    answer:
      'The Moon moves into Gemini tonight, which is good for quick thinking and clear speech, and Mercury is sitting well in your 10th house of career. Your energy peaks late morning, so ask for a slot before lunch if you can. Rehearse your opening line twice tonight, then sleep. Saturn on your Moon makes you over-prepare when you’re anxious. You’re more ready than you feel. 🌙',
    chart: 'Moon → Gemini · Mercury in 10th',
  },
  {
    id: 'love',
    label: 'Love',
    question: 'Why do I keep attracting emotionally unavailable people?',
    answer:
      'Your Venus is in Scorpio in the 8th house. You’re drawn to intensity and mystery, and at first that can look like “unavailable”. Ketu in your 7th adds a pull toward people who keep their distance. It isn’t a curse, it’s a pattern you can learn to spot. Over the next six weeks Jupiter favours slower, steadier connections. Want me to show you which charts balance your Venus?',
    chart: 'Venus in Scorpio · Ketu in 7th',
  },
  {
    id: 'career',
    label: 'Career',
    question: 'Should I switch jobs this year or wait?',
    answer:
      'You’re in a Jupiter Mahadasha with a Venus Antardasha, a strong phase for visible growth. But Saturn is moving through your 10th house, and Saturn says build, don’t bolt. My read: start the conversations now and make the actual move after Mars leaves your 6th house of daily grind. Want me to map out the best weeks?',
    chart: 'Jupiter–Venus dasha · Saturn in 10th',
  },
  {
    id: 'mood',
    label: 'Mood',
    question: 'Woke up feeling low for no reason. Is it the stars or just me?',
    answer:
      'Maybe a bit of both. The Moon is passing over your natal Saturn today. That transit often brings heaviness, tiredness and a wish to be alone, and it lasts about two days. Be gentle with yourself: an early night, a walk in daylight, one small task done. And if the low feeling sticks around for weeks, please talk to someone you trust or a professional. I’m here to chat whenever you need.',
    chart: 'Moon conjunct natal Saturn',
  },
  {
    id: 'money',
    label: 'Money',
    question: 'Is this a good week to make a big purchase?',
    answer:
      'Mercury turns retrograde later this week, which traditionally favours reviewing over committing: contracts, gadgets, vehicles. If you can, lock it in before then, or wait until Mercury turns direct. The lord of your 2nd house is strong this month, so money isn’t the problem. The fine print is what I’d double-check.',
    chart: 'Mercury stationing retrograde',
  },
  {
    id: 'compat',
    label: 'Compatibility',
    question: 'Are an Aries and a Libra actually compatible?',
    answer:
      'Sun signs are only the opening line. Aries and Libra are the classic opposite-sign pull: magnetic, sometimes combustible. The real story is in your Moons and how your Venus and Mars connect. Share both sets of birth details and I’ll run a full Ashtakoot match, scored out of 36 from real planetary positions instead of generic sign tables.',
    chart: 'Ashtakoot · 36-point match',
  },
]

export const DAILY_MOMENTS = [
  {
    time: '7:30 AM',
    title: 'Morning check-in',
    prompt: 'How’s my energy today?',
    body: 'A two-line read on your day, built from where the Moon actually is right now relative to your chart.',
  },
  {
    time: '11:00 AM',
    title: 'Before the big moment',
    prompt: 'Best time for that tough conversation?',
    body: 'Orra checks today’s transits against your houses and suggests a window, with the reasoning shown.',
  },
  {
    time: '4:00 PM',
    title: 'The mid-day slump',
    prompt: 'Why am I so restless?',
    body: 'Sometimes it’s a transit, sometimes it’s just Tuesday. Orra helps you tell the difference.',
  },
  {
    time: '8:30 PM',
    title: 'Heart stuff',
    prompt: 'Should I text them back?',
    body: 'Talk it through like you would with a friend who happens to know both of your charts.',
  },
  {
    time: '11:00 PM',
    title: 'Wind down',
    prompt: 'Help me reflect on today.',
    body: 'Close the day with a gentle reflection and a heads-up on what tomorrow’s sky looks like.',
  },
]

export const COMPARISON = [
  {
    topic: 'Planet positions',
    them: 'Pre-printed tables and generic almanacs',
    us: 'Computed live from NASA JPL ephemeris data',
  },
  {
    topic: 'Zodiac',
    them: 'Tropical zodiac, now about 24° out of step with the real sky',
    us: 'Sidereal, with real-time Ayanamsa correction',
  },
  {
    topic: 'Personalisation',
    them: 'Sun-sign horoscopes shared by 1 in 12 people',
    us: 'Your exact birth date, time and place',
  },
  {
    topic: 'Edge cases',
    them: 'Treats every sign as a solid box',
    us: 'Flags Sandhi and Gandanta degrees between signs',
  },
  {
    topic: 'How you ask',
    them: 'Read a static paragraph and hope it fits',
    us: 'Ask Orra anything, follow up, go deeper',
  },
  {
    topic: 'Availability',
    them: 'Book an appointment, wait for a slot',
    us: 'There at 2 AM when you can’t sleep',
  },
]

export const PIPELINE = [
  {
    step: '01',
    title: 'NASA JPL ephemeris',
    body: 'Planetary positions come from NASA’s Jet Propulsion Laboratory, the same ephemeris data used to navigate spacecraft.',
  },
  {
    step: '02',
    title: 'The Regal Engine',
    body: 'Our engine converts the real sky into your Vedic chart, with sidereal correction, house division, dashas and nakshatras.',
  },
  {
    step: '03',
    title: 'Fine-tuned AI',
    body: 'Language models fine-tuned on classical Jyotish frameworks read your chart the way an expert would, at machine scale.',
  },
  {
    step: '04',
    title: 'Orra answers',
    body: 'You get a plain-language answer about your situation, with the planetary reasoning shown and no fluff.',
  },
]

export const APP_SCREENS = [
  { src: '/app/home-top.png', title: 'Your daily sky', caption: 'A personal reading every morning, plus one tap to ask Orra anything.' },
  { src: '/app/birth-chart.png', title: 'Your birth chart', caption: 'A full Vedic chart, computed to the minute from your birth details.' },
  { src: '/app/mars.png', title: 'Planet deep-dives', caption: 'Tap any planet to see where it is, how strong it is and what it means for you.' },
  { src: '/app/reading.png', title: 'Live chart reading', caption: 'Every placement mapped against today’s real sky.' },
  { src: '/app/nasa.png', title: 'NASA data meets astrology', caption: 'Real astronomical data under every prediction.' },
  { src: '/app/splash.png', title: 'Private by design', caption: 'Secure and encrypted from the very first screen.' },
]

export const TRUST_PILLARS = [
  {
    title: 'Sourced from NASA JPL',
    body: 'Planetary positions are calculated from NASA Jet Propulsion Laboratory ephemeris data, not copied from printed tables.',
  },
  {
    title: 'DPDP Act 2023 aligned',
    body: 'Our privacy practices follow India’s Digital Personal Data Protection Act. You can withdraw consent or delete your data at any time.',
    link: { label: 'Read our privacy policy', to: '/privacy' },
  },
  {
    title: 'Encrypted & private',
    body: 'Your birth details and conversations are encrypted. We never sell your data, and we don’t ask for more than the stars need.',
  },
  {
    title: 'Responsible guidance',
    body: 'No fear-based predictions and no paid “remedies”. Orra points you to professionals for medical, legal or financial decisions.',
  },
  {
    title: 'A registered Indian company',
    body: 'AstroRegal is built by Regalverse Private Limited, a team of technologists and traditional astrologers based in Gurgaon.',
    link: { label: 'About us', to: '/about' },
  },
  {
    title: 'Live on Google Play',
    body: 'AstroRegal has passed Google Play’s review and is available to download from the official Play Store.',
    link: { label: 'View on Google Play', href: PLAY_STORE_URL },
  },
]

// Add real certifications or registrations here (e.g. Startup India / DPIIT
// recognition, ISO certification) once you have the certificate number.
// The section only renders when this list is non-empty.
export const CERTIFICATIONS: { name: string; issuer: string; id: string }[] = []

export const FAQS = [
  {
    q: 'What is AstroRegal?',
    a: 'AstroRegal is a Vedic astrology app built around Orra, an AI astrologer you can chat with about anything: your day, your relationships, your career, your mood. Every answer comes from your actual birth chart, calculated from real astronomical data.',
  },
  {
    q: 'Who (or what) is Orra?',
    a: 'Orra is our AI companion. It reads your chart with language models fine-tuned on classical Jyotish, then explains things the way a thoughtful friend would. You can ask follow-ups, ask for the reasoning, or just vent.',
  },
  {
    q: 'How is this different from other astrology apps?',
    a: 'Most apps use tropical sun-sign horoscopes that ignore the roughly 24° shift of the real sky. We compute positions from NASA JPL ephemeris data, apply sidereal correction in real time, and personalise everything to your exact birth time and place.',
  },
  {
    q: 'Is it free?',
    a: 'Yes, to start. Every new account gets free credits to chat with Orra, and your daily reading and birth chart are included.',
  },
  {
    q: 'Where can I download it?',
    a: 'AstroRegal is live on the Google Play Store for Android. Download it, create your account, and your free Orra credits will be waiting.',
  },
  {
    q: 'Do I need my exact birth time?',
    a: 'It helps, because your birth time sets your Rising sign and houses. But it’s optional. Without it, Orra still reads your Sun, Moon and planetary positions and tells you which insights depend on the time.',
  },
  {
    q: 'Is my data safe?',
    a: 'Your data is encrypted and handled in line with India’s DPDP Act 2023. We never sell it, and you can request deletion at any time from the app or by email.',
  },
  {
    q: 'Can Orra replace a doctor, lawyer or financial adviser?',
    a: 'No. Orra is for reflection, perspective and self-discovery. For health, legal or money decisions, please consult a qualified professional. Orra will tell you the same.',
  },
]
