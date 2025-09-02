import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import CollegeFinder from "./pages/CollegeFinder";
import CareerExplorer from "./pages/CareerExplorer";
import Timeline from "./pages/Timeline";
import Resources from "./pages/Resources";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/colleges" element={<CollegeFinder />} />
        <Route path="/career" element={<CareerExplorer />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
