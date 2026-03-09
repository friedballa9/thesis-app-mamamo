import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {

  const [open,setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="topbar">

      <div
        className="profile-circle"
        onClick={() => setOpen(!open)}
      ></div>

      {open && (
        <div className="profile-menu">
          <p onClick={()=>navigate("/students")}>View Profile</p>
          <p onClick={logout}>Logout</p>
        </div>
      )}

    </div>
  );
}