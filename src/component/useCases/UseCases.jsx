import React from "react"

import agrImg from '../../assets/useCases/agr.jpg'
import energyImg from '../../assets/useCases/energy.jpg'
import mfcImg from '../../assets/useCases/mfc.jpg'
import finImg from '../../assets/useCases/fin.png'
import govtImg from '../../assets/useCases/govt.jpg'
import reactEstImg from '../../assets/useCases/realEst.jpg'
import agr from '../../assets/useCases/agr.svg'
import energy from '../../assets/useCases/ene.svg'
import mfc from '../../assets/useCases/mfc.svg'
import fin from '../../assets/useCases/fins.svg'
import govt from '../../assets/useCases/gonvt.svg'
import reactEst from '../../assets/useCases/realEs.svg'

const useCases = [
  { 
    id: 1, 
    title: "Energy", 
    description: "Assess renewable and fossil fuel impacts on ecosystems.", 
    icon: energy,
    bgImage: energyImg,
    color: "#00B8DB",
    gradientStart: "#00B8DB",
    gradientEnd: "#2B7FFF"
  },
  { 
    id: 2, 
    title: "Manufacturing", 
    description: "Monitor supply chain and operational biodiversity footprint.", 
    icon: mfc,
    bgImage: mfcImg,
    color: "#FB2C36",
    gradientStart: "#FF6900",
    gradientEnd: "#FB2C36"
  },
  { 
    id: 3, 
    title: "Agriculture", 
    description: "Quantify impact of farming practices on local biodiversity.", 
    icon: agr,
    bgImage: agrImg,
    color: "#00C950",
    gradientStart: "#00C950",
    gradientEnd: "#00BC7D"
  },
  { 
    id: 4, 
    title: "Finance", 
    description: "Evaluate nature-related risks in investment portfolios.", 
    icon: fin,
    bgImage: finImg,
    color: "#9c27b0",
    gradientStart: "#615FFF",
    gradientEnd: "#AD46FF"
  },
  { 
    id: 5, 
    title: "Real Estate", 
    description: "Track biodiversity impact of development projects.", 
    icon: reactEst,
    bgImage: reactEstImg,
    color: "#e91e63",
    gradientStart: "#F6339A",
    gradientEnd: "#FF2056"
  },
  { 
    id: 6, 
    title: "Government", 
    description: "Support policy-making with comprehensive biodiversity data.", 
    icon: govt,
    bgImage: govtImg,
    color: "#4F39F6",
    gradientStart: "#155DFC",
    gradientEnd: "#4F39F6"
  },
]

export default function UseCases() {
  const [hoveredCard, setHoveredCard] = React.useState(null)

  return (
    <section className="py-5" style={{ backgroundColor: "#e0fcff", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="mb-3" style={{    display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
            <p className="fw-semibold mb-1" style={{ color: "var(--primary-color)" }}>
              Use Cases
            </p>
            <div style={{
              width: "60px",
              height: "3px",
              background: `
                linear-gradient(
                    to right,
                    var(--primary-color) 0%,
                    var(--primary-color) 40%,
                    var(--accent-color) 60%,
                    var(--accent-color) 100%
                )
                `,
                borderRadius: "4px",         
                   }}></div>
          </div>
          <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", color: "#1a1a1a" }}>
            Solutions for <span style={{ color: "#4db8a8" }}>Every Industry</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px", fontSize: "1rem", lineHeight: "1.6" }}>
            From energy to finance, our platform adapts to your sector's unique biodiversity challenges.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="position-relative h-100"
                style={{
                 width:"80%",
                  height: "280px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: hoveredCard === useCase.id ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow: hoveredCard === useCase.id 
                    ? "0 20px 40px rgba(0, 0, 0, 0.2)" 
                    : "0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={() => setHoveredCard(useCase.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${useCase.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease",
                    transform: hoveredCard === useCase.id ? "scale(1.1)" : "scale(1)",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                   background:
  hoveredCard !== useCase.id
    ? `
        linear-gradient(
          to bottom,
          ${useCase.gradientStart}ee 0%,
          ${useCase.gradientEnd}bb 100%
        )
      `
    : `
        linear-gradient(
          to bottom,
          ${useCase.gradientStart} 0%,
          ${useCase.gradientEnd} 100%
        )
      `,
transition: "all 0.3s ease",

                  }}
                />

                {/* Pattern overlay - visible only on hover
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                      repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px),
                      repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)
                    `,
                    opacity: hoveredCard === useCase.id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                /> */}

                {/* Content */}
                <div
                  className="position-relative h-100 d-flex flex-column justify-content-between p-4"
                  style={{ zIndex: 2 }}
                >
                  {/* Icon */}
                  <div>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        transition: "all 0.3s ease",
                        // transform: hoveredCard === useCase.id ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                        padding: "12px",
                      }}
                    >
                      <img 
                        src={useCase.icon} 
                        alt={useCase.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        //   filter: hoveredCard === useCase.id ? "brightness(0)" : "brightness(1)"

                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        marginBottom: "12px",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.95rem",
                        lineHeight: "1.5",
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      {useCase.description}
                    </p>
                  </div>

                  {/* Explore indicator - only visible on hover */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      opacity: hoveredCard !== useCase.id ? 0.12 : 1,
                      transform: hoveredCard === useCase.id ? "translateX(0)" : "translateX(-10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span>✦</span>
                    <span>Explore</span>
                  </div>
                </div>

                {/* Shine effect on hover */}
                {/* <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    transform: hoveredCard === useCase.id ? "translate(50%, 50%)" : "translate(-50%, -50%)",
                    transition: "transform 0.6s ease",
                    pointerEvents: "none",
                  }}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  )
}