import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">🎓 Digital Guidance Platform</h1>
      <p className="mb-6">Your one-stop personalized career & education advisor.</p>
      <div className="space-x-4">
        <Link to="/quiz" className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow">
          Take Quiz
        </Link>
        <Link to="/dashboard" className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
