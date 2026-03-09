import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentProfile from "./pages/Studentprofile";
import AssessmentResults from "./pages/AssessmentResults";
import Schedules from "./pages/Schedules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentProfile />} />
        <Route path="/assessment" element={<AssessmentResults />} />
        <Route path="/schedules" element={<Schedules />} />
      </Routes>
    </Router>
  );
}

export default App;