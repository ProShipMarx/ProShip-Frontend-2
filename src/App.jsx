import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import PostLoadPage from './pages/PostLoadPage.jsx'
import PostTruckPage from './pages/PostTruckPage.jsx'
import LoadsPage from './pages/LoadsPage.jsx'
import TrucksPage from './pages/TrucksPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4 items-center">
          <Link to="/" className="font-bold text-xl">ProShip</Link>
          <div className="flex gap-3 text-sm">
            <Link to="/loads">Loads</Link>
            <Link to="/trucks">Trucks</Link>
            <Link to="/post-load">Post Load</Link>
            <Link to="/post-truck">Post Truck</Link>
            <Link to="/signup" className="ml-auto bg-blue-600 text-white px-3 py-1 rounded">Sign up</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/post-load" element={<PostLoadPage />} />
        <Route path="/post-truck" element={<PostTruckPage />} />
        <Route path="/loads" element={<LoadsPage />} />
        <Route path="/trucks" element={<TrucksPage />} />
      </Routes>
    </div>
  )
}
