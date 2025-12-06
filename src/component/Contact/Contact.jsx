// src/components/Contact/Contact.jsx
import React from "react";
import "./Contact.css";

// Import Icons
import contact1 from "../../assets/contact1.svg"; // address
import contact2 from "../../assets/contact2.svg"; // email
import contact3 from "../../assets/contact3.svg"; // phone
import contact4 from "../../assets/contact4.svg"; // social 1
import contact5 from "../../assets/contact5.svg"; // social 2

const Contact = () => {
  return (
    <section className="contact-section container-fluid">
      {/* HEADER */}
      <div className="contact-header text-center">
        <h2 className="contact-title-main">Let's Transform</h2>
        <h2 className="contact-title-sub">Your Biodiversity Reporting</h2>

        <p className="contact-description mx-auto">
          Get started with Biomet.life or schedule a demo with our team. We’re
          here to help you succeed.
        </p>
      </div>

      <div className="row justify-content-center g-4 contact-content-row">
        {/* LEFT: FORM */}
        <div className="col-xl-7 col-lg-7 col-md-10 col-sm-12">
          <div className="contact-card form-card h-100">
            <h5 className="contact-card-title">Send us a Message</h5>

            <form className="mt-4">
              {/* Name Row */}
              <div className="row g-3">
                <div className="col-md-6 col-sm-12">
                  <label className="contact-label">First Name</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="John"
                  />
                </div>

                <div className="col-md-6 col-sm-12">
                  <label className="contact-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-3">
                <label className="contact-label">Email Address</label>
                <input
                  type="email"
                  className="form-control contact-input"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div className="mt-3">
                <label className="contact-label">Phone</label>
                <div className="input-group contact-input-group">
                  <span className="input-group-text contact-prefix">+91</span>
                  <input
                    type="tel"
                    className="form-control contact-input border-0 ps-2"
                    placeholder="xxxxx xxxxx"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="mt-3">
                <label className="contact-label">Company Name</label>
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder="Your Company"
                />
              </div>

              {/* Message */}
              <div className="mt-3">
                <label className="contact-label">How can we help you?</label>
                <textarea
                  className="form-control contact-input contact-textarea"
                  rows="4"
                  placeholder="Tell us about your biodiversity needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn contact-btn mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12">
          <div className="contact-card info-card h-100 d-flex flex-column">
            <h5 className="contact-card-title">Contact Information</h5>

            <div className="mt-4 contact-info-list d-flex flex-column gap-4">

              {/* Address */}
              <div className="contact-info-item d-flex align-items-start gap-3">
                <div className="contact-icon">
                  <img src={contact1} alt="address" className="icon-img" />
                </div>
                <div>
                  <h6 className="contact-info-title">Office Address</h6>
                  <p className="contact-info-text">
                    Canopy, Entopia Building<br />
                    1 Regent St, Cambridge<br />
                    CB2 1AB, United Kingdom
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item d-flex align-items-start gap-3">
                <div className="contact-icon">
                  <img src={contact2} alt="email" className="icon-img" />
                </div>
                <div>
                  <h6 className="contact-info-title">Email</h6>
                  <p className="contact-info-text">info@biomet.life</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item d-flex align-items-start gap-3">
                <div className="contact-icon">
                  <img src={contact3} alt="phone" className="icon-img" />
                </div>
                <div>
                  <h6 className="contact-info-title">Phone</h6>
                  <p className="contact-info-text">+xx XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="contact-divider mt-4 pt-3">
              <h5 className="contact-card-title mb-3">Follow Us</h5>

              <div className="d-flex align-items-center gap-3">
                <div className="contact-social-circle">
                  <img src={contact4} alt="social1" className="icon-img-sm" />
                </div>

                <div className="contact-social-circle">
                  <img src={contact5} alt="social2" className="icon-img-sm" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
