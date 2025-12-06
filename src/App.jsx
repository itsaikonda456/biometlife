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

function App() {
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
      <Footer/>
     
    </>
  );
}

export default App;
