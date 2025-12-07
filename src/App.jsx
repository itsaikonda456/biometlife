import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import BlogDetailPage from "./pages/BlogDetailPage";
import Contact from "./component/Contact/Contact";
import Blogs from "./component/Blogs/Blogs";
import ScrollToTop from "./ScrollToTop";
import IndustrySolutions from "./component/IndustrySolutions/IndustrySolutions";

import blog1 from "./assets/img1.jpg";
import blog2 from "./assets/img2.jpg";
import blog3 from "./assets/img3.jpg";

export default function App() {
 const blogData = [
  {
    id: 1,
    tag: "Technology",
    date: "Nov 2, 2025",
    readTime: "5 min read",
    title: "The Future of Biodiversity Monitoring",
    desc: "How AI and satellite imagery are transforming biodiversity tracking.",
    img: blog1,

    // NEW DETAILS FOR BLOG DETAIL PAGE
    category: "AI & Ecology",
    author: "Sanjana",
    image: blog1,
    sections: [
      { title: "Intro", content: "This is intro of blog 1..." },
      { title: "Why biodiversity", content: "Because..." }
    ],
    tableOfContents: ["Intro", "Why biodiversity"],
    tags: ["AI", "Remote Sensing", "Ecology"]
  },

  {
    id: 2,
    tag: "Regulation",
    date: "Oct 28, 2025",
    readTime: "8 min read",
    title: "Understanding TNFD for Companies",
    desc: "A simple breakdown of the TNFD framework and its importance.",
    img: blog2,

    category: "Regulation",
    author: "Sanjana",
    image: blog2,
    sections: [
      { title: "Intro", content: "This is intro of blog 2..." },
      { title: "Why TNFD matters", content: "Because companies need…" }
    ],
    tableOfContents: ["Intro", "Why TNFD matters"],
    tags: ["TNFD", "Compliance", "Sustainability"]
  },

  {
    id: 3,
    tag: "Case Study",
    date: "Oct 15, 2025",
    readTime: "8 min read",
    title: "Reducing Risk in Supply Chains",
    desc: "How organizations mitigate nature-related risks effectively.",
    img: blog3,

    category: "Case Study",
    author: "Sanjana",
    image: blog3,
    sections: [
      { title: "Intro", content: "This is intro of blog 3..." },
      { title: "Supply Chain Risks", content: "Risks occur when…" }
    ],
    tableOfContents: ["Intro", "Supply Chain Risks"],
    tags: ["Case Study", "Risk", "Supply Chain"]
  },

  {
    id: 4,
    tag: "Insights",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    title: "Innovations in Eco Intelligence",
    desc: "Exploring cutting-edge tools in sustainable ecosystem analysis.",
    img: blog3,

    category: "Insights",
    author: "Sanjana",
    image: blog3,
    sections: [
      { title: "Intro", content: "This is intro of blog 4..." },
      { title: "Innovations", content: "New tools include…" }
    ],
    tableOfContents: ["Intro", "Innovations"],
    tags: ["Innovation", "Ecology", "AI Tools"]
  }
];

  return (
    <BrowserRouter>
      {/* 🔥 This will run on every route change */}
      <ScrollToTop />

      <Routes>
        {/* MAIN LAYOUT (Navbar + Footer common) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Blogs blogData={blogData} />} />
          <Route path="/blog/:id" element={<BlogDetailPage blogData={blogData} />} />
          <Route path="/product" element={<IndustrySolutions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
