import { useState } from "react";

import StudentProfile from "../pages/Studentprofile";
import AssessmentResults from "./AssessmentResults";
import Schedules from "../pages/Schedules";

import "../styles/Dashboard.css";

export default function Dashboard() {

  const [page, setPage] = useState("students");
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    window.location.href = "/";
  };

  const viewProfile = () => {
    alert("Profile page coming soon!");
  };

  const renderContent = () => {

    if (page === "students") {
      return <StudentProfile />;
    }

    if (page === "assessment") {
      return <AssessmentResults />;
    }

    if (page === "schedules") {
      return <Schedules />;
    }

  };

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <h1>Dashboard</h1>

        <button onClick={() => setPage("students")}>
          Students Profile
        </button>

        <button onClick={() => setPage("assessment")}>
          Assessment Results
        </button>

        <button onClick={() => setPage("schedules")}>
          Schedules
        </button>

      </div>

      {/* MAIN AREA */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">

          <div
            className="profile-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          ></div>

          {menuOpen && (
            <div className="dropdown">

              <p onClick={viewProfile}>
                View Profile
              </p>

              <p onClick={logout}>
                Logout
              </p>

            </div>
          )}

        </div>

        {/* PAGE CONTENT */}
        <div className="content">

          {/* MOTIVATIONAL QUOTE */}
          <div className="quote-box">

            <h2>
              "Your mental health is a priority.
              Your happiness is essential."
            </h2>

          </div>

          {/* LINE */}
          <hr className="divider" />

          {/* PAGE SWITCH AREA */}
          <div className="page-content">

            {renderContent()}

          </div>

        </div>

      </div>

    </div>
  );
}