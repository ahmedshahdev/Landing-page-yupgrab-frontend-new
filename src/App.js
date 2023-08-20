import "./App.css";
import { InlineWidget, PopupButton, PopupModal,  PopupWidget } from "react-calendly";

// components
import Hero from "./Components/Hero/Hero";
import Plans from "./Components/Plans/Plans";
import Mission from "./Components/Mission/Mission";
import AffilateProgram from "./Components/AffilateProgram/AffilateProgram";
import Advantages from "./Components/Advantages/Advantages";
import NowWhat from "./Components/NowWhat/NowWhat";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

// assets

function App() {
  return (
    <div className="text-yp-gray">
      
      <Hero />
      <Plans />
      <Mission />
      <AffilateProgram />
      <Advantages />
      <NowWhat />
      <AboutUs />
      <Footer />
      <PopupWidget
        url="https://calendly.com/yupgrab/30min"
        rootElement={document.getElementById("root")}
        text="Schedule Meeting!"
        textColor="#ffffff"
        color="#4B4B4B"
      />
    </div>
  );
}


export default App;
