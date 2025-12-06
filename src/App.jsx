import "./App.css";
import AboutSection from "./component/AboutSection/AboutSection.jsx";
import AddressingSection from "./component/AddressingSection/AddressingSection.jsx";
import CTASection from "./component/CTASection/CTASection.jsx";
import Footer from "./component/Footer/Footer.jsx";
import HeroSection from "./component/HeroSection/HeroSection.jsx";
import UseCases from "./component/useCases/UseCases.jsx";
// import AddressingSection from "./component/AddressingSection/AddressingSection.jsx";


function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AddressingSection/>
      <UseCases/>
      <CTASection/>
      <Footer/>
    </>
  );
}

export default App;
