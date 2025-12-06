import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CTASection() {
  return (
    <section 
      style={{
  backgroundImage: "url('./src/assets/CTASection.png')", // add your image path here
  backgroundSize: "cover",       // makes sure the image covers the whole container
  backgroundPosition: "center",  // centers the image
  padding: "100px 20px",
  position: "relative",
  overflow: "hidden",
}}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(77, 184, 168, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(77, 184, 168, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(77, 184, 168, 0.05) 0%, transparent 50%)
          `,
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* Floating Particles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle, rgba(77, 184, 168, 0.4) 1px, transparent 1px),
            radial-gradient(circle, rgba(77, 184, 168, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 80px 80px",
          backgroundPosition: "0 0, 40px 40px",
          opacity: 0.3,
        }}
      />

      <div className="container" style={{ maxWidth: "900px", position: "relative", zIndex: 2 }}>
        <div className="text-center">
          {/* Heading */}
          <h2
            style={{
              color: "white",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "16px",
              letterSpacing: "-0.5px",
              lineHeight: "1.2",
            }}
          >
            Ready to Transform Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4db8a8 0%, #5dd9c6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Biodiversity Intelligence?
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              maxWidth: "650px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
              fontWeight: 400,
            }}
          >
            Join leading organizations worldwide in quantifying, monitoring, and reporting nature-related impacts with confidence.
          </p>

          {/* CTA Buttons */}
          <div
            className="d-flex flex-wrap justify-content-center gap-3"
            style={{ marginTop: "40px" }}
          >
            {/* Primary Button */}
            <button
              style={{
                backgroundColor: "#4db8a8",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "16px 32px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(77, 184, 168, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3da898"
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(77, 184, 168, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4db8a8"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(77, 184, 168, 0.3)"
              }}
            >
              Start Free Trial
              <span style={{ fontSize: "1.2rem" }}>→</span>
            </button>

            {/* Secondary Button */}
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                padding: "14px 32px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @media (max-width: 576px) {
          button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}