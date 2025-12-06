import "./App.css";
import AboutSection from "./component/AboutSection/AboutSection.jsx";
import AddressingSection from "./component/AddressingSection/AddressingSection.jsx";
import CTASection from "./component/CTASection/CTASection.jsx";
import Footer from "./component/Footer/Footer.jsx";
import UseCases from "./component/useCases/UseCases.jsx";
// import AddressingSection from "./component/AddressingSection/AddressingSection.jsx";

import HeroSection from "./component/HeroSection/HeroSection";
import Navbar from "./component/Navbar/Navbar";
import Endtoend from "./component/EndToEnd/Endtoend";
import Insights from "./component/Insights/Insights";
import Pricing from "./component/Pricing/Pricing";
import Team from "./component/Team/Team";
import Contact from "./component/Contact/Contact.jsx";
import Blogs from "./component/Blogs/Blogs.jsx";
// import HowWeWork from "./component/HowWeWork/HowWeWork.jsx";
// import BlogInsights from "./component/BlogInsights/BlogInsights.jsx";

// import wave from './assets/wave.png'
import BlogDetail from "./component/blogDetail/blogDetail.jsx";
function App() {
  const blog = {
  category: "AI & Ecology",
  title: "The Biodiversity Challenge: A Call to Action",
  subtitle: "Understanding Biodiversity and Its Broader Impact ",
  author: "Sanjana",
  date: "Dec 2025",
  readTime: "4 min read",
  image: "../src/assets/blogd.png",
  sections: [
    { title: "Intro", content: "This is intro..." },
    { title: "Why biodiversity", content: "Because..." }
  ],
  tableOfContents: ["Intro", "Why biodiversity"],
  tags: ["Machine Learning", "Remote Sensing", "Conservation"]
};
  return (
    <>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <AddressingSection/>
       <Endtoend />
      <Insights/>
      <Pricing/>
      <Team/>
      <UseCases/>
      <CTASection/>
      <Contact/>
      <Blogs/>
      {/* <BlogInsights/>
      <HowWeWork/> */}
      <Footer/>

     <BlogDetail blog={blog}/>
    </>
  );
}

export default App;
