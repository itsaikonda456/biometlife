import HeroSection from "./component/HeroSection/HeroSection";
import './App.css';
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
      <Endtoend />
      <Insights/>
      <Pricing/>
      <Team/>
    </>
  );
}

export default App;
