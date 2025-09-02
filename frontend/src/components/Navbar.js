import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="font-bold">Digital Guidance</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/colleges">Colleges</Link>
        <Link to="/career">Career</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </nav>
  );
}
