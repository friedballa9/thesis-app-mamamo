import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/intro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function AppContent() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/"; // hide on login page

  return (
    <div style={{ display: "flex" }}>
      {!hideSidebar && <Sidebar />}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
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