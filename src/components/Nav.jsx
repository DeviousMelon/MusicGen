import logo from "../assets/MusicGenLogo.png";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top rounded-3 shadow-lg"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container-fluid">
        
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Music Generation Logo" width="200" height="50" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Current Programs
              </button>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/limerick-voices">
                    Limerick Voices
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/after-school">
                    After School Tuition
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/community-groups">
                    Community Groups
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/studio" className={linkClass}>
                Studio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/tutors" className={linkClass}>
                Tutors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/signup" className={linkClass}>
                Sign-Up
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className={linkClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <span className="navbar-text"></span>
        </div>
      </div>
    </nav>
  );
}
