import { Navigate, Route, Routes } from 'react-router-dom'
import './app.css'
import { HomePage } from './pages/HomePage'
import { JobCataloguePage } from './pages/JobCataloguePage'
import { JobDetailPage } from './pages/JobDetailPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobCataloguePage />} />
      <Route path="/jobs/:jobId" element={<JobDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return <AppRoutes />
}

export default App
