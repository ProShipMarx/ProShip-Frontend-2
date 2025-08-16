// src/pages/LandingPage.jsx
import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to ProShip</h1>
        <p className="text-xl mb-6">
          Post and Find Freight Loads with Ease – Simple, Free, Fast.
        </p>
        {/* Button explicitly points to hash route */}
        <a
          href="#/signup"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Get Started
        </a>
      </div>

      <div className="max-w-3xl mx-auto text-left mt-10">
        <h2 className="text-2xl font-semibold mb-2">Why ProShip?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Free load and truck posting</li>
          <li>No contracts, no fees</li>
          <li>Instant visibility and contact</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">FAQs</h2>
        <p>
          <strong>Q:</strong> Who is ProShip for?
          <br />
          <strong>A:</strong> Carriers, owner-operators, and brokers needing a
          simple load board.
        </p>
        <p className="mt-4">
          <strong>Q:</strong> Is it really free?
          <br />
          <strong>A:</strong> Yes. ProShip is 100% free during beta launch.
        </p>
      </div>
    </div>
  );
}
