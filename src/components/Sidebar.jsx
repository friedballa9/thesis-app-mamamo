import { Link, useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css"; 

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/home", icon: "🏠" },
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
  ];

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>My App</h2>
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.name}</span>
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={handleLogout}
            className="logout-button"
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "blue",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "16px",
            }}
          >
            <span>🚪</span> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;