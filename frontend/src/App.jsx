import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useSelector } from "react-redux";
import HeroSection2 from "./components/HeroSection2";
import TrustedBySection from "./components/TrustedBySection";
import RefineStyleComponent from "./components/RefineStyleComponent";
import SweetSpotInteractiveSection from "./components/RefineStyleComponent";
import IntegrationsShowcase from "./components/IntegrationsShowcase";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? "dark bg-gray-900" : ""}>
     
      <Navbar />
      <HeroSection />
      <HeroSection2/>
      <TrustedBySection/>
      <SweetSpotInteractiveSection/>
      <IntegrationsShowcase/>
      
    </div>
  );
}

export default App;
