import React, { useState } from "react";
import { ArrowLeft, ExternalLink, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import link from '../../assets/link.svg';
import fb from '../../assets/fb.svg';
import li from '../../assets/li.svg';
import twitter from '../../assets/twitter.svg';
export default function BlogDetail({ blog }) {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="container py-5">

      {/* Back Button */}
      <div className="mb-4">
        <a
          href="/"
          className="btn  border rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
          style={{background: "var(--accent-color)",color:'white'}}
        >
          <ArrowLeft size={16} />
          Back to All Articles
        </a>
      </div>

      <div className="row g-4">

        {/* LEFT CONTENT */}
        <div className="col-lg-8">
          

          {/* Badge */}
          <span className="badge bg-light border text-secondary mb-3  ">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1_16232)">
    <path d="M8 13.333V14.6663" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 1.33301V2.66634" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.334 13.333V14.6663" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.334 1.33301V2.66634" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.33398 8H2.66732" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.33398 11.333H2.66732" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.33398 4.66699H2.66732" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.334 8H14.6673" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.334 11.333H14.6673" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.334 4.66699H14.6673" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.66602 13.333V14.6663" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.66602 1.33301V2.66634" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9993 2.66699H3.99935C3.26297 2.66699 2.66602 3.26395 2.66602 4.00033V12.0003C2.66602 12.7367 3.26297 13.3337 3.99935 13.3337H11.9993C12.7357 13.3337 13.3327 12.7367 13.3327 12.0003V4.00033C13.3327 3.26395 12.7357 2.66699 11.9993 2.66699Z" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.0007 5.33301H6.00065C5.63246 5.33301 5.33398 5.63148 5.33398 5.99967V9.99967C5.33398 10.3679 5.63246 10.6663 6.00065 10.6663H10.0007C10.3688 10.6663 10.6673 10.3679 10.6673 9.99967V5.99967C10.6673 5.63148 10.3688 5.33301 10.0007 5.33301Z" stroke="#00004D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_16232">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
            </svg>
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="fw-bold display-6 w-75" style={{color: "var(--primary-color)"}}>{blog.title}</h1>

          {/* Subtitle */}
          <h4 className="text-secondary fw-normal mb-4">{blog.subtitle}</h4>

          {/* Author Row */}
          <div className="d-flex align-items-center gap-3 text-muted small mb-4">
            <span>{blog.author}</span>
            <span>·</span>
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Main Image */}
          <img
            src={blog.image}
            className="img-fluid rounded-4 mb-4 shadow-sm"
            alt="blog"
          />

          {/* BLOG CONTENT */}
          {blog.sections.map((section, index) => (
            <div key={index} className="mb-5">
              <h3
                className="fw-bold mb-3"
                style={{
                  borderLeft: "4px solid #0d9488",
                  paddingLeft: "10px",
                }}
              >
                {section.title}
              </h3>
              <p className="text-muted lh-lg">{section.content}</p>
            </div>
          ))}

          {/* TAGS */}
<div className="d-flex gap-4 my-4 flex-wrap">
  {blog.tags?.map((tag, index) => (
    <span key={index} className="text-secondary small">
      #{tag}
    </span>
  ))}
</div>


        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-lg-4">

          {/* Table of Contents */}
          <div className="card shadow-sm rounded-4 mb-4 p-4">
            <h6 className="fw-bold mb-3 text-secondary">TABLE OF CONTENTS</h6>

            <div className="d-flex flex-column gap-2">
              {blog.tableOfContents.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(i)}
                  className="btn text-start p-0 border-0 bg-transparent"
                  style={{
                    color: activeSection === i ? "#0d9488" : "#555",
                    fontWeight: activeSection === i ? "600" : "400",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="card shadow-sm rounded-4 p-4">
            <h6 className="fw-bold mb-3 text-secondary">SHARE ARTICLE</h6>

            <div className="d-flex flex-column gap-3">

              <a href="#" className="d-flex align-items-center gap-2 text-decoration-none text-secondary">
                <img src={twitter} alt="" /> Twitter
              </a>

              <a href="#" className="d-flex align-items-center gap-2 text-decoration-none text-secondary">
                <img src={li} alt="" /> Linkedin
              </a>

              <a href="#" className="d-flex align-items-center gap-2 text-decoration-none text-secondary">
                <img src={fb} alt="" /> Facebook
              </a>

              <a href="#" className="d-flex align-items-center gap-2 text-decoration-none text-secondary">
                <img src={link} alt="" /> Copy Link
              </a>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
