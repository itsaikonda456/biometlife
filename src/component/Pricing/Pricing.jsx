// src/components/Pricing/Pricing.jsx
import React from "react";

import "./Pricing.css"; // <-- CSS file imported here

import pricing1 from "../../assets/pricing1.svg";
import pricing2 from "../../assets/pricing2.svg";
import pricing3 from "../../assets/pricing3.svg";

const plans = [
  {
    id: "lite",
    label: "Lite",
    accent: "#63C297",
    icon: pricing1,
    badgeBg: "#63C297",
    titleColor: "#63C297",
    priceLabel: "Contact",
    priceSub: "Custom pricing",
    description: "Perfect for small-scale biodiversity monitoring projects.",
    bulletNote: "Updates twice per year with limited granularity",
    cta: "Request Demo",
    bullets: [
      "Basic reporting dashboard",
      "Project Monitoring / site",
      "Biome Health",
      "Chat Support",
      "On-Platform Onboarding",
    ],
  },
  {
    id: "standard",
    label: "Standard",
    accent: "#1FCBD4",
    icon: pricing2,
    badgeBg: "#1FCBD4",
    titleColor: "#1FCBD4",
    priceLabel: "Contact",
    priceSub: "Custom pricing",
    description: "Comprehensive solution for growing organizations.",
    bulletNote:
      "Monthly or on-demand data updates with integration-ready outputs.",
    cta: "Start Free Trial",
    bullets: [
      "Project Monitoring / site",
      "Biome Health & Sustainability Impact",
      "Scenario planning tools",
      "Standard Reporting Dashboard",
      "Standard Support (Email / Phone / Chat)",
      "Guided Onboarding",
    ],
  },
  {
    id: "plus",
    label: "Plus",
    accent: "#00004D",
    icon: pricing3,
    badgeBg: "#00004D",
    titleColor: "#00004D",
    priceLabel: "Contact",
    priceSub: "Custom pricing",
    description: "For large-scale analytics & advanced AI integration.",
    bulletNote:
      "Continuous data updates, AI-driven insights, and risk forecasting.",
    cta: "Contact Sales",
    bullets: [
      "All Standard Features",
      "Financial Impact Modelling",
      "Advanced Scenario Planning",
      "Enterprise Capabilities",
      "Advanced Support (Manager)",
      "Custom Advanced Onboarding",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      {/* HEADER */}
      <div className="pricing-header">
        <div className="pricing-line"></div>

        <h6 className="pricing-subtitle">Pricing Plans</h6>

        <div className="pricing-title-row">
          <span className="green-title">Clear Pricing,</span>
          <span className="blue-title">Clear Value</span>
        </div>

        <p className="pricing-description">
          Flexible solutions designed to scale with your nature risk monitoring
          needs from startups to enterprises.
        </p>
      </div>

      {/* CARDS */}
      <div className="row justify-content-center g-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12 d-flex"
          >
            <div className={`pricing-card ${plan.id} h-100 d-flex flex-column`}>
              {/* Icon + Title */}
              <div className="mb-3 d-flex flex-column gap-3">
                <div
                  className="pricing-icon-box"
                  style={{ background: plan.badgeBg }}
                >
                  <img
                    src={plan.icon}
                    alt={plan.label}
                    className="pricing-icon"
                  />
                </div>

                <div className="d-flex flex-column gap-2">
                  <h5
                    className="plan-title"
                    style={{ color: plan.titleColor }}
                  >
                    {plan.label}
                  </h5>
                  <p className="plan-desc">{plan.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-3">
                <div
                  className="plan-price"
                  style={{ color: plan.titleColor }}
                >
                  {plan.priceLabel}
                </div>
                <div className="plan-price-sub">{plan.priceSub}</div>
              </div>

              {/* Features */}
              <ul className="pricing-features">
                {plan.bullets.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span
                      className="feature-bullet"
                      style={{ background: plan.accent }}
                    >
                      <span className="tick"></span>
                    </span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-2 d-flex flex-column gap-3">
                <p className="plan-note">{plan.bulletNote}</p>

                <button type="button" className="pricing-btn btn w-100">
                  {plan.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTNOTE */}
      <div className="pricing-footer">
        * All plans include secure cloud infrastructure
      </div>
    </section>
  );
};

export default Pricing;
