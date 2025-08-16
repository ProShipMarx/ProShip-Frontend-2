import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to ProShip</h1>
        <p className="text-xl mb-6">
          Post and Find Freight Loads with Ease – Simple, Free, Fast.
        </p>
        {/* Use hash to avoid server 404s */}
        <a
          href="#/signup"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
