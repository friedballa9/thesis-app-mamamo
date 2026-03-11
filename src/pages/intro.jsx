import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import "../styles/intro.css";

export default function Intro() {

  const navigate = useNavigate();

  const text = "Student Mental Health Support System";
  const [displayText, setDisplayText] = useState("");

  // typing animation
  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(typing);

    }, 60);

    return () => clearInterval(typing);

  }, []);

  return (
    <div className="intro-container">

      {/* PARTICLES */}
      <Particles
        className="particles"
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.5 }
          }
        }}
      />

      {/* LEFT PANEL */}
      <div className="intro-left">

        <div className="overlay">

          <h1 className="typing">{displayText}</h1>

          <p>
            Supporting students through mental health
            assessment, guidance, and care.
          </p>

        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="intro-right">

        <h2>Welcome</h2>

        <p>
          A safe digital space for students to monitor
          and support their mental well-being.
        </p>

        <button
          className="enter-btn"
          onClick={() => navigate("/login")}
        >
          Enter System
        </button>

      </div>

    </div>
  );
}