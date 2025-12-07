import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import social1 from '../../assets/social.svg'
import social2 from '../../assets/social-icon-2.svg'
import emailIcon from '../../assets/email.svg'
import add from '../../assets/add.svg'
import logo from '../../assets/logob.png'
export default function Footer() {
  const footerLinks = {
    platform: [
      { name: "Features", href: "#features" },
      { name: "Integrations", href: "#integrations" },
      { name: "API", href: "#api" },
      { name: "Security", href: "#security" },
    ],
    solutions: [
      { name: "Energy", href: "#energy" },
      { name: "Finance", href: "#finance" },
      { name: "Agriculture", href: "#agriculture" },
      { name: "Manufacturing", href: "#manufacturing" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Blog", href: "#blog" },
      { name: "Webinars", href: "#webinars" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
  }

  return (
    <footer
      style={{
        background: "var(--grad-2, linear-gradient(180deg, #009DAE -56.37%, #070446 99.97%))",
        color: "white",
        padding: "60px 20px 30px",
      }}
    >
      <div className="container" style={{ maxWidth: "1400px" }}>
        <div className="row g-4">
          
          {/* BRAND + INFO */}
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            {/* <div className="d-flex align-items-center gap-2 mb-3">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #4db8a8 0%, #3da898 100%)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                🌿
              </div>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Biomet.<span style={{ color: "#4db8a8" }}>life</span>
              </span>
            </div> */}
            <img src={logo} alt={logo} className="px-2 mb-2" />

            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                marginBottom: "20px",
                maxWidth: "350px",
              }}
            >
              Leading the future of biodiversity intelligence with advanced cloud solutions for measuring and reporting nature-related impacts.
            </p>

            {/* EMAIL */}
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.9rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width:'50%'
              }}
            >
              <img src={add} alt="address" width="20" />
              <a
                href="mailto:hello@biomet.life"
                style={{
                  color: "#4db8a8",
                  textDecoration: "none",
                }}
              >
Canopy, Entopia Building 1 Regent St, Cambridge, UK              </a>
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.9rem",
                marginBottom: "4px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img src={emailIcon} alt="email" width="20" />
              <a
                href="mailto:hello@biomet.life"
                style={{
                  color: "#4db8a8",
                  textDecoration: "none",
                }}
              >
                hello@biomet.life
              </a>
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-4">
              {[social1, social2].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4db8a8"
                    e.currentTarget.style.transform = "translateY(-3px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <img src={icon} alt="social" width="20" height="20" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS SECTION */}
          <div className="col-12 col-lg-8">
            <div className="row g-4">

              {/* Each Column */}
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="col-6 col-md-3">
                  <h5 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "20px" }}>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </h5>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {links.map((link) => (
                      <li key={link.name} style={{ marginBottom: "12px" }}>
                        <a
                          href={link.href}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                          }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            marginTop: "60px",
            paddingTop: "30px",
          }}
        >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}>
                © 2025 Biomet-life Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap gap-3 justify-content-md-end">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
