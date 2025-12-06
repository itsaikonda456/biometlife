import React, { useState } from "react";
import wave from '../../assets/wave.png';
import play from '../../assets/play.svg';
function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // ===========================================
  // 🔥 SLIDES DATA
  // ===========================================
const slides = [
  {
    gif: "/videos/hero page vedio1.mp4",
    gifPosition: "center",

    titleTop: "A Novel Way to ",
    titletopGreen: "Measure",
    titleBottomGreen: "Biodiversity",
    titleBottom: " Impact",

    title: `
      <span style="color: var(--color-skyblue)">A Novel Way to </span>
      <span style="color: var(--accent-color)">Measure</span><br />
      <span style="color: var(--accent-color)">Biodiversity </span>
      <span style="color: var(--color-skyblue)">Impact</span>
    `,

    subtitle:
      "Harnessing AI to converge nature and business data into one Data Fabric for integrated scenario planning and risk mitigation.",

    stat1Value: "60%",
    stat1Label: "Global GDP at Risk",
    stat1Sub: "From biodiversity loss",

    stat2Value: "80%",
    stat2Label: "Biodiversity data",
    stat2Sub: "Remains unused",

    style: "mb-0",
  },

  {
    gif: "/videos/Hero-page-video2.gif",
    gifPosition: "left",

    titleTop: "with the",
    titleBottom: "Soul of",
    titletopGreen: "Designed",
    titleBottomGreen: "Nature",

    title: `
      <span style="color: var(--accent-color)">Designed</span>
      <span style="color: var(--color-skyblue)">with the </span><br />
      <span style="color: var(--color-skyblue)">Soul of </span>
      <span style="color: var(--accent-color)">Nature</span>
    `,

    subtitle:
      "Scientific Rigor and Impact Modelling that bridge data and scientific metrics to scenario planning and auditable interventions for conservation and restoration.",

    stat1Value: "10X",
    stat1Label: "Species analyzed",
    stat1Sub: "Compared to traditional ecology science",

    stat2Value: "82%",
    stat2Label: "Model Accuracy Improvement",
    stat2Sub: "In biodiversity classification",

    style: "mb-0",
  },

  {
    gif: "/videos/Hero-page-video-3.gif",
    gifPosition: "right",

    titleTop: "Nature , Quantified",
    titleBottom: "",

    title: `
      <span style="color: var(--color-skyblue)">Nature ,</span>
      <span style="color: var(--accent-color)">Quantified </span>
    `,

    subtitle:
      "Empower enterprises to measure and report their nature related risks with location-specific granularity.",

    stat1Value: "75%",
    stat1Label: "Business-as-Nature Analytics",
    stat1Sub: "By 2030 projected",

    stat2Value: "40%",
    stat2Label: "Increase in ESG Transparency",
    stat2Sub: "Using sustainability metrics",

    style: "mb-5",
  },
];


  // Current Slide
  const cur = slides[activeSlide];

  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        minHeight: "90vh",
        background: "#020617",
      }}
    >
      {/* ==========================
    🔥 BACKGROUND MEDIA (GIF or VIDEO)
=========================== */}
 {cur.gif.endsWith(".mp4") ? (
        <video
          key={cur.gif}
          src={cur.gif}
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-50 start-50"
          style={{
            width: "80%",
            height: "auto",
            transform: "translate(-50%, -50%)",
            opacity: 0.45,
            zIndex: 1,
            transition: "0.6s ease",
            objectFit: "contain",
            mixBlendMode: 'difference',
          }}
        />
      ) : (
        <img
          key={cur.gif}
          src={cur.gif}
          alt="background animation"
          className="position-absolute top-0"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.45,
            zIndex: 1,
            transition: "0.6s ease",
            mixBlendMode: 'difference',

            ...(cur.gifPosition === "center" && { left: "0" }),
            ...(cur.gifPosition === "left" && { left: "-27%" }),
            ...(cur.gifPosition === "right" && { right: "-25%", left: "auto" }),
          }}
        />
      )}

      {/* Dark gradient overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(rgb(6, 6, 38), rgb(7 7 44 / 74%), rgba(11, 26, 58, 0.88))",
          zIndex: 2,
        }}
      ></div>

      {/* Glow objects */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "360px",
          height: "360px",
          background: "rgba(34, 211, 238, 0.15)",
          filter: "blur(100px)",
          top: "10%",
          left: "12%",
          zIndex: 2,
        }}
      ></div>

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(74, 222, 128, 0.15)",
          filter: "blur(130px)",
          bottom: "12%",
          right: "10%",
          zIndex: 2,
        }}
      ></div>

      {/* ==========================
            MAIN CONTENT
      =========================== */}
      <div className="container position-relative z-3 pt-5 pb-5">
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "900px", marginTop: "60px" }}
        >
          {/* Heading */}
          <h1
  className={`${cur.style} fw-bold mb-4`}
  style={{
    fontSize: "clamp(2.4rem, 4vw, 4.3rem)",
    lineHeight: 1.2,
    fontFamily: "var(primary-font)"
  }}
  dangerouslySetInnerHTML={{ __html: cur.title }}
