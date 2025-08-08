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
import DevelopmentShowcase from "./components/DevelopmentShowcase";
import EnterpriseSection from "./components/EnterpriseSection";
import EnterpriseFeatures from "./components/EnterpriseFeatures";
import CommunitySection from "./components/CommunitySection";
import TestimonialsSection from "./components/TestimonialsSection";
import PlaygroundSection from "./components/PlaygroundSection";
import Footer from "./components/Footer";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? "dark bg-gray-900 w-full min-w-full" : "w-full min-w-full"}>
      <div className="w-full">
        <Navbar />
        <HeroSection />
        <HeroSection2/>
        <TrustedBySection/>
        <SweetSpotInteractiveSection/>
        <IntegrationsShowcase/>
        <DevelopmentShowcase/>
        <EnterpriseSection/>
        <EnterpriseFeatures/>
        <CommunitySection/>
        <TestimonialsSection/>
        <PlaygroundSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
