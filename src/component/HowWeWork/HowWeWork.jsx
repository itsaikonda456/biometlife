import React from "react";
import "./HowWeWork.css";

// Import your actual uploaded icons
import hww1 from "../../assets/hww1.svg";
import hww2 from "../../assets/hww2.svg";
import hww3 from "../../assets/hww3.svg";
import hww4 from "../../assets/hww4.svg";

const steps = [
  {
    title: "Observe",
    desc: "Collect environmental and biological data using AI sensors.",
    number: "01",
    border: "#1FCBD4",
    color: "#1FCBD4",
    icon: hww3,
  },
  {
    title: "Analyze",
    desc: "Apply machine learning to identify ecological patterns.",
    number: "02",
    border: "#63C297",
    color: "#63C297",
    icon: hww4,
  },
  {
    title: "Quantify",
    desc: "Generate biodiversity and sustainability metrics.",
    number: "03",
    border: "#FB2C36",
    color: "#FB2C36",
    icon: hww2,
  },
  {
    title: "Act",
    desc: "Deliver insights to guide climate-positive action.",
    number: "04",
    border: "#1FCBD4",
    color: "#1FCBD4",
    icon: hww1,
  },
];

const HowWeWork = () => {
  return (
    <section className="howwework-section container-fluid">
      {/* Header */}
      <div className="howwework-header text-center">
        <h2 className="howwework-title">
          <span className="c-blue">How We </span>
          <span className="c-green">Work</span>
        </h2>

        <p className="howwework-desc mx-auto">
          A scientific framework that transforms biodiversity into measurable intelligence.
        </p>
      </div>

      {/* Cards */}
      <div className="row justify-content-center mt-5 g-4">
        {steps.map((step, index) => (
          <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
            <div
              className="how-card"
              style={{ outlineColor: step.border }}
            >
              <div className="how-card-inner">

                {/* Icon */}
                <div
                  className="how-icon-box"
                  style={{ outlineColor: step.color }}
                >
                  <img src={step.icon} alt={step.title} className="how-icon" />
                </div>

                {/* Title + Description */}
                <div className="mt-3">
                  <h4 className="how-card-title" style={{ color: step.color }}>
                    {step.title}
                  </h4>
                  <p className="how-card-desc">{step.desc}</p>
                </div>

                {/* Step number */}
                <div
                  className="how-step-number"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
