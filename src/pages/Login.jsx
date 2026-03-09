import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(username === "" || password === ""){
      alert("Please enter username and password");
      return;
    }

    // redirect to dashboard
    navigate("/dashboard");
  }

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>Guidance System</h1>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  )
}