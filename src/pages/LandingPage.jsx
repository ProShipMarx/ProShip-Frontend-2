import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to ProShip</h1>
      <p className="text-lg text-gray-700 mb-8">
        Post and find freight loads & trucks instantly. Simple. Fast. Free.
      </p>
      <a href="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</Link>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-5 bg-white rounded-xl shadow">
          <h3 className="font-semibold mb-2">Post Loads</h3>
          <p className="text-sm text-gray-600">Brokers list freight with origin, destination, equipment & date.</p>
        </div>
        <div className="p-5 bg-white rounded-xl shadow">
          <h3 className="font-semibold mb-2">Find Trucks</h3>
          <p className="text-sm text-gray-600">Carriers post availability & match loads by lane & equipment.</p>
        </div>
        <div className="p-5 bg-white rounded-xl shadow">
          <h3 className="font-semibold mb-2">No Fees</h3>
          <p className="text-sm text-gray-600">Connect directly and make your deal off-platform.</p>
        </div>
      </div>
    </div>
  )
}
