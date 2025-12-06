import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo-biomet.png';
import './Navbar.css';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">

        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <img
            src={logo}   // ← your PNG logo path
            alt="Biomet Logo"
            style={{ width: "100%" }}
          />

          {/* <div>
            <div className="fw-bold fs-4 text-primary">Biomet</div>
            <div className="text-success small" style={{ marginTop: "-6px" }}>
              BIOMET
            </div>
          </div>

          <span className="text-muted small">.life</span> */}
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} >
          <ul className="navbar-nav ms-auto gap-lg-4 text-center text-lg-start " style={{color:'var(--text-dark)'}} >

            <li className="nav-item">
              <a className="nav-link fw-medium " href="#about">About us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium " href="#product">Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium " href="#technology">Technology</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium " href="#resources">Resources</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium " href="#partners">Partners</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium " href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
