import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/LandingPage'
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
