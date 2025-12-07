import React from "react";
import "./Insights.css";

import blog1 from "../../assets/img1.jpg";
import blog2 from "../../assets/img2.jpg";
import blog3 from "../../assets/img3.jpg";

import dateIcon from "../../assets/date.svg";
import timeIcon from "../../assets/time.svg";
import arrowIcon from "../../assets/arrow.svg";
import { Link } from "react-router-dom"
const Insights = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "100px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
      }}
    >
      {/* HEADER SECTION */}
      <div className="text-center d-flex flex-column align-items-center gap-3">
        {/* Line */}
      

        {/* Subtitle */}
     <div>
           <h6 className="" style={{fontSize: '22px',
    fontWeight: '500',
    color: 'var(--primary-color)',
    fontFamily: 'var(--secondary-font)'}}>Blogs</h6>
          <div
          style={{
            width: "100%",
            height: "4px",
            background: "linear-gradient(180deg, #1FCBD4 0%, #63C297 91%)",
            borderRadius: "64px",
          }}
        ></div>
     </div>

        {/* Title */}
        <div className="d-flex justify-content-center gap-2 section-title">
          <h2
            style={{
              color: "#63C297",
              fontSize: "40px",
              fontFamily: "Exo 2",
              fontWeight: 600,
            }}
          >
            Latest
          </h2>
          <h2
            style={{
              color: "#00004D",
              fontSize: "40px",
              fontFamily: "Exo 2",
              fontWeight: 600,
            }}
          >
            Insights
          </h2>
        </div>

        <p
          className="section-subtitle"
          style={{
            width: "650px",
            textAlign: "center",
            color: "#161616",
            fontSize: "16px",
            fontFamily: "Inter",
            lineHeight: "26px",
          }}
        >
          Explore thoughts on biodiversity intelligence, AI ecology, and
          sustainability.
        </p>
      </div>

      {/* SEE ALL BLOGS */}
<div className="w-100 d-flex justify-content-end">
  <Link to="/resources" style={{ textDecoration: "none" }}>
    <p
      style={{
        width: "120px",
        color: "#63C297",
        fontSize: "14px",
        fontFamily: "Exo 2",
        fontWeight: 600,
        textDecoration: "underline",
        cursor: "pointer",
        textTransform: "uppercase",
      }}
    >
      See All Blogs
    </p>
  </Link>
</div>

      {/* BLOG CARDS - FIXED INTO SINGLE ROW */}
      <div
        className="d-flex justify-content-center"
        style={{
          width: "100%",
          gap: "20px",
          flexWrap: "nowrap",
        }}
      >
        {blogData.map((blog, index) => (
          <div key={index} style={{ flex: "0 0 300px" }}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- BLOG CARD ---------------- */

const BlogCard = ({ tag, date, readTime, title, desc, img }) => {
  return (
    <div
      className="blog-card"
      style={{
        width: "100%",
        background: "#fff",
        borderRadius: "18px",
        outline: "1px solid #1FCBD4",
        boxShadow: "0px 3px 5px rgba(0,0,0,0.1)",
        transition: "0.3s ease",
        cursor: "pointer",
      }}
    >
      {/* IMAGE */}
      <div style={{ position: "relative" }}>
        <img
          src={img}
          alt="blog"
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "15px",
            top: "15px",
            padding: "3px 10px",
            background: "#fff",
            borderRadius: "50px",
            color: "#63C297",
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          {tag}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "16px 18px" }}>
        {/* Meta Info */}
        <div className="d-flex align-items-center gap-3 mb-2">
          <div className="d-flex align-items-center gap-1">
            <img src={dateIcon} width="12" height="12" alt="date" />
            <span style={{ color: "#1FCBD4", fontSize: "12px" }}>{date}</span>
          </div>

          <div className="d-flex align-items-center gap-1">
            <img src={timeIcon} width="12" height="12" alt="time" />
            <span style={{ color: "#1FCBD4", fontSize: "12px" }}>
              {readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h5
          style={{
            color: "#00004D",
            fontSize: "18px",
            fontFamily: "Inter",
            fontWeight: 600,
            lineHeight: "22px",
          }}
        >
          {title}
        </h5>

        {/* Description */}
        <p
          style={{
            color: "rgba(22,22,22,0.64)",
            fontSize: "14px",
            fontFamily: "Inter",
            lineHeight: "20px",
            marginTop: "4px",
          }}
        >
          {desc}
        </p>

        {/* Read More */}
        <div
          className="d-flex align-items-center gap-2 mt-3"
          style={{
            color: "#63C297",
            fontSize: "14px",
            fontFamily: "Exo 2",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Read More
          <img src={arrowIcon} width="12" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

/* ---------------- BLOG DATA ---------------- */

const blogData = [
  {
    tag: "Technology",
    date: "Nov 2, 2025",
    readTime: "5 min read",
    title: "The Future of Biodiversity Monitoring",
    desc: "How AI and satellite imagery are transforming biodiversity tracking.",
    img: blog1,
  },
  {
    tag: "Regulation",
    date: "Oct 28, 2025",
    readTime: "8 min read",
    title: "Understanding TNFD for Companies",
    desc: "A simple breakdown of the TNFD framework and its importance.",
    img: blog2,
  },
  {
    tag: "Case Study",
    date: "Oct 15, 2025",
    readTime: "8 min read",
    title: "Reducing Risk in Supply Chains",
    desc: "How organizations mitigate nature-related risks effectively.",
    img: blog3,
  },
  {
    tag: "Insights",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    title: "Innovations in Eco Intelligence",
    desc: "Exploring cutting-edge tools in sustainable ecosystem analysis.",
    img: blog3,
  },
];

export default Insights;
