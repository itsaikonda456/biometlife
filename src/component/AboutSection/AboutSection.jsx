import React from "react";
import aboutRight from '../../assets/about-sec-right.jpg';

const AboutSection = () => {
  return (
    <div className="container py-5 ">
      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-lg-start text-md-start text-start">

          {/* About Us + underline */}
          <div className="mb-3">
            <p className="fw-semibold mb-1" style={{ color: "var(--primary-color)" }}>
              About Us
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

          {/* Heading */}
          <h2 className="fw-bold mb-3" style={{ lineHeight: "1.3", color: "var(--primary-color)",fontFamily: "var(--primary-font)"  }}>
            Leading Innovation in <br />
            <span style={{ color: "var(--accent-color)" }}>Biodiversity Intelligence</span>
          </h2>

          {/* Paragraphs */}
          <p className="mb-3 " style={{ color: "var(--secondary-color)",width:'80%'  }}>
            Established in 2025, Biomet.life emerged from a groundbreaking
            collaboration between Microsoft and the University of Cambridge
            to address the need for quantifiable biodiversity metrics.
          </p>

          <p className="mb-3" style={{ color: "var(--secondary-color)" ,width:'80%' }}>
            Our platform combines cutting-edge AI technology with rigorous
            scientific methodology to transform how organizations understand
            and manage their impact on nature.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6 col-md-12 text-center d-flex justify-content-end">
          <img
            src={aboutRight}
            alt="AI Nature Tree"
            className="img-fluid rounded"
            style={{width:'80%'}}
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
