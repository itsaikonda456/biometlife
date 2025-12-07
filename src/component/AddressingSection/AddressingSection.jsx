import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Icon1 from "../../assets/AddressingCardsIcon/icon.png"
import Icon2 from "../../assets/AddressingCardsIcon/icon-2.png"
import Icon3 from "../../assets/AddressingCardsIcon/icon-4.png"
import Icon4 from "../../assets/AddressingCardsIcon/icon-3.png"

const AddressingSection = () => {
  const cards = [
    {
      id: 1,
      title: "Economy at Risk",
      description: "60% of global GDP is moderately or highly dependent on nature and its services.",
      icon: Icon1,
      iconBgColor: "#ff5252",
      textColor: "#d32f2f",
    },
    {
      id: 2,
      title: "Regulatory Pressures",
      description: "500+ companies in EU required to comply by 2028.",
      icon: Icon2,
      iconBgColor: "#00bcd4",
      textColor: "#0097a7",
    },
    {
      id: 3,
      title: "Biodiversity Impact",
      description: "Global wildlife populations have declined by 68% in the past 50 years.",
      icon: Icon3,
      iconBgColor: "#26a69a",
      textColor: "#00796b",
    },
    {
      id: 4,
      title: "Limited Quantification",
      description: "Lack of standardized tools to measure and compare biodiversity across industries.",
      icon: Icon4,
      iconBgColor: "#1e40af",
      textColor: "#1565c0",
    },
  ]

  const getTiltStyle = (cardId) => (cardId === 1 || cardId === 2 ? "tilt-right" : "tilt-left")

  return (
    <div
      style={{
        backgroundColor: "#E6FEFF",
        padding: "80px 0",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Heading Section */}
      <div className="text-center mb-5 px-3">
        <h1
          style={{
            color: "var(--primary-color)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Addressing the
        </h1>
        <h2
          style={{
            color: "var(--accent-color)",
            fontFamily:"var(--primary-font)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Biodiversity Crisis
        </h2>
        <p
          style={{
            color: "var(--secondary-color)",
            fontFamily:"var(--secondary-font)",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: "1.6",
          }}
        >
          The world faces unprecedented challenges in nature loss. We've built the intelligence platform to turn the
          tide.
        </p>
      </div>

      {/* CARD SECTION */}
      <div className="addressing-wrapper px-3 px-md-5">
        <div className="addressing-row">
          {cards.map((card) => (
            <div
              key={card.id}
              className="addressing-card"
              style={{
                marginTop: card.id === 2 || card.id === 3 ? "70px" : "0px",
            
              }}
            >
              <div
                className={`addressing-inner card-hover ${getTiltStyle(card.id)}`}

                style={{
                  border: `.5px solid ${card.textColor}`,
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: card.iconBgColor,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <img
                    src={card.icon || "/placeholder.svg"}
                    alt="card-icon"
                    style={{ width: "60%", height: "60%", objectFit: "contain" }}
                  />
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    color: card.textColor,
                    fontFamily:"var(--primary-font)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "14px",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.2",
                    
                  }}
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p style={{ color: "var(--secondary-color)", fontSize: "1rem", lineHeight: "1.55",fontFamily:"var(--secondary-font)" }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CSS */}
        <style jsx>{`
          .addressing-row {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 30px;
          }

          .addressing-card {
            max-width: calc(25% - 110px);
            perspective: 1000px;
          }

          .addressing-inner {
            background: white;
            padding: 30px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            min-height: 300px;
          }
         /* Base hover animation */
.addressing-inner {
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* RIGHT rotation (Card 1 & 2) */
.addressing-inner.tilt-right:hover {
  transform: scale(1.08) rotate(5deg);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* LEFT rotation (Card 3 & 4) */
.addressing-inner.tilt-left:hover {
  transform: scale(1.08) rotate(-5deg);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* Mobile: straight lift only, no rotation */
@media (max-width: 760px) {
  .addressing-inner.tilt-right:hover,
  .addressing-inner.tilt-left:hover {
    transform: translateY(-6px) scale(1.03);
  }
}


          .addressing-inner p {
            flex: 1;
          }

          @media (max-width: 1024px) {
            .addressing-card {
              max-width: calc(50% - 255px);
            }
          }

          @media (max-width: 760px) {
            .addressing-card {
              flex: 1 1 100%;
              max-width: 100%;
            }

            .addressing-inner.tilt-right:hover,
            .addressing-inner.tilt-left:hover {
              transform: translateY(-6px);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default AddressingSection
