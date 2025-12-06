import React from "react";

import end1 from "../../assets/endtoend1.svg";
import end2 from "../../assets/endtoend2.svg";
import end3 from "../../assets/endtoend3.svg";
import end4 from "../../assets/endtoend4.svg";
import end5 from "../../assets/endtoend5.svg";

const Endtoend = () => {
  const cards = [
    {
      title: "Data Ingestion",
      desc: "Collect biodiversity data from multiple sources",
      icon: end1,
    },
    {
      title: "Nature Data Fabric",
      desc: "Models biodiversity data using global standards",
      icon: end2,
    },
    {
      title: "Impact Scores",
      desc: "for Risk Assessment, Monitoring, and Outlooks",
      icon: end3,
    },
    {
      title: "Biomet Taxonomy",
      desc: "Smart reporting for double materiality compliance.",
      icon: end4,
    },
    {
      title: "Agentic set-up",
      desc: "Granular insights and user-ready recommendations.",
      icon: end5,
    },
  ];

  return (
    <div style={{ width: "100%", position: "relative", paddingBottom: "200px" }}>
      {/* HEADER */}
      <div
        style={{
          width: "100%",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <div
          style={{
            width: "148px",
            height: "4px",
            background: "linear-gradient(180deg,#1FCBD4 0%,#63C297 100%)",
            borderRadius: "64px",
          }}
        ></div>

        <div
          style={{
            color: "#00004D",
            fontSize: "22px",
            fontFamily: "Inter",
            fontWeight: 500,
          }}
        >
          What We Do
        </div>

        <h2
          style={{
            color: "#00004D",
            fontSize: "48px",
            fontWeight: 600,
            fontFamily: "Exo 2",
          }}
        >
          End-to-End
        </h2>

        <h2
          style={{
            color: "#63C297",
            fontSize: "48px",
            fontWeight: 600,
            fontFamily: "Exo 2",
            marginTop: "-35px",
          }}
        >
          Biodiversity Intelligence
        </h2>

        <p
          style={{
            width: "750px",
            textAlign: "center",
            fontSize: "20px",
            color: "#161616",
            lineHeight: "25px",
            fontFamily: "Inter",
          }}
        >
          Our platform seamlessly transforms complex biodiversity data into
          actionable insights through a sophisticated five-stage process.
        </p>
      </div>

      {/* CARD SECTION */}
      <div
        style={{
          width: "100%",
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          position: "relative",
        }}
      >
        {/* HORIZONTAL LINE BEHIND CARDS */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "15%",
            width: "70%",
            height: "2px",
            background: "#63C297",
            zIndex: 1,
          }}
        ></div>

        {cards.map((item, index) => (
          <div
            key={index}
            className="end-card"
            style={{
              width: "200px",
              height: "260px",
              padding: "30px",
              background: "white",
              borderRadius: "24px",
              outline: "1px solid #1FCBD4",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.10)",
              transition: "0.35s ease",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            {/* ICON BOX */}
            <div
              className="icon-box"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "linear-gradient(180deg,#1FCBD4 0%,#63C297 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.3s ease",
              }}
            >
              <img
                src={item.icon}
                className="icon-img"
                alt="icon"
                style={{
                  width: "30px",
                  height: "30px",
                  transition: "0.3s ease",
                }}
              />
            </div>

            {/* TITLE */}
            <div
              className="card-title"
              style={{
                color: "#00004D",
                fontSize: "20px",
                fontWeight: 500,
                fontFamily: "Inter",
                textAlign: "center",
                transition: "0.3s ease",
              }}
            >
              {item.title}
            </div>

            {/* DESCRIPTION */}
            <div
              className="card-desc"
              style={{
                color: "#161616",
                fontSize: "15px",
                fontFamily: "Inter",
                textAlign: "center",
                lineHeight: "22px",
                width: "160px",
                transition: "0.3s ease",
              }}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      {/* UNIVERSAL HOVER EFFECTS */}
     <style>
{`
  .end-card:hover {
    background: linear-gradient(180deg,#1FCBD4 0%,#63C297 100%) !important;
    transform: scale(1.05);
    outline: none;
  }

  /* ICON BOX BECOMES WHITE */
  .end-card:hover .icon-box {
    background: white !important;
  }

  /* ICON COLOR BECOMES TEAL GREEN */
  .end-card:hover .icon-img {
    filter: brightness(0) saturate(100%) invert(44%) 
            sepia(70%) saturate(508%) hue-rotate(116deg) 
            brightness(93%) contrast(92%);
  }

  /* TEXT TURNS WHITE PERFECTLY */
  .end-card:hover .card-title,
  .end-card:hover .card-desc {
    color: white !important;
  }
`}
</style>

    </div>
  );
};

export default Endtoend;
