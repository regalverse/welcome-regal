import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { KPAIPage } from '@/pages/KPAIPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kpai" element={<KPAIPage />} />
        <Route path="*" element={<Navigate to="/kpai" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
