import React from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import AboutSection from "../component/AboutSection/AboutSection";
import AddressingSection from "../component/AddressingSection/AddressingSection";
import Endtoend from "../component/EndToEnd/Endtoend";
import Insights from "../component/Insights/Insights";
import Pricing from "../component/Pricing/Pricing";
import Team from "../component/Team/Team";
import UseCases from "../component/useCases/UseCases";
import CTASection from "../component/CTASection/CTASection";
import Contact from "../component/Contact/Contact.jsx";
import Blogs from "../component/Blogs/Blogs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AddressingSection />
      <Endtoend />
      <UseCases />
      <Insights />
      <Pricing />
      <Team />
      <CTASection />
     
    </>
  );
}