/>


          {/* Subtitle */}
          <p
            className="text-light mb-4"
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              lineHeight: 1.65,
              opacity: 0.9,
               fontFamily:"var(secondary-font)"
            }}
          >
            {cur.subtitle}
          </p>

          {/* CTA Button */}
          <button
            className="btn d-inline-flex align-items-center fw-semibold shadow"
            style={{
              backgroundColor: "var(--color-skyblue)",
              color: "#0f172a",
              padding: "0.75rem 2.3rem",
              borderRadius: "50px",
              fontSize: "1.05rem",
            }}
          >
            <img src={play} alt={play} className="mx-2" />
            Watch Demo
          </button>
        </div>

        {/* ==========================
            STATS SECTION
      =========================== */}
        <div
          className="row justify-content-center g-4 mt-5"
          style={{ maxWidth: "950px", margin: "0 auto" }}
        >
          {/* STAT BOX 1 */}
          <div className="col-10 col-md-6 col-lg-5">
            <div
              className="text-center p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center"
              style={{
                minHeight: "190px",
                background: "rgba(15, 23, 42, 0.55)",
                border: "1.5px solid rgba(34, 211, 238, 0.6)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="fw-bold"
                style={{
                  fontSize: "clamp(2rem, 3vw, 3.2rem)",
                  color: "var(--color-skyblue)",
                }}
              >
                {cur.stat1Value}
              </div>

              <div
                className=" fw-semibold"
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                  color: "var(--color-skyblue)",
                }}
              >
                {cur.stat1Label}
              </div>

              <div className="text-secondary small">{cur.stat1Sub}</div>
            </div>
          </div>

          {/* STAT BOX 2 */}
          <div className="col-10 col-md-6 col-lg-5">
            <div
              className="text-center p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center"
              style={{
                minHeight: "190px",
                background: "rgba(15, 23, 42, 0.55)",
                border: "1.5px solid var(--accent-color)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="fw-bold"
                style={{
                  fontSize: "clamp(2rem, 3vw, 3.2rem)",
                  color: "var(--accent-color)",
                }}
              >
                {cur.stat2Value}
              </div>

              <div
                className=" fw-semibold"
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                  color: "var(--accent-color)",
                }}
              >
                {cur.stat2Label}
              </div>
              <div className="text-secondary small">{cur.stat2Sub}</div>
            </div>
          </div>
        </div>

        {/* ==========================
            PAGINATION DOTS
      =========================== */}
        <div className="d-flex justify-content-center gap-2 mt-4 mb-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              style={{
                width: activeSlide === index ? "10px" : "10px",
                height: "12px",
                borderRadius: "50px",
                backgroundColor: activeSlide === index ? "var(--accent-color)" : "#6b7280",
                border: "none",
                transition: "0.25s ease",
              }}
            ></button>
          ))}
        </div>
      </div>

      
      {/* Bottom White Shape */}
      {/* <div
        className="position-absolute bottom-0 start-0 end-0"
        style={{
          height: "90px",
          background: "#ffffff",
          transform: "skewY(-2deg)",
          transformOrigin: "bottom right",
          zIndex: 3,
        }}
      ></div> */}
      <img 
  src={wave} 
  alt="wave"
  className="position-absolute bottom-0 start-0 w-100"
  style={{
    zIndex: 4,
    pointerEvents: "none",
  }}
/>
    </div>
  );
}

export default HeroSection;
