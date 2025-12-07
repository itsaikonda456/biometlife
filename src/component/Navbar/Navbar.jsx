import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-biomet.png";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeRoute, setActiveRoute] = useState("");

  // const location = useLocation();
const location = useLocation();
const activeRoute = location.pathname.split("/").filter(Boolean).pop() || '/';
console.log(activeRoute,'active',activeRoute.includes("contact"));


  // 🔥 Detect URL change and extract last part
  // useEffect(() => {
  //   const path = location.pathname + location.hash; // includes #about etc.
  //   const cleaned = path.replace("/", "").toLowerCase();
  //   console.log(cleaned,'cleaned', activeRoute.includes("contact"));
    

  //   setActiveRoute(cleaned);
  // }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Biomet Logo" style={{ width: "100%" }} />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-lg-4 text-center text-lg-start">

            <li className="nav-item">
              <NavLink
                to="/#about"
                className={`nav-link ${
                  activeRoute.includes("about") ? "active-custom" : ""
                }`}
              >
                About us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/product"
                className={`nav-link ${
                  activeRoute.includes("product") ? "active-custom" : ""
                }`}
              >
                Product
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/#technology"
                className={`nav-link ${
                  activeRoute.includes("technology") ? "active-custom" : ""
                }`}
              >
                Technology
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/resources"
                className={`nav-link ${
                  activeRoute.includes("resources") ? "active-custom" : ""
                }`}
              >
                Resources
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/#partners"
                className={`nav-link ${
                  activeRoute.includes("partners") ? "active-custom" : ""
                }`}
              >
                Partners
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={`nav-link ${
                  activeRoute.includes("contact") ? "active-custom" : ""
                }`}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
