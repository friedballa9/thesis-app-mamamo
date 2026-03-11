import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/intro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}