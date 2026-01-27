import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/LandingPage'
import { KPAIPage } from '@/pages/KPAIPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kpai" element={<KPAIPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
