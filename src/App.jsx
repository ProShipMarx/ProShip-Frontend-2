import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import AuthPage from './pages/AuthPage.jsx'

export default function App() {
  return (
    <>
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4 items-center">
          <Link to="/" className="font-bold text-xl">ProShip</Link>
          <div className="flex gap-3 text-sm">
            <Link to="/signup" className="bg-blue-600 text-white px-3 py-1 rounded">Sign up</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>
    </>
  )
}
